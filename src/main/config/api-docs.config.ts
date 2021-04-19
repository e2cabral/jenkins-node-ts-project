import swagger from 'fastify-swagger';
import { FastifyInstance } from 'fastify';

export const Options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Fastify Boilerplate API',
      description: 'Building a boilerplate of a fast REST API with Node, Fastify and Swagger',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
};

export default (app: FastifyInstance): void => {
  app.register(swagger, Options);
};
