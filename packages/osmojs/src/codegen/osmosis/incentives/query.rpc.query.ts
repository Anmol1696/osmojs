import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, ModuleToDistributeCoinsResponseSDKType, ModuleDistributedCoinsRequest, ModuleDistributedCoinsResponse, ModuleDistributedCoinsResponseSDKType, GaugeByIDRequest, GaugeByIDResponse, GaugeByIDResponseSDKType, GaugesRequest, GaugesResponse, GaugesResponseSDKType, ActiveGaugesRequest, ActiveGaugesResponse, ActiveGaugesResponseSDKType, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, ActiveGaugesPerDenomResponseSDKType, UpcomingGaugesRequest, UpcomingGaugesResponse, UpcomingGaugesResponseSDKType, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse, UpcomingGaugesPerDenomResponseSDKType, RewardsEstRequest, RewardsEstResponse, RewardsEstResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  moduleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponseSDKType>;
  /*returns coins that is going to be distributed*/

  moduleDistributedCoins(request?: ModuleDistributedCoinsRequest): Promise<ModuleDistributedCoinsResponseSDKType>;
  /*returns coins that are distributed by module so far*/

  gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponseSDKType>;
  /*returns Gauge by id*/

  gauges(request?: GaugesRequest): Promise<GaugesResponseSDKType>;
  /*returns gauges both upcoming and active*/

  activeGauges(request?: ActiveGaugesRequest): Promise<ActiveGaugesResponseSDKType>;
  /*returns active gauges*/

  activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponseSDKType>;
  /*returns active gauges per denom*/

  upcomingGauges(request?: UpcomingGaugesRequest): Promise<UpcomingGaugesResponseSDKType>;
  /*returns scheduled gauges*/

  upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponseSDKType>;
  /*returns scheduled gauges per denom*/

  rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponseSDKType>;
  /*RewardsEst returns an estimate of the rewards at a future specific time.
  The querier either provides an address or a set of locks
  for which they want to find the associated rewards.*/

  lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponseSDKType>;
  /*returns lockable durations that are valid to give incentives*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.moduleToDistributeCoins = this.moduleToDistributeCoins.bind(this);
    this.moduleDistributedCoins = this.moduleDistributedCoins.bind(this);
    this.gaugeByID = this.gaugeByID.bind(this);
    this.gauges = this.gauges.bind(this);
    this.activeGauges = this.activeGauges.bind(this);
    this.activeGaugesPerDenom = this.activeGaugesPerDenom.bind(this);
    this.upcomingGauges = this.upcomingGauges.bind(this);
    this.upcomingGaugesPerDenom = this.upcomingGaugesPerDenom.bind(this);
    this.rewardsEst = this.rewardsEst.bind(this);
    this.lockableDurations = this.lockableDurations.bind(this);
  }

  moduleToDistributeCoins(request: ModuleToDistributeCoinsRequest = {}): Promise<ModuleToDistributeCoinsResponseSDKType> {
    const data = ModuleToDistributeCoinsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "ModuleToDistributeCoins", data);
    return promise.then(data => ModuleToDistributeCoinsResponse.decode(new _m0.Reader(data)));
  }

  moduleDistributedCoins(request: ModuleDistributedCoinsRequest = {}): Promise<ModuleDistributedCoinsResponseSDKType> {
    const data = ModuleDistributedCoinsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "ModuleDistributedCoins", data);
    return promise.then(data => ModuleDistributedCoinsResponse.decode(new _m0.Reader(data)));
  }

  gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponseSDKType> {
    const data = GaugeByIDRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "GaugeByID", data);
    return promise.then(data => GaugeByIDResponse.decode(new _m0.Reader(data)));
  }

  gauges(request: GaugesRequest = {
    pagination: undefined
  }): Promise<GaugesResponseSDKType> {
    const data = GaugesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "Gauges", data);
    return promise.then(data => GaugesResponse.decode(new _m0.Reader(data)));
  }

  activeGauges(request: ActiveGaugesRequest = {
    pagination: undefined
  }): Promise<ActiveGaugesResponseSDKType> {
    const data = ActiveGaugesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "ActiveGauges", data);
    return promise.then(data => ActiveGaugesResponse.decode(new _m0.Reader(data)));
  }

  activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponseSDKType> {
    const data = ActiveGaugesPerDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "ActiveGaugesPerDenom", data);
    return promise.then(data => ActiveGaugesPerDenomResponse.decode(new _m0.Reader(data)));
  }

  upcomingGauges(request: UpcomingGaugesRequest = {
    pagination: undefined
  }): Promise<UpcomingGaugesResponseSDKType> {
    const data = UpcomingGaugesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "UpcomingGauges", data);
    return promise.then(data => UpcomingGaugesResponse.decode(new _m0.Reader(data)));
  }

  upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponseSDKType> {
    const data = UpcomingGaugesPerDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "UpcomingGaugesPerDenom", data);
    return promise.then(data => UpcomingGaugesPerDenomResponse.decode(new _m0.Reader(data)));
  }

  rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponseSDKType> {
    const data = RewardsEstRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "RewardsEst", data);
    return promise.then(data => RewardsEstResponse.decode(new _m0.Reader(data)));
  }

  lockableDurations(request: QueryLockableDurationsRequest = {}): Promise<QueryLockableDurationsResponseSDKType> {
    const data = QueryLockableDurationsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "LockableDurations", data);
    return promise.then(data => QueryLockableDurationsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    moduleToDistributeCoins(request: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponseSDKType> {
      return queryService.moduleToDistributeCoins(request);
    },

    moduleDistributedCoins(request: ModuleDistributedCoinsRequest): Promise<ModuleDistributedCoinsResponseSDKType> {
      return queryService.moduleDistributedCoins(request);
    },

    gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponseSDKType> {
      return queryService.gaugeByID(request);
    },

    gauges(request: GaugesRequest): Promise<GaugesResponseSDKType> {
      return queryService.gauges(request);
    },

    activeGauges(request: ActiveGaugesRequest): Promise<ActiveGaugesResponseSDKType> {
      return queryService.activeGauges(request);
    },

    activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponseSDKType> {
      return queryService.activeGaugesPerDenom(request);
    },

    upcomingGauges(request: UpcomingGaugesRequest): Promise<UpcomingGaugesResponseSDKType> {
      return queryService.upcomingGauges(request);
    },

    upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponseSDKType> {
      return queryService.upcomingGaugesPerDenom(request);
    },

    rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponseSDKType> {
      return queryService.rewardsEst(request);
    },

    lockableDurations(request: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponseSDKType> {
      return queryService.lockableDurations(request);
    }

  };
};