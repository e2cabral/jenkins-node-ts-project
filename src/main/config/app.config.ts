import fastify from 'fastify';
import setupRoutes from './route.config';

const app = fastify({ logger: true });

setupRoutes(app);

export default app;
