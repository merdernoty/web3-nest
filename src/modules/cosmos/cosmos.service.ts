import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { map } from "rxjs/operators";

@Injectable()
export class CosmosService {
  private readonly baseUrl = "https://rpc.cosmos.network/";

  constructor(private readonly httpService: HttpService) {}

  async getBlock(height: number) {
    const response = await this.httpService
      .get(`${this.baseUrl}/blocks/${height}`)
      .pipe(map((response) => response.data))
      .toPromise();

    return {
      height,
      time: response.block.time,
      hash: response.block.hash,
      proposedAddress: response.block.proposedAddress,
    };
  }

  async getTransaction(hash: string) {
    const response = await this.httpService
      .get(`${this.baseUrl}/txs/${hash}`)
      .pipe(map((response) => response.data))
      .toPromise();

    return {
      hash,
      height: response.tx.height,
      time: response.tx.time,
      gasUsed: response.tx.gasUsed,
      gasWanted: response.tx.gasWanted,
      fee: response.tx.fee,
      sender: response.tx.sender,
    };
  }
}
