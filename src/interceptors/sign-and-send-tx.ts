import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TxService } from '../tx/tx.service';

@Injectable()
export class SignAndSendTxInterceptor implements NestInterceptor {
  constructor(private readonly txService: TxService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const http = context.switchToHttp();
    const request = http.getRequest();
    // const headers = request.headers;
    return next.handle().pipe(tap(() => console.log(request.method)));
  }
}
