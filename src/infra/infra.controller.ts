import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags, ApiBody } from "@nestjs/swagger";
import { InfraService } from "./infra.service";
import {
    TokenRegistryInfoType,
    ApplicationDetailType,
    BaseResponse,
    AddDelSupplierDto,
    CallResponseType,
    ChangeOwnerDto
} from './infra.types'

@ApiTags('infra')
@Controller('infra')
export class InfraController {
    constructor(
        private readonly infraService: InfraService
    ) {
    }
    @Get('registry-owners')
    @ApiCreatedResponse({ description: 'Owners list of Registry contract'})
    getRegistryOwners(): Promise<string[]> {
        return this.infraService.getRegistryOwners();
    }

    @Get('registry-all-tokens')
    @ApiCreatedResponse({ description: 'get list on token address' , type: [TokenRegistryInfoType]})
    getAllTokens(): Promise<TokenRegistryInfoType[]> {
        return this.infraService.getAllTokensInfo();
    }

    @Get('registry-token')
    @ApiCreatedResponse({ description: 'get token detail by symbol or by address' , type: TokenRegistryInfoType})
    getTokenBySymbol(@Query('symbol') symbol: string, @Query('address') address: string): Promise<TokenRegistryInfoType> {
        return address?this.infraService.getTokenInfoByAddress(address):this.infraService.getTokenInfoBySymbol(symbol)
    }


    @Get('issue-applications')
    @ApiCreatedResponse({ description: 'get application ID list'})
    getApplications(): Promise<string[]> {
        return this.infraService.queryApplications();
    }

    @Get('issue-application-detail')
    @ApiCreatedResponse({ description: 'get application detail by application ID' , type: BaseResponse})
    getApplication(@Query('applicationId') applicationId: string): Promise<ApplicationDetailType> {
        return this.infraService.queryApplication(applicationId);
    }

    @Post('tx-add-supplier')
    @ApiBody({type: AddDelSupplierDto})
    @ApiCreatedResponse({ description: 'add Supplier to the Application contract' , type: BaseResponse})
    addSupplier(@Body() body: AddDelSupplierDto): Promise<BaseResponse<CallResponseType>> {
        return this.infraService.addSupplier(body.supplier_address, body.sender_address);
    }

    @Post('tx-delete-supplier')
    @ApiBody({type: AddDelSupplierDto})
    @ApiCreatedResponse({ description: 'delete Supplier from the Application contract' , type: BaseResponse})
    deleteSupplier(@Body() body: AddDelSupplierDto): Promise<BaseResponse<CallResponseType>> {
        return this.infraService.deleteSupplier(body.supplier_address, body.sender_address);
    }

    @Post('tx-change-owner')
    @ApiBody({type: ChangeOwnerDto})
    @ApiCreatedResponse({ description: 'change Owner of Application contract' , type: BaseResponse})
    changeOwner(@Body() body: ChangeOwnerDto): Promise<BaseResponse<CallResponseType>> {
        return this.infraService.changeOwner(body.new_owner_address, body.sender_address);
    }
}
