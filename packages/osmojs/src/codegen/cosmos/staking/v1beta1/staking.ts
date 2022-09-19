import { Header, HeaderSDKType } from "../../../tendermint/types/types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, toTimestamp, fromTimestamp, Long } from "@osmonauts/helpers";
/** BondStatus is the status of a validator. */

export enum BondStatus {
  /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
  BOND_STATUS_UNSPECIFIED = 0,

  /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
  BOND_STATUS_UNBONDED = 1,

  /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
  BOND_STATUS_UNBONDING = 2,

  /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
  BOND_STATUS_BONDED = 3,
  UNRECOGNIZED = -1,
}
/** BondStatus is the status of a validator. */

export enum BondStatusSDKType {
  /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
  BOND_STATUS_UNSPECIFIED = 0,

  /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
  BOND_STATUS_UNBONDED = 1,

  /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
  BOND_STATUS_UNBONDING = 2,

  /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
  BOND_STATUS_BONDED = 3,
  UNRECOGNIZED = -1,
}
export function bondStatusFromJSON(object: any): BondStatus {
  switch (object) {
    case 0:
    case "BOND_STATUS_UNSPECIFIED":
      return BondStatus.BOND_STATUS_UNSPECIFIED;

    case 1:
    case "BOND_STATUS_UNBONDED":
      return BondStatus.BOND_STATUS_UNBONDED;

    case 2:
    case "BOND_STATUS_UNBONDING":
      return BondStatus.BOND_STATUS_UNBONDING;

    case 3:
    case "BOND_STATUS_BONDED":
      return BondStatus.BOND_STATUS_BONDED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return BondStatus.UNRECOGNIZED;
  }
}
export function bondStatusToJSON(object: BondStatus): string {
  switch (object) {
    case BondStatus.BOND_STATUS_UNSPECIFIED:
      return "BOND_STATUS_UNSPECIFIED";

    case BondStatus.BOND_STATUS_UNBONDED:
      return "BOND_STATUS_UNBONDED";

    case BondStatus.BOND_STATUS_UNBONDING:
      return "BOND_STATUS_UNBONDING";

    case BondStatus.BOND_STATUS_BONDED:
      return "BOND_STATUS_BONDED";

    default:
      return "UNKNOWN";
  }
}
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */

export interface HistoricalInfo {
  header: Header;
  valset: Validator[];
}
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */

export interface HistoricalInfoSDKType {
  header: HeaderSDKType;
  valset: ValidatorSDKType[];
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */

export interface CommissionRates {
  /** rate is the commission rate charged to delegators, as a fraction. */
  rate: string;
  /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */

  maxRate: string;
  /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */

  maxChangeRate: string;
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */

export interface CommissionRatesSDKType {
  /** rate is the commission rate charged to delegators, as a fraction. */
  rate: string;
  /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */

  max_rate: string;
  /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */

  max_change_rate: string;
}
/** Commission defines commission parameters for a given validator. */

export interface Commission {
  /** commission_rates defines the initial commission rates to be used for creating a validator. */
  commissionRates: CommissionRates;
  /** update_time is the last time the commission rate was changed. */

  updateTime: Date;
}
/** Commission defines commission parameters for a given validator. */

export interface CommissionSDKType {
  /** commission_rates defines the initial commission rates to be used for creating a validator. */
  commission_rates: CommissionRatesSDKType;
  /** update_time is the last time the commission rate was changed. */

  update_time: Date;
}
/** Description defines a validator description. */

export interface Description {
  /** moniker defines a human-readable name for the validator. */
  moniker: string;
  /** identity defines an optional identity signature (ex. UPort or Keybase). */

  identity: string;
  /** website defines an optional website link. */

  website: string;
  /** security_contact defines an optional email for security contact. */

  securityContact: string;
  /** details define other optional details. */

  details: string;
}
/** Description defines a validator description. */

export interface DescriptionSDKType {
  /** moniker defines a human-readable name for the validator. */
  moniker: string;
  /** identity defines an optional identity signature (ex. UPort or Keybase). */

  identity: string;
  /** website defines an optional website link. */

  website: string;
  /** security_contact defines an optional email for security contact. */

  security_contact: string;
  /** details define other optional details. */

  details: string;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */

export interface Validator {
  /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
  operatorAddress: string;
  /** consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. */

  consensusPubkey: Any;
  /** jailed defined whether the validator has been jailed from bonded status or not. */

  jailed: boolean;
  /** status is the validator status (bonded/unbonding/unbonded). */

  status: BondStatus;
  /** tokens define the delegated tokens (incl. self-delegation). */

  tokens: string;
  /** delegator_shares defines total shares issued to a validator's delegators. */

  delegatorShares: string;
  /** description defines the description terms for the validator. */

  description: Description;
  /** unbonding_height defines, if unbonding, the height at which this validator has begun unbonding. */

  unbondingHeight: Long;
  /** unbonding_time defines, if unbonding, the min time for the validator to complete unbonding. */

  unbondingTime: Date;
  /** commission defines the commission parameters. */

  commission: Commission;
  /** min_self_delegation is the validator's self declared minimum self delegation. */

