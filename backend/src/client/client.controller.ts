import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.entity';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  findAll(): Promise<Client[]> {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Client | null> {
    return this.clientService.findOne(Number(id));
  }

  @Post()
  create(@Body() client: Partial<Client>) {
    return this.clientService.create(client);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() client: Partial<Client>) {
    return this.clientService.update(Number(id), client);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.clientService.delete(Number(id));
  }
}
