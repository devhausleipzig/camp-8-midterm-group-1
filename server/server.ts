import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";
import cors from "@fastify/cors";
import models from "./models";

import { FastifyZod, buildJsonSchemas, register } from "fastify-zod";
import { ZodError } from "zod";

// Global augmentation, as suggested by
// https://www.fastify.io/docs/latest/Reference/TypeScript/#creating-a-typescript-fastify-plugin
declare module "fastify" {
  interface FastifyInstance {
    readonly zod: FastifyZod<typeof models>;
  }
}
const prisma = new PrismaClient();

async function init() {
  console.log("Hello, world");

  const { schemas, $ref } = buildJsonSchemas(models);

  // Require the framework and instantiate it
  const fastify = await register(Fastify({ logger: true }), {
    jsonSchemas: { schemas, $ref },
  });

  fastify.register(cors, { origin: ["*"] });

  //EndPoints Go here

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
      if (matchingEmails && userPassword == matchingEmails.password) {
        response.status(202).send("User Exists");
        return;
      } else if (matchingEmails) {
        response.status(406).send("Wrong Password");
      } else {
        response.status(201).send("New User Created");
        await prisma.user.create({
          data: {
            email: userEmail,
            password: userPassword,
            name: "John Doe",
            photo:
              "https://img.freepik.com/free-icon/user_318-804790.jpg?w=2000",
          },
        });
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
          password: newPassword,
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
