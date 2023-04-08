import { Module } from '@nestjs/common';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';
import { TxService } from '../tx/tx.service'

@Module({
  controllers: [ApplicationsController],
  providers: [ApplicationsService, TxService]
})
export class ApplicationsModule {}
