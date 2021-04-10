import {FastifyInstance} from "fastify";
import UserController from '../../presentation/controllers/user.controller'

export default (app: FastifyInstance) => {
  app.register((instance: FastifyInstance, opts, done) => {
    instance
      .get(
        '/users',
        {
          schema: {
            description: 'Obtain all users registred.',
            tags: ['get-all-users'],
          }
        },
        UserController.getAll
      )
      .get(
        '/users/:id',
        {
          schema: {
            description: 'Obtain a user registred by the id.',
            tags: ['get-user-by-id'],
            params: {
              id: { type: 'number' }
            }
          }
        },
        UserController.getById
      )
      .post(
        '/users',
        {
          schema: {
            description: 'Register aa new user.',
            tags: ['user-registration'],
            summary: 'qwerty',
            body: {
              type: 'object',
              properties: {
                id: { type: 'number' },
                username: { type: 'string' },
                name: { type: 'string' }
              }
            }
          }
        },
        UserController.create
      )
      .delete(
        '/users/:id',
        {
          schema: {
            description: 'Delete a user',
            tags: ['delete-user'],
            summary: 'qwerty',
            params: {
              id: { type: 'number' }
            }
          }
        },
        UserController.delete
      );
    done();
  }, { prefix: 'v1/api' });
}
