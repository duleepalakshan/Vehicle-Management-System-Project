import { Module } from '@nestjs/common';
  import { TypeOrmModule } from '@nestjs/typeorm';
  import { BullModule } from '@nestjs/bull';
  import { VehicleModule } from './vehicle/vehicle.module';
  import { NotificationModule } from './notification/notification.module';
  import { Vehicle } from './vehicle/vehicle.entity';
  import * as dotenv from 'dotenv';
  import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
  import { GraphQLModule } from '@nestjs/graphql';
  
  
  dotenv.config();
  const DB_TYPE = (process.env.DB_TYPE as | 'postgres') ?? 'postgres';
  @Module({
    imports: [
      TypeOrmModule.forRoot({
        type: DB_TYPE,
        host: process.env.DB_HOST ?? 'localhost',
        port: Number(process.env.DB_PORT ?? 5432),
        username: process.env.DB_USERNAME ?? 'postgres',
password: process.env.DB_PASSWORD ?? 'Seu@993172090V',
database: process.env.DB_DATABASE ?? 'vehicle_management',
synchronize: (process.env.DB_SYNCHRONIZE ?? 'true') === 'true',

      }),
      TypeOrmModule.forFeature([Vehicle]),
      BullModule.forRoot({
        redis: {
          host: process.env.REDIS_HOST ?? 'localhost',
          port: Number(process.env.REDIS_PORT) ?? 6379,
        },
      }),

      GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql', // Auto-generates schema file(@Resolver,@query,@Mutation )
    }),

      VehicleModule,
      NotificationModule,
    ],
  })
  export class AppModule {}