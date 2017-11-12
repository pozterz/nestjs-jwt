import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 190})
  name: string;

  @Column()
  username: string;

  @Column({length: 256})
  password: string;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;
}