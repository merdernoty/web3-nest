// src/evm/evm.service.ts
import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { map } from "rxjs/operators";

@Injectable()
export class EvmService {
  private readonly baseUrl = "https://haqq-evm.publicnode.com/";

  constructor(private readonly httpService: HttpService) {}

  async getBlock(height: number) {
    const response = await this.httpService
      .post(this.baseUrl, {
        jsonrpc: "2.0",
        method: "eth_getBlockByNumber",
        params: [height, true],
        id: 1,
      })
      .pipe(map((response) => response.data))
      .toPromise();

    return {
      height,
      hash: response.result.hash,
      parentHash: response.result.parentHash,
      gasLimit: response.result.gasLimit,
      gasUsed: response.result.gasUsed,
      size: response.result.size,
    };
  }

  async getTransaction(hash: string) {
    const response = await this.httpService
      .post(this.baseUrl, {
        jsonrpc: "2.0",
        method: "eth_getTransactionByHash",
        params: [hash],
        id: 1,
      })
      .pipe(map((response) => response.data))
      .toPromise();

    return {
      hash,
      to: response.result.to,
      from: response.result.from,
      value: response.result.value,
      input: response.result.input,
      maxFeePerGas: response.result.maxFeePerGas,
      maxPriorityFeePerGas: response.result.maxPriorityFeePerGas,
      gasPrice: response.result.gasPrice,
    };
  }
}
