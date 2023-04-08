import { Injectable, CACHE_MANAGER, Inject } from '@nestjs/common';
import connector = require('@dfmx-back/contract-connector-lib');
import { Cache } from 'cache-manager';
import { HttpException, HttpStatus } from '@nestjs/common';
import { CallResponseType } from '@dfmx-back/shared-lib/src/blockchain-gateway/registry/types/blockchain-gateway.registry.call-response';
import { TokenTypeEnum, DataTypeEnum } from '@dfmx-back/shared-lib/src/blockchain-gateway/tokens/enums/blockchain-gateway.tokens.dto';
import { getCurrentNonce } from '../helpers/multi-tx';
import { RegistryService } from '../registry/registry.service';
import { TxService } from '../tx/tx.service';
import { DeployDto } from '@dfmx-back/shared-lib/src/blockchain-gateway/tokens/dto/blockchain-gateway.tokens.dto';
import { getTempWallets } from '../helpers/autoSign'

@Injectable()
export class TokensService {
  private hInstance;
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache,
              private readonly registryService: RegistryService,
              private readonly txService: TxService) {
    const httpProvider =
      process.env.BLOCKCHAIN_NODE_URI ||
        'https://rpc-mumbai.maticvigil.com/v1/2a984c24dfa35946a10d1c4478c05dbf93c86830';
    console.log('TxService httpProvider = ' + httpProvider);
      
    const netId = process.env.BLOCKCHAIN_NETWORK_ID || '80001';
    console.log('TxService netId = ' + netId);
    this.hInstance = connector.contract.getInstance(httpProvider, netId);
  }
// -----------------------------------------------------------------------------------------------------------
  async deployAndRegistration(body: DeployDto) {
    const deployTx = await this.deploy(
      body.tokenType,
      body.name,
      body.symbol,
      body.attrs,
      body.attrTypes,
      body.attrValues,
      body.senderAddress,
      null
    );
    console.log(body);
    console.log('private key:' + getTempWallets().owner.private_key)
    const deployTxSigned = await this.txService.signTransaction([deployTx], getTempWallets().owner.private_key)
    const deployTxSent = await this.txService.sendSignedTransaction(deployTxSigned)

    const registryTx = await this.registryService.addToken(
      body.symbol,
      deployTxSent[0].contractAddress,
      // @ts-ignore
      body.tokenType,
      body.senderAddress,
      null
    );
    const registryTxSigned = await this.txService.signTransaction([registryTx], getTempWallets().owner.private_key)
    const registryTxSent = await this.txService.sendSignedTransaction(registryTxSigned)

    const changeTx = await this.hInstance.tokens.ABT(body.symbol).changeOwner(process.env.APP_ADDRESS_5777||process.env.APP_ADDRESS_80001, getTempWallets().owner.address)
    const changeTxSigned = await this.txService.signTransaction([changeTx], getTempWallets().owner.private_key)
    const changeTxSent = await this.txService.sendSignedTransaction(changeTxSigned)

    return [deployTxSent[0], registryTxSent[0], changeTxSent[0]]
  }
// -----------------------------------------------------------------------------------------------------------
  async deploy(
    tokenType: TokenTypeEnum,
    name: string,
    sympol: string,
    attrs: string[],
    attrTypes: DataTypeEnum[],
    attrValues: string[],
    sender: string,
    group_tx_id: string
  ): Promise<CallResponseType> {
    // @ts-ignore
    const tt: string = (TokenTypeEnum[tokenType] === TokenTypeEnum.ABT) ? 'ABT' : '';
    if(Object.keys(this.hInstance.tokens).includes(tt)) {
      const inst = this.hInstance.tokens[tt]();
      const res = await inst.deploy(
        name,
        sympol, 
        attrs,
        attrTypes.map(i => DataTypeEnum[i]),
        attrValues,
        sender,
        await getCurrentNonce(this.cacheManager, group_tx_id)
      );
      return res;
    } else {
      throw new HttpException('Token not found in contract', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
