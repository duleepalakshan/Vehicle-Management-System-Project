import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { VehicleService } from './vehicle.service';
import { Vehicle } from './vehicle.entity';
import { CreateVehicleInput } from './dto/vehicle.input';

@Resolver(() => Vehicle)
export class VehicleResolver {
  constructor(private readonly vehicleService: VehicleService) {}

  // --- QUERIES (Data ඉල්ලන්න) ---
  @Query(() => [Vehicle], { name: 'vehicles' })
  async getVehicles(@Args('page', { type: () => Number, defaultValue: 1 }) page: number) {
    return this.vehicleService.listVehicles(page);
  }

  @Query(() => [Vehicle], { name: 'searchVehicles' })
  async searchVehicles(@Args('model', { type: () => String }) model: string) {
    return this.vehicleService.searchVehicles(model);
  }

  // --- MUTATIONS (Data වෙනස් කරන්න) ---
  @Mutation(() => Vehicle)
  async createVehicle(@Args('createVehicleInput') createVehicleInput: CreateVehicleInput) {
    return this.vehicleService.createVehicle(createVehicleInput);
  }

  @Mutation(() => Vehicle)
  async updateVehicle(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateVehicleInput') updateVehicleInput: CreateVehicleInput, // Can be a different input type
  ) {
    return this.vehicleService.updateVehicle(id, updateVehicleInput);
  }

  @Mutation(() => Boolean)
  async deleteVehicle(@Args('id', { type: () => ID }) id: string) {
    return this.vehicleService.deleteVehicle(id);
  }
}
