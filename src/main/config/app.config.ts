import fastify from 'fastify';
import setupRoutes from './route.config';
import setupDocumentation from './api-docs.config';

const app = fastify({ logger: true });

setupDocumentation(app);
setupRoutes(app);

export default app;
