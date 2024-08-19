import { Controller, Get, Param } from "@nestjs/common";
import { EvmService } from "./evm.service";

@Controller("evm")
export class EvmController {
  constructor(private readonly evmService: EvmService) {}

  @Get("block/:height")
  getBlock(@Param("height") height: number) {
    return this.evmService.getBlock(height);
  }

  @Get("transactions/:hash")
  getTransaction(@Param("hash") hash: string) {
    return this.evmService.getTransaction(hash);
  }
}
