import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from 'class-validator';

export enum errorEnum {
    USER_ERROR,
    SERVER_ERROR
}

export class CallResponseType {
    estimateGas: number;
    gasPrice: string;
    txParams: {
        gas: number;
        to: string;
        data: string;
        from: string;
        nonce: string;
    }
}

export class ErrorType {
    @ApiProperty()
    errMsg: string;

    @ApiProperty()
    errCode: number;

    @ApiProperty()
    errStack: string;

    @ApiProperty()
    errorType: errorEnum;
}

export class BaseResponse<T> {
    @ApiProperty()
    status: string;

    @ApiProperty()
    statusCode: number;

    @ApiProperty()
    response: T|ErrorType;

    @ApiProperty()
    isError: boolean;
}

export class TokenRegistryInfoType {
    @ApiProperty()
    symbol: string;

    @ApiProperty()
    address: string;

    @ApiProperty()
    contractTypeName: string;

    @ApiProperty()
    isDeprecated: boolean;
}

export class ApplicationDetailType {
    @ApiProperty()
    clientAddress: string;

    @ApiProperty()
    symbol: string;

    @ApiProperty()
    amount: number;

    @ApiProperty()
    status: number;
}

export class AddDelSupplierDto {
    @ApiProperty()
    @IsNotEmpty()
    readonly supplier_address: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly sender_address: string;
}

export class ChangeOwnerDto {
    @ApiProperty()
    @IsNotEmpty()
    readonly new_owner_address: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly sender_address: string;
}