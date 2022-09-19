import { FeeToken, FeeTokenSDKType } from "./feetoken";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Long } from "@osmonauts/helpers";
export interface QueryFeeTokensRequest {}
export interface QueryFeeTokensRequestSDKType {}
export interface QueryFeeTokensResponse {
  feeTokens: FeeToken[];
}
export interface QueryFeeTokensResponseSDKType {
  fee_tokens: FeeTokenSDKType[];
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */

export interface QueryDenomSpotPriceRequest {
  denom?: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */

export interface QueryDenomSpotPriceRequestSDKType {
  denom?: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */

export interface QueryDenomSpotPriceResponse {
  poolID: Long;
  spotPrice: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */

export interface QueryDenomSpotPriceResponseSDKType {
  poolID: Long;
  spot_price: string;
}
export interface QueryDenomPoolIdRequest {
  denom: string;
}
export interface QueryDenomPoolIdRequestSDKType {
  denom: string;
}
export interface QueryDenomPoolIdResponse {
  poolID: Long;
}
export interface QueryDenomPoolIdResponseSDKType {
  poolID: Long;
}
export interface QueryBaseDenomRequest {}
export interface QueryBaseDenomRequestSDKType {}
export interface QueryBaseDenomResponse {
  baseDenom: string;
}
export interface QueryBaseDenomResponseSDKType {
  base_denom: string;
}

function createBaseQueryFeeTokensRequest(): QueryFeeTokensRequest {
  return {};
}

export const QueryFeeTokensRequest = {
  encode(_: QueryFeeTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeTokensRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryFeeTokensRequest>): QueryFeeTokensRequest {
    const message = createBaseQueryFeeTokensRequest();
    return message;
  },

  fromSDK(_: QueryFeeTokensRequestSDKType): QueryFeeTokensRequest {
    return {};
  },

  toSDK(_: QueryFeeTokensRequest): QueryFeeTokensRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryFeeTokensResponse(): QueryFeeTokensResponse {
  return {
    feeTokens: []
  };
}

export const QueryFeeTokensResponse = {
  encode(message: QueryFeeTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeTokens) {
      FeeToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeTokensResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeTokensResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feeTokens.push(FeeToken.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryFeeTokensResponse>): QueryFeeTokensResponse {
    const message = createBaseQueryFeeTokensResponse();
    message.feeTokens = object.feeTokens?.map(e => FeeToken.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: QueryFeeTokensResponseSDKType): QueryFeeTokensResponse {
    return {
      feeTokens: Array.isArray(object?.fee_tokens) ? object.fee_tokens.map((e: any) => FeeToken.fromSDK(e)) : []
    };
  },

  toSDK(message: QueryFeeTokensResponse): QueryFeeTokensResponseSDKType {
    const obj: any = {};

    if (message.feeTokens) {
      obj.fee_tokens = message.feeTokens.map(e => e ? FeeToken.toSDK(e) : undefined);
    } else {
      obj.fee_tokens = [];
    }

    return obj;
  }

};

function createBaseQueryDenomSpotPriceRequest(): QueryDenomSpotPriceRequest {
  return {
    denom: ""
  };
}

export const QueryDenomSpotPriceRequest = {
  encode(message: QueryDenomSpotPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomSpotPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomSpotPriceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDenomSpotPriceRequest>): QueryDenomSpotPriceRequest {
    const message = createBaseQueryDenomSpotPriceRequest();
    message.denom = object.denom ?? "";
    return message;
  },

  fromSDK(object: QueryDenomSpotPriceRequestSDKType): QueryDenomSpotPriceRequest {
    return {
      denom: isSet(object.denom) ? object.denom : undefined
    };
  },

  toSDK(message: QueryDenomSpotPriceRequest): QueryDenomSpotPriceRequestSDKType {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  }

};

function createBaseQueryDenomSpotPriceResponse(): QueryDenomSpotPriceResponse {
  return {
    poolID: Long.UZERO,
    spotPrice: ""
  };
}

export const QueryDenomSpotPriceResponse = {
  encode(message: QueryDenomSpotPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolID.isZero()) {
      writer.uint32(8).uint64(message.poolID);
    }

    if (message.spotPrice !== "") {
      writer.uint32(18).string(message.spotPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomSpotPriceResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomSpotPriceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolID = (reader.uint64() as Long);
          break;

        case 2:
          message.spotPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDenomSpotPriceResponse>): QueryDenomSpotPriceResponse {
    const message = createBaseQueryDenomSpotPriceResponse();
    message.poolID = object.poolID !== undefined && object.poolID !== null ? Long.fromValue(object.poolID) : Long.UZERO;
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },

  fromSDK(object: QueryDenomSpotPriceResponseSDKType): QueryDenomSpotPriceResponse {
    return {
      poolID: isSet(object.poolID) ? object.poolID : undefined,
      spotPrice: isSet(object.spot_price) ? object.spot_price : undefined
    };
  },

  toSDK(message: QueryDenomSpotPriceResponse): QueryDenomSpotPriceResponseSDKType {
    const obj: any = {};
    message.poolID !== undefined && (obj.poolID = message.poolID);
    message.spotPrice !== undefined && (obj.spot_price = message.spotPrice);
    return obj;
  }

};

function createBaseQueryDenomPoolIdRequest(): QueryDenomPoolIdRequest {
  return {
    denom: ""
  };
}

export const QueryDenomPoolIdRequest = {
  encode(message: QueryDenomPoolIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomPoolIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomPoolIdRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDenomPoolIdRequest>): QueryDenomPoolIdRequest {
    const message = createBaseQueryDenomPoolIdRequest();
    message.denom = object.denom ?? "";
    return message;
  },

  fromSDK(object: QueryDenomPoolIdRequestSDKType): QueryDenomPoolIdRequest {
    return {
      denom: isSet(object.denom) ? object.denom : undefined
    };
  },

  toSDK(message: QueryDenomPoolIdRequest): QueryDenomPoolIdRequestSDKType {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  }

};

function createBaseQueryDenomPoolIdResponse(): QueryDenomPoolIdResponse {
  return {
    poolID: Long.UZERO
  };
}

export const QueryDenomPoolIdResponse = {
  encode(message: QueryDenomPoolIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolID.isZero()) {
      writer.uint32(8).uint64(message.poolID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomPoolIdResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomPoolIdResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolID = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDenomPoolIdResponse>): QueryDenomPoolIdResponse {
    const message = createBaseQueryDenomPoolIdResponse();
    message.poolID = object.poolID !== undefined && object.poolID !== null ? Long.fromValue(object.poolID) : Long.UZERO;
    return message;
  },

  fromSDK(object: QueryDenomPoolIdResponseSDKType): QueryDenomPoolIdResponse {
    return {
      poolID: isSet(object.poolID) ? object.poolID : undefined
    };
  },

  toSDK(message: QueryDenomPoolIdResponse): QueryDenomPoolIdResponseSDKType {
    const obj: any = {};
    message.poolID !== undefined && (obj.poolID = message.poolID);
    return obj;
  }

};

function createBaseQueryBaseDenomRequest(): QueryBaseDenomRequest {
  return {};
}

export const QueryBaseDenomRequest = {
  encode(_: QueryBaseDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryBaseDenomRequest>): QueryBaseDenomRequest {
    const message = createBaseQueryBaseDenomRequest();
    return message;
  },

  fromSDK(_: QueryBaseDenomRequestSDKType): QueryBaseDenomRequest {
    return {};
  },

  toSDK(_: QueryBaseDenomRequest): QueryBaseDenomRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryBaseDenomResponse(): QueryBaseDenomResponse {
  return {
    baseDenom: ""
  };
}

export const QueryBaseDenomResponse = {
  encode(message: QueryBaseDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseDenomResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBaseDenomResponse>): QueryBaseDenomResponse {
    const message = createBaseQueryBaseDenomResponse();
    message.baseDenom = object.baseDenom ?? "";
    return message;
  },

  fromSDK(object: QueryBaseDenomResponseSDKType): QueryBaseDenomResponse {
    return {
      baseDenom: isSet(object.base_denom) ? object.base_denom : undefined
    };
  },

  toSDK(message: QueryBaseDenomResponse): QueryBaseDenomResponseSDKType {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.base_denom = message.baseDenom);
    return obj;
  }

};