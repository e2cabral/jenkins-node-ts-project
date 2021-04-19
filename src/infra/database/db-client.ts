import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';
import User from '../../domain/entities/user.entity';
import Post from '../../domain/entities/post.entity';

export default class DbClient {
    static connection: Connection;

    static async connect(): Promise<void> {
      this.connection = await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'boilerplate',
        entities: [
          User,
          Post,
        ],
      });
    }
}
