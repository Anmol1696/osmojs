import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, VoteOptionSDKType, WeightedVoteOption, WeightedVoteOptionSDKType, voteOptionFromJSON, voteOptionToJSON } from "./gov";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Long } from "@osmonauts/helpers";
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */

export interface MsgSubmitProposal {
  messages: Any[];
  initialDeposit: Coin[];
  proposer: string;
  /** metadata is any arbitrary metadata attached to the proposal. */

  metadata: string;
}
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */

export interface MsgSubmitProposalSDKType {
  messages: AnySDKType[];
  initial_deposit: CoinSDKType[];
  proposer: string;
  /** metadata is any arbitrary metadata attached to the proposal. */

  metadata: string;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */

export interface MsgSubmitProposalResponse {
  proposalId: Long;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */

export interface MsgSubmitProposalResponseSDKType {
  proposal_id: Long;
}
/**
 * MsgExecLegacyContent is used to wrap the legacy content field into a message.
 * This ensures backwards compatibility with v1beta1.MsgSubmitProposal.
 */

export interface MsgExecLegacyContent {
  /** content is the proposal's content. */
  content: Any;
  /** authority must be the gov module address. */

  authority: string;
}
/**
 * MsgExecLegacyContent is used to wrap the legacy content field into a message.
 * This ensures backwards compatibility with v1beta1.MsgSubmitProposal.
 */

export interface MsgExecLegacyContentSDKType {
  /** content is the proposal's content. */
  content: AnySDKType;
  /** authority must be the gov module address. */

  authority: string;
}
/** MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type. */

export interface MsgExecLegacyContentResponse {}
/** MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type. */

export interface MsgExecLegacyContentResponseSDKType {}
/** MsgVote defines a message to cast a vote. */

export interface MsgVote {
  proposalId: Long;
  voter: string;
  option: VoteOption;
  metadata: string;
}
/** MsgVote defines a message to cast a vote. */

export interface MsgVoteSDKType {
  proposal_id: Long;
  voter: string;
  option: VoteOptionSDKType;
  metadata: string;
}
/** MsgVoteResponse defines the Msg/Vote response type. */

export interface MsgVoteResponse {}
/** MsgVoteResponse defines the Msg/Vote response type. */

export interface MsgVoteResponseSDKType {}
/** MsgVoteWeighted defines a message to cast a vote. */

export interface MsgVoteWeighted {
  proposalId: Long;
  voter: string;
  options: WeightedVoteOption[];
  metadata: string;
}
/** MsgVoteWeighted defines a message to cast a vote. */

export interface MsgVoteWeightedSDKType {
  proposal_id: Long;
  voter: string;
  options: WeightedVoteOptionSDKType[];
  metadata: string;
}
/** MsgVoteWeightedResponse defines the Msg/VoteWeighted response type. */

export interface MsgVoteWeightedResponse {}
/** MsgVoteWeightedResponse defines the Msg/VoteWeighted response type. */

export interface MsgVoteWeightedResponseSDKType {}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */

export interface MsgDeposit {
  proposalId: Long;
  depositor: string;
  amount: Coin[];
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */

export interface MsgDepositSDKType {
  proposal_id: Long;
  depositor: string;
  amount: CoinSDKType[];
}
/** MsgDepositResponse defines the Msg/Deposit response type. */

export interface MsgDepositResponse {}
/** MsgDepositResponse defines the Msg/Deposit response type. */

export interface MsgDepositResponseSDKType {}

function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    messages: [],
    initialDeposit: [],
    proposer: "",
    metadata: ""
  };
}

export const MsgSubmitProposal = {
  encode(message: MsgSubmitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.initialDeposit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }

    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;

        case 2:
          message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.proposer = reader.string();
          break;

        case 4:
          message.metadata = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.initialDeposit = object.initialDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.proposer = object.proposer ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  },

  fromSDK(object: MsgSubmitProposalSDKType): MsgSubmitProposal {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromSDK(e)) : [],
      initialDeposit: Array.isArray(object?.initial_deposit) ? object.initial_deposit.map((e: any) => Coin.fromSDK(e)) : [],
      proposer: isSet(object.proposer) ? object.proposer : undefined,
      metadata: isSet(object.metadata) ? object.metadata : undefined
    };
  },

  toSDK(message: MsgSubmitProposal): MsgSubmitProposalSDKType {
    const obj: any = {};

    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.messages = [];
    }

    if (message.initialDeposit) {
      obj.initial_deposit = message.initialDeposit.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.initial_deposit = [];
    }

    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  }

};

function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    proposalId: Long.UZERO
  };
}

export const MsgSubmitProposalResponse = {
  encode(message: MsgSubmitProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposalResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  },

  fromSDK(object: MsgSubmitProposalResponseSDKType): MsgSubmitProposalResponse {
    return {
      proposalId: isSet(object.proposal_id) ? object.proposal_id : undefined
    };
  },

  toSDK(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseSDKType {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposal_id = message.proposalId);
    return obj;
  }

};

function createBaseMsgExecLegacyContent(): MsgExecLegacyContent {
  return {
    content: undefined,
    authority: ""
  };
}

export const MsgExecLegacyContent = {
  encode(message: MsgExecLegacyContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== undefined) {
      Any.encode(message.content, writer.uint32(10).fork()).ldelim();
    }

    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecLegacyContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecLegacyContent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.content = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.authority = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgExecLegacyContent>): MsgExecLegacyContent {
    const message = createBaseMsgExecLegacyContent();
    message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
    message.authority = object.authority ?? "";
    return message;
  },

  fromSDK(object: MsgExecLegacyContentSDKType): MsgExecLegacyContent {
    return {
      content: isSet(object.content) ? Any.fromSDK(object.content) : undefined,
      authority: isSet(object.authority) ? object.authority : undefined
    };
  },

  toSDK(message: MsgExecLegacyContent): MsgExecLegacyContentSDKType {
    const obj: any = {};
    message.content !== undefined && (obj.content = message.content ? Any.toSDK(message.content) : undefined);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  }

};

function createBaseMsgExecLegacyContentResponse(): MsgExecLegacyContentResponse {
  return {};
}

export const MsgExecLegacyContentResponse = {
  encode(_: MsgExecLegacyContentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecLegacyContentResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecLegacyContentResponse();

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

  fromPartial(_: DeepPartial<MsgExecLegacyContentResponse>): MsgExecLegacyContentResponse {
    const message = createBaseMsgExecLegacyContentResponse();
    return message;
  },

  fromSDK(_: MsgExecLegacyContentResponseSDKType): MsgExecLegacyContentResponse {
    return {};
  },

  toSDK(_: MsgExecLegacyContentResponse): MsgExecLegacyContentResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgVote(): MsgVote {
  return {
    proposalId: Long.UZERO,
    voter: "",
    option: 0,
    metadata: ""
  };
}

export const MsgVote = {
  encode(message: MsgVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }

    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.option = (reader.int32() as any);
          break;

        case 4:
          message.metadata = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgVote>): MsgVote {
    const message = createBaseMsgVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    return message;
  },

  fromSDK(object: MsgVoteSDKType): MsgVote {
    return {
      proposalId: isSet(object.proposal_id) ? object.proposal_id : undefined,
      voter: isSet(object.voter) ? object.voter : undefined,
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
      metadata: isSet(object.metadata) ? object.metadata : undefined
    };
  },

  toSDK(message: MsgVote): MsgVoteSDKType {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposal_id = message.proposalId);
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  }

};

function createBaseMsgVoteResponse(): MsgVoteResponse {
  return {};
}

export const MsgVoteResponse = {
  encode(_: MsgVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();

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

  fromPartial(_: DeepPartial<MsgVoteResponse>): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },

  fromSDK(_: MsgVoteResponseSDKType): MsgVoteResponse {
    return {};
  },

  toSDK(_: MsgVoteResponse): MsgVoteResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgVoteWeighted(): MsgVoteWeighted {
  return {
    proposalId: Long.UZERO,
    voter: "",
    options: [],
    metadata: ""
  };
}

export const MsgVoteWeighted = {
  encode(message: MsgVoteWeighted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteWeighted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeighted();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;

        case 4:
          message.metadata = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgVoteWeighted>): MsgVoteWeighted {
    const message = createBaseMsgVoteWeighted();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? "";
    message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    return message;
  },

  fromSDK(object: MsgVoteWeightedSDKType): MsgVoteWeighted {
    return {
      proposalId: isSet(object.proposal_id) ? object.proposal_id : undefined,
      voter: isSet(object.voter) ? object.voter : undefined,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromSDK(e)) : [],
      metadata: isSet(object.metadata) ? object.metadata : undefined
    };
  },

  toSDK(message: MsgVoteWeighted): MsgVoteWeightedSDKType {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposal_id = message.proposalId);
    message.voter !== undefined && (obj.voter = message.voter);

    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toSDK(e) : undefined);
    } else {
      obj.options = [];
    }

    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  }

};

function createBaseMsgVoteWeightedResponse(): MsgVoteWeightedResponse {
  return {};
}

export const MsgVoteWeightedResponse = {
  encode(_: MsgVoteWeightedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteWeightedResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeightedResponse();

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

  fromPartial(_: DeepPartial<MsgVoteWeightedResponse>): MsgVoteWeightedResponse {
    const message = createBaseMsgVoteWeightedResponse();
    return message;
  },

  fromSDK(_: MsgVoteWeightedResponseSDKType): MsgVoteWeightedResponse {
    return {};
  },

  toSDK(_: MsgVoteWeightedResponse): MsgVoteWeightedResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgDeposit(): MsgDeposit {
  return {
    proposalId: Long.UZERO,
    depositor: "",
    amount: []
  };
}

export const MsgDeposit = {
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.depositor = reader.string();
          break;

        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: MsgDepositSDKType): MsgDeposit {
    return {
      proposalId: isSet(object.proposal_id) ? object.proposal_id : undefined,
      depositor: isSet(object.depositor) ? object.depositor : undefined,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },

  toSDK(message: MsgDeposit): MsgDepositSDKType {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposal_id = message.proposalId);
    message.depositor !== undefined && (obj.depositor = message.depositor);

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  }

};

function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}

export const MsgDepositResponse = {
  encode(_: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();

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

  fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },

  fromSDK(_: MsgDepositResponseSDKType): MsgDepositResponse {
    return {};
  },

  toSDK(_: MsgDepositResponse): MsgDepositResponseSDKType {
    const obj: any = {};
    return obj;
  }

};