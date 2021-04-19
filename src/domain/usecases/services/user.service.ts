import { getCustomRepository } from 'typeorm';
import UserRepository from '../../../data/repositories/user.repository';
import User from '../../entities/user.entity';

export default class UserService {
  static getAll(): Promise<User[]> {
    try {
      const repository = getCustomRepository(UserRepository);
      return repository.getAll();
    } catch (err) {
      throw new Error(err.message);
    }
  }

  static getById(id: number | string): Promise<User | undefined> {
    try {
      const repository = getCustomRepository(UserRepository);
      return repository.getById(id);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  static create(user: User): Promise<User> {
    try {
      const repository = getCustomRepository(UserRepository);
      return repository.createUser(user);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  static async delete(id: number | string): Promise<void> {
    try {
      const repository = getCustomRepository(UserRepository);
      await repository.deleteUser(id);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
