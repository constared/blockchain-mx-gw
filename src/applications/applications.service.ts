import { Injectable, CACHE_MANAGER, Inject } from '@nestjs/common';
import connector = require('@dfmx-back/contract-connector-lib');
import { CallResponseType, MultiCallResponseType } from '@dfmx-back/shared-lib/src/blockchain-gateway/registry/types/blockchain-gateway.registry.call-response';
import { ApplicationDetailType } from '@dfmx-back/shared-lib/src/blockchain-gateway/applications/types/blockchain-gateway.applications.detail';
import { Cache } from 'cache-manager';
import { Return } from '../helpers/return'
@Injectable()
export class ApplicationsService {
  private hInstance;
  private applications;
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {
    const httpProvider =
      process.env.BLOCKCHAIN_NODE_URI ||
      'https://rpc-mumbai.maticvigil.com/v1/2a984c24dfa35946a10d1c4478c05dbf93c86830';
    console.log('ApplicationsService httpProvider = ' + httpProvider);

    const netId = process.env.BLOCKCHAIN_NETWORK_ID || '80001';
    console.log('ApplicationsService netId = ' + netId);
    this.hInstance = connector.contract.getInstance(httpProvider, netId);
    this.applications = this.hInstance.infra.Applications();
  }
// -----------------------------------------------------------------------------------------------------------
  queryOwner(): Promise<string[]> {
    return this.applications.queryOwner();
  }
// -----------------------------------------------------------------------------------------------------------
  queryStorekeeper(): Promise<string[]> {
    return this.applications.queryStorekeeper();
  }
// -----------------------------------------------------------------------------------------------------------
  querySuppliers(): Promise<string[]> {
    return this.applications.querySuppliers();
  }
// -----------------------------------------------------------------------------------------------------------
  addSupplier(
    supplierAddress: string,
    senderAddress: string,
  ): Promise<CallResponseType> {
    return this.applications.addSupplier(supplierAddress, senderAddress);
  }
// -----------------------------------------------------------------------------------------------------------
  deleteSupplier(
    supplierAddress: string,
    senderAddress: string,
  ): Promise<CallResponseType> {
    return this.applications.deleteSupplier(supplierAddress, senderAddress);
  }
// -----------------------------------------------------------------------------------------------------------
  changeOwner(
    newOwnerAddress: string,
    senderAddress: string,
  ): Promise<CallResponseType> {
    return this.applications.changeOwner(newOwnerAddress, senderAddress);
  }
// -----------------------------------------------------------------------------------------------------------
  changeStorekeeper(
    newStorekeeperAddress: string,
    senderAddress: string,
  ): Promise<CallResponseType> {
    return this.applications.changeStorekeeper(
      newStorekeeperAddress,
      senderAddress,
    );
  }
// -----------------------------------------------------------------------------------------------------------
  queryApplications(): Promise<string[]> {
    return this.applications.queryApplications();
  }
// -----------------------------------------------------------------------------------------------------------
  async queryApplication(appId: string): Promise<ApplicationDetailType> {
    const detail = await this.applications.queryApplication(appId);
    return {
      clientAddress: detail[0],
      symbol: detail[1],
      amount: detail[2],
      status: detail[3],
    };
  }
// -----------------------------------------------------------------------------------------------------------
  sendApplication(
    appId: string,
    symbol: string,
    addAmount: number,
    senderAddress: string,
    // group_tx_id: string,
  ): Promise<CallResponseType> {
    return this.applications.sendApplication(
      appId,
      symbol,
      addAmount,
      senderAddress,
      // group_tx_id ? Number(group_tx_id) : 0,
    );
  }
// -----------------------------------------------------------------------------------------------------------
  acceptApplication(
    appId: string,
    senderAddress: string,
  ): Promise<CallResponseType> {
    return this.applications.acceptApplication(appId, senderAddress);
  }
// -----------------------------------------------------------------------------------------------------------
  rejectApplication(
    appId: string,
    senderAddress: string,
  ): Promise<CallResponseType> {
    return this.applications.rejectApplication(appId, senderAddress);
  }
// -----------------------------------------------------------------------------------------------------------
  revokeApplication(
    appId: string,
    senderAddress: string,
  ): Promise<CallResponseType> {
    return this.applications.revokeApplication(appId, senderAddress);
  }
// -----------------------------------------------------------------------------------------------------------
  queryRedeemApplications(): Promise<string[]> {
    return this.applications.queryRedeemApplications();
  }
// -----------------------------------------------------------------------------------------------------------
  async queryRedeemApplication(appId: string): Promise<ApplicationDetailType> {
    const detail = await this.applications.queryRedeemApplication(appId);
    return {
      clientAddress: detail[0],
      symbol: detail[1],
      amount: detail[2],
      status: detail[3],
    };
  }
// -----------------------------------------------------------------------------------------------------------
  sendRedeemApplication(
    appId: string,
    symbol: string,
    addAmount: number,
    senderAddress: string,
  ): Promise<CallResponseType> {
    return this.applications.sendRedeemApplication(
      appId,
      symbol,
      addAmount,
      senderAddress,
    );
  }
// -----------------------------------------------------------------------------------------------------------
  acceptRedeemApplication(
    appId: string,
    senderAddress: string,
  ): Promise<CallResponseType> {
    return this.applications.acceptRedeemApplication(appId, senderAddress);
  }
// -----------------------------------------------------------------------------------------------------------
  rejectRedeemApplication(
    appId: string,
    senderAddress: string,
  ): Promise<CallResponseType> {
    return this.applications.rejectRedeemApplication(appId, senderAddress);
  }
// -----------------------------------------------------------------------------------------------------------
  revokeRedeemApplication(
    appId: string,
    senderAddress: string,
  ): Promise<CallResponseType> {
    return this.applications.revokeRedeemApplication(appId, senderAddress);
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
