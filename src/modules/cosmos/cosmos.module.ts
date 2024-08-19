// src/cosmos/cosmos.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CosmosService } from './cosmos.service';
import { CosmosController } from './cosmos.controller';

@Module({
  imports: [HttpModule],
  providers: [CosmosService],
  controllers: [CosmosController],
})
export class CosmosModule {}
