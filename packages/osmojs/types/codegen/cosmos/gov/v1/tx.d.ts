import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, VoteOptionSDKType, WeightedVoteOption, WeightedVoteOptionSDKType } from "./gov";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
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
export interface MsgExecLegacyContentResponse {
}
/** MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type. */
export interface MsgExecLegacyContentResponseSDKType {
}
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
export interface MsgVoteResponse {
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponseSDKType {
}
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
export interface MsgVoteWeightedResponse {
}
/** MsgVoteWeightedResponse defines the Msg/VoteWeighted response type. */
export interface MsgVoteWeightedResponseSDKType {
}
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
export interface MsgDepositResponse {
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {
}
export declare const MsgSubmitProposal: {
    encode(message: MsgSubmitProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal;
    fromPartial(object: DeepPartial<MsgSubmitProposal>): MsgSubmitProposal;
    fromSDK(object: MsgSubmitProposalSDKType): MsgSubmitProposal;
    toSDK(message: MsgSubmitProposal): MsgSubmitProposalSDKType;
};
export declare const MsgSubmitProposalResponse: {
    encode(message: MsgSubmitProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposalResponseSDKType;
    fromPartial(object: DeepPartial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse;
    fromSDK(object: MsgSubmitProposalResponseSDKType): MsgSubmitProposalResponse;
    toSDK(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseSDKType;
};
export declare const MsgExecLegacyContent: {
    encode(message: MsgExecLegacyContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecLegacyContent;
    fromPartial(object: DeepPartial<MsgExecLegacyContent>): MsgExecLegacyContent;
    fromSDK(object: MsgExecLegacyContentSDKType): MsgExecLegacyContent;
    toSDK(message: MsgExecLegacyContent): MsgExecLegacyContentSDKType;
};
export declare const MsgExecLegacyContentResponse: {
    encode(_: MsgExecLegacyContentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecLegacyContentResponseSDKType;
    fromPartial(_: DeepPartial<MsgExecLegacyContentResponse>): MsgExecLegacyContentResponse;
    fromSDK(_: MsgExecLegacyContentResponseSDKType): MsgExecLegacyContentResponse;
    toSDK(_: MsgExecLegacyContentResponse): MsgExecLegacyContentResponseSDKType;
};
export declare const MsgVote: {
    encode(message: MsgVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVote;
    fromPartial(object: DeepPartial<MsgVote>): MsgVote;
    fromSDK(object: MsgVoteSDKType): MsgVote;
    toSDK(message: MsgVote): MsgVoteSDKType;
};
export declare const MsgVoteResponse: {
    encode(_: MsgVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteResponseSDKType;
    fromPartial(_: DeepPartial<MsgVoteResponse>): MsgVoteResponse;
    fromSDK(_: MsgVoteResponseSDKType): MsgVoteResponse;
    toSDK(_: MsgVoteResponse): MsgVoteResponseSDKType;
};
export declare const MsgVoteWeighted: {
    encode(message: MsgVoteWeighted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteWeighted;
    fromPartial(object: DeepPartial<MsgVoteWeighted>): MsgVoteWeighted;
    fromSDK(object: MsgVoteWeightedSDKType): MsgVoteWeighted;
    toSDK(message: MsgVoteWeighted): MsgVoteWeightedSDKType;
};
export declare const MsgVoteWeightedResponse: {
    encode(_: MsgVoteWeightedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteWeightedResponseSDKType;
    fromPartial(_: DeepPartial<MsgVoteWeightedResponse>): MsgVoteWeightedResponse;
    fromSDK(_: MsgVoteWeightedResponseSDKType): MsgVoteWeightedResponse;
    toSDK(_: MsgVoteWeightedResponse): MsgVoteWeightedResponseSDKType;
};
export declare const MsgDeposit: {
    encode(message: MsgDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit;
    fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit;
    fromSDK(object: MsgDepositSDKType): MsgDeposit;
    toSDK(message: MsgDeposit): MsgDepositSDKType;
};
export declare const MsgDepositResponse: {
    encode(_: MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponseSDKType;
    fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse;
    fromSDK(_: MsgDepositResponseSDKType): MsgDepositResponse;
    toSDK(_: MsgDepositResponse): MsgDepositResponseSDKType;
};