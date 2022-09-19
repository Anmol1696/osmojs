import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Long } from "@osmonauts/helpers";
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */

export interface PoolParams {
  swapFee: string;
  exitFee: string;
}
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */

export interface PoolParamsSDKType {
  swapFee: string;
  exitFee: string;
}
/** Pool is the stableswap Pool struct */

export interface Pool {
  address: string;
  id: Long;
  poolParams: PoolParams;
  /**
   * This string specifies who will govern the pool in the future.
   * Valid forms of this are:
   * {token name},{duration}
   * {duration}
   * where {token name} if specified is the token which determines the
   * governor, and if not specified is the LP token for this pool.duration is
   * a time specified as 0w,1w,2w, etc. which specifies how long the token
   * would need to be locked up to count in governance. 0w means no lockup.
   */

  futurePoolGovernor: string;
  /** sum of all LP shares */

  totalShares: Coin;
  /** assets in the pool */

  poolLiquidity: Coin[];
  /** for calculation amognst assets with different precisions */

  scalingFactor: Long[];
  /** scaling_factor_governor is the address can adjust pool scaling factors */

  scalingFactorGovernor: string;
}
/** Pool is the stableswap Pool struct */

export interface PoolSDKType {
  address: string;
  id: Long;
  poolParams: PoolParamsSDKType;
  /**
   * This string specifies who will govern the pool in the future.
   * Valid forms of this are:
   * {token name},{duration}
   * {duration}
   * where {token name} if specified is the token which determines the
   * governor, and if not specified is the LP token for this pool.duration is
   * a time specified as 0w,1w,2w, etc. which specifies how long the token
   * would need to be locked up to count in governance. 0w means no lockup.
   */

  future_pool_governor: string;
  /** sum of all LP shares */

  totalShares: CoinSDKType;
  /** assets in the pool */

  poolLiquidity: CoinSDKType[];
  /** for calculation amognst assets with different precisions */

  scaling_factor: Long[];
  /** scaling_factor_governor is the address can adjust pool scaling factors */

  scaling_factor_governor: string;
}

function createBasePoolParams(): PoolParams {
  return {
    swapFee: "",
    exitFee: ""
  };
}

export const PoolParams = {
  encode(message: PoolParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapFee !== "") {
      writer.uint32(10).string(message.swapFee);
    }

    if (message.exitFee !== "") {
      writer.uint32(18).string(message.exitFee);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.swapFee = reader.string();
          break;

        case 2:
          message.exitFee = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PoolParams>): PoolParams {
    const message = createBasePoolParams();
    message.swapFee = object.swapFee ?? "";
    message.exitFee = object.exitFee ?? "";
    return message;
  },

  fromSDK(object: PoolParamsSDKType): PoolParams {
    return {
      swapFee: isSet(object.swapFee) ? object.swapFee : undefined,
      exitFee: isSet(object.exitFee) ? object.exitFee : undefined
    };
  },

  toSDK(message: PoolParams): PoolParamsSDKType {
    const obj: any = {};
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.exitFee !== undefined && (obj.exitFee = message.exitFee);
    return obj;
  }

};

function createBasePool(): Pool {
  return {
    address: "",
    id: Long.UZERO,
    poolParams: undefined,
    futurePoolGovernor: "",
    totalShares: undefined,
    poolLiquidity: [],
    scalingFactor: [],
    scalingFactorGovernor: ""
  };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(26).fork()).ldelim();
    }

    if (message.futurePoolGovernor !== "") {
      writer.uint32(34).string(message.futurePoolGovernor);
    }

    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.poolLiquidity) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    writer.uint32(58).fork();

    for (const v of message.scalingFactor) {
      writer.uint64(v);
    }

    writer.ldelim();

    if (message.scalingFactorGovernor !== "") {
      writer.uint32(66).string(message.scalingFactorGovernor);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        case 3:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;

        case 4:
          message.futurePoolGovernor = reader.string();
          break;

        case 5:
          message.totalShares = Coin.decode(reader, reader.uint32());
          break;

        case 6:
          message.poolLiquidity.push(Coin.decode(reader, reader.uint32()));
          break;

        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.scalingFactor.push((reader.uint64() as Long));
            }
          } else {
            message.scalingFactor.push((reader.uint64() as Long));
          }

          break;

        case 8:
          message.scalingFactorGovernor = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = createBasePool();
    message.address = object.address ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    message.futurePoolGovernor = object.futurePoolGovernor ?? "";
    message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? Coin.fromPartial(object.totalShares) : undefined;
    message.poolLiquidity = object.poolLiquidity?.map(e => Coin.fromPartial(e)) || [];
    message.scalingFactor = object.scalingFactor?.map(e => Long.fromValue(e)) || [];
    message.scalingFactorGovernor = object.scalingFactorGovernor ?? "";
    return message;
  },

  fromSDK(object: PoolSDKType): Pool {
    return {
      address: isSet(object.address) ? object.address : undefined,
      id: isSet(object.id) ? object.id : undefined,
      poolParams: isSet(object.poolParams) ? PoolParams.fromSDK(object.poolParams) : undefined,
      futurePoolGovernor: isSet(object.future_pool_governor) ? object.future_pool_governor : undefined,
      totalShares: isSet(object.totalShares) ? Coin.fromSDK(object.totalShares) : undefined,
      poolLiquidity: Array.isArray(object?.poolLiquidity) ? object.poolLiquidity.map((e: any) => Coin.fromSDK(e)) : [],
      scalingFactor: Array.isArray(object?.scaling_factor) ? object.scaling_factor.map((e: any) => e) : [],
      scalingFactorGovernor: isSet(object.scaling_factor_governor) ? object.scaling_factor_governor : undefined
    };
  },

  toSDK(message: Pool): PoolSDKType {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.id !== undefined && (obj.id = message.id);
    message.poolParams !== undefined && (obj.poolParams = message.poolParams ? PoolParams.toSDK(message.poolParams) : undefined);
    message.futurePoolGovernor !== undefined && (obj.future_pool_governor = message.futurePoolGovernor);
    message.totalShares !== undefined && (obj.totalShares = message.totalShares ? Coin.toSDK(message.totalShares) : undefined);

    if (message.poolLiquidity) {
      obj.poolLiquidity = message.poolLiquidity.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.poolLiquidity = [];
    }

    if (message.scalingFactor) {
      obj.scaling_factor = message.scalingFactor.map(e => e);
    } else {
      obj.scaling_factor = [];
    }

    message.scalingFactorGovernor !== undefined && (obj.scaling_factor_governor = message.scalingFactorGovernor);
    return obj;
  }

};