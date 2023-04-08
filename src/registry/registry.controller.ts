import { Controller, Get, Query, Post, Body, Headers } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiTags,
  ApiBody,
  ApiQuery,
  ApiHeader,
} from '@nestjs/swagger';
import { RegistryService } from './registry.service';
import { TokenRegistryInfoType } from '@dfmx-back/shared-lib/src/blockchain-gateway/registry/types/blockchain-gateway.registry.token-registry-info-type';
import {
  AddTokenDto,
  AddOwnerDto,
  DeleteOwnerDto,
} from '@dfmx-back/shared-lib/src/blockchain-gateway/registry/dto/blockchain-gateway.registry.dto';
import { CallResponseType } from '@dfmx-back/shared-lib/src/blockchain-gateway/registry/types/blockchain-gateway.registry.call-response'
// -----------------------------------------------------------------------------------------------------------
@Controller('registry')
@ApiTags('registry')
export class RegistryController {
  constructor(private readonly registryService: RegistryService) {}
  @Get('registry-owners')
  @ApiCreatedResponse({ description: 'Owners list of Registry contract' })
  getRegistryOwners(): Promise<string[]> {
    return this.registryService.getRegistryOwners();
  }
// -----------------------------------------------------------------------------------------------------------
  @Get('registry-all-tokens')
  @ApiCreatedResponse({
    description: 'get list on token address',
    type: [TokenRegistryInfoType],
  })
  getAllTokens(): Promise<TokenRegistryInfoType[]> {
    return this.registryService.getAllTokensInfo();
  }
// -----------------------------------------------------------------------------------------------------------
  @Get('registry-token')
  @ApiQuery({ name: 'symbol', required: false })
  @ApiQuery({ name: 'address', required: false })
  @ApiCreatedResponse({
    description: 'get token detail by symbol or by address',
    type: TokenRegistryInfoType,
  })
  getTokenBySymbol(
    @Query('symbol') symbol?: string,
    @Query('address') address?: string,
  ): Promise<TokenRegistryInfoType> {
    return address
      ? this.registryService.getTokenInfoByAddress(address)
      : this.registryService.getTokenInfoBySymbol(symbol);
  }
// -----------------------------------------------------------------------------------------------------------
  @Post('add-token')
  @ApiBody({ type: AddTokenDto })
  @ApiHeader({
    name: 'group_tx_id',
    description: 'Transaction group ID',
  })
  addToken(@Body() body: AddTokenDto, @Headers() headers): Promise<CallResponseType> {
    return this.registryService.addToken(
      body.symbol,
      body.contractAddress,
      body.contractName,
      body.sender,
      headers?.group_tx_id
    );
  }
// -----------------------------------------------------------------------------------------------------------
  @Post('add-owner')
  @ApiBody({ type: AddOwnerDto })
  addOwner(@Body() body: AddOwnerDto): Promise<CallResponseType> {
    return this.registryService.addOwner(body.newOwner, body.sender);
  }
// -----------------------------------------------------------------------------------------------------------
  @Post('delete-owner')
  @ApiBody({ type: DeleteOwnerDto })
  deleteOwner(@Body() body: DeleteOwnerDto): Promise<CallResponseType> {
    return this.registryService.deleteOwner(body.ownerToDelete, body.sender);
  }
}
