import userService from "../../data/services/user.service";
import {FastifyReply, FastifyRequest} from "fastify";

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
}

export default new UserController();
