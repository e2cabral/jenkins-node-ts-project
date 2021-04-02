import {FastifyInstance} from "fastify";
import UserController from '../../presentation/controllers/user.controller'

export default (app: FastifyInstance) => {
  app.register((instance: FastifyInstance, opts, done) => {
    instance
      .get(
        '/users',
        UserController.getAll
      )
      .get(
        '/users/:id',
        UserController.getById
      );
    done();
  }, { prefix: 'v1/api' })
}
