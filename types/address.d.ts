import { Network } from './networks';
export interface Base58DCheckResult {
    hash: Buffer;
    version: number;
}
export interface Bech32Result {
    version: number;
    prefix: string;
    data: Buffer;
}
export declare function fromBase58DCheck(address: string): Base58DCheckResult;
export declare function fromBech32(address: string): Bech32Result;
export declare function toBase58DCheck(hash: Buffer, version: number): string;
export declare function toBech32(data: Buffer, version: number, prefix: string): string;
export declare function fromOutputScript(output: Buffer, network?: Network): string;
export declare function toOutputScript(address: string, network?: Network): Buffer;