  minSelfDelegation: string;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */

export interface ValidatorSDKType {
  /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
  operator_address: string;
  /** consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. */

  consensus_pubkey: AnySDKType;
  /** jailed defined whether the validator has been jailed from bonded status or not. */

  jailed: boolean;
  /** status is the validator status (bonded/unbonding/unbonded). */

  status: BondStatusSDKType;
  /** tokens define the delegated tokens (incl. self-delegation). */

  tokens: string;
  /** delegator_shares defines total shares issued to a validator's delegators. */

  delegator_shares: string;
  /** description defines the description terms for the validator. */

  description: DescriptionSDKType;
  /** unbonding_height defines, if unbonding, the height at which this validator has begun unbonding. */

  unbonding_height: Long;
  /** unbonding_time defines, if unbonding, the min time for the validator to complete unbonding. */

  unbonding_time: Date;
  /** commission defines the commission parameters. */

  commission: CommissionSDKType;
  /** min_self_delegation is the validator's self declared minimum self delegation. */

  min_self_delegation: string;
}
/** ValAddresses defines a repeated set of validator addresses. */

export interface ValAddresses {
  addresses: string[];
}
/** ValAddresses defines a repeated set of validator addresses. */

export interface ValAddressesSDKType {
  addresses: string[];
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */

export interface DVPair {
  delegatorAddress: string;
  validatorAddress: string;
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */

export interface DVPairSDKType {
  delegator_address: string;
  validator_address: string;
}
/** DVPairs defines an array of DVPair objects. */

export interface DVPairs {
  pairs: DVPair[];
}
/** DVPairs defines an array of DVPair objects. */

export interface DVPairsSDKType {
  pairs: DVPairSDKType[];
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */

export interface DVVTriplet {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */

export interface DVVTripletSDKType {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
}
/** DVVTriplets defines an array of DVVTriplet objects. */

export interface DVVTriplets {
  triplets: DVVTriplet[];
}
/** DVVTriplets defines an array of DVVTriplet objects. */

export interface DVVTripletsSDKType {
  triplets: DVVTripletSDKType[];
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */

export interface Delegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the bech32-encoded address of the validator. */

  validatorAddress: string;
  /** shares define the delegation shares received. */

  shares: string;
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */

export interface DelegationSDKType {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address: string;
  /** validator_address is the bech32-encoded address of the validator. */

  validator_address: string;
  /** shares define the delegation shares received. */

  shares: string;
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */

export interface UnbondingDelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the bech32-encoded address of the validator. */

  validatorAddress: string;
  /** entries are the unbonding delegation entries. */

  entries: UnbondingDelegationEntry[];
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */

export interface UnbondingDelegationSDKType {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address: string;
  /** validator_address is the bech32-encoded address of the validator. */

  validator_address: string;
  /** entries are the unbonding delegation entries. */

  entries: UnbondingDelegationEntrySDKType[];
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */

export interface UnbondingDelegationEntry {
  /** creation_height is the height which the unbonding took place. */
  creationHeight: Long;
  /** completion_time is the unix time for unbonding completion. */

  completionTime: Date;
  /** initial_balance defines the tokens initially scheduled to receive at completion. */

  initialBalance: string;
  /** balance defines the tokens to receive at completion. */

  balance: string;
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */

export interface UnbondingDelegationEntrySDKType {
  /** creation_height is the height which the unbonding took place. */
  creation_height: Long;
  /** completion_time is the unix time for unbonding completion. */

  completion_time: Date;
  /** initial_balance defines the tokens initially scheduled to receive at completion. */

  initial_balance: string;
  /** balance defines the tokens to receive at completion. */

  balance: string;
}
/** RedelegationEntry defines a redelegation object with relevant metadata. */

export interface RedelegationEntry {
  /** creation_height  defines the height which the redelegation took place. */
  creationHeight: Long;
  /** completion_time defines the unix time for redelegation completion. */

  completionTime: Date;
  /** initial_balance defines the initial balance when redelegation started. */

  initialBalance: string;
  /** shares_dst is the amount of destination-validator shares created by redelegation. */

  sharesDst: string;
}
/** RedelegationEntry defines a redelegation object with relevant metadata. */

export interface RedelegationEntrySDKType {
  /** creation_height  defines the height which the redelegation took place. */
  creation_height: Long;
  /** completion_time defines the unix time for redelegation completion. */

  completion_time: Date;
  /** initial_balance defines the initial balance when redelegation started. */

  initial_balance: string;
  /** shares_dst is the amount of destination-validator shares created by redelegation. */

  shares_dst: string;
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */

export interface Redelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_src_address is the validator redelegation source operator address. */

  validatorSrcAddress: string;
  /** validator_dst_address is the validator redelegation destination operator address. */

  validatorDstAddress: string;
  /** entries are the redelegation entries. */

  entries: RedelegationEntry[];
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */

export interface RedelegationSDKType {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address: string;
  /** validator_src_address is the validator redelegation source operator address. */

  validator_src_address: string;
  /** validator_dst_address is the validator redelegation destination operator address. */

