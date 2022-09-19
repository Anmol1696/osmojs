import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Validator, ValidatorSDKType, DelegationResponse, DelegationResponseSDKType, UnbondingDelegation, UnbondingDelegationSDKType, RedelegationResponse, RedelegationResponseSDKType, HistoricalInfo, HistoricalInfoSDKType, Pool, PoolSDKType, Params, ParamsSDKType } from "./staking";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Long } from "@osmonauts/helpers";
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */

export interface QueryValidatorsRequest {
  /** status enables to query for validators matching a given status. */
  status?: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */

export interface QueryValidatorsRequestSDKType {
  /** status enables to query for validators matching a given status. */
  status?: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */

export interface QueryValidatorsResponse {
  /** validators contains all the queried validators. */
  validators: Validator[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */

export interface QueryValidatorsResponseSDKType {
  /** validators contains all the queried validators. */
  validators: ValidatorSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */

export interface QueryValidatorRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */

export interface QueryValidatorRequestSDKType {
  /** validator_addr defines the validator address to query for. */
  validator_addr: string;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */

export interface QueryValidatorResponse {
  /** validator defines the the validator info. */
  validator: Validator;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */

export interface QueryValidatorResponseSDKType {
  /** validator defines the the validator info. */
  validator: ValidatorSDKType;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */

export interface QueryValidatorDelegationsRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */

export interface QueryValidatorDelegationsRequestSDKType {
  /** validator_addr defines the validator address to query for. */
  validator_addr: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */

export interface QueryValidatorDelegationsResponse {
  delegationResponses: DelegationResponse[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */

export interface QueryValidatorDelegationsResponseSDKType {
  delegation_responses: DelegationResponseSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */

export interface QueryValidatorUnbondingDelegationsRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */

export interface QueryValidatorUnbondingDelegationsRequestSDKType {
  /** validator_addr defines the validator address to query for. */
  validator_addr: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */

export interface QueryValidatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */

export interface QueryValidatorUnbondingDelegationsResponseSDKType {
  unbonding_responses: UnbondingDelegationSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */

export interface QueryDelegationRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */

  validatorAddr: string;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */

export interface QueryDelegationRequestSDKType {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** validator_addr defines the validator address to query for. */

  validator_addr: string;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */

export interface QueryDelegationResponse {
  /** delegation_responses defines the delegation info of a delegation. */
  delegationResponse: DelegationResponse;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */

export interface QueryDelegationResponseSDKType {
  /** delegation_responses defines the delegation info of a delegation. */
  delegation_response: DelegationResponseSDKType;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */

export interface QueryUnbondingDelegationRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */

  validatorAddr: string;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */

export interface QueryUnbondingDelegationRequestSDKType {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** validator_addr defines the validator address to query for. */

  validator_addr: string;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */

export interface QueryUnbondingDelegationResponse {
  /** unbond defines the unbonding information of a delegation. */
  unbond: UnbondingDelegation;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */

export interface QueryUnbondingDelegationResponseSDKType {
  /** unbond defines the unbonding information of a delegation. */
  unbond: UnbondingDelegationSDKType;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */

export interface QueryDelegatorDelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */

export interface QueryDelegatorDelegationsRequestSDKType {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */

export interface QueryDelegatorDelegationsResponse {
  /** delegation_responses defines all the delegations' info of a delegator. */
  delegationResponses: DelegationResponse[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */

export interface QueryDelegatorDelegationsResponseSDKType {
  /** delegation_responses defines all the delegations' info of a delegator. */
  delegation_responses: DelegationResponseSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */

export interface QueryDelegatorUnbondingDelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */

export interface QueryDelegatorUnbondingDelegationsRequestSDKType {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */

export interface QueryDelegatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */

export interface QueryDelegatorUnbondingDelegationsResponseSDKType {
  unbonding_responses: UnbondingDelegationSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */

export interface QueryRedelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** src_validator_addr defines the validator address to redelegate from. */

  srcValidatorAddr?: string;
  /** dst_validator_addr defines the validator address to redelegate to. */

  dstValidatorAddr?: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */

export interface QueryRedelegationsRequestSDKType {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** src_validator_addr defines the validator address to redelegate from. */

  src_validator_addr?: string;
  /** dst_validator_addr defines the validator address to redelegate to. */

  dst_validator_addr?: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */

export interface QueryRedelegationsResponse {
  redelegationResponses: RedelegationResponse[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */

export interface QueryRedelegationsResponseSDKType {
  redelegation_responses: RedelegationResponseSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */

export interface QueryDelegatorValidatorsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */

export interface QueryDelegatorValidatorsRequestSDKType {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */

export interface QueryDelegatorValidatorsResponse {
  /** validators defines the the validators' info of a delegator. */
  validators: Validator[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */

export interface QueryDelegatorValidatorsResponseSDKType {
  /** validators defines the the validators' info of a delegator. */
  validators: ValidatorSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */

export interface QueryDelegatorValidatorRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */

  validatorAddr: string;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */

export interface QueryDelegatorValidatorRequestSDKType {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** validator_addr defines the validator address to query for. */

  validator_addr: string;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */

export interface QueryDelegatorValidatorResponse {
  /** validator defines the the validator info. */
  validator: Validator;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */

export interface QueryDelegatorValidatorResponseSDKType {
  /** validator defines the the validator info. */
  validator: ValidatorSDKType;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */

export interface QueryHistoricalInfoRequest {
  /** height defines at which height to query the historical info. */
  height: Long;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */

export interface QueryHistoricalInfoRequestSDKType {
  /** height defines at which height to query the historical info. */
  height: Long;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */

export interface QueryHistoricalInfoResponse {
  /** hist defines the historical info at the given height. */
  hist: HistoricalInfo;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */

export interface QueryHistoricalInfoResponseSDKType {
  /** hist defines the historical info at the given height. */
  hist: HistoricalInfoSDKType;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */

export interface QueryPoolRequest {}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */

export interface QueryPoolRequestSDKType {}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */

export interface QueryPoolResponse {
  /** pool defines the pool info. */
  pool: Pool;
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */

export interface QueryPoolResponseSDKType {
  /** pool defines the pool info. */
  pool: PoolSDKType;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  /** params holds all the parameters of this module. */
  params: ParamsSDKType;
}

function createBaseQueryValidatorsRequest(): QueryValidatorsRequest {
  return {
    status: "",
    pagination: undefined
  };
}

export const QueryValidatorsRequest = {
  encode(message: QueryValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryValidatorsRequest>): QueryValidatorsRequest {
    const message = createBaseQueryValidatorsRequest();
    message.status = object.status ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryValidatorsRequestSDKType): QueryValidatorsRequest {
    return {
      status: isSet(object.status) ? object.status : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryValidatorsRequest): QueryValidatorsRequestSDKType {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryValidatorsResponse(): QueryValidatorsResponse {
  return {
    validators: [],
    pagination: undefined
  };
}

export const QueryValidatorsResponse = {
  encode(message: QueryValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryValidatorsResponse>): QueryValidatorsResponse {
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryValidatorsResponseSDKType): QueryValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromSDK(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryValidatorsResponse): QueryValidatorsResponseSDKType {
    const obj: any = {};

    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toSDK(e) : undefined);
    } else {
      obj.validators = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryValidatorRequest(): QueryValidatorRequest {
  return {
    validatorAddr: ""
  };
}

export const QueryValidatorRequest = {
  encode(message: QueryValidatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryValidatorRequest>): QueryValidatorRequest {
    const message = createBaseQueryValidatorRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },

  fromSDK(object: QueryValidatorRequestSDKType): QueryValidatorRequest {
    return {
      validatorAddr: isSet(object.validator_addr) ? object.validator_addr : undefined
    };
  },

  toSDK(message: QueryValidatorRequest): QueryValidatorRequestSDKType {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validator_addr = message.validatorAddr);
    return obj;
  }

};

function createBaseQueryValidatorResponse(): QueryValidatorResponse {
  return {
    validator: undefined
  };
}

export const QueryValidatorResponse = {
  encode(message: QueryValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryValidatorResponse>): QueryValidatorResponse {
    const message = createBaseQueryValidatorResponse();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    return message;
  },

  fromSDK(object: QueryValidatorResponseSDKType): QueryValidatorResponse {
    return {
      validator: isSet(object.validator) ? Validator.fromSDK(object.validator) : undefined
    };
  },

  toSDK(message: QueryValidatorResponse): QueryValidatorResponseSDKType {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator ? Validator.toSDK(message.validator) : undefined);
    return obj;
  }

};

function createBaseQueryValidatorDelegationsRequest(): QueryValidatorDelegationsRequest {
  return {
    validatorAddr: "",
    pagination: undefined
  };
}

export const QueryValidatorDelegationsRequest = {
  encode(message: QueryValidatorDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryValidatorDelegationsRequest>): QueryValidatorDelegationsRequest {
    const message = createBaseQueryValidatorDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryValidatorDelegationsRequestSDKType): QueryValidatorDelegationsRequest {
    return {
      validatorAddr: isSet(object.validator_addr) ? object.validator_addr : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryValidatorDelegationsRequest): QueryValidatorDelegationsRequestSDKType {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validator_addr = message.validatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryValidatorDelegationsResponse(): QueryValidatorDelegationsResponse {
  return {
    delegationResponses: [],
    pagination: undefined
  };
}

export const QueryValidatorDelegationsResponse = {
  encode(message: QueryValidatorDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDelegationsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryValidatorDelegationsResponse>): QueryValidatorDelegationsResponse {
    const message = createBaseQueryValidatorDelegationsResponse();
    message.delegationResponses = object.delegationResponses?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryValidatorDelegationsResponseSDKType): QueryValidatorDelegationsResponse {
    return {
      delegationResponses: Array.isArray(object?.delegation_responses) ? object.delegation_responses.map((e: any) => DelegationResponse.fromSDK(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryValidatorDelegationsResponse): QueryValidatorDelegationsResponseSDKType {
    const obj: any = {};

    if (message.delegationResponses) {
      obj.delegation_responses = message.delegationResponses.map(e => e ? DelegationResponse.toSDK(e) : undefined);
    } else {
      obj.delegation_responses = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryValidatorUnbondingDelegationsRequest(): QueryValidatorUnbondingDelegationsRequest {
  return {
    validatorAddr: "",
    pagination: undefined
  };
}

export const QueryValidatorUnbondingDelegationsRequest = {
  encode(message: QueryValidatorUnbondingDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryValidatorUnbondingDelegationsRequest>): QueryValidatorUnbondingDelegationsRequest {
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryValidatorUnbondingDelegationsRequestSDKType): QueryValidatorUnbondingDelegationsRequest {
    return {
      validatorAddr: isSet(object.validator_addr) ? object.validator_addr : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryValidatorUnbondingDelegationsRequest): QueryValidatorUnbondingDelegationsRequestSDKType {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validator_addr = message.validatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryValidatorUnbondingDelegationsResponse(): QueryValidatorUnbondingDelegationsResponse {
  return {
    unbondingResponses: [],
    pagination: undefined
  };
}

export const QueryValidatorUnbondingDelegationsResponse = {
  encode(message: QueryValidatorUnbondingDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryValidatorUnbondingDelegationsResponse>): QueryValidatorUnbondingDelegationsResponse {
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbondingResponses?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryValidatorUnbondingDelegationsResponseSDKType): QueryValidatorUnbondingDelegationsResponse {
    return {
      unbondingResponses: Array.isArray(object?.unbonding_responses) ? object.unbonding_responses.map((e: any) => UnbondingDelegation.fromSDK(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryValidatorUnbondingDelegationsResponse): QueryValidatorUnbondingDelegationsResponseSDKType {
    const obj: any = {};

    if (message.unbondingResponses) {
      obj.unbonding_responses = message.unbondingResponses.map(e => e ? UnbondingDelegation.toSDK(e) : undefined);
    } else {
      obj.unbonding_responses = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryDelegationRequest(): QueryDelegationRequest {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}

export const QueryDelegationRequest = {
  encode(message: QueryDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }

    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;

        case 2:
          message.validatorAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDelegationRequest>): QueryDelegationRequest {
    const message = createBaseQueryDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },

  fromSDK(object: QueryDelegationRequestSDKType): QueryDelegationRequest {
    return {
      delegatorAddr: isSet(object.delegator_addr) ? object.delegator_addr : undefined,
      validatorAddr: isSet(object.validator_addr) ? object.validator_addr : undefined
    };
  },

  toSDK(message: QueryDelegationRequest): QueryDelegationRequestSDKType {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegator_addr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validator_addr = message.validatorAddr);
    return obj;
  }

};

function createBaseQueryDelegationResponse(): QueryDelegationResponse {
  return {
    delegationResponse: undefined
  };
}

export const QueryDelegationResponse = {
  encode(message: QueryDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegationResponse !== undefined) {
      DelegationResponse.encode(message.delegationResponse, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegationResponse = DelegationResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDelegationResponse>): QueryDelegationResponse {
    const message = createBaseQueryDelegationResponse();
    message.delegationResponse = object.delegationResponse !== undefined && object.delegationResponse !== null ? DelegationResponse.fromPartial(object.delegationResponse) : undefined;
    return message;
  },

  fromSDK(object: QueryDelegationResponseSDKType): QueryDelegationResponse {
    return {
      delegationResponse: isSet(object.delegation_response) ? DelegationResponse.fromSDK(object.delegation_response) : undefined
    };
  },

  toSDK(message: QueryDelegationResponse): QueryDelegationResponseSDKType {
    const obj: any = {};
    message.delegationResponse !== undefined && (obj.delegation_response = message.delegationResponse ? DelegationResponse.toSDK(message.delegationResponse) : undefined);
    return obj;
  }

};

function createBaseQueryUnbondingDelegationRequest(): QueryUnbondingDelegationRequest {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}

export const QueryUnbondingDelegationRequest = {
  encode(message: QueryUnbondingDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }

    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;

        case 2:
          message.validatorAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryUnbondingDelegationRequest>): QueryUnbondingDelegationRequest {
    const message = createBaseQueryUnbondingDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },

  fromSDK(object: QueryUnbondingDelegationRequestSDKType): QueryUnbondingDelegationRequest {
    return {
      delegatorAddr: isSet(object.delegator_addr) ? object.delegator_addr : undefined,
      validatorAddr: isSet(object.validator_addr) ? object.validator_addr : undefined
    };
  },

  toSDK(message: QueryUnbondingDelegationRequest): QueryUnbondingDelegationRequestSDKType {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegator_addr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validator_addr = message.validatorAddr);
    return obj;
  }

};

function createBaseQueryUnbondingDelegationResponse(): QueryUnbondingDelegationResponse {
  return {
    unbond: undefined
  };
}

export const QueryUnbondingDelegationResponse = {
  encode(message: QueryUnbondingDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unbond !== undefined) {
      UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingDelegationResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.unbond = UnbondingDelegation.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryUnbondingDelegationResponse>): QueryUnbondingDelegationResponse {
    const message = createBaseQueryUnbondingDelegationResponse();
    message.unbond = object.unbond !== undefined && object.unbond !== null ? UnbondingDelegation.fromPartial(object.unbond) : undefined;
    return message;
  },

  fromSDK(object: QueryUnbondingDelegationResponseSDKType): QueryUnbondingDelegationResponse {
    return {
      unbond: isSet(object.unbond) ? UnbondingDelegation.fromSDK(object.unbond) : undefined
    };
  },

  toSDK(message: QueryUnbondingDelegationResponse): QueryUnbondingDelegationResponseSDKType {
    const obj: any = {};
    message.unbond !== undefined && (obj.unbond = message.unbond ? UnbondingDelegation.toSDK(message.unbond) : undefined);
    return obj;
  }

};

function createBaseQueryDelegatorDelegationsRequest(): QueryDelegatorDelegationsRequest {
  return {
    delegatorAddr: "",
    pagination: undefined
  };
}

export const QueryDelegatorDelegationsRequest = {
  encode(message: QueryDelegatorDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDelegatorDelegationsRequest>): QueryDelegatorDelegationsRequest {
    const message = createBaseQueryDelegatorDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryDelegatorDelegationsRequestSDKType): QueryDelegatorDelegationsRequest {
    return {
      delegatorAddr: isSet(object.delegator_addr) ? object.delegator_addr : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryDelegatorDelegationsRequest): QueryDelegatorDelegationsRequestSDKType {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegator_addr = message.delegatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryDelegatorDelegationsResponse(): QueryDelegatorDelegationsResponse {
  return {
    delegationResponses: [],
    pagination: undefined
  };
}

export const QueryDelegatorDelegationsResponse = {
  encode(message: QueryDelegatorDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorDelegationsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDelegatorDelegationsResponse>): QueryDelegatorDelegationsResponse {
    const message = createBaseQueryDelegatorDelegationsResponse();
    message.delegationResponses = object.delegationResponses?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryDelegatorDelegationsResponseSDKType): QueryDelegatorDelegationsResponse {
    return {
      delegationResponses: Array.isArray(object?.delegation_responses) ? object.delegation_responses.map((e: any) => DelegationResponse.fromSDK(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryDelegatorDelegationsResponse): QueryDelegatorDelegationsResponseSDKType {
    const obj: any = {};

    if (message.delegationResponses) {
      obj.delegation_responses = message.delegationResponses.map(e => e ? DelegationResponse.toSDK(e) : undefined);
    } else {
      obj.delegation_responses = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryDelegatorUnbondingDelegationsRequest(): QueryDelegatorUnbondingDelegationsRequest {
  return {
    delegatorAddr: "",
    pagination: undefined
  };
}

export const QueryDelegatorUnbondingDelegationsRequest = {
  encode(message: QueryDelegatorUnbondingDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>): QueryDelegatorUnbondingDelegationsRequest {
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryDelegatorUnbondingDelegationsRequestSDKType): QueryDelegatorUnbondingDelegationsRequest {
    return {
      delegatorAddr: isSet(object.delegator_addr) ? object.delegator_addr : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryDelegatorUnbondingDelegationsRequest): QueryDelegatorUnbondingDelegationsRequestSDKType {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegator_addr = message.delegatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryDelegatorUnbondingDelegationsResponse(): QueryDelegatorUnbondingDelegationsResponse {
  return {
    unbondingResponses: [],
    pagination: undefined
  };
}

export const QueryDelegatorUnbondingDelegationsResponse = {
  encode(message: QueryDelegatorUnbondingDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDelegatorUnbondingDelegationsResponse>): QueryDelegatorUnbondingDelegationsResponse {
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbondingResponses?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryDelegatorUnbondingDelegationsResponseSDKType): QueryDelegatorUnbondingDelegationsResponse {
    return {
      unbondingResponses: Array.isArray(object?.unbonding_responses) ? object.unbonding_responses.map((e: any) => UnbondingDelegation.fromSDK(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryDelegatorUnbondingDelegationsResponse): QueryDelegatorUnbondingDelegationsResponseSDKType {
    const obj: any = {};

    if (message.unbondingResponses) {
      obj.unbonding_responses = message.unbondingResponses.map(e => e ? UnbondingDelegation.toSDK(e) : undefined);
    } else {
      obj.unbonding_responses = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryRedelegationsRequest(): QueryRedelegationsRequest {
  return {
    delegatorAddr: "",
    srcValidatorAddr: "",
    dstValidatorAddr: "",
    pagination: undefined
  };
}

export const QueryRedelegationsRequest = {
  encode(message: QueryRedelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }

    if (message.srcValidatorAddr !== "") {
      writer.uint32(18).string(message.srcValidatorAddr);
    }

    if (message.dstValidatorAddr !== "") {
      writer.uint32(26).string(message.dstValidatorAddr);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;

        case 2:
          message.srcValidatorAddr = reader.string();
          break;

        case 3:
          message.dstValidatorAddr = reader.string();
          break;

        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRedelegationsRequest>): QueryRedelegationsRequest {
    const message = createBaseQueryRedelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.srcValidatorAddr = object.srcValidatorAddr ?? "";
    message.dstValidatorAddr = object.dstValidatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryRedelegationsRequestSDKType): QueryRedelegationsRequest {
    return {
      delegatorAddr: isSet(object.delegator_addr) ? object.delegator_addr : undefined,
      srcValidatorAddr: isSet(object.src_validator_addr) ? object.src_validator_addr : undefined,
      dstValidatorAddr: isSet(object.dst_validator_addr) ? object.dst_validator_addr : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryRedelegationsRequest): QueryRedelegationsRequestSDKType {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegator_addr = message.delegatorAddr);
    message.srcValidatorAddr !== undefined && (obj.src_validator_addr = message.srcValidatorAddr);
    message.dstValidatorAddr !== undefined && (obj.dst_validator_addr = message.dstValidatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryRedelegationsResponse(): QueryRedelegationsResponse {
  return {
    redelegationResponses: [],
    pagination: undefined
  };
}

export const QueryRedelegationsResponse = {
  encode(message: QueryRedelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.redelegationResponses) {
      RedelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedelegationsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.redelegationResponses.push(RedelegationResponse.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRedelegationsResponse>): QueryRedelegationsResponse {
    const message = createBaseQueryRedelegationsResponse();
    message.redelegationResponses = object.redelegationResponses?.map(e => RedelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryRedelegationsResponseSDKType): QueryRedelegationsResponse {
    return {
      redelegationResponses: Array.isArray(object?.redelegation_responses) ? object.redelegation_responses.map((e: any) => RedelegationResponse.fromSDK(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryRedelegationsResponse): QueryRedelegationsResponseSDKType {
    const obj: any = {};

    if (message.redelegationResponses) {
      obj.redelegation_responses = message.redelegationResponses.map(e => e ? RedelegationResponse.toSDK(e) : undefined);
    } else {
      obj.redelegation_responses = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
  return {
    delegatorAddr: "",
    pagination: undefined
  };
}

export const QueryDelegatorValidatorsRequest = {
  encode(message: QueryDelegatorValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryDelegatorValidatorsRequestSDKType): QueryDelegatorValidatorsRequest {
    return {
      delegatorAddr: isSet(object.delegator_addr) ? object.delegator_addr : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestSDKType {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegator_addr = message.delegatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
  return {
    validators: [],
    pagination: undefined
  };
}

export const QueryDelegatorValidatorsResponse = {
  encode(message: QueryDelegatorValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryDelegatorValidatorsResponseSDKType): QueryDelegatorValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromSDK(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseSDKType {
    const obj: any = {};

    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toSDK(e) : undefined);
    } else {
      obj.validators = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryDelegatorValidatorRequest(): QueryDelegatorValidatorRequest {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}

export const QueryDelegatorValidatorRequest = {
  encode(message: QueryDelegatorValidatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }

    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;

        case 2:
          message.validatorAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDelegatorValidatorRequest>): QueryDelegatorValidatorRequest {
    const message = createBaseQueryDelegatorValidatorRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },

  fromSDK(object: QueryDelegatorValidatorRequestSDKType): QueryDelegatorValidatorRequest {
    return {
      delegatorAddr: isSet(object.delegator_addr) ? object.delegator_addr : undefined,
      validatorAddr: isSet(object.validator_addr) ? object.validator_addr : undefined
    };
  },

  toSDK(message: QueryDelegatorValidatorRequest): QueryDelegatorValidatorRequestSDKType {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegator_addr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validator_addr = message.validatorAddr);
    return obj;
  }

};

function createBaseQueryDelegatorValidatorResponse(): QueryDelegatorValidatorResponse {
  return {
    validator: undefined
  };
}

export const QueryDelegatorValidatorResponse = {
  encode(message: QueryDelegatorValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDelegatorValidatorResponse>): QueryDelegatorValidatorResponse {
    const message = createBaseQueryDelegatorValidatorResponse();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    return message;
  },

  fromSDK(object: QueryDelegatorValidatorResponseSDKType): QueryDelegatorValidatorResponse {
    return {
      validator: isSet(object.validator) ? Validator.fromSDK(object.validator) : undefined
    };
  },

  toSDK(message: QueryDelegatorValidatorResponse): QueryDelegatorValidatorResponseSDKType {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator ? Validator.toSDK(message.validator) : undefined);
    return obj;
  }

};

function createBaseQueryHistoricalInfoRequest(): QueryHistoricalInfoRequest {
  return {
    height: Long.ZERO
  };
}

export const QueryHistoricalInfoRequest = {
  encode(message: QueryHistoricalInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryHistoricalInfoRequest>): QueryHistoricalInfoRequest {
    const message = createBaseQueryHistoricalInfoRequest();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  },

  fromSDK(object: QueryHistoricalInfoRequestSDKType): QueryHistoricalInfoRequest {
    return {
      height: isSet(object.height) ? object.height : undefined
    };
  },

  toSDK(message: QueryHistoricalInfoRequest): QueryHistoricalInfoRequestSDKType {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    return obj;
  }

};

function createBaseQueryHistoricalInfoResponse(): QueryHistoricalInfoResponse {
  return {
    hist: undefined
  };
}

export const QueryHistoricalInfoResponse = {
  encode(message: QueryHistoricalInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hist !== undefined) {
      HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalInfoResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hist = HistoricalInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryHistoricalInfoResponse>): QueryHistoricalInfoResponse {
    const message = createBaseQueryHistoricalInfoResponse();
    message.hist = object.hist !== undefined && object.hist !== null ? HistoricalInfo.fromPartial(object.hist) : undefined;
    return message;
  },

  fromSDK(object: QueryHistoricalInfoResponseSDKType): QueryHistoricalInfoResponse {
    return {
      hist: isSet(object.hist) ? HistoricalInfo.fromSDK(object.hist) : undefined
    };
  },

  toSDK(message: QueryHistoricalInfoResponse): QueryHistoricalInfoResponseSDKType {
    const obj: any = {};
    message.hist !== undefined && (obj.hist = message.hist ? HistoricalInfo.toSDK(message.hist) : undefined);
    return obj;
  }

};

function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {};
}

export const QueryPoolRequest = {
  encode(_: QueryPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();

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

  fromPartial(_: DeepPartial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    return message;
  },

  fromSDK(_: QueryPoolRequestSDKType): QueryPoolRequest {
    return {};
  },

  toSDK(_: QueryPoolRequest): QueryPoolRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: undefined
  };
}

export const QueryPoolResponse = {
  encode(message: QueryPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },

  fromSDK(object: QueryPoolResponseSDKType): QueryPoolResponse {
    return {
      pool: isSet(object.pool) ? Pool.fromSDK(object.pool) : undefined
    };
  },

  toSDK(message: QueryPoolResponse): QueryPoolResponseSDKType {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toSDK(message.pool) : undefined);
    return obj;
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },

  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },

  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },

  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromSDK(object.params) : undefined
    };
  },

  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  }

};