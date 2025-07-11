import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepo: Repository<Client>,
  ) {}

  findAll() {
    return this.clientRepo.find();
  }

  findOne(id: number) {
    return this.clientRepo.findOne({ where: { id } });
  }

  create(data: Partial<Client>) {
    const newClient = this.clientRepo.create(data);
    return this.clientRepo.save(newClient);
  }

  update(id: number, data: Partial<Client>) {
    return this.clientRepo.update(id, data);
  }

  delete(id: number) {
    return this.clientRepo.delete(id);
  }
}
