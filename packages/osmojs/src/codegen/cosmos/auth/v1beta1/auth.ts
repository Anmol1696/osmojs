import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial, isSet } from "@osmonauts/helpers";
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */

export interface BaseAccount {
  address: string;
  pubKey: Any;
  accountNumber: Long;
  sequence: Long;
}
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */

export interface BaseAccountSDKType {
  address: string;
  pub_key: AnySDKType;
  account_number: Long;
  sequence: Long;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */

export interface ModuleAccount {
  baseAccount: BaseAccount;
  name: string;
  permissions: string[];
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */

export interface ModuleAccountSDKType {
  base_account: BaseAccountSDKType;
  name: string;
  permissions: string[];
}
/** Params defines the parameters for the auth module. */

export interface Params {
  maxMemoCharacters: Long;
  txSigLimit: Long;
  txSizeCostPerByte: Long;
  sigVerifyCostEd25519: Long;
  sigVerifyCostSecp256k1: Long;
}
/** Params defines the parameters for the auth module. */

export interface ParamsSDKType {
  max_memo_characters: Long;
  tx_sig_limit: Long;
  tx_size_cost_per_byte: Long;
  sig_verify_cost_ed25519: Long;
  sig_verify_cost_secp256k1: Long;
}

function createBaseBaseAccount(): BaseAccount {
  return {
    address: "",
    pubKey: undefined,
    accountNumber: Long.UZERO,
    sequence: Long.UZERO
  };
}

export const BaseAccount = {
  encode(message: BaseAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }

    if (!message.accountNumber.isZero()) {
      writer.uint32(24).uint64(message.accountNumber);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.accountNumber = (reader.uint64() as Long);
          break;

        case 4:
          message.sequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BaseAccount>): BaseAccount {
    const message = createBaseBaseAccount();
    message.address = object.address ?? "";
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? Long.fromValue(object.accountNumber) : Long.UZERO;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  },

  fromSDK(object: BaseAccountSDKType): BaseAccount {
    return {
      address: isSet(object.address) ? object.address : undefined,
      pubKey: isSet(object.pub_key) ? Any.fromSDK(object.pub_key) : undefined,
      accountNumber: isSet(object.account_number) ? object.account_number : undefined,
      sequence: isSet(object.sequence) ? object.sequence : undefined
    };
  },

  toSDK(message: BaseAccount): BaseAccountSDKType {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined && (obj.pub_key = message.pubKey ? Any.toSDK(message.pubKey) : undefined);
    message.accountNumber !== undefined && (obj.account_number = message.accountNumber);
    message.sequence !== undefined && (obj.sequence = message.sequence);
    return obj;
  }

};

function createBaseModuleAccount(): ModuleAccount {
  return {
    baseAccount: undefined,
    name: "",
    permissions: []
  };
}

export const ModuleAccount = {
  encode(message: ModuleAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    for (const v of message.permissions) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.permissions.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ModuleAccount>): ModuleAccount {
    const message = createBaseModuleAccount();
    message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
    message.name = object.name ?? "";
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  },

  fromSDK(object: ModuleAccountSDKType): ModuleAccount {
    return {
      baseAccount: isSet(object.base_account) ? BaseAccount.fromSDK(object.base_account) : undefined,
      name: isSet(object.name) ? object.name : undefined,
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => e) : []
    };
  },

  toSDK(message: ModuleAccount): ModuleAccountSDKType {
    const obj: any = {};
    message.baseAccount !== undefined && (obj.base_account = message.baseAccount ? BaseAccount.toSDK(message.baseAccount) : undefined);
    message.name !== undefined && (obj.name = message.name);

    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = [];
    }

    return obj;
  }

};

function createBaseParams(): Params {
  return {
    maxMemoCharacters: Long.UZERO,
    txSigLimit: Long.UZERO,
    txSizeCostPerByte: Long.UZERO,
    sigVerifyCostEd25519: Long.UZERO,
    sigVerifyCostSecp256k1: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxMemoCharacters.isZero()) {
      writer.uint32(8).uint64(message.maxMemoCharacters);
    }

    if (!message.txSigLimit.isZero()) {
      writer.uint32(16).uint64(message.txSigLimit);
    }

    if (!message.txSizeCostPerByte.isZero()) {
      writer.uint32(24).uint64(message.txSizeCostPerByte);
    }

    if (!message.sigVerifyCostEd25519.isZero()) {
      writer.uint32(32).uint64(message.sigVerifyCostEd25519);
    }

    if (!message.sigVerifyCostSecp256k1.isZero()) {
      writer.uint32(40).uint64(message.sigVerifyCostSecp256k1);
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
          message.maxMemoCharacters = (reader.uint64() as Long);
          break;

        case 2:
          message.txSigLimit = (reader.uint64() as Long);
          break;

        case 3:
          message.txSizeCostPerByte = (reader.uint64() as Long);
          break;

        case 4:
          message.sigVerifyCostEd25519 = (reader.uint64() as Long);
          break;

        case 5:
          message.sigVerifyCostSecp256k1 = (reader.uint64() as Long);
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
    message.maxMemoCharacters = object.maxMemoCharacters !== undefined && object.maxMemoCharacters !== null ? Long.fromValue(object.maxMemoCharacters) : Long.UZERO;
    message.txSigLimit = object.txSigLimit !== undefined && object.txSigLimit !== null ? Long.fromValue(object.txSigLimit) : Long.UZERO;
    message.txSizeCostPerByte = object.txSizeCostPerByte !== undefined && object.txSizeCostPerByte !== null ? Long.fromValue(object.txSizeCostPerByte) : Long.UZERO;
    message.sigVerifyCostEd25519 = object.sigVerifyCostEd25519 !== undefined && object.sigVerifyCostEd25519 !== null ? Long.fromValue(object.sigVerifyCostEd25519) : Long.UZERO;
    message.sigVerifyCostSecp256k1 = object.sigVerifyCostSecp256k1 !== undefined && object.sigVerifyCostSecp256k1 !== null ? Long.fromValue(object.sigVerifyCostSecp256k1) : Long.UZERO;
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      maxMemoCharacters: isSet(object.max_memo_characters) ? object.max_memo_characters : undefined,
      txSigLimit: isSet(object.tx_sig_limit) ? object.tx_sig_limit : undefined,
      txSizeCostPerByte: isSet(object.tx_size_cost_per_byte) ? object.tx_size_cost_per_byte : undefined,
      sigVerifyCostEd25519: isSet(object.sig_verify_cost_ed25519) ? object.sig_verify_cost_ed25519 : undefined,
      sigVerifyCostSecp256k1: isSet(object.sig_verify_cost_secp256k1) ? object.sig_verify_cost_secp256k1 : undefined
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.maxMemoCharacters !== undefined && (obj.max_memo_characters = message.maxMemoCharacters);
    message.txSigLimit !== undefined && (obj.tx_sig_limit = message.txSigLimit);
    message.txSizeCostPerByte !== undefined && (obj.tx_size_cost_per_byte = message.txSizeCostPerByte);
    message.sigVerifyCostEd25519 !== undefined && (obj.sig_verify_cost_ed25519 = message.sigVerifyCostEd25519);
    message.sigVerifyCostSecp256k1 !== undefined && (obj.sig_verify_cost_secp256k1 = message.sigVerifyCostSecp256k1);
    return obj;
  }

};