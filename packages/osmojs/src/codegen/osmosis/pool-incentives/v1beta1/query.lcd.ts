import { LCDClient } from "@osmonauts/lcd";
import { QueryGaugeIdsRequest, QueryGaugeIdsResponseSDKType, QueryDistrInfoRequest, QueryDistrInfoResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsResponseSDKType, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponseSDKType, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.gaugeIds = this.gaugeIds.bind(this);
    this.distrInfo = this.distrInfo.bind(this);
    this.params = this.params.bind(this);
    this.lockableDurations = this.lockableDurations.bind(this);
    this.incentivizedPools = this.incentivizedPools.bind(this);
    this.externalIncentiveGauges = this.externalIncentiveGauges.bind(this);
  }
  /* GaugeIds takes the pool id and returns the matching gauge ids and durations */


  async gaugeIds(params: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponseSDKType> {
    const endpoint = `osmosis/pool-incentives/v1beta1/gauge-ids/${params.poolId}`;
    return await this.req.get<QueryGaugeIdsResponseSDKType>(endpoint);
  }
  /* DistrInfo */


  async distrInfo(_params: QueryDistrInfoRequest = {}): Promise<QueryDistrInfoResponseSDKType> {
    const endpoint = `osmosis/pool-incentives/v1beta1/distr_info`;
    return await this.req.get<QueryDistrInfoResponseSDKType>(endpoint);
  }
  /* Params */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `osmosis/pool-incentives/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* LockableDurations */


  async lockableDurations(_params: QueryLockableDurationsRequest = {}): Promise<QueryLockableDurationsResponseSDKType> {
    const endpoint = `osmosis/pool-incentives/v1beta1/lockable_durations`;
    return await this.req.get<QueryLockableDurationsResponseSDKType>(endpoint);
  }
  /* IncentivizedPools */


  async incentivizedPools(_params: QueryIncentivizedPoolsRequest = {}): Promise<QueryIncentivizedPoolsResponseSDKType> {
    const endpoint = `osmosis/pool-incentives/v1beta1/incentivized_pools`;
    return await this.req.get<QueryIncentivizedPoolsResponseSDKType>(endpoint);
  }
  /* ExternalIncentiveGauges */


  async externalIncentiveGauges(_params: QueryExternalIncentiveGaugesRequest = {}): Promise<QueryExternalIncentiveGaugesResponseSDKType> {
    const endpoint = `osmosis/pool-incentives/v1beta1/external_incentive_gauges`;
    return await this.req.get<QueryExternalIncentiveGaugesResponseSDKType>(endpoint);
  }

}