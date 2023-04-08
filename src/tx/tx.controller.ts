import { TxService } from './tx.service';
import { Controller, Post, Body, Get, Query, Headers } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiBody,
  ApiHeader,
  ApiTags,
} from '@nestjs/swagger';
import {
  SendTxDto,
  SignTxDto,
} from '@dfmx-back/shared-lib/src/blockchain-gateway/tx/dto/blockchain-gateway.tx.dto';
import {
  SendSignedTransactionType,
  SignTransactionType,
} from '@dfmx-back/shared-lib/src/blockchain-gateway/tx/types/blockchain-gateway.tx.send-signed-transaction';
import { v4 as uuidv4 } from 'uuid';
@ApiTags('tx')
@Controller('tx')
export class TxController {
  constructor(private readonly txService: TxService) {}
// -----------------------------------------------------------------------------------------------------------
  @Post('send-transaction')
  @ApiBody({ type: [SendTxDto] })
  @ApiCreatedResponse({
    description: 'send transactions',
    type: [SendTxDto],
  })
  sendSignedTransaction(
    @Body() body: SendTxDto[],
  ): Promise<SendSignedTransactionType[]> {
    return this.txService.sendSignedTransaction(body);
  }
// -----------------------------------------------------------------------------------------------------------
  @Post('sign-transaction')
  @ApiBody({ type: [SignTxDto] })
  @ApiHeader({
    name: 'private_key',
    description: 'Private key of sender',
  })
  @ApiCreatedResponse({
    description: 'sign transactions (not secure, for dev mode only!!!)',
    type: [SignTxDto],
  })
  signTransaction(
    @Body() body: SignTxDto[],
    @Headers() headers,
  ): Promise<SignTransactionType[]> {
    return this.txService.signTransaction(body, headers.private_key);
  }
// -----------------------------------------------------------------------------------------------------------
  @Get('uuid4')
  @ApiCreatedResponse({
    description: 'get uuid4',
    type: String,
  })
  getUuid4(): string {
    return uuidv4();
  }
// -----------------------------------------------------------------------------------------------------------
  @Get('increaseNonce')
  @ApiCreatedResponse({
    description: 'test',
    type: String,
  })
  increaseNonce(@Query('groupId') groupId: string): Promise<string> {
    return this.txService.increaseNonce(groupId);
  }
}