  validator_dst_address: string;
  /** entries are the redelegation entries. */

  entries: RedelegationEntrySDKType[];
}
/** Params defines the parameters for the staking module. */

export interface Params {
  /** unbonding_time is the time duration of unbonding. */
  unbondingTime: Duration;
  /** max_validators is the maximum number of validators. */

  maxValidators: number;
  /** max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). */

  maxEntries: number;
  /** historical_entries is the number of historical entries to persist. */

  historicalEntries: number;
  /** bond_denom defines the bondable coin denomination. */

  bondDenom: string;
  /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */

  minCommissionRate: string;
}
/** Params defines the parameters for the staking module. */

export interface ParamsSDKType {
  /** unbonding_time is the time duration of unbonding. */
  unbonding_time: DurationSDKType;
  /** max_validators is the maximum number of validators. */

  max_validators: number;
  /** max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). */

  max_entries: number;
  /** historical_entries is the number of historical entries to persist. */

  historical_entries: number;
  /** bond_denom defines the bondable coin denomination. */

  bond_denom: string;
  /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */

  min_commission_rate: string;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */

export interface DelegationResponse {
  delegation: Delegation;
  balance: Coin;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */

export interface DelegationResponseSDKType {
  delegation: DelegationSDKType;
  balance: CoinSDKType;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */

export interface RedelegationEntryResponse {
  redelegationEntry: RedelegationEntry;
  balance: string;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */

export interface RedelegationEntryResponseSDKType {
  redelegation_entry: RedelegationEntrySDKType;
  balance: string;
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */

export interface RedelegationResponse {
  redelegation: Redelegation;
  entries: RedelegationEntryResponse[];
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */

export interface RedelegationResponseSDKType {
  redelegation: RedelegationSDKType;
  entries: RedelegationEntryResponseSDKType[];
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */

export interface Pool {
  notBondedTokens: string;
  bondedTokens: string;
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */

export interface PoolSDKType {
  not_bonded_tokens: string;
  bonded_tokens: string;
}

function createBaseHistoricalInfo(): HistoricalInfo {
  return {
    header: undefined,
    valset: []
  };
}

export const HistoricalInfo = {
  encode(message: HistoricalInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.valset) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoricalInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;

        case 2:
          message.valset.push(Validator.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<HistoricalInfo>): HistoricalInfo {
    const message = createBaseHistoricalInfo();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.valset = object.valset?.map(e => Validator.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: HistoricalInfoSDKType): HistoricalInfo {
    return {
      header: isSet(object.header) ? Header.fromSDK(object.header) : undefined,
      valset: Array.isArray(object?.valset) ? object.valset.map((e: any) => Validator.fromSDK(e)) : []
    };
  },

  toSDK(message: HistoricalInfo): HistoricalInfoSDKType {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toSDK(message.header) : undefined);

    if (message.valset) {
      obj.valset = message.valset.map(e => e ? Validator.toSDK(e) : undefined);
    } else {
      obj.valset = [];
    }

    return obj;
  }

};

function createBaseCommissionRates(): CommissionRates {
  return {
    rate: "",
    maxRate: "",
    maxChangeRate: ""
  };
}

export const CommissionRates = {
  encode(message: CommissionRates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rate !== "") {
      writer.uint32(10).string(message.rate);
    }

    if (message.maxRate !== "") {
      writer.uint32(18).string(message.maxRate);
    }

    if (message.maxChangeRate !== "") {
      writer.uint32(26).string(message.maxChangeRate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommissionRates {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommissionRates();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rate = reader.string();
          break;

        case 2:
          message.maxRate = reader.string();
          break;

        case 3:
          message.maxChangeRate = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CommissionRates>): CommissionRates {
    const message = createBaseCommissionRates();
    message.rate = object.rate ?? "";
    message.maxRate = object.maxRate ?? "";
    message.maxChangeRate = object.maxChangeRate ?? "";
    return message;
  },

  fromSDK(object: CommissionRatesSDKType): CommissionRates {
    return {
      rate: isSet(object.rate) ? object.rate : undefined,
      maxRate: isSet(object.max_rate) ? object.max_rate : undefined,
      maxChangeRate: isSet(object.max_change_rate) ? object.max_change_rate : undefined
    };
  },

  toSDK(message: CommissionRates): CommissionRatesSDKType {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    message.maxRate !== undefined && (obj.max_rate = message.maxRate);
    message.maxChangeRate !== undefined && (obj.max_change_rate = message.maxChangeRate);
    return obj;
  }

};

function createBaseCommission(): Commission {
  return {
    commissionRates: undefined,
    updateTime: undefined
  };
}

export const Commission = {
  encode(message: Commission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commissionRates !== undefined) {
      CommissionRates.encode(message.commissionRates, writer.uint32(10).fork()).ldelim();
    }

    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Commission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommission();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.commissionRates = CommissionRates.decode(reader, reader.uint32());
          break;

        case 2:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Commission>): Commission {
    const message = createBaseCommission();
    message.commissionRates = object.commissionRates !== undefined && object.commissionRates !== null ? CommissionRates.fromPartial(object.commissionRates) : undefined;
    message.updateTime = object.updateTime ?? undefined;
    return message;
  },

  fromSDK(object: CommissionSDKType): Commission {
    return {
      commissionRates: isSet(object.commission_rates) ? CommissionRates.fromSDK(object.commission_rates) : undefined,
      updateTime: isSet(object.update_time) ? Timestamp.fromSDK(object.update_time) : undefined
    };
  },

  toSDK(message: Commission): CommissionSDKType {
    const obj: any = {};
    message.commissionRates !== undefined && (obj.commission_rates = message.commissionRates ? CommissionRates.toSDK(message.commissionRates) : undefined);
    message.updateTime !== undefined && (obj.update_time = message.updateTime ? Timestamp.toSDK(message.updateTime) : undefined);
    return obj;
  }

};

function createBaseDescription(): Description {
  return {
    moniker: "",
    identity: "",
    website: "",
    securityContact: "",
    details: ""
  };
}

export const Description = {
  encode(message: Description, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }

    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }

    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }

    if (message.securityContact !== "") {
      writer.uint32(34).string(message.securityContact);
    }

    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Description {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescription();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;

        case 2:
          message.identity = reader.string();
          break;

        case 3:
          message.website = reader.string();
          break;

        case 4:
          message.securityContact = reader.string();
          break;

        case 5:
          message.details = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Description>): Description {
    const message = createBaseDescription();
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.securityContact = object.securityContact ?? "";
    message.details = object.details ?? "";
    return message;
  },

  fromSDK(object: DescriptionSDKType): Description {
    return {
      moniker: isSet(object.moniker) ? object.moniker : undefined,
      identity: isSet(object.identity) ? object.identity : undefined,
      website: isSet(object.website) ? object.website : undefined,
      securityContact: isSet(object.security_contact) ? object.security_contact : undefined,
      details: isSet(object.details) ? object.details : undefined
    };
  },

  toSDK(message: Description): DescriptionSDKType {
    const obj: any = {};
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.identity !== undefined && (obj.identity = message.identity);
    message.website !== undefined && (obj.website = message.website);
    message.securityContact !== undefined && (obj.security_contact = message.securityContact);
    message.details !== undefined && (obj.details = message.details);
    return obj;
  }

};

function createBaseValidator(): Validator {
  return {
    operatorAddress: "",
    consensusPubkey: undefined,
    jailed: false,
    status: 0,
    tokens: "",
    delegatorShares: "",
    description: undefined,
    unbondingHeight: Long.ZERO,
    unbondingTime: undefined,
    commission: undefined,
    minSelfDelegation: ""
  };
}

export const Validator = {
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }

    if (message.consensusPubkey !== undefined) {
      Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
    }

    if (message.jailed === true) {
      writer.uint32(24).bool(message.jailed);
    }

    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }

    if (message.tokens !== "") {
      writer.uint32(42).string(message.tokens);
    }

    if (message.delegatorShares !== "") {
      writer.uint32(50).string(message.delegatorShares);
    }

    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(58).fork()).ldelim();
    }

    if (!message.unbondingHeight.isZero()) {
      writer.uint32(64).int64(message.unbondingHeight);
    }

    if (message.unbondingTime !== undefined) {
      Timestamp.encode(toTimestamp(message.unbondingTime), writer.uint32(74).fork()).ldelim();
    }

    if (message.commission !== undefined) {
      Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
    }

    if (message.minSelfDelegation !== "") {
      writer.uint32(90).string(message.minSelfDelegation);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;

        case 2:
          message.consensusPubkey = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.jailed = reader.bool();
          break;

        case 4:
          message.status = (reader.int32() as any);
          break;

        case 5:
          message.tokens = reader.string();
          break;

        case 6:
          message.delegatorShares = reader.string();
          break;

        case 7:
          message.description = Description.decode(reader, reader.uint32());
          break;

        case 8:
          message.unbondingHeight = (reader.int64() as Long);
          break;

        case 9:
          message.unbondingTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 10:
          message.commission = Commission.decode(reader, reader.uint32());
          break;

        case 11:
          message.minSelfDelegation = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.consensusPubkey = object.consensusPubkey !== undefined && object.consensusPubkey !== null ? Any.fromPartial(object.consensusPubkey) : undefined;
    message.jailed = object.jailed ?? false;
    message.status = object.status ?? 0;
    message.tokens = object.tokens ?? "";
    message.delegatorShares = object.delegatorShares ?? "";
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.unbondingHeight = object.unbondingHeight !== undefined && object.unbondingHeight !== null ? Long.fromValue(object.unbondingHeight) : Long.ZERO;
    message.unbondingTime = object.unbondingTime ?? undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? Commission.fromPartial(object.commission) : undefined;
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    return message;
  },

  fromSDK(object: ValidatorSDKType): Validator {
    return {
      operatorAddress: isSet(object.operator_address) ? object.operator_address : undefined,
      consensusPubkey: isSet(object.consensus_pubkey) ? Any.fromSDK(object.consensus_pubkey) : undefined,
      jailed: isSet(object.jailed) ? object.jailed : undefined,
      status: isSet(object.status) ? bondStatusFromJSON(object.status) : 0,
      tokens: isSet(object.tokens) ? object.tokens : undefined,
      delegatorShares: isSet(object.delegator_shares) ? object.delegator_shares : undefined,
      description: isSet(object.description) ? Description.fromSDK(object.description) : undefined,
      unbondingHeight: isSet(object.unbonding_height) ? object.unbonding_height : undefined,
      unbondingTime: isSet(object.unbonding_time) ? Timestamp.fromSDK(object.unbonding_time) : undefined,
      commission: isSet(object.commission) ? Commission.fromSDK(object.commission) : undefined,
      minSelfDelegation: isSet(object.min_self_delegation) ? object.min_self_delegation : undefined
    };
  },

  toSDK(message: Validator): ValidatorSDKType {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operator_address = message.operatorAddress);
    message.consensusPubkey !== undefined && (obj.consensus_pubkey = message.consensusPubkey ? Any.toSDK(message.consensusPubkey) : undefined);
    message.jailed !== undefined && (obj.jailed = message.jailed);
    message.status !== undefined && (obj.status = bondStatusToJSON(message.status));
    message.tokens !== undefined && (obj.tokens = message.tokens);
    message.delegatorShares !== undefined && (obj.delegator_shares = message.delegatorShares);
    message.description !== undefined && (obj.description = message.description ? Description.toSDK(message.description) : undefined);
    message.unbondingHeight !== undefined && (obj.unbonding_height = message.unbondingHeight);
    message.unbondingTime !== undefined && (obj.unbonding_time = message.unbondingTime ? Timestamp.toSDK(message.unbondingTime) : undefined);
    message.commission !== undefined && (obj.commission = message.commission ? Commission.toSDK(message.commission) : undefined);
    message.minSelfDelegation !== undefined && (obj.min_self_delegation = message.minSelfDelegation);
    return obj;
  }

};

function createBaseValAddresses(): ValAddresses {
  return {
    addresses: []
  };
}

export const ValAddresses = {
  encode(message: ValAddresses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValAddresses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValAddresses();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ValAddresses>): ValAddresses {
    const message = createBaseValAddresses();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },

  fromSDK(object: ValAddressesSDKType): ValAddresses {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => e) : []
    };
  },

  toSDK(message: ValAddresses): ValAddressesSDKType {
    const obj: any = {};

    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = [];
    }

    return obj;
  }

};

function createBaseDVPair(): DVPair {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}

export const DVPair = {
  encode(message: DVPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DVPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVPair();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DVPair>): DVPair {
    const message = createBaseDVPair();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },

  fromSDK(object: DVPairSDKType): DVPair {
    return {
      delegatorAddress: isSet(object.delegator_address) ? object.delegator_address : undefined,
      validatorAddress: isSet(object.validator_address) ? object.validator_address : undefined
    };
  },

  toSDK(message: DVPair): DVPairSDKType {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegator_address = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validator_address = message.validatorAddress);
    return obj;
  }

};

function createBaseDVPairs(): DVPairs {
  return {
    pairs: []
  };
}

export const DVPairs = {
  encode(message: DVPairs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pairs) {
      DVPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DVPairs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVPairs();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pairs.push(DVPair.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DVPairs>): DVPairs {
    const message = createBaseDVPairs();
    message.pairs = object.pairs?.map(e => DVPair.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: DVPairsSDKType): DVPairs {
    return {
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => DVPair.fromSDK(e)) : []
    };
  },

  toSDK(message: DVPairs): DVPairsSDKType {
    const obj: any = {};

    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? DVPair.toSDK(e) : undefined);
    } else {
      obj.pairs = [];
    }

    return obj;
  }

};

function createBaseDVVTriplet(): DVVTriplet {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: ""
  };
}

export const DVVTriplet = {
  encode(message: DVVTriplet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }

    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DVVTriplet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplet();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorSrcAddress = reader.string();
          break;

        case 3:
          message.validatorDstAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DVVTriplet>): DVVTriplet {
    const message = createBaseDVVTriplet();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    return message;
  },

  fromSDK(object: DVVTripletSDKType): DVVTriplet {
    return {
      delegatorAddress: isSet(object.delegator_address) ? object.delegator_address : undefined,
      validatorSrcAddress: isSet(object.validator_src_address) ? object.validator_src_address : undefined,
      validatorDstAddress: isSet(object.validator_dst_address) ? object.validator_dst_address : undefined
    };
  },

