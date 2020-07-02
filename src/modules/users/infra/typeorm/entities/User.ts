import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export default class User {
 @PrimaryGeneratedColumn()
 id: string;

 @Column()
 name: string;

 @Column()
 password: string;

 @Column()
 phone: number;

 @CreateDateColumn()
 created_at: Date;

 @UpdateDateColumn()
 updated_at: Date;
}
