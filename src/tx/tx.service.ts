import { Injectable, CACHE_MANAGER, Inject } from '@nestjs/common';
// import { Logger } from '@nestjs/common';
import connector = require('@dfmx-back/contract-connector-lib');
import {
  SendTxDto,
  SignTxDto,
} from '@dfmx-back/shared-lib/src/blockchain-gateway/tx/dto/blockchain-gateway.tx.dto';
import {
  SendSignedTransactionType,
  SignTransactionType,
} from '@dfmx-back/shared-lib/src/blockchain-gateway/tx/types/blockchain-gateway.tx.send-signed-transaction';
import { Cache } from 'cache-manager';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class TxService {
  // private readonly logger = new Logger(TxService.name);
  private hInstance;
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {
    const httpProvider =
      process.env.BLOCKCHAIN_NODE_URI ||
      'https://rpc-mumbai.maticvigil.com/v1/2a984c24dfa35946a10d1c4478c05dbf93c86830';
    console.log('TxService httpProvider = ' + httpProvider);

    const netId = process.env.BLOCKCHAIN_NETWORK_ID || '80001';
    console.log('TxService netId = ' + netId);
    this.hInstance = connector.contract.getInstance(httpProvider, netId);
  }
// -----------------------------------------------------------------------------------------------------------
  async sendSignedTransaction(
    txs: SendTxDto[],
  ): Promise<SendSignedTransactionType[]> {
    return await Promise.all(
      txs.map((i: SendTxDto) =>
        this.hInstance.sendSignedTransaction(i.rawTransaction),
      ),
    );
  }
// -----------------------------------------------------------------------------------------------------------
  async signTransaction(
    txs: SignTxDto[],
    pk: string,
  ): Promise<SignTransactionType[]> {
    if (!pk)
      throw new HttpException(
        'the private_key header does not exists',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    try {
      return await Promise.all(
        txs.map((i: SignTxDto) =>
          this.hInstance.web3.eth.accounts.signTransaction(i.txParams, pk),
        ),
      );
    } catch (e) {
      // this.logger.log(e.message);
      console.log(e);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
// -----------------------------------------------------------------------------------------------------------
  async increaseNonce(uuid: string): Promise<string> {
    const val: string = await this.cacheManager.get(uuid);
    let currVal: string;
    if (val) {
      await this.cacheManager.set(uuid, String(Number(val) + 1));
      currVal = String(Number(val) + 1);
    } else {
      await this.cacheManager.set(uuid, '0');
      currVal = '0';
    }
    return currVal;
  }
}
