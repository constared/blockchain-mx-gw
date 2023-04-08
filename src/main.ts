import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
// import { Logger } from 'nestjs-pino';
import { initializeSwaggerFor } from 'swagger';
import { AppModule } from './app.module';
// import { TransactionBatchInterceptor } from './interceptors/transaction-batch';

(async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  // app.useLogger(app.get(Logger));
  app.enableShutdownHooks();
  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalInterceptors(new TransactionBatchInterceptor()););
  // app.useLogger(app.get(Logger));
  initializeSwaggerFor(app);

  await app.listen(3000);
})();
