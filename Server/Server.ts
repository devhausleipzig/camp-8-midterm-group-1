import { PrismaClient } from "@prisma/PrismaClient";
import Fastify from "fastify";
import { read, readFileSync, writeFileSync } from "fs";
import cors from "@fastify/cors";
import { models } from "./models";
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
    "movie/:movieId/showings?datetime=",
    {
      schema: {},
    },
    async (request, reply) => {
      const { movieId } = request.params as { movieId: string };
      const { datetime } = request.query as { datetime: string };

      if (Boolean(datetime)) {
        return await prisma.showing.findMany({
          where: {
            movieId: movieId,
          },
        });
      } else {
        const showing = prisma.showing.findUnique({
          where: {
            movieId_datetime: {
              movieId,
              datetime,
            },
          },
        });

        if (!Boolean(showing)) {
          reply.statusCode(404).send("showing does not exist.");
          return;
        }
      }
    }
  );
  await fastify.listen({ port: 3000, host: "127.0.0.1" });
}

try {
  init();
} catch (err) {
  process.exit(1);
}

prisma.user.findMany({}); //example
