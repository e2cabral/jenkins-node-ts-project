import {EntityRepository, Repository} from "typeorm";
import User from "../../domain/entities/user.entity";

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  constructor() {
    super();
  }

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
      .where('user.id = :id', { id: id })
      .getOne();
  }

  async createUser(user: User): Promise<User> {
    return await this.save<User>(user);
  }
}
