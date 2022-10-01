import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGaugeIdsRequest, QueryGaugeIdsResponse, QueryDistrInfoRequest, QueryDistrInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse } from "./query";
/** Query defines the RPC service */

export interface Query {
  gaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponse>;
  /*GaugeIds takes the pool id and returns the matching gauge ids and durations*/

  distrInfo(request?: QueryDistrInfoRequest): Promise<QueryDistrInfoResponse>;
  /*DistrInfo returns the pool's matching gauge ids and weights.*/

  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Params returns pool incentives params.*/

  lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
  /*LockableDurations returns lock durations for pools.*/

  incentivizedPools(request?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse>;
  /*IncentivizedPools returns currently incentivized pools*/

  externalIncentiveGauges(request?: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponse>;
  /*ExternalIncentiveGauges returns external incentive gauges.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.gaugeIds = this.gaugeIds.bind(this);
    this.distrInfo = this.distrInfo.bind(this);
    this.params = this.params.bind(this);
    this.lockableDurations = this.lockableDurations.bind(this);
    this.incentivizedPools = this.incentivizedPools.bind(this);
    this.externalIncentiveGauges = this.externalIncentiveGauges.bind(this);
  }

  gaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponse> {
    const data = QueryGaugeIdsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "GaugeIds", data);
    return promise.then(data => QueryGaugeIdsResponse.decode(new _m0.Reader(data)));
  }

  distrInfo(request: QueryDistrInfoRequest = {}): Promise<QueryDistrInfoResponse> {
    const data = QueryDistrInfoRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "DistrInfo", data);
    return promise.then(data => QueryDistrInfoResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  lockableDurations(request: QueryLockableDurationsRequest = {}): Promise<QueryLockableDurationsResponse> {
    const data = QueryLockableDurationsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "LockableDurations", data);
    return promise.then(data => QueryLockableDurationsResponse.decode(new _m0.Reader(data)));
  }

  incentivizedPools(request: QueryIncentivizedPoolsRequest = {}): Promise<QueryIncentivizedPoolsResponse> {
    const data = QueryIncentivizedPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "IncentivizedPools", data);
    return promise.then(data => QueryIncentivizedPoolsResponse.decode(new _m0.Reader(data)));
  }

  externalIncentiveGauges(request: QueryExternalIncentiveGaugesRequest = {}): Promise<QueryExternalIncentiveGaugesResponse> {
    const data = QueryExternalIncentiveGaugesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "ExternalIncentiveGauges", data);
    return promise.then(data => QueryExternalIncentiveGaugesResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    gaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponse> {
      return queryService.gaugeIds(request);
    },

    distrInfo(request?: QueryDistrInfoRequest): Promise<QueryDistrInfoResponse> {
      return queryService.distrInfo(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse> {
      return queryService.lockableDurations(request);
    },

    incentivizedPools(request?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse> {
      return queryService.incentivizedPools(request);
    },

    externalIncentiveGauges(request?: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponse> {
      return queryService.externalIncentiveGauges(request);
    }

  };
};