import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('users')
export default class User {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column('varchar')
 name: string;

 @Column('varchar')
 email: string;

 @Column('bigint')
 cpf: number;

 @Column('bigint')
 phone: number;

 @Column('varchar')
 @Exclude()
 password: string;

 @CreateDateColumn()
 created_at: Date;

 @UpdateDateColumn()
 updated_at: Date;
}
