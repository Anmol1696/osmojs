import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { SuperfluidAssetType, SuperfluidAsset, OsmoEquivalentMultiplierRecord, SuperfluidDelegationRecord } from "./superfluid";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock } from "../lockup/lock";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, AssetTypeRequest, AssetTypeResponse, AllAssetsRequest, AllAssetsResponse, AssetMultiplierRequest, AssetMultiplierResponse, AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse } from "./query";
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

  /* Params returns the total set of minting parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `osmosis/superfluid/v1beta1/params`;
    return await this.get<QueryParamsResponse>(endpoint);
  }

  /* Returns superfluid asset type */
  async assetType(params: AssetTypeRequest): Promise<AssetTypeResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/asset_type`;
    return await this.get<AssetTypeResponse>(endpoint, options);
  }

  /* Returns all superfluid asset types */
  async allAssets(_params: AllAssetsRequest = {}): Promise<AllAssetsResponse> {
    const endpoint = `osmosis/superfluid/v1beta1/all_assets`;
    return await this.get<AllAssetsResponse>(endpoint);
  }

  /* Returns superfluid asset Multiplier */
  async assetMultiplier(params: AssetMultiplierRequest): Promise<AssetMultiplierResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/asset_multiplier`;
    return await this.get<AssetMultiplierResponse>(endpoint, options);
  }

  /* Returns all superfluid intermediary account */
  async allIntermediaryAccounts(params: AllIntermediaryAccountsRequest = {
    pagination: undefined
  }): Promise<AllIntermediaryAccountsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `osmosis/superfluid/v1beta1/all_intermediary_accounts`;
    return await this.get<AllIntermediaryAccountsResponse>(endpoint, options);
  }

  /* Returns intermediary account connected to a superfluid staked lock by id */
  async connectedIntermediaryAccount(params: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponse> {
    const endpoint = `osmosis/superfluid/v1beta1/connected_intermediary_account/${params.lock_id}`;
    return await this.get<ConnectedIntermediaryAccountResponse>(endpoint);
  }

  /* Returns the total amount of osmo superfluidly staked
  response denominated in uosmo */
  async totalSuperfluidDelegations(_params: TotalSuperfluidDelegationsRequest = {}): Promise<TotalSuperfluidDelegationsResponse> {
    const endpoint = `osmosis/superfluid/v1beta1/all_superfluid_delegations`;
    return await this.get<TotalSuperfluidDelegationsResponse>(endpoint);
  }

  /* Returns the coins superfluid delegated for a delegator, validator, denom
  triplet */
  async superfluidDelegationAmount(params: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.delegator_address !== "undefined") {
      options.params.delegator_address = params.delegator_address;
    }

    if (typeof params?.validator_address !== "undefined") {
      options.params.validator_address = params.validator_address;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegation_amount`;
    return await this.get<SuperfluidDelegationAmountResponse>(endpoint, options);
  }

  /* Returns all the superfluid poistions for a specific delegator */
  async superfluidDelegationsByDelegator(params: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponse> {
    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegations/${params.delegator_address}`;
    return await this.get<SuperfluidDelegationsByDelegatorResponse>(endpoint);
  }

  /* SuperfluidUndelegationsByDelegator */
  async superfluidUndelegationsByDelegator(params: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/superfluid_undelegations_by_delegator/${params.delegator_address}`;
    return await this.get<SuperfluidUndelegationsByDelegatorResponse>(endpoint, options);
  }

  /* Returns all the superfluid positions of a specific denom delegated to one
  validator */
  async superfluidDelegationsByValidatorDenom(params: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.validator_address !== "undefined") {
      options.params.validator_address = params.validator_address;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegations_by_validator_denom`;
    return await this.get<SuperfluidDelegationsByValidatorDenomResponse>(endpoint, options);
  }

  /* Returns the amount of a specific denom delegated to a specific validator
  This is labeled an estimate, because the way it calculates the amount can
  lead rounding errors from the true delegated amount */
  async estimateSuperfluidDelegatedAmountByValidatorDenom(params: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.validator_address !== "undefined") {
      options.params.validator_address = params.validator_address;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/estimate_superfluid_delegation_amount_by_validator_denom`;
    return await this.get<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>(endpoint, options);
  }

}