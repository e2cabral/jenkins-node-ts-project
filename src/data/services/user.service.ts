import { getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/user.repository';
import User from '../../domain/entities/user.entity';

export default class UserService {
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

  static async delete(id: number | string): Promise<void> {
    const repository = getCustomRepository(UserRepository);
    await repository.deleteUser(id);
  }
}
