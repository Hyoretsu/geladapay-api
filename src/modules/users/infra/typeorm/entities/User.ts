import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('users')
export default class User {
 @PrimaryGeneratedColumn()
 id: string;

 @Column()
 name: string;

 @Column()
 email: string;

 @Column()
 cpf: number;

 @Column()
 phone: number;

 @Column()
 @Exclude()
 password: string;

 @CreateDateColumn()
 created_at: Date;

 @UpdateDateColumn()
 updated_at: Date;
}