  toSDK(message: DVVTriplet): DVVTripletSDKType {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegator_address = message.delegatorAddress);
    message.validatorSrcAddress !== undefined && (obj.validator_src_address = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined && (obj.validator_dst_address = message.validatorDstAddress);
    return obj;
  }

};

function createBaseDVVTriplets(): DVVTriplets {
  return {
    triplets: []
  };
}

export const DVVTriplets = {
  encode(message: DVVTriplets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.triplets) {
      DVVTriplet.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DVVTriplets {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplets();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.triplets.push(DVVTriplet.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DVVTriplets>): DVVTriplets {
    const message = createBaseDVVTriplets();
    message.triplets = object.triplets?.map(e => DVVTriplet.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: DVVTripletsSDKType): DVVTriplets {
    return {
      triplets: Array.isArray(object?.triplets) ? object.triplets.map((e: any) => DVVTriplet.fromSDK(e)) : []
    };
  },

  toSDK(message: DVVTriplets): DVVTripletsSDKType {
    const obj: any = {};

    if (message.triplets) {
      obj.triplets = message.triplets.map(e => e ? DVVTriplet.toSDK(e) : undefined);
    } else {
      obj.triplets = [];
    }

    return obj;
  }

};

function createBaseDelegation(): Delegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    shares: ""
  };
}

export const Delegation = {
  encode(message: Delegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.shares !== "") {
      writer.uint32(26).string(message.shares);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.shares = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Delegation>): Delegation {
    const message = createBaseDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.shares = object.shares ?? "";
    return message;
  },

  fromSDK(object: DelegationSDKType): Delegation {
    return {
      delegatorAddress: isSet(object.delegator_address) ? object.delegator_address : undefined,
      validatorAddress: isSet(object.validator_address) ? object.validator_address : undefined,
      shares: isSet(object.shares) ? object.shares : undefined
    };
  },

  toSDK(message: Delegation): DelegationSDKType {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegator_address = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validator_address = message.validatorAddress);
    message.shares !== undefined && (obj.shares = message.shares);
    return obj;
  }

};

function createBaseUnbondingDelegation(): UnbondingDelegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    entries: []
  };
}

export const UnbondingDelegation = {
  encode(message: UnbondingDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    for (const v of message.entries) {
      UnbondingDelegationEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UnbondingDelegation>): UnbondingDelegation {
    const message = createBaseUnbondingDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.entries = object.entries?.map(e => UnbondingDelegationEntry.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: UnbondingDelegationSDKType): UnbondingDelegation {
    return {
      delegatorAddress: isSet(object.delegator_address) ? object.delegator_address : undefined,
      validatorAddress: isSet(object.validator_address) ? object.validator_address : undefined,
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => UnbondingDelegationEntry.fromSDK(e)) : []
    };
  },

  toSDK(message: UnbondingDelegation): UnbondingDelegationSDKType {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegator_address = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validator_address = message.validatorAddress);

    if (message.entries) {
      obj.entries = message.entries.map(e => e ? UnbondingDelegationEntry.toSDK(e) : undefined);
    } else {
      obj.entries = [];
    }

    return obj;
  }

};

function createBaseUnbondingDelegationEntry(): UnbondingDelegationEntry {
  return {
    creationHeight: Long.ZERO,
    completionTime: undefined,
    initialBalance: "",
    balance: ""
  };
}

export const UnbondingDelegationEntry = {
  encode(message: UnbondingDelegationEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.creationHeight.isZero()) {
      writer.uint32(8).int64(message.creationHeight);
    }

    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
    }

    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }

    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingDelegationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegationEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creationHeight = (reader.int64() as Long);
          break;

        case 2:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.initialBalance = reader.string();
          break;

        case 4:
          message.balance = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UnbondingDelegationEntry>): UnbondingDelegationEntry {
    const message = createBaseUnbondingDelegationEntry();
    message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? Long.fromValue(object.creationHeight) : Long.ZERO;
    message.completionTime = object.completionTime ?? undefined;
    message.initialBalance = object.initialBalance ?? "";
    message.balance = object.balance ?? "";
    return message;
  },

  fromSDK(object: UnbondingDelegationEntrySDKType): UnbondingDelegationEntry {
    return {
      creationHeight: isSet(object.creation_height) ? object.creation_height : undefined,
      completionTime: isSet(object.completion_time) ? Timestamp.fromSDK(object.completion_time) : undefined,
      initialBalance: isSet(object.initial_balance) ? object.initial_balance : undefined,
      balance: isSet(object.balance) ? object.balance : undefined
    };
  },

  toSDK(message: UnbondingDelegationEntry): UnbondingDelegationEntrySDKType {
    const obj: any = {};
    message.creationHeight !== undefined && (obj.creation_height = message.creationHeight);
    message.completionTime !== undefined && (obj.completion_time = message.completionTime ? Timestamp.toSDK(message.completionTime) : undefined);
    message.initialBalance !== undefined && (obj.initial_balance = message.initialBalance);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  }

};

function createBaseRedelegationEntry(): RedelegationEntry {
  return {
    creationHeight: Long.ZERO,
    completionTime: undefined,
    initialBalance: "",
    sharesDst: ""
  };
}

export const RedelegationEntry = {
  encode(message: RedelegationEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.creationHeight.isZero()) {
      writer.uint32(8).int64(message.creationHeight);
    }

    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
    }

    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }

    if (message.sharesDst !== "") {
      writer.uint32(34).string(message.sharesDst);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creationHeight = (reader.int64() as Long);
          break;

        case 2:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.initialBalance = reader.string();
          break;

        case 4:
          message.sharesDst = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RedelegationEntry>): RedelegationEntry {
    const message = createBaseRedelegationEntry();
    message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? Long.fromValue(object.creationHeight) : Long.ZERO;
    message.completionTime = object.completionTime ?? undefined;
    message.initialBalance = object.initialBalance ?? "";
    message.sharesDst = object.sharesDst ?? "";
    return message;
  },

