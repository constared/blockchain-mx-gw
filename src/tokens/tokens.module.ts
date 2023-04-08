import { Module } from '@nestjs/common';
import { TokensController } from './tokens.controller';
import { TokensService } from './tokens.service';
import { TxService } from '../tx/tx.service';
import { RegistryService } from '../registry/registry.service';

@Module({
  controllers: [TokensController],
  providers: [TokensService, TxService, RegistryService]
})
export class TokensModule {}
