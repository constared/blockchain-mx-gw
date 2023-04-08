import { Injectable, CACHE_MANAGER, Inject } from '@nestjs/common';
import connector = require('@dfmx-back/contract-connector-lib');
import { TokenRegistryInfoType } from '@dfmx-back/shared-lib/src/blockchain-gateway/registry/types/blockchain-gateway.registry.token-registry-info-type';
import { CallResponseType } from '@dfmx-back/shared-lib/src/blockchain-gateway/registry/types/blockchain-gateway.registry.call-response';
import { Cache } from 'cache-manager';
import { getCurrentNonce } from '../helpers/multi-tx';

@Injectable()
export class RegistryService {
  private hInstance;
  private registry;
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {
    const httpProvider =
      process.env.BLOCKCHAIN_NODE_URI ||
      'https://rpc-mumbai.maticvigil.com/v1/2a984c24dfa35946a10d1c4478c05dbf93c86830';
      // 'http://127.0.0.1:7545'
    console.log('RegistryService httpProvider = ' + httpProvider);

    const netId = process.env.BLOCKCHAIN_NETWORK_ID ||
      '80001';
      // '5777'
    console.log('RegistryService netId = ' + netId);
    this.hInstance = connector.contract.getInstance(httpProvider, netId);
    this.registry = this.hInstance.infra.Registry();
  }
// -----------------------------------------------------------------------------------------------------------
  getRegistryOwners(): Promise<string[]> {
    return this.registry.getOwners();
  }
// -----------------------------------------------------------------------------------------------------------
  async getAllTokensInfo(): Promise<TokenRegistryInfoType[]> {
    const info = await this.registry.getAllTokens();
    return info[0].map((elem, index) => {
      return {
        symbol: elem,
        address: info[1][index],
        contractTypeName: info[2][index],
        isDeprecated: info[3][index],
      };
    });
  }
// -----------------------------------------------------------------------------------------------------------
  async getTokenInfoBySymbol(symbol): Promise<TokenRegistryInfoType> {
    const info = await this.registry.getTokenBySymbol(symbol);
    return {
      symbol,
      address: info[0],
      contractTypeName: info[1],
      isDeprecated: info[2],
    };
  }
// -----------------------------------------------------------------------------------------------------------
  async getTokenInfoByAddress(address: string): Promise<TokenRegistryInfoType> {
    const info = await this.registry.getSymbolByToken(address);
    return {
      symbol: info[0],
      address,
      contractTypeName: info[1],
      isDeprecated: info[2],
    };
  }
// -----------------------------------------------------------------------------------------------------------
  async addToken(
    symbol: string,
    contractAddress: string,
    contractName: string,
    sender: string,
    group_tx_id: string
  ): Promise<CallResponseType> {
    const res = await this.registry.addToken(
      symbol,
      contractAddress,
      contractName,
      sender,
      await getCurrentNonce(this.cacheManager, group_tx_id)
    );
    return res;
  }
// -----------------------------------------------------------------------------------------------------------
  async addOwner(newOwner: string, sender: string): Promise<CallResponseType> {
    const res = await this.registry.addOwner(newOwner, sender);
    return res;
  }
// -----------------------------------------------------------------------------------------------------------
  async deleteOwner(
    ownerToDelete: string,
    sender: string,
  ): Promise<CallResponseType> {
    const res = await this.registry.deleteOwner(ownerToDelete, sender);
    return res;
  }
}
