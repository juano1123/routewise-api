import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TripDto } from './dtos/trip.dto';
import { TripService } from './trip.service';
import { CreateTripDto } from './dtos/create-trip.dto';

@Controller('trip')
export class TripController {
    constructor(private readonly tripService: TripService) { }

    @Get()
    public async getAllTrips(): Promise<TripDto[]> {
        return await this.tripService.getAllTrips();
    }

    @Get(':id')
    public async getTripById(@Param() { id }: { id: string }): Promise<TripDto> {
        return await this.tripService.getTripById(id);
    }

    @Post()
    public async createTrip(@Body() input: CreateTripDto): Promise<TripDto> {
        return await this.tripService.createTrip(input);
    }
}
