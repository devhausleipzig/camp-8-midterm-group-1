import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";
import cors from "@fastify/cors";
import models from "./models";
import _ from "lodash";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const requieredEnvs = ["SECRET_KEY", "DATABASE_URL"];
for (const requieredEnv of requieredEnvs) {
  if (!process.env[requieredEnv]) {
    throw new Error(`Missing enviroument variable`);
  }
}

import { FastifyZod, buildJsonSchemas, register } from "fastify-zod";
import { ZodError } from "zod";

type TokenPayload = {
  user_id: string;
  email: string;
};

// Global augmentation, as suggested by
// https://www.fastify.io/docs/latest/Reference/TypeScript/#creating-a-typescript-fastify-plugin
declare module "fastify" {
  interface FastifyInstance {
    readonly zod: FastifyZod<typeof models>;
  }
}
const prisma = new PrismaClient();

async function init() {
  const { schemas, $ref } = buildJsonSchemas(models);

  // Require the framework and instantiate it
  const fastify = await register(Fastify({ logger: true }), {
    jsonSchemas: { schemas, $ref },
  });

  fastify.register(cors, { origin: ["*"] });

  //EndPoints Go here

  fastify.post("/auth/register", async (request, reply) => {
    try {
      const userInfo = models.registerInfo.parse(request.body);
      await prisma.user.create({
        data: {
          ..._.omit(userInfo, ["password"]),
          saltAndHash: await bcrypt.hash(userInfo.password, 10),
          photo: "",
        },
      });
      reply.status(201).send("New User Created");
      return;
    } catch (err) {
      if (err instanceof ZodError) {
        reply.status(422).send(JSON.stringify(err));
        return;
      }
      console.log(err);
      reply.status(500).send("Something went wrong");
    }
  });

  fastify.post("/auth/login", async (request, reply) => {
    const UserData = models.postTikenBodyModel.parse(request.body);

    const user = await prisma.user.findFirst({
      where: {
        email: UserData.username,
      },
    });
    if (!user) {
      reply
        .status(401)
        .send("Error, its a secret, but no user exists witht that email bruv.");
      return;
    }
    const match = await bcrypt.compare(UserData.passworf, user.saltAndHash);

    if (match) {
      const token = jwt.sign(
        {
          user_id: user.indentifier,
          email: user.email,
        } as TokenPayload,
        requieredEnvs[0],
        { expiresIn: "24h" }
      );
      return token;
    }
    return false;
  });

  fastify.post("/users/", async (request, response) => {
    try {
      const { userEmail, userPassword } = models.emailTestType.parse(
        request.body
      );
      const matchingEmails = await prisma.user.findFirst({
        where: {
          email: userEmail,
        },
      });
      if (matchingEmails) {
        const match = await bcrypt.compare(
          userPassword,
          matchingEmails.saltAndHash
        );
        if (match) {
          response.status(202).send("User Exists");
          return;
        }
        response.status(406).send("Wrong Password");
        return;
      }
    } catch (error) {
      if (error instanceof ZodError) {
        response.status(422).send(JSON.stringify(error));
        return;
      }
      response.status(500).send("Wierd error");
    }
  });

  fastify.patch("/:userIdentifier", async (request, response) => {
    try {
      const { userIdentifier } = models.indentifierType.parse(request.params);
      const { newName, newPassword, newPhoto } = models.patchUserInfo.parse(
        request.body
      );
      const Test = await prisma.user.update({
        where: {
          indentifier: userIdentifier,
        },
        data: {
          name: newName,
          photo: newPhoto,
        },
      });
    } catch (error) {
      if (error instanceof ZodError) {
        response.status(422).send(JSON.stringify(error));
        return;
      }
      response.status(500).send("Wierd error");
    }
  });

  fastify.patch("/:userIdentifier/addTickets", async (request, response) => {
    try {
      const { userIdentifier } = models.indentifierType.parse(request.params);
      const { seatIDs, price } = models.patchTicketInfo.parse(request.body);
      await prisma.ticket.create({
        data: {
          userID: userIdentifier,
          price: price,
          seats: {
            connect: seatIDs.map((x) => {
              return {
                identifier: x,
              };
            }),
          },
        },
      });
      response.status(202).send("Linked Tickets to User");
    } catch (error) {
      if (error instanceof ZodError) {
        response.status(422).send(JSON.stringify(error));
        return;
      }
      response.status(500).send("Wierd error");
    }
  });
  await fastify.listen({ port: 3999, host: "127.0.0.1" });
}
try {
  init();
} catch (err) {
  // fastify.log.error(err);
  process.exit(1);
}
