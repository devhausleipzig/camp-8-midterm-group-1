import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";
import { read, readFileSync, writeFileSync } from "fs";
import cors from "@fastify/cors";
import models from "./models";

import { FastifyZod, buildJsonSchemas, register } from "fastify-zod";

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

  fastify.get(
    "/movie/:movieID/showings",
    {
      schema: {
        // querystring: $ref(`showingQueryModel`),
        params: $ref(`showingParamModel`),
      },
    },
    async (request, reply) => {
      const { movieID } = request.params as { movieID: string };
      const { datetime } = request.query as { datetime: string };
      if (!datetime) {
        return await prisma.showing.findMany({
          where: {
            movieID: movieID,
          },
        });
      } else {
        const showing = await prisma.showing.findUnique({
          where: {
            movieID_dateTime: {
              movieID: movieID,
              dateTime: new Date(datetime),
            },
          },
          include: {
            seats: true,
          },
        });
        if (!showing) {
          reply.status(404).send("Bruv, no poi found!");
          return;
        } else {
          return showing;
        }
      }
    }
  );
  await fastify.listen({ port: 3999, host: "127.0.0.1" });
}
try {
  init();
} catch (err) {
  // fastify.log.error(err);
  process.exit(1);
}
