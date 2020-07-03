import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('retailers')
export default class Retailer {
 @PrimaryColumn('uuid')
 id: string;

 @Column()
 name: string;

 @Column()
 email: string;

 @Column()
 @Exclude()
 password: string;

 @Column()
 cnpj: number;

 @Column()
 image: string;

 @CreateDateColumn()
 created_at: Date;

 @UpdateDateColumn()
 updated_at: Date;
}
