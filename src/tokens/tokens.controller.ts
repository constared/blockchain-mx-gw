import { Controller, Get, Query, Post, Body, Headers, UsePipes } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiTags,
  ApiBody,
  ApiHeader,
} from '@nestjs/swagger';
import { TokensService } from './tokens.service';
import { CallResponseType } from '@dfmx-back/shared-lib/src/blockchain-gateway/registry/types/blockchain-gateway.registry.call-response';
import { DeployDto } from '@dfmx-back/shared-lib/src/blockchain-gateway/tokens/dto/blockchain-gateway.tokens.dto';
import { ModPost, AutoSignOwner, ChangeSendderAddressPipe, getTempWallets } from '../helpers/autoSign'
import { SendSignedTransactionType } from '@dfmx-back/shared-lib/src/blockchain-gateway/tx/types/blockchain-gateway.tx.send-signed-transaction';
const privateKeyToAddress = require('ethereum-private-key-to-address')

@ApiTags('tokens')
@Controller('tokens')
export class TokensController {
  constructor(
    private readonly tokensService: TokensService) {}
// -----------------------------------------------------------------------------------------------------------
  // @ModPost(
  //   DeployDto,
  //   CallResponseType,
  //   AutoSignOwner,
  //   'deploy-and-registration', 
  //   'Create new token and registration of the token'
  // )
  @Post('deploy-and-registration')
  @ApiBody({ type: DeployDto })
  @ApiCreatedResponse({
    description: 'Create new token and registration the token',
    type: DeployDto,
  })
  // @UsePipes(new ChangeSendderAddressPipe(privateKeyToAddress(Buffer.from(process.env.OWNER_PK, 'hex'))))
  @UsePipes(new ChangeSendderAddressPipe(getTempWallets().owner.address))
  deployAndRegistration(@Body() body: DeployDto): Promise<SendSignedTransactionType[]> {
    return this.tokensService.deployAndRegistration(body);
  }
// -----------------------------------------------------------------------------------------------------------
  @Post('deploy')
  @ApiBody({ type: DeployDto })
  @ApiCreatedResponse({
    description: 'Create new token',
    type: DeployDto,
  })
  // @ApiHeader({
  //   name: 'group_tx_id',
  //   description: 'Transaction group ID',
  // })
  deploy(@Body() body: DeployDto/*, @Headers() headers*/): Promise<CallResponseType> {
    return this.tokensService.deploy(
      body.tokenType,
      body.name,
      body.symbol,
      body.attrs,
      body.attrTypes,
      body.attrValues,
      body.senderAddress,
      // headers?.group_tx_id
      null
      );
  }
}