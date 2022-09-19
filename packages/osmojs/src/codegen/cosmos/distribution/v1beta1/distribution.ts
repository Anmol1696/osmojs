import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Long } from "@osmonauts/helpers";
/** Params defines the set of params for the distribution module. */

export interface Params {
  communityTax: string;
  baseProposerReward: string;
  bonusProposerReward: string;
  withdrawAddrEnabled: boolean;
}
/** Params defines the set of params for the distribution module. */

export interface ParamsSDKType {
  community_tax: string;
  base_proposer_reward: string;
  bonus_proposer_reward: string;
  withdraw_addr_enabled: boolean;
}
/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 * number of outstanding delegations which ended the associated period (and
 * might need to read that record)
 * + number of slashes which ended the associated period (and might need to
 * read that record)
 * + one per validator for the zeroeth period, set on initialization
 */

export interface ValidatorHistoricalRewards {
  cumulativeRewardRatio: DecCoin[];
  referenceCount: number;
}
/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 * number of outstanding delegations which ended the associated period (and
 * might need to read that record)
 * + number of slashes which ended the associated period (and might need to
 * read that record)
 * + one per validator for the zeroeth period, set on initialization
 */

export interface ValidatorHistoricalRewardsSDKType {
  cumulative_reward_ratio: DecCoinSDKType[];
  reference_count: number;
}
/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */

export interface ValidatorCurrentRewards {
  rewards: DecCoin[];
  period: Long;
}
/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */

export interface ValidatorCurrentRewardsSDKType {
  rewards: DecCoinSDKType[];
  period: Long;
}
/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */

export interface ValidatorAccumulatedCommission {
  commission: DecCoin[];
}
/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */

export interface ValidatorAccumulatedCommissionSDKType {
  commission: DecCoinSDKType[];
}
/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */

export interface ValidatorOutstandingRewards {
  rewards: DecCoin[];
}
/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */

export interface ValidatorOutstandingRewardsSDKType {
  rewards: DecCoinSDKType[];
}
/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */

export interface ValidatorSlashEvent {
  validatorPeriod: Long;
  fraction: string;
}
/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */

export interface ValidatorSlashEventSDKType {
  validator_period: Long;
  fraction: string;
}
/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */

export interface ValidatorSlashEvents {
  validatorSlashEvents: ValidatorSlashEvent[];
}
/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */

export interface ValidatorSlashEventsSDKType {
  validator_slash_events: ValidatorSlashEventSDKType[];
}
/** FeePool is the global fee pool for distribution. */

export interface FeePool {
  communityPool: DecCoin[];
}
/** FeePool is the global fee pool for distribution. */

export interface FeePoolSDKType {
  community_pool: DecCoinSDKType[];
}
/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 */

export interface CommunityPoolSpendProposal {
  title: string;
  description: string;
  recipient: string;
  amount: Coin[];
}
/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 */

export interface CommunityPoolSpendProposalSDKType {
  title: string;
  description: string;
  recipient: string;
  amount: CoinSDKType[];
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */

export interface DelegatorStartingInfo {
  previousPeriod: Long;
  stake: string;
  height: Long;
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */

export interface DelegatorStartingInfoSDKType {
  previous_period: Long;
  stake: string;
  height: Long;
}
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */

export interface DelegationDelegatorReward {
  validatorAddress: string;
  reward: DecCoin[];
}
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */

export interface DelegationDelegatorRewardSDKType {
  validator_address: string;
  reward: DecCoinSDKType[];
}
/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */

export interface CommunityPoolSpendProposalWithDeposit {
  title: string;
  description: string;
  recipient: string;
  amount: string;
  deposit: string;
}
/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */

export interface CommunityPoolSpendProposalWithDepositSDKType {
  title: string;
  description: string;
  recipient: string;
  amount: string;
  deposit: string;
}

function createBaseParams(): Params {
  return {
    communityTax: "",
    baseProposerReward: "",
    bonusProposerReward: "",
    withdrawAddrEnabled: false
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityTax !== "") {
      writer.uint32(10).string(message.communityTax);
    }

    if (message.baseProposerReward !== "") {
      writer.uint32(18).string(message.baseProposerReward);
    }

    if (message.bonusProposerReward !== "") {
      writer.uint32(26).string(message.bonusProposerReward);
    }

    if (message.withdrawAddrEnabled === true) {
      writer.uint32(32).bool(message.withdrawAddrEnabled);
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
          message.communityTax = reader.string();
          break;

        case 2:
          message.baseProposerReward = reader.string();
          break;

        case 3:
          message.bonusProposerReward = reader.string();
          break;

        case 4:
          message.withdrawAddrEnabled = reader.bool();
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
    message.communityTax = object.communityTax ?? "";
    message.baseProposerReward = object.baseProposerReward ?? "";
    message.bonusProposerReward = object.bonusProposerReward ?? "";
    message.withdrawAddrEnabled = object.withdrawAddrEnabled ?? false;
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      communityTax: isSet(object.community_tax) ? object.community_tax : undefined,
      baseProposerReward: isSet(object.base_proposer_reward) ? object.base_proposer_reward : undefined,
      bonusProposerReward: isSet(object.bonus_proposer_reward) ? object.bonus_proposer_reward : undefined,
      withdrawAddrEnabled: isSet(object.withdraw_addr_enabled) ? object.withdraw_addr_enabled : undefined
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.communityTax !== undefined && (obj.community_tax = message.communityTax);
    message.baseProposerReward !== undefined && (obj.base_proposer_reward = message.baseProposerReward);
    message.bonusProposerReward !== undefined && (obj.bonus_proposer_reward = message.bonusProposerReward);
    message.withdrawAddrEnabled !== undefined && (obj.withdraw_addr_enabled = message.withdrawAddrEnabled);
    return obj;
  }

};

function createBaseValidatorHistoricalRewards(): ValidatorHistoricalRewards {
  return {
    cumulativeRewardRatio: [],
    referenceCount: 0
  };
}

export const ValidatorHistoricalRewards = {
  encode(message: ValidatorHistoricalRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cumulativeRewardRatio) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.referenceCount !== 0) {
      writer.uint32(16).uint32(message.referenceCount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorHistoricalRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewards();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cumulativeRewardRatio.push(DecCoin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.referenceCount = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ValidatorHistoricalRewards>): ValidatorHistoricalRewards {
    const message = createBaseValidatorHistoricalRewards();
    message.cumulativeRewardRatio = object.cumulativeRewardRatio?.map(e => DecCoin.fromPartial(e)) || [];
    message.referenceCount = object.referenceCount ?? 0;
    return message;
  },

  fromSDK(object: ValidatorHistoricalRewardsSDKType): ValidatorHistoricalRewards {
    return {
      cumulativeRewardRatio: Array.isArray(object?.cumulative_reward_ratio) ? object.cumulative_reward_ratio.map((e: any) => DecCoin.fromSDK(e)) : [],
      referenceCount: isSet(object.reference_count) ? object.reference_count : undefined
    };
  },

  toSDK(message: ValidatorHistoricalRewards): ValidatorHistoricalRewardsSDKType {
    const obj: any = {};

    if (message.cumulativeRewardRatio) {
      obj.cumulative_reward_ratio = message.cumulativeRewardRatio.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.cumulative_reward_ratio = [];
    }

    message.referenceCount !== undefined && (obj.reference_count = message.referenceCount);
    return obj;
  }

};

function createBaseValidatorCurrentRewards(): ValidatorCurrentRewards {
  return {
    rewards: [],
    period: Long.UZERO
  };
}

export const ValidatorCurrentRewards = {
  encode(message: ValidatorCurrentRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (!message.period.isZero()) {
      writer.uint32(16).uint64(message.period);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorCurrentRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewards();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.period = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ValidatorCurrentRewards>): ValidatorCurrentRewards {
    const message = createBaseValidatorCurrentRewards();
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
    return message;
  },

  fromSDK(object: ValidatorCurrentRewardsSDKType): ValidatorCurrentRewards {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromSDK(e)) : [],
      period: isSet(object.period) ? object.period : undefined
    };
  },

  toSDK(message: ValidatorCurrentRewards): ValidatorCurrentRewardsSDKType {
    const obj: any = {};

    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.rewards = [];
    }

    message.period !== undefined && (obj.period = message.period);
    return obj;
  }

};

function createBaseValidatorAccumulatedCommission(): ValidatorAccumulatedCommission {
  return {
    commission: []
  };
}

export const ValidatorAccumulatedCommission = {
  encode(message: ValidatorAccumulatedCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.commission) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorAccumulatedCommission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommission();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.commission.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ValidatorAccumulatedCommission>): ValidatorAccumulatedCommission {
    const message = createBaseValidatorAccumulatedCommission();
    message.commission = object.commission?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: ValidatorAccumulatedCommissionSDKType): ValidatorAccumulatedCommission {
    return {
      commission: Array.isArray(object?.commission) ? object.commission.map((e: any) => DecCoin.fromSDK(e)) : []
    };
  },

  toSDK(message: ValidatorAccumulatedCommission): ValidatorAccumulatedCommissionSDKType {
    const obj: any = {};

    if (message.commission) {
      obj.commission = message.commission.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.commission = [];
    }

    return obj;
  }

};

function createBaseValidatorOutstandingRewards(): ValidatorOutstandingRewards {
  return {
    rewards: []
  };
}

export const ValidatorOutstandingRewards = {
  encode(message: ValidatorOutstandingRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorOutstandingRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewards();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ValidatorOutstandingRewards>): ValidatorOutstandingRewards {
    const message = createBaseValidatorOutstandingRewards();
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: ValidatorOutstandingRewardsSDKType): ValidatorOutstandingRewards {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromSDK(e)) : []
    };
  },

  toSDK(message: ValidatorOutstandingRewards): ValidatorOutstandingRewardsSDKType {
    const obj: any = {};

    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.rewards = [];
    }

    return obj;
  }

};

function createBaseValidatorSlashEvent(): ValidatorSlashEvent {
  return {
    validatorPeriod: Long.UZERO,
    fraction: ""
  };
}

export const ValidatorSlashEvent = {
  encode(message: ValidatorSlashEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.validatorPeriod.isZero()) {
      writer.uint32(8).uint64(message.validatorPeriod);
    }

    if (message.fraction !== "") {
      writer.uint32(18).string(message.fraction);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorPeriod = (reader.uint64() as Long);
          break;

        case 2:
          message.fraction = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ValidatorSlashEvent>): ValidatorSlashEvent {
    const message = createBaseValidatorSlashEvent();
    message.validatorPeriod = object.validatorPeriod !== undefined && object.validatorPeriod !== null ? Long.fromValue(object.validatorPeriod) : Long.UZERO;
    message.fraction = object.fraction ?? "";
    return message;
  },

  fromSDK(object: ValidatorSlashEventSDKType): ValidatorSlashEvent {
    return {
      validatorPeriod: isSet(object.validator_period) ? object.validator_period : undefined,
      fraction: isSet(object.fraction) ? object.fraction : undefined
    };
  },

  toSDK(message: ValidatorSlashEvent): ValidatorSlashEventSDKType {
    const obj: any = {};
    message.validatorPeriod !== undefined && (obj.validator_period = message.validatorPeriod);
    message.fraction !== undefined && (obj.fraction = message.fraction);
    return obj;
  }

};

function createBaseValidatorSlashEvents(): ValidatorSlashEvents {
  return {
    validatorSlashEvents: []
  };
}

export const ValidatorSlashEvents = {
  encode(message: ValidatorSlashEvents, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validatorSlashEvents) {
      ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEvents {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvents();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorSlashEvents.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ValidatorSlashEvents>): ValidatorSlashEvents {
    const message = createBaseValidatorSlashEvents();
    message.validatorSlashEvents = object.validatorSlashEvents?.map(e => ValidatorSlashEvent.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: ValidatorSlashEventsSDKType): ValidatorSlashEvents {
    return {
      validatorSlashEvents: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e: any) => ValidatorSlashEvent.fromSDK(e)) : []
    };
  },

  toSDK(message: ValidatorSlashEvents): ValidatorSlashEventsSDKType {
    const obj: any = {};

    if (message.validatorSlashEvents) {
      obj.validator_slash_events = message.validatorSlashEvents.map(e => e ? ValidatorSlashEvent.toSDK(e) : undefined);
    } else {
      obj.validator_slash_events = [];
    }

    return obj;
  }

};

function createBaseFeePool(): FeePool {
  return {
    communityPool: []
  };
}

export const FeePool = {
  encode(message: FeePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.communityPool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeePool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.communityPool.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FeePool>): FeePool {
    const message = createBaseFeePool();
    message.communityPool = object.communityPool?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: FeePoolSDKType): FeePool {
    return {
      communityPool: Array.isArray(object?.community_pool) ? object.community_pool.map((e: any) => DecCoin.fromSDK(e)) : []
    };
  },

  toSDK(message: FeePool): FeePoolSDKType {
    const obj: any = {};

    if (message.communityPool) {
      obj.community_pool = message.communityPool.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.community_pool = [];
    }

    return obj;
  }

};

function createBaseCommunityPoolSpendProposal(): CommunityPoolSpendProposal {
  return {
    title: "",
    description: "",
    recipient: "",
    amount: []
  };
}

export const CommunityPoolSpendProposal = {
  encode(message: CommunityPoolSpendProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolSpendProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.recipient = reader.string();
          break;

        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CommunityPoolSpendProposal>): CommunityPoolSpendProposal {
    const message = createBaseCommunityPoolSpendProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: CommunityPoolSpendProposalSDKType): CommunityPoolSpendProposal {
    return {
      title: isSet(object.title) ? object.title : undefined,
      description: isSet(object.description) ? object.description : undefined,
      recipient: isSet(object.recipient) ? object.recipient : undefined,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },

  toSDK(message: CommunityPoolSpendProposal): CommunityPoolSpendProposalSDKType {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.recipient !== undefined && (obj.recipient = message.recipient);

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  }

};

function createBaseDelegatorStartingInfo(): DelegatorStartingInfo {
  return {
    previousPeriod: Long.UZERO,
    stake: "",
    height: Long.UZERO
  };
}

export const DelegatorStartingInfo = {
  encode(message: DelegatorStartingInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.previousPeriod.isZero()) {
      writer.uint32(8).uint64(message.previousPeriod);
    }

    if (message.stake !== "") {
      writer.uint32(18).string(message.stake);
    }

    if (!message.height.isZero()) {
      writer.uint32(24).uint64(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorStartingInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.previousPeriod = (reader.uint64() as Long);
          break;

        case 2:
          message.stake = reader.string();
          break;

        case 3:
          message.height = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DelegatorStartingInfo>): DelegatorStartingInfo {
    const message = createBaseDelegatorStartingInfo();
    message.previousPeriod = object.previousPeriod !== undefined && object.previousPeriod !== null ? Long.fromValue(object.previousPeriod) : Long.UZERO;
    message.stake = object.stake ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    return message;
  },

  fromSDK(object: DelegatorStartingInfoSDKType): DelegatorStartingInfo {
    return {
      previousPeriod: isSet(object.previous_period) ? object.previous_period : undefined,
      stake: isSet(object.stake) ? object.stake : undefined,
      height: isSet(object.height) ? object.height : undefined
    };
  },

  toSDK(message: DelegatorStartingInfo): DelegatorStartingInfoSDKType {
    const obj: any = {};
    message.previousPeriod !== undefined && (obj.previous_period = message.previousPeriod);
    message.stake !== undefined && (obj.stake = message.stake);
    message.height !== undefined && (obj.height = message.height);
    return obj;
  }

};

function createBaseDelegationDelegatorReward(): DelegationDelegatorReward {
  return {
    validatorAddress: "",
    reward: []
  };
}

export const DelegationDelegatorReward = {
  encode(message: DelegationDelegatorReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }

    for (const v of message.reward) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationDelegatorReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationDelegatorReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;

        case 2:
          message.reward.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DelegationDelegatorReward>): DelegationDelegatorReward {
    const message = createBaseDelegationDelegatorReward();
    message.validatorAddress = object.validatorAddress ?? "";
    message.reward = object.reward?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: DelegationDelegatorRewardSDKType): DelegationDelegatorReward {
    return {
      validatorAddress: isSet(object.validator_address) ? object.validator_address : undefined,
      reward: Array.isArray(object?.reward) ? object.reward.map((e: any) => DecCoin.fromSDK(e)) : []
    };
  },

  toSDK(message: DelegationDelegatorReward): DelegationDelegatorRewardSDKType {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validator_address = message.validatorAddress);

    if (message.reward) {
      obj.reward = message.reward.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.reward = [];
    }

    return obj;
  }

};

function createBaseCommunityPoolSpendProposalWithDeposit(): CommunityPoolSpendProposalWithDeposit {
  return {
    title: "",
    description: "",
    recipient: "",
    amount: "",
    deposit: ""
  };
}

export const CommunityPoolSpendProposalWithDeposit = {
  encode(message: CommunityPoolSpendProposalWithDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolSpendProposalWithDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposalWithDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.recipient = reader.string();
          break;

        case 4:
          message.amount = reader.string();
          break;

        case 5:
          message.deposit = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CommunityPoolSpendProposalWithDeposit>): CommunityPoolSpendProposalWithDeposit {
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  },

  fromSDK(object: CommunityPoolSpendProposalWithDepositSDKType): CommunityPoolSpendProposalWithDeposit {
    return {
      title: isSet(object.title) ? object.title : undefined,
      description: isSet(object.description) ? object.description : undefined,
      recipient: isSet(object.recipient) ? object.recipient : undefined,
      amount: isSet(object.amount) ? object.amount : undefined,
      deposit: isSet(object.deposit) ? object.deposit : undefined
    };
  },

  toSDK(message: CommunityPoolSpendProposalWithDeposit): CommunityPoolSpendProposalWithDepositSDKType {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount);
    message.deposit !== undefined && (obj.deposit = message.deposit);
    return obj;
  }

};