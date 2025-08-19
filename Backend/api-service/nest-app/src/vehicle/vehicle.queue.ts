import { Injectable } from '@nestjs/common';
  import { Queue } from 'bull';
  import { InjectQueue } from '@nestjs/bull';

  @Injectable()
  export class VehicleQueue {
    constructor(@InjectQueue('vehicle') private vehicleQueue: Queue) {}

    async addImportJob(data: any) {
      await this.vehicleQueue.add('import', data);
    }

    async addExportJob(data: any) {
      await this.vehicleQueue.add('export', data);
    }
}