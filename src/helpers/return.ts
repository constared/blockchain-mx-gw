import { HttpException, HttpStatus } from '@nestjs/common';
import { MultiCallResponseType } from '@dfmx-back/shared-lib/src/blockchain-gateway/registry/types/blockchain-gateway.registry.call-response';

export function Return(target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (this: any, ...args: any[]) {
        try {
            const result = await originalMethod.apply(this, args);
            return { result }
        } catch(e) {
            throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}