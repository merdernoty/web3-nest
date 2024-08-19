import { Module } from "@nestjs/common";
import { EvmModule } from "./modules/evm/evm.module";
import { CosmosModule } from "./modules/cosmos/cosmos.module";

@Module({
  imports: [EvmModule, CosmosModule],
})
export class AppModule {}
