import UserRepository from "../repositories/user.repository";
import {getCustomRepository} from "typeorm";
import User from "../../domain/entities/user.entity";

export default class UserService {
  constructor() {
    // this.repository = getCustomRepository<UserRepository>(UserRepository);
  }

  static getAll(): Promise<User[]> {
    const repository = getCustomRepository(UserRepository);
    return repository.getAll();
  }

  static getById(id: number | string): Promise<User | undefined> {
    const repository = getCustomRepository(UserRepository);
    return repository.getById(id);
  }

  static create(user: User): Promise<User> {
    const repository = getCustomRepository(UserRepository);
    return repository.createUser(user);
  }
}
