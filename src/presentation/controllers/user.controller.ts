import { FastifyReply, FastifyRequest } from 'fastify';
import userService from '../../domain/usecases/services/user.service';
import User from '../../domain/entities/user.entity';

class UserController {
  async getAll(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const users = await userService.getAll();
      reply.send(users);
    } catch (err) {
      reply.code(err.status).send(err);
    }
  }

  async getById(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      // @ts-ignore
      const { id } = request.params;
      const user = await userService.getById(id);
      reply.send(user);
    } catch (err) {
      reply.code(err.status).send(err);
    }
  }

  async create(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const user = <User>request.body;
      const returnedValue = await userService.create(user);
      reply.send(returnedValue);
    } catch (err) {
      reply.code(err.status).send(err);
    }
  }

  async delete(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      // @ts-ignore
      const { id } = request.params;
      await userService.delete(id);
      reply.send({
        status: 200,
        message: 'User deleted successfully!',
      });
    } catch (err) {
      reply.code(err.status).send(err);
    }
  }
}

export default new UserController();
