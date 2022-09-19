import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryPoolsRequest, QueryPoolsResponse, QueryPoolsResponseSDKType, QueryNumPoolsRequest, QueryNumPoolsResponse, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityResponse, QueryTotalLiquidityResponseSDKType, QueryPoolRequest, QueryPoolResponse, QueryPoolResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsResponse, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, QueryTotalSharesResponse, QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceResponse, QuerySpotPriceResponseSDKType, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse, QuerySwapExactAmountInResponseSDKType, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse, QuerySwapExactAmountOutResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  pools(request: QueryPoolsRequest): Promise<QueryPoolsResponseSDKType>;
  /*null*/

  numPools(request: QueryNumPoolsRequest): Promise<QueryNumPoolsResponseSDKType>;
  /*null*/

  totalLiquidity(request: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponseSDKType>;
  /*null*/

  pool(request: QueryPoolRequest): Promise<QueryPoolResponseSDKType>;
  /*Per Pool gRPC Endpoints*/

  poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponseSDKType>;
  /*null*/

  totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponseSDKType>;
  /*null*/

  totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponseSDKType>;
  /*null*/

  spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponseSDKType>;
  /*SpotPrice defines a gRPC query handler that returns the spot price given
  a base denomination and a quote denomination.*/

  estimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponseSDKType>;
  /*Estimate the swap.*/

  estimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponseSDKType>;
  /*null*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.pools = this.pools.bind(this);
    this.numPools = this.numPools.bind(this);
    this.totalLiquidity = this.totalLiquidity.bind(this);
    this.pool = this.pool.bind(this);
    this.poolParams = this.poolParams.bind(this);
    this.totalPoolLiquidity = this.totalPoolLiquidity.bind(this);
    this.totalShares = this.totalShares.bind(this);
    this.spotPrice = this.spotPrice.bind(this);
    this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
    this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
  }

  pools(request: QueryPoolsRequest): Promise<QueryPoolsResponseSDKType> {
    const data = QueryPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "Pools", data);
    return promise.then(data => QueryPoolsResponse.decode(new _m0.Reader(data)));
  }

  numPools(request: QueryNumPoolsRequest): Promise<QueryNumPoolsResponseSDKType> {
    const data = QueryNumPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "NumPools", data);
    return promise.then(data => QueryNumPoolsResponse.decode(new _m0.Reader(data)));
  }

  totalLiquidity(request: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponseSDKType> {
    const data = QueryTotalLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "TotalLiquidity", data);
    return promise.then(data => QueryTotalLiquidityResponse.decode(new _m0.Reader(data)));
  }

  pool(request: QueryPoolRequest): Promise<QueryPoolResponseSDKType> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "Pool", data);
    return promise.then(data => QueryPoolResponse.decode(new _m0.Reader(data)));
  }

  poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponseSDKType> {
    const data = QueryPoolParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "PoolParams", data);
    return promise.then(data => QueryPoolParamsResponse.decode(new _m0.Reader(data)));
  }

  totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponseSDKType> {
    const data = QueryTotalPoolLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "TotalPoolLiquidity", data);
    return promise.then(data => QueryTotalPoolLiquidityResponse.decode(new _m0.Reader(data)));
  }

  totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponseSDKType> {
    const data = QueryTotalSharesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "TotalShares", data);
    return promise.then(data => QueryTotalSharesResponse.decode(new _m0.Reader(data)));
  }

  spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponseSDKType> {
    const data = QuerySpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "SpotPrice", data);
    return promise.then(data => QuerySpotPriceResponse.decode(new _m0.Reader(data)));
  }

  estimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponseSDKType> {
    const data = QuerySwapExactAmountInRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "EstimateSwapExactAmountIn", data);
    return promise.then(data => QuerySwapExactAmountInResponse.decode(new _m0.Reader(data)));
  }

  estimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponseSDKType> {
    const data = QuerySwapExactAmountOutRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "EstimateSwapExactAmountOut", data);
    return promise.then(data => QuerySwapExactAmountOutResponse.decode(new _m0.Reader(data)));
  }

}