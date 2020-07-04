import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

import uploadConfig from '@config/upload';

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

 @Column('varchar')
 avatar: string;

 @CreateDateColumn()
 created_at: Date;

 @UpdateDateColumn()
 updated_at: Date;

 @Expose({ name: 'avatar_url' })
 getAvatarUrl(): string | null {
  if (!this.avatar) {
   return null;
  }

  switch (uploadConfig.driver) {
   case 'disk':
    return `${process.env.APP_API_URL}/files/${this.avatar}`;
   default:
    return null;
  }
 }
}
