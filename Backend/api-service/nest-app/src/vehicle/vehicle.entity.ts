import {Entity, PrimaryGeneratedColumn, Column,Index} from 'typeorm';
@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;  

    @Column()
    email: string;

    @Column()
    car_make: string;

    @Column()
    car_model: string;

    @Column({unique:true})
    vin: string;
    
    @Index()
    @Column('date')
    manufactured_date: Date;

    @Column('int')
    age_of_vehicle: number;



}