import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryPoolsRequest, QueryPoolsResponseSDKType, QueryNumPoolsRequest, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityResponseSDKType, QueryPoolRequest, QueryPoolResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceResponseSDKType, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponseSDKType, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponseSDKType } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }
  /* Pools */


  async pools(params: QueryPoolsRequest = {
    pagination: undefined
  }): Promise<QueryPoolsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `osmosis/gamm/v1beta1/pools`;
    return await this.get<QueryPoolsResponseSDKType>(endpoint, options);
  }
  /* NumPools */


  async numPools(_params: QueryNumPoolsRequest = {}): Promise<QueryNumPoolsResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/num_pools`;
    return await this.get<QueryNumPoolsResponseSDKType>(endpoint);
  }
  /* TotalLiquidity */


  async totalLiquidity(_params: QueryTotalLiquidityRequest = {}): Promise<QueryTotalLiquidityResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/total_liquidity`;
    return await this.get<QueryTotalLiquidityResponseSDKType>(endpoint);
  }
  /* Per Pool gRPC Endpoints */


  async pool(params: QueryPoolRequest): Promise<QueryPoolResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}`;
    return await this.get<QueryPoolResponseSDKType>(endpoint);
  }
  /* PoolParams */


  async poolParams(params: QueryPoolParamsRequest): Promise<QueryPoolParamsResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/params`;
    return await this.get<QueryPoolParamsResponseSDKType>(endpoint);
  }
  /* TotalPoolLiquidity */


  async totalPoolLiquidity(params: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/total_pool_liquidity`;
    return await this.get<QueryTotalPoolLiquidityResponseSDKType>(endpoint);
  }
  /* TotalShares */


  async totalShares(params: QueryTotalSharesRequest): Promise<QueryTotalSharesResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/total_shares`;
    return await this.get<QueryTotalSharesResponseSDKType>(endpoint);
  }
  /* SpotPrice defines a gRPC query handler that returns the spot price given
  a base denomination and a quote denomination. */


  async spotPrice(params: QuerySpotPriceRequest): Promise<QuerySpotPriceResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.baseAssetDenom !== "undefined") {
      options.params.base_asset_denom = params.baseAssetDenom;
    }

    if (typeof params?.quoteAssetDenom !== "undefined") {
      options.params.quote_asset_denom = params.quoteAssetDenom;
    }

    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/prices`;
    return await this.get<QuerySpotPriceResponseSDKType>(endpoint, options);
  }
  /* Estimate the swap. */


  async estimateSwapExactAmountIn(params: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.sender !== "undefined") {
      options.params.sender = params.sender;
    }

    if (typeof params?.tokenIn !== "undefined") {
      options.params.tokenIn = params.tokenIn;
    }

    if (typeof params?.routes !== "undefined") {
      options.params.routes = params.routes;
    }

    const endpoint = `osmosis/gamm/v1beta1/${params.poolId}/estimate/swap_exact_amount_in`;
    return await this.get<QuerySwapExactAmountInResponseSDKType>(endpoint, options);
  }
  /* EstimateSwapExactAmountOut */


  async estimateSwapExactAmountOut(params: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.sender !== "undefined") {
      options.params.sender = params.sender;
    }

    if (typeof params?.routes !== "undefined") {
      options.params.routes = params.routes;
    }

    if (typeof params?.tokenOut !== "undefined") {
      options.params.tokenOut = params.tokenOut;
    }

    const endpoint = `osmosis/gamm/v1beta1/${params.poolId}/estimate/swap_exact_amount_out`;
    return await this.get<QuerySwapExactAmountOutResponseSDKType>(endpoint, options);
  }

}