import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('posts') 
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}