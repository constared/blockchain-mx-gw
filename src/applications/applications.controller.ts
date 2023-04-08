import { Controller, Get, Query, Post, Body, Headers, applyDecorators, Type, UseInterceptors } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiTags,
  ApiBody,
  ApiHeader,
  ApiOkResponse,
  ApiExtraModels,
  getSchemaPath,
  refs,
  ApiProperty
} from '@nestjs/swagger';
import { ModPost, AutoSignOwner, AutoSignStorekeeper, AutoSignSupplier } from '../helpers/autoSign'
import { ApplicationsService } from './applications.service';
import { ApplicationDetailType } from '@dfmx-back/shared-lib/src/blockchain-gateway/applications/types/blockchain-gateway.applications.detail';
import { CallResponseType, MultiCallResponseType } from '@dfmx-back/shared-lib/src/blockchain-gateway/registry/types/blockchain-gateway.registry.call-response';
import {
  AddDelSupplierDto,
  ChangeOwnerDto,
  ChangeStorekeeperDto,
  SendApplicationDto,
  AcceptRejectRevokeApplicationDto,
} from '@dfmx-back/shared-lib/src/blockchain-gateway/applications/dto/blockchain-gateway.applications.dto';
import {
  SendSignedTransactionType,
  SignTransactionType,
} from '@dfmx-back/shared-lib/src/blockchain-gateway/tx/types/blockchain-gateway.tx.send-signed-transaction';

@ApiTags('applications')
@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}
// -----------------------------------------------------------------------------------------------------------
  @Get('suppliers')
  @ApiCreatedResponse({ description: 'get suppliers list' })
  querySuppliers(): Promise<string[]> {
    return this.applicationsService.querySuppliers();
  }
// -----------------------------------------------------------------------------------------------------------
  @Get('owner')
  @ApiCreatedResponse({ description: 'get owner of Applications contract' })
  queryOwner(): Promise<string[]> {
    return this.applicationsService.queryOwner();
  }
// -----------------------------------------------------------------------------------------------------------
  @Get('storekeeper')
  @ApiCreatedResponse({ description: 'get storekeeper' })
  queryStorekeeper(): Promise<string[]> {
    return this.applicationsService.queryStorekeeper();
  }
// -----------------------------------------------------------------------------------------------------------
  @ModPost(
    AddDelSupplierDto,
    CallResponseType,
    AutoSignOwner,
    'add-supplier', 
    'add Supplier from the Application contract'
  )
  addSupplier(@Body() body: AddDelSupplierDto): Promise<CallResponseType> {
    return this.applicationsService.addSupplier(
      body.supplierAddress,
      body.senderAddress,
    );
  }
// -----------------------------------------------------------------------------------------------------------
  @ModPost(
    AddDelSupplierDto,
    CallResponseType,
    AutoSignOwner,
    'delete-supplier', 
    'delete Supplier from the Application contract'
  )
  deleteSupplier(@Body() body: AddDelSupplierDto): Promise<CallResponseType> {
    return this.applicationsService.deleteSupplier(
      body.supplierAddress,
      body.senderAddress,
    );
  }
// -----------------------------------------------------------------------------------------------------------
  @ModPost(
    ChangeOwnerDto,
    CallResponseType,
    AutoSignOwner,
    'change-owner', 
    'change Owner of Application contract'
  )
  changeOwner(@Body() body: ChangeOwnerDto): Promise<CallResponseType> {
    return this.applicationsService.changeOwner(
      body.newOwnerAddress,
      body.senderAddress,
    );
  }
// -----------------------------------------------------------------------------------------------------------
  @ModPost(
    ChangeStorekeeperDto,
    CallResponseType,
    AutoSignOwner,
    'change-storekeeper', 
    'change Storekeeper of Application contract'
  )
  changeStorekeeper(
    @Body() body: ChangeStorekeeperDto,
  ): Promise<CallResponseType> {
    return this.applicationsService.changeStorekeeper(
      body.newStorekeeperAddress,
      body.senderAddress,
    );
  }
// -----------------------------------------------------------------------------------------------------------
  // emissions -------------------------
  @Get('emission-applications')
  @ApiCreatedResponse({ description: 'get application ID list' })
  getApplications(): Promise<string[]> {
    return this.applicationsService.queryApplications();
  }
// -----------------------------------------------------------------------------------------------------------
  @Get('emission-detail')
  @ApiCreatedResponse({
    description: 'get application detail by application ID',
    type: ApplicationDetailType,
  })
  getApplication(
    @Query('applicationId') applicationId: string,
  ): Promise<ApplicationDetailType> {
    return this.applicationsService.queryApplication(applicationId);
  }
// -----------------------------------------------------------------------------------------------------------
  @ModPost(
    SendApplicationDto,
    CallResponseType,
    AutoSignSupplier,
    'emission-send-application', 
    'send emission application to storekeeper'
  )
  sendApplication(
    @Body() body: SendApplicationDto,
    // @Headers() headers,
  ): Promise<CallResponseType> {
    return this.applicationsService.sendApplication(
      body.appId,
      body.symbol,
      body.addAmount,
      body.senderAddress
    );
  }
// -----------------------------------------------------------------------------------------------------------
  @ModPost(
    AcceptRejectRevokeApplicationDto,
    CallResponseType,
    AutoSignStorekeeper,
    'emission-accept-application', 
    'accept emission application by storekeeper'
  )
  acceptApplication(
    @Body() body: AcceptRejectRevokeApplicationDto,
  ): Promise<CallResponseType> {
    return this.applicationsService.acceptApplication(
      body.appId,
      body.senderAddress,
    );
  }
// -----------------------------------------------------------------------------------------------------------
  @ModPost(
    AcceptRejectRevokeApplicationDto,
    CallResponseType,
    AutoSignStorekeeper,
    'emission-reject-application', 
    'reject emission application by storekeeper'
  )
  rejectApplication(
    @Body() body: AcceptRejectRevokeApplicationDto,
  ): Promise<CallResponseType> {
    return this.applicationsService.rejectApplication(
      body.appId,
      body.senderAddress,
    );
  }
// -----------------------------------------------------------------------------------------------------------
  @ModPost(
    AcceptRejectRevokeApplicationDto,
    CallResponseType,
    AutoSignStorekeeper,
    'emission-revoke-application', 
    'revoke emission application by sender'
  )
  revokeApplication(
    @Body() body: AcceptRejectRevokeApplicationDto,
  ): Promise<CallResponseType> {
    return this.applicationsService.revokeApplication(
      body.appId,
      body.senderAddress,
    );
  }
// -----------------------------------------------------------------------------------------------------------
  // redeem -------------------------
  @Get('redeem-applications')
  @ApiCreatedResponse({ description: 'get redeem application ID list' })
  queryRedeemApplications(): Promise<string[]> {
    return this.applicationsService.queryRedeemApplications();
  }
// -----------------------------------------------------------------------------------------------------------
  @Get('redeem-detail')
  @ApiCreatedResponse({
    description: 'get redeem application detail by application ID',
    type: ApplicationDetailType,
  })
  queryRedeemApplication(
    @Query('applicationId') applicationId: string,
  ): Promise<ApplicationDetailType> {
    return this.applicationsService.queryRedeemApplication(applicationId);
  }
// -----------------------------------------------------------------------------------------------------------
  @ModPost(
    SendApplicationDto,
    CallResponseType,
    AutoSignSupplier,
    'redeem-send-application', 
    'send redeem application to storekeeper'
  )
  sendRedeemApplication(
    @Body() body: SendApplicationDto,
  ): Promise<CallResponseType> {
    return this.applicationsService.sendRedeemApplication(
      body.appId,
      body.symbol,
      body.addAmount,
      body.senderAddress,
    );
  }
// -----------------------------------------------------------------------------------------------------------
  @ModPost(
    SendApplicationDto,
    CallResponseType,
    AutoSignStorekeeper,
    'redeem-accept-application', 
    'accept redeem application by storekeeper'
  )
  acceptRedeemApplication(
    @Body() body: AcceptRejectRevokeApplicationDto,
  ): Promise<CallResponseType> {
    return this.applicationsService.acceptRedeemApplication(
      body.appId,
      body.senderAddress,
    );
  }
// -----------------------------------------------------------------------------------------------------------
  @ModPost(
    AcceptRejectRevokeApplicationDto,
    CallResponseType,
    AutoSignStorekeeper,
    'redeem-reject-application', 
    'reject redeem application by storekeeper'
  )
  rejectRedeemApplication(
    @Body() body: AcceptRejectRevokeApplicationDto,
  ): Promise<CallResponseType> {
    return this.applicationsService.rejectRedeemApplication(
      body.appId,
      body.senderAddress,
    );
  }
// -----------------------------------------------------------------------------------------------------------
  @ModPost(
    AcceptRejectRevokeApplicationDto,
    CallResponseType,
    AutoSignStorekeeper,
    'redeem-revoke-application', 
    'revoke redeem application by sender'
  )
  revokeRedeemApplication(
    @Body() body: AcceptRejectRevokeApplicationDto,
  ): Promise<CallResponseType> {
    return this.applicationsService.revokeRedeemApplication(
      body.appId,
      body.senderAddress,
    );
  }
// -----------------------------------------------------------------------------------------------------------
  @Get('increaseNonce')
  @ApiCreatedResponse({
    description: 'test',
    type: String,
  })
  increaseNonce(@Query('groupId') groupId: string): Promise<string> {
    return this.applicationsService.increaseNonce(groupId);
  }
}
