import {
  PipeTransform,
  ArgumentMetadata,
  Injectable, 
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Type,
  applyDecorators,
  UseInterceptors,
  Post,
  UsePipes
} from '@nestjs/common';
import { TxService } from '../tx/tx.service'
import { Observable, iif, of } from 'rxjs';
import { mergeMap, take, tap } from 'rxjs/operators';
import { SignTxDto } from '@dfmx-back/shared-lib/src/blockchain-gateway/tx/dto/blockchain-gateway.tx.dto';
import { SendSignedTransactionType, SignTransactionType } from '@dfmx-back/shared-lib/src/blockchain-gateway/tx/types/blockchain-gateway.tx.send-signed-transaction';
import { SendTxDto } from '@dfmx-back/shared-lib/src/blockchain-gateway/tx/dto/blockchain-gateway.tx.dto';
import { ApiBody, ApiCreatedResponse, ApiHeader } from '@nestjs/swagger';
const wallets = require('../temp_wallets/wallets_5777')

export function getTempWallets() {
  return {
    owner: wallets[0],
    others: wallets.slice(1)
  }
}

const selector = (srv, next, context, pk) => {
  const body = context.switchToHttp().getRequest().body;
  const ppk = [getTempWallets().owner,...getTempWallets().others].filter(i => body.senderAddress == i.address)[0]?.private_key;
  console.log(ppk)
  return next.handle().pipe(
    mergeMap(i => iif(() => context.switchToHttp().getRequest().headers['autosign'],
      of(i).pipe(
        // tap(i => console.log(i)),
        mergeMap((j: SignTxDto) => srv.signTransaction([j], ppk|| pk || getTempWallets().owner.private_key)),
        mergeMap((j: SignTransactionType[]) => srv.sendSignedTransaction(j)),
        take(1)
      ),
      of(i).pipe(
        // tap(i => console.log(i)),
        take(1)
      ))
    )
  )
}

@Injectable()
export class ChangeSendderAddressPipe implements PipeTransform {
  constructor (private address: string) {}
  transform(value: any, metadata: ArgumentMetadata) {
    if(metadata.type === 'body') {
        const { senderAddress, ...othes } = value;
        if(senderAddress) {
          return value
        } else {
          return { senderAddress: this.address, ...othes }
        }
    } else {
      return value
    }
  }
}

@Injectable()
export class AutoSignOwner implements NestInterceptor {
  constructor(private readonly txService: TxService) {
  }
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return selector(this.txService, next, context, getTempWallets().owner.private_key)
  }
}

@Injectable()
export class AutoSignStorekeeper implements NestInterceptor {
  constructor(private readonly txService: TxService) {
  }
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return selector(this.txService, next, context, null)
  }
}

@Injectable()
export class AutoSignSupplier implements NestInterceptor {
  constructor(private readonly txService: TxService) {
  }
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return selector(this.txService, next, context, getTempWallets().owner.private_key)
  }
}

export const ModPost = <T extends Type<any>, K extends Type<any>, I extends Type<any>>(inType: T, outType: K, interceptor: I, uri: string, desc: string) => {
  return applyDecorators(
    Post(uri),
    UsePipes(new ChangeSendderAddressPipe(getTempWallets().owner.address)),
    ApiBody({ type: inType }),
    ApiCreatedResponse({
      description: desc,
      type: outType,
    }),
    ApiHeader({
      name: 'autosign',
      description: 'autosign flag (for dev only)',
    }),
    UseInterceptors(interceptor)
  );
}


// type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
// type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
// type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;

// const Role = (role: string): MethodDecorator | ClassDecorator => (...args) => {
//   if (typeof args[0] === 'function') {
//     // Получение конструктора
//     const ctor = args[0]
//     // Получение прототипа
//     const proto = ctor.prototype
//     // Получение методов
//     const methods = Object
//       .getOwnPropertyNames(proto)
//       .filter(prop => prop !== 'constructor')

//     // Обход и декорирование методов
//     methods.forEach((propName) => {
//       RoleMethodDecorator(
//         proto,
//         propName,
//         Object.getOwnPropertyDescriptor(proto, propName),
//         role,
//       )
//     })
//   } else {
//     const [proto, propName, descriptor] = args
//     RoleMethodDecorator(proto, propName, descriptor, role)
//   }
// }
// ////////
// import { HttpException, HttpStatus, Headers, Req } from "@nestjs/common";
// import { Request } from 'express';

// function AutoSign(target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;
//     descriptor.value = async function (this: any, ...args: any[]) {
//         try {
//             const result = await originalMethod.apply(this, args);
//             return {
//                 status: 'OK',
//                 statusCode: 200,
//                 response: result,
//                 isError: false
//             }
//         } catch(e) {
//             throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
//         }
//     }
// }