  fromSDK(object: RedelegationEntrySDKType): RedelegationEntry {
    return {
      creationHeight: isSet(object.creation_height) ? object.creation_height : undefined,
      completionTime: isSet(object.completion_time) ? Timestamp.fromSDK(object.completion_time) : undefined,
      initialBalance: isSet(object.initial_balance) ? object.initial_balance : undefined,
      sharesDst: isSet(object.shares_dst) ? object.shares_dst : undefined
    };
  },

  toSDK(message: RedelegationEntry): RedelegationEntrySDKType {
    const obj: any = {};
    message.creationHeight !== undefined && (obj.creation_height = message.creationHeight);
    message.completionTime !== undefined && (obj.completion_time = message.completionTime ? Timestamp.toSDK(message.completionTime) : undefined);
    message.initialBalance !== undefined && (obj.initial_balance = message.initialBalance);
    message.sharesDst !== undefined && (obj.shares_dst = message.sharesDst);
    return obj;
  }

};

function createBaseRedelegation(): Redelegation {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    entries: []
  };
}

export const Redelegation = {
  encode(message: Redelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }

    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }

    for (const v of message.entries) {
      RedelegationEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Redelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorSrcAddress = reader.string();
          break;

        case 3:
          message.validatorDstAddress = reader.string();
          break;

        case 4:
          message.entries.push(RedelegationEntry.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Redelegation>): Redelegation {
    const message = createBaseRedelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    message.entries = object.entries?.map(e => RedelegationEntry.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: RedelegationSDKType): Redelegation {
    return {
      delegatorAddress: isSet(object.delegator_address) ? object.delegator_address : undefined,
      validatorSrcAddress: isSet(object.validator_src_address) ? object.validator_src_address : undefined,
      validatorDstAddress: isSet(object.validator_dst_address) ? object.validator_dst_address : undefined,
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => RedelegationEntry.fromSDK(e)) : []
    };
  },

  toSDK(message: Redelegation): RedelegationSDKType {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegator_address = message.delegatorAddress);
    message.validatorSrcAddress !== undefined && (obj.validator_src_address = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined && (obj.validator_dst_address = message.validatorDstAddress);

    if (message.entries) {
      obj.entries = message.entries.map(e => e ? RedelegationEntry.toSDK(e) : undefined);
    } else {
      obj.entries = [];
    }

    return obj;
  }

};

function createBaseParams(): Params {
  return {
    unbondingTime: undefined,
    maxValidators: 0,
    maxEntries: 0,
    historicalEntries: 0,
    bondDenom: "",
    minCommissionRate: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unbondingTime !== undefined) {
      Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
    }

    if (message.maxValidators !== 0) {
      writer.uint32(16).uint32(message.maxValidators);
    }

    if (message.maxEntries !== 0) {
      writer.uint32(24).uint32(message.maxEntries);
    }

    if (message.historicalEntries !== 0) {
      writer.uint32(32).uint32(message.historicalEntries);
    }

    if (message.bondDenom !== "") {
      writer.uint32(42).string(message.bondDenom);
    }

    if (message.minCommissionRate !== "") {
      writer.uint32(50).string(message.minCommissionRate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.unbondingTime = Duration.decode(reader, reader.uint32());
          break;

        case 2:
          message.maxValidators = reader.uint32();
          break;

        case 3:
          message.maxEntries = reader.uint32();
          break;

        case 4:
          message.historicalEntries = reader.uint32();
          break;

        case 5:
          message.bondDenom = reader.string();
          break;

        case 6:
          message.minCommissionRate = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.unbondingTime = object.unbondingTime ?? undefined;
    message.maxValidators = object.maxValidators ?? 0;
    message.maxEntries = object.maxEntries ?? 0;
    message.historicalEntries = object.historicalEntries ?? 0;
    message.bondDenom = object.bondDenom ?? "";
    message.minCommissionRate = object.minCommissionRate ?? "";
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      unbondingTime: isSet(object.unbonding_time) ? Duration.fromSDK(object.unbonding_time) : undefined,
      maxValidators: isSet(object.max_validators) ? object.max_validators : undefined,
      maxEntries: isSet(object.max_entries) ? object.max_entries : undefined,
      historicalEntries: isSet(object.historical_entries) ? object.historical_entries : undefined,
      bondDenom: isSet(object.bond_denom) ? object.bond_denom : undefined,
      minCommissionRate: isSet(object.min_commission_rate) ? object.min_commission_rate : undefined
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.unbondingTime !== undefined && (obj.unbonding_time = message.unbondingTime ? Duration.toSDK(message.unbondingTime) : undefined);
    message.maxValidators !== undefined && (obj.max_validators = message.maxValidators);
    message.maxEntries !== undefined && (obj.max_entries = message.maxEntries);
    message.historicalEntries !== undefined && (obj.historical_entries = message.historicalEntries);
    message.bondDenom !== undefined && (obj.bond_denom = message.bondDenom);
    message.minCommissionRate !== undefined && (obj.min_commission_rate = message.minCommissionRate);
    return obj;
  }

};

function createBaseDelegationResponse(): DelegationResponse {
  return {
    delegation: undefined,
    balance: undefined
  };
}

export const DelegationResponse = {
  encode(message: DelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }

    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;

        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DelegationResponse>): DelegationResponse {
    const message = createBaseDelegationResponse();
    message.delegation = object.delegation !== undefined && object.delegation !== null ? Delegation.fromPartial(object.delegation) : undefined;
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  },

  fromSDK(object: DelegationResponseSDKType): DelegationResponse {
    return {
      delegation: isSet(object.delegation) ? Delegation.fromSDK(object.delegation) : undefined,
      balance: isSet(object.balance) ? Coin.fromSDK(object.balance) : undefined
    };
  },

  toSDK(message: DelegationResponse): DelegationResponseSDKType {
    const obj: any = {};
    message.delegation !== undefined && (obj.delegation = message.delegation ? Delegation.toSDK(message.delegation) : undefined);
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toSDK(message.balance) : undefined);
    return obj;
  }

};

