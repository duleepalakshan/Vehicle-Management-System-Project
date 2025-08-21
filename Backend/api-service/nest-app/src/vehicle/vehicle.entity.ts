import {Entity, PrimaryGeneratedColumn, Column,Index} from 'typeorm';
import { ObjectType,Field,ID,Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Vehicle {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
    id: number;
  
    @Field()
    @Column()
    first_name: string;
    
    @Field()
    @Column()
    last_name: string;  

    @Field()
    @Column()
    email: string;

    @Field()
    @Column()
    car_make: string;
    
    @Field()
    @Column()
    car_model: string;

    @Field()
    @Column({unique:true})
    vin: string;
    
    @Field()
    @Index()
    @Column('date')
    manufactured_date: Date;

    @Field(() => Int)
    @Column('int')
    age_of_vehicle: number;



}