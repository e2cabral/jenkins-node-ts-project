import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import User from "./user.entity";

@Entity('post')
export default class Post {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number;

  @Column({ type: 'varchar', name: 'description' })
  description?: string;

  @Column({ type: 'varchar', name: 'photo_path' })
  photoPath!: string;

  @Column({ type: 'int', name: 'user_id' })
  userId!: number;

  @ManyToOne(
    () => User,
    user => user.posts,
  )
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
