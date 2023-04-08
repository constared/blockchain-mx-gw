import { CacheModule, Module } from '@nestjs/common';
// import { LoggerModule } from 'nestjs-pino';
import { routes } from 'routes';
import { RouterModule } from 'nest-router';
import { AppController } from '@app/app.controller';
// import { InfraModule } from './infra/infra.module';
import { RegistryModule } from './registry/registry.module';
import { ApplicationsModule } from './applications/applications.module';
import { TxModule } from './tx/tx.module';
import { TokensModule } from './tokens/tokens.module';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      ttl: 200,
      max: 1000,
    }),
    RouterModule.forRoutes(routes),
    // LoggerModule.forRoot(),
    // InfraModule,
    RegistryModule,
    ApplicationsModule,
    TxModule,
    TokensModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
