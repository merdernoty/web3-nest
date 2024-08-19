import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { EvmService } from "./evm.service";
import { EvmController } from "./evm.controller";

@Module({
  imports: [HttpModule],
  providers: [EvmService],
  controllers: [EvmController],
})
export class EvmModule {}
