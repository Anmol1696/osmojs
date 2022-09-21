import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, AssetTypeRequest, AssetTypeResponseSDKType, AllAssetsRequest, AllAssetsResponseSDKType, AssetMultiplierRequest, AssetMultiplierResponseSDKType, AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponseSDKType, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponseSDKType, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponseSDKType, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponseSDKType, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponseSDKType, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponseSDKType, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponseSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.assetType = this.assetType.bind(this);
    this.allAssets = this.allAssets.bind(this);
    this.assetMultiplier = this.assetMultiplier.bind(this);
    this.allIntermediaryAccounts = this.allIntermediaryAccounts.bind(this);
    this.connectedIntermediaryAccount = this.connectedIntermediaryAccount.bind(this);
    this.totalSuperfluidDelegations = this.totalSuperfluidDelegations.bind(this);
    this.superfluidDelegationAmount = this.superfluidDelegationAmount.bind(this);
    this.superfluidDelegationsByDelegator = this.superfluidDelegationsByDelegator.bind(this);
    this.superfluidUndelegationsByDelegator = this.superfluidUndelegationsByDelegator.bind(this);
    this.superfluidDelegationsByValidatorDenom = this.superfluidDelegationsByValidatorDenom.bind(this);
    this.estimateSuperfluidDelegatedAmountByValidatorDenom = this.estimateSuperfluidDelegatedAmountByValidatorDenom.bind(this);
  }
  /* Params returns the total set of minting parameters. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `osmosis/superfluid/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Returns superfluid asset type */


  async assetType(params: AssetTypeRequest): Promise<AssetTypeResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/asset_type`;
    return await this.req.get<AssetTypeResponseSDKType>(endpoint, options);
  }
  /* Returns all superfluid asset types */


  async allAssets(_params: AllAssetsRequest = {}): Promise<AllAssetsResponseSDKType> {
    const endpoint = `osmosis/superfluid/v1beta1/all_assets`;
    return await this.req.get<AllAssetsResponseSDKType>(endpoint);
  }
  /* Returns superfluid asset Multiplier */


  async assetMultiplier(params: AssetMultiplierRequest): Promise<AssetMultiplierResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/asset_multiplier`;
    return await this.req.get<AssetMultiplierResponseSDKType>(endpoint, options);
  }
  /* Returns all superfluid intermediary account */


  async allIntermediaryAccounts(params: AllIntermediaryAccountsRequest = {
    pagination: undefined
  }): Promise<AllIntermediaryAccountsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `osmosis/superfluid/v1beta1/all_intermediary_accounts`;
    return await this.req.get<AllIntermediaryAccountsResponseSDKType>(endpoint, options);
  }
  /* Returns intermediary account connected to a superfluid staked lock by id */


  async connectedIntermediaryAccount(params: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponseSDKType> {
    const endpoint = `osmosis/superfluid/v1beta1/connected_intermediary_account/${params.lockId}`;
    return await this.req.get<ConnectedIntermediaryAccountResponseSDKType>(endpoint);
  }
  /* Returns the total amount of osmo superfluidly staked
  response denominated in uosmo */


  async totalSuperfluidDelegations(_params: TotalSuperfluidDelegationsRequest = {}): Promise<TotalSuperfluidDelegationsResponseSDKType> {
    const endpoint = `osmosis/superfluid/v1beta1/all_superfluid_delegations`;
    return await this.req.get<TotalSuperfluidDelegationsResponseSDKType>(endpoint);
  }
  /* Returns the coins superfluid delegated for a delegator, validator, denom
  triplet */


  async superfluidDelegationAmount(params: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.delegatorAddress !== "undefined") {
      options.params.delegator_address = params.delegatorAddress;
    }

    if (typeof params?.validatorAddress !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegation_amount`;
    return await this.req.get<SuperfluidDelegationAmountResponseSDKType>(endpoint, options);
  }
  /* Returns all the superfluid poistions for a specific delegator */


  async superfluidDelegationsByDelegator(params: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponseSDKType> {
    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegations/${params.delegatorAddress}`;
    return await this.req.get<SuperfluidDelegationsByDelegatorResponseSDKType>(endpoint);
  }
  /* SuperfluidUndelegationsByDelegator */


  async superfluidUndelegationsByDelegator(params: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/superfluid_undelegations_by_delegator/${params.delegatorAddress}`;
    return await this.req.get<SuperfluidUndelegationsByDelegatorResponseSDKType>(endpoint, options);
  }
  /* Returns all the superfluid positions of a specific denom delegated to one
  validator */


  async superfluidDelegationsByValidatorDenom(params: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.validatorAddress !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegations_by_validator_denom`;
    return await this.req.get<SuperfluidDelegationsByValidatorDenomResponseSDKType>(endpoint, options);
  }
  /* Returns the amount of a specific denom delegated to a specific validator
  This is labeled an estimate, because the way it calculates the amount can
  lead rounding errors from the true delegated amount */


  async estimateSuperfluidDelegatedAmountByValidatorDenom(params: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.validatorAddress !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/estimate_superfluid_delegation_amount_by_validator_denom`;
    return await this.req.get<EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType>(endpoint, options);
  }

}