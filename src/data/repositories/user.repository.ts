import { EntityRepository, Repository } from 'typeorm';
import User from '../../domain/entities/user.entity';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  getAll(): Promise<User[]> {
    try {
      return this
        .createQueryBuilder('user')
        .innerJoinAndSelect('user.posts', 'posts')
        .getMany();
    } catch (err) {
      throw new Error(err.message);
    }
  }

  getById(id: number | string): Promise<User | undefined> {
    try {
      return this
        .createQueryBuilder('user')
        .innerJoinAndSelect('user.posts', 'posts')
        .where('user.id = :id', { id })
        .getOne();
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async createUser(user: User): Promise<User> {
    try {
      return this.save<User>(user);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async deleteUser(id: number | string): Promise<void> {
    try {
      await this
        .createQueryBuilder('user')
        .delete()
        .where('user.id = id', { id })
        .execute();
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
}
