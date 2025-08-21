import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateVehicleInput {
  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  email: string;

  @Field()
  car_make: string;

  @Field()
  car_model: string;

  @Field({ description: 'Vehicle Identification Number (must be unique)' })
  vin: string;

  @Field()
  manufactured_date: Date;
}
