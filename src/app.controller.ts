import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@ApiTags('app')
@Controller()
export class AppController {

  constructor(
    // @InjectPinoLogger(AppController.name)
    // private readonly logger: PinoLogger
  ) {}

  @ApiOperation({
    summary: "Test API (GET)",
    description: "Test api for checking swagger",
  })
  @Get('/app')
  async getInvite() {
    // this.logger.info(`App test method`);
    return `App test method`;
  }
}
