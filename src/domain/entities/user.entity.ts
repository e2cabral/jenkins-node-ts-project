import {
  Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import Post from './post.entity';

@Entity({ name: 'user' })
export default class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number;

  @Column({ type: 'varchar', name: 'username' })
  username!: string;

  @Column({ type: 'varchar', name: 'name' })
  name!: string;

  @OneToMany(
    () => Post,
    (posts) => posts.user,
  )
  @JoinColumn({ name: 'id' })
  posts?: Post[];
}
