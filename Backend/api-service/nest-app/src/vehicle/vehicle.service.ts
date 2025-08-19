import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './vehicle.entity';
import { ILike } from 'typeorm';


//GraphQL Crud
@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle) private vehicleRepo: Repository<Vehicle>,
  ) {}

  // Function to calculate vehicle age
  calculateAge(manufacturedDate: Date): number {
    return new Date().getFullYear() - new Date(manufacturedDate).getFullYear();
  }

  // Create
  async createVehicle(data: Partial<Vehicle>): Promise<Vehicle> {
    data.age_of_vehicle = this.calculateAge(data.manufactured_date);
    const newVehicle = this.vehicleRepo.create(data);
    return this.vehicleRepo.save(newVehicle);
  }

  // Update
  async updateVehicle(id: string, data: Partial<Vehicle>): Promise<Vehicle> {
    if (data.manufactured_date) {
      data.age_of_vehicle = this.calculateAge(data.manufactured_date);
    }
    await this.vehicleRepo.update(id, data);
    return this.vehicleRepo.findOneBy({ id });
  }

  // Delete
  async deleteVehicle(id: string): Promise<boolean> {
    await this.vehicleRepo.delete(id);
    return true;
  }

  //Listing and Pagination
 async listVehicles(page: number = 1): Promise<Vehicle[]> {
  return this.vehicleRepo.find({
    order: { manufactured_date: 'ASC' },
    skip: (page - 1) * 100,
    take: 100,
  });
}

async searchVehicles(model: string): Promise<Vehicle[]> {
  return this.vehicleRepo.find({
    where: { car_model: ILike(`%${model.replace('*', '')}%`) },
  });
}


}

