import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Trip } from 'src/entities/trip.entity';
import { Repository } from 'typeorm';
import { TripDto } from './dtos/trip.dto';
import { CreateTripDto } from './dtos/create-trip.dto';

@Injectable()
export class TripService {
    constructor(
        @InjectRepository(Trip)
        private readonly tripRepository: Repository<Trip>,
    ) { }

    public async getAllTrips(): Promise<TripDto[]> {
        return this.tripRepository.find();
    }

    public async getTripById(id: string): Promise<TripDto> {
        return this.tripRepository.findOne({ where: { id } });
    }

    public async createTrip(input: CreateTripDto): Promise<TripDto> {
        const trip = this.tripRepository.create(input);
        return this.tripRepository.save(trip);
    }
}
