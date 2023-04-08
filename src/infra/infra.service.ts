import { Injectable } from '@nestjs/common';
import * as contracts from './contracts';
import { TokenRegistryInfoType, ApplicationDetailType, errorEnum, BaseResponse, CallResponseType } from './infra.types'

function callServiceResponse(target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (this: any, ...args: any[]) {
        try {
            const result = await originalMethod.apply(this, args);
            return {
                status: 'OK',
                statusCode: 200,
                response: result,
                isError: false
            }
        } catch(e) {
            return {
                status: 'ERROR',
                statusCode: 500,
                response: {
                    errMsg: e.message,
                    errCode: null,
                    errStack: e.stack,
                    errorType: errorEnum.SERVER_ERROR
                },
                isError: true
            }
        }
    }
}

@Injectable()
export class InfraService {
    private hInstance;
    private registry;
    private applications;
    constructor() {
        const httpProvider = process.env.BLOCKCHAIN_NODE_URI || 'https://rpc-mumbai.maticvigil.com/v1/2a984c24dfa35946a10d1c4478c05dbf93c86830';
        console.log('httpProvider = ' + httpProvider)
        const netId = process.env.BLOCKCHAIN_NETWORK_ID || "80001"
        console.log('netId = ' + netId)
        this.hInstance = contracts.getInstance(httpProvider, netId)
        this.registry = this.hInstance.infra.Registry()
        this.applications = this.hInstance.infra.Applications()
    }
    // Registry
    getRegistryOwners(): Promise<string[]> {
        return this.registry.getOwners()
    }

    async getAllTokensInfo(): Promise<TokenRegistryInfoType[]> {
        const info = await this.registry.getAllTokens()
        return info[0].map((elem, index) => {
            return {
                symbol: elem,
                address: info[1][index],
                contractTypeName: info[2][index],
                isDeprecated: info[3][index]
            }
        })
    }

    async getTokenInfoBySymbol(symbol): Promise<TokenRegistryInfoType> {
        const info = await this.registry.getTokenBySymbol(symbol)
        return {
            symbol,
            address: info[0],
            contractTypeName: info[1],
            isDeprecated: info[2],
        }
    }

    async getTokenInfoByAddress(address: string): Promise<TokenRegistryInfoType> {
        const info = await this.registry.getSymbolByToken(address)
        return {
            symbol: info[0],
            address,
            contractTypeName: info[1],
            isDeprecated: info[2],
        }
    }
    // Applications
    queryApplications(): Promise<string[]> {
        return this.applications.queryApplications()
    }

    async queryApplication(appId: string): Promise<ApplicationDetailType> {
        const detail = await this.applications.queryApplication(appId)
        return {
            clientAddress: detail[0],
            symbol: detail[1],
            amount: detail[2],
            status: detail[3]
        }
    }

    @callServiceResponse
    addSupplier(supplier_address: string, sender_address: string): Promise<BaseResponse<CallResponseType>> {
        return this.applications.addSupplier(supplier_address, sender_address)
    }

    @callServiceResponse
    deleteSupplier(supplier_address: string, sender_address: string): Promise<BaseResponse<CallResponseType>> {
        return this.applications.deleteSupplier(supplier_address, sender_address)
    }


    @callServiceResponse
    changeOwner(new_owner_address: string, sender_address: string): Promise<BaseResponse<CallResponseType>> {
        return this.applications.changeOwner(new_owner_address, sender_address)
    }
}
