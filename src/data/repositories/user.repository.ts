import { EntityRepository, Repository } from 'typeorm';
import User from '../../domain/entities/user.entity';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  getAll(): Promise<User[]> {
    return this
      .createQueryBuilder('user')
      .innerJoinAndSelect('user.posts', 'posts')
      .getMany();
  }

  getById(id: number | string): Promise<User | undefined> {
    return this
      .createQueryBuilder('user')
      .innerJoinAndSelect('user.posts', 'posts')
      .where('user.id = :id', { id })
      .getOne();
  }

  async createUser(user: User): Promise<User> {
    return this.save<User>(user);
  }

  async deleteUser(id: number | string): Promise<void> {
    await this
      .createQueryBuilder('user')
      .delete()
      .where('user.id = id', { id })
      .execute();
  }
}
