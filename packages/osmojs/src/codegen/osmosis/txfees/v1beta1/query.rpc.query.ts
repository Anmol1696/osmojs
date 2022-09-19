import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryFeeTokensResponseSDKType, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryDenomSpotPriceResponseSDKType, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryDenomPoolIdResponseSDKType, QueryBaseDenomRequest, QueryBaseDenomResponse, QueryBaseDenomResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  feeTokens(request: QueryFeeTokensRequest): Promise<QueryFeeTokensResponseSDKType>;
  /*FeeTokens returns a list of all the whitelisted fee tokens and their
  corresponding pools It does not include the BaseDenom, which has its own
  query endpoint*/

  denomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponseSDKType>;
  /*null*/

  denomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponseSDKType>;
  /*null*/

  baseDenom(request: QueryBaseDenomRequest): Promise<QueryBaseDenomResponseSDKType>;
  /*null*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.feeTokens = this.feeTokens.bind(this);
    this.denomSpotPrice = this.denomSpotPrice.bind(this);
    this.denomPoolId = this.denomPoolId.bind(this);
    this.baseDenom = this.baseDenom.bind(this);
  }

  feeTokens(request: QueryFeeTokensRequest = {}): Promise<QueryFeeTokensResponseSDKType> {
    const data = QueryFeeTokensRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "FeeTokens", data);
    return promise.then(data => QueryFeeTokensResponse.decode(new _m0.Reader(data)));
  }

  denomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponseSDKType> {
    const data = QueryDenomSpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "DenomSpotPrice", data);
    return promise.then(data => QueryDenomSpotPriceResponse.decode(new _m0.Reader(data)));
  }

  denomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponseSDKType> {
    const data = QueryDenomPoolIdRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "DenomPoolId", data);
    return promise.then(data => QueryDenomPoolIdResponse.decode(new _m0.Reader(data)));
  }

  baseDenom(request: QueryBaseDenomRequest = {}): Promise<QueryBaseDenomResponseSDKType> {
    const data = QueryBaseDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "BaseDenom", data);
    return promise.then(data => QueryBaseDenomResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    feeTokens(request: QueryFeeTokensRequest): Promise<QueryFeeTokensResponseSDKType> {
      return queryService.feeTokens(request);
    },

    denomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponseSDKType> {
      return queryService.denomSpotPrice(request);
    },

    denomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponseSDKType> {
      return queryService.denomPoolId(request);
    },

    baseDenom(request: QueryBaseDenomRequest): Promise<QueryBaseDenomResponseSDKType> {
      return queryService.baseDenom(request);
    }

  };
};