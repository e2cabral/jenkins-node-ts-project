import userService from "../../data/services/user.service";
import {FastifyReply, FastifyRequest} from "fastify";
import User from "../../domain/entities/user.entity";

class UserController {
  constructor() {
  }

  async getAll(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const users = await userService.getAll();
    reply.send(users);
  }

  async getById(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    // @ts-ignore
    const id = request.params.id
    const user = await userService.getById(id)
    reply.send(user);
  }

  async create(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const user = <User>request.body;
    const returnedValue = await userService.create(user);
    reply.send(returnedValue);
  }
}

export default new UserController();