function createBaseRedelegationEntryResponse(): RedelegationEntryResponse {
  return {
    redelegationEntry: undefined,
    balance: ""
  };
}

export const RedelegationEntryResponse = {
  encode(message: RedelegationEntryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.redelegationEntry !== undefined) {
      RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
    }

    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationEntryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntryResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.redelegationEntry = RedelegationEntry.decode(reader, reader.uint32());
          break;

        case 4:
          message.balance = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RedelegationEntryResponse>): RedelegationEntryResponse {
    const message = createBaseRedelegationEntryResponse();
    message.redelegationEntry = object.redelegationEntry !== undefined && object.redelegationEntry !== null ? RedelegationEntry.fromPartial(object.redelegationEntry) : undefined;
    message.balance = object.balance ?? "";
    return message;
  },

  fromSDK(object: RedelegationEntryResponseSDKType): RedelegationEntryResponse {
    return {
      redelegationEntry: isSet(object.redelegation_entry) ? RedelegationEntry.fromSDK(object.redelegation_entry) : undefined,
      balance: isSet(object.balance) ? object.balance : undefined
    };
  },

  toSDK(message: RedelegationEntryResponse): RedelegationEntryResponseSDKType {
    const obj: any = {};
    message.redelegationEntry !== undefined && (obj.redelegation_entry = message.redelegationEntry ? RedelegationEntry.toSDK(message.redelegationEntry) : undefined);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  }

};

function createBaseRedelegationResponse(): RedelegationResponse {
  return {
    redelegation: undefined,
    entries: []
  };
}

export const RedelegationResponse = {
  encode(message: RedelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.redelegation !== undefined) {
      Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.entries) {
      RedelegationEntryResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.redelegation = Redelegation.decode(reader, reader.uint32());
          break;

        case 2:
          message.entries.push(RedelegationEntryResponse.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RedelegationResponse>): RedelegationResponse {
    const message = createBaseRedelegationResponse();
    message.redelegation = object.redelegation !== undefined && object.redelegation !== null ? Redelegation.fromPartial(object.redelegation) : undefined;
    message.entries = object.entries?.map(e => RedelegationEntryResponse.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: RedelegationResponseSDKType): RedelegationResponse {
    return {
      redelegation: isSet(object.redelegation) ? Redelegation.fromSDK(object.redelegation) : undefined,
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => RedelegationEntryResponse.fromSDK(e)) : []
    };
  },

  toSDK(message: RedelegationResponse): RedelegationResponseSDKType {
    const obj: any = {};
    message.redelegation !== undefined && (obj.redelegation = message.redelegation ? Redelegation.toSDK(message.redelegation) : undefined);

    if (message.entries) {
      obj.entries = message.entries.map(e => e ? RedelegationEntryResponse.toSDK(e) : undefined);
    } else {
      obj.entries = [];
    }

    return obj;
  }

};

function createBasePool(): Pool {
  return {
    notBondedTokens: "",
    bondedTokens: ""
  };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.notBondedTokens !== "") {
      writer.uint32(10).string(message.notBondedTokens);
    }

    if (message.bondedTokens !== "") {
      writer.uint32(18).string(message.bondedTokens);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.notBondedTokens = reader.string();
          break;

        case 2:
          message.bondedTokens = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = createBasePool();
    message.notBondedTokens = object.notBondedTokens ?? "";
    message.bondedTokens = object.bondedTokens ?? "";
    return message;
  },

  fromSDK(object: PoolSDKType): Pool {
    return {
      notBondedTokens: isSet(object.not_bonded_tokens) ? object.not_bonded_tokens : undefined,
      bondedTokens: isSet(object.bonded_tokens) ? object.bonded_tokens : undefined
    };
  },

  toSDK(message: Pool): PoolSDKType {
    const obj: any = {};
    message.notBondedTokens !== undefined && (obj.not_bonded_tokens = message.notBondedTokens);
    message.bondedTokens !== undefined && (obj.bonded_tokens = message.bondedTokens);
    return obj;
  }

};