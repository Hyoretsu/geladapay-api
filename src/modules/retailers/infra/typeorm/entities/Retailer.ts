import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('retailers')
export default class Retailer {
 @PrimaryColumn('uuid')
 id: string;

 @Column('varchar')
 name: string;

 @Column('varchar')
 email: string;

 @Column('varchar')
 @Exclude()
 password: string;

 @Column('bigint')
 cnpj: number;

 @Column('decimal', { precision: 9, scale: 7 })
 latitude: number;

 @Column('decimal', { precision: 10, scale: 7 })
 longitude: number;

 @Column('varchar')
 image: string;

 @CreateDateColumn()
 created_at: Date;

 @UpdateDateColumn()
 updated_at: Date;
}
