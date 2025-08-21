import { Module } from '@nestjs/common';
  import { TypeOrmModule } from '@nestjs/typeorm';
  import { BullModule } from '@nestjs/bull';
  import { Vehicle } from './vehicle.entity';
  import { VehicleQueue } from './vehicle.queue';
  import{VehicleService} from './vehicle.service';
  import {VehicleResolver} from './vehicle.resolver';
  @Module({
    imports: [
      TypeOrmModule.forFeature([Vehicle]),
      BullModule.registerQueue({
        name: 'vehicle-queue',
      }),
    ],
    providers: [VehicleService, VehicleResolver],
    exports: [VehicleService,
              BullModule,
    ],
  })
  export class VehicleModule {}