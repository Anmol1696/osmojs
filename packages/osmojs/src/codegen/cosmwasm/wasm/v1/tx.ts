import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Long } from "@osmonauts/helpers";
/** MsgStoreCode submit Wasm code to the system */

export interface MsgStoreCode {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** WASMByteCode can be raw or gzip compressed */

  wasmByteCode: Uint8Array;
  /**
   * InstantiatePermission access control to apply on contract creation,
   * optional
   */

  instantiatePermission: AccessConfig;
}
/** MsgStoreCode submit Wasm code to the system */

export interface MsgStoreCodeSDKType {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** WASMByteCode can be raw or gzip compressed */

  wasm_byte_code: Uint8Array;
  /**
   * InstantiatePermission access control to apply on contract creation,
   * optional
   */

  instantiate_permission: AccessConfigSDKType;
}
/** MsgStoreCodeResponse returns store result data. */

export interface MsgStoreCodeResponse {
  /** CodeID is the reference to the stored WASM code */
  codeId: Long;
}
/** MsgStoreCodeResponse returns store result data. */

export interface MsgStoreCodeResponseSDKType {
  /** CodeID is the reference to the stored WASM code */
  code_id: Long;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */

export interface MsgInstantiateContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Admin is an optional address that can execute migrations */

  admin: string;
  /** CodeID is the reference to the stored WASM code */

  codeId: Long;
  /** Label is optional metadata to be stored with a contract instance. */

  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: Coin[];
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */

export interface MsgInstantiateContractSDKType {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Admin is an optional address that can execute migrations */

  admin: string;
  /** CodeID is the reference to the stored WASM code */

  code_id: Long;
  /** Label is optional metadata to be stored with a contract instance. */

  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: CoinSDKType[];
}
/** MsgInstantiateContractResponse return instantiation result data */

export interface MsgInstantiateContractResponse {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains base64-encoded bytes to returned from the contract */

  data: Uint8Array;
}
/** MsgInstantiateContractResponse return instantiation result data */

export interface MsgInstantiateContractResponseSDKType {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains base64-encoded bytes to returned from the contract */

  data: Uint8Array;
}
/** MsgExecuteContract submits the given message data to a smart contract */

export interface MsgExecuteContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */

  contract: string;
  /** Msg json encoded message to be passed to the contract */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on execution */

  funds: Coin[];
}
/** MsgExecuteContract submits the given message data to a smart contract */

export interface MsgExecuteContractSDKType {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */

  contract: string;
  /** Msg json encoded message to be passed to the contract */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on execution */

  funds: CoinSDKType[];
}
/** MsgExecuteContractResponse returns execution result data. */

export interface MsgExecuteContractResponse {
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}
/** MsgExecuteContractResponse returns execution result data. */

export interface MsgExecuteContractResponseSDKType {
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */

export interface MsgMigrateContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */

  contract: string;
  /** CodeID references the new WASM code */

  codeId: Long;
  /** Msg json encoded message to be passed to the contract on migration */

  msg: Uint8Array;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */

export interface MsgMigrateContractSDKType {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */

  contract: string;
  /** CodeID references the new WASM code */

  code_id: Long;
  /** Msg json encoded message to be passed to the contract on migration */

  msg: Uint8Array;
}
/** MsgMigrateContractResponse returns contract migration result data. */

export interface MsgMigrateContractResponse {
  /**
   * Data contains same raw bytes returned as data from the wasm contract.
   * (May be empty)
   */
  data: Uint8Array;
}
/** MsgMigrateContractResponse returns contract migration result data. */

export interface MsgMigrateContractResponseSDKType {
  /**
   * Data contains same raw bytes returned as data from the wasm contract.
   * (May be empty)
   */
  data: Uint8Array;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */

export interface MsgUpdateAdmin {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** NewAdmin address to be set */

  newAdmin: string;
  /** Contract is the address of the smart contract */

  contract: string;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */

export interface MsgUpdateAdminSDKType {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** NewAdmin address to be set */

  new_admin: string;
  /** Contract is the address of the smart contract */

  contract: string;
}
/** MsgUpdateAdminResponse returns empty data */

export interface MsgUpdateAdminResponse {}
/** MsgUpdateAdminResponse returns empty data */

export interface MsgUpdateAdminResponseSDKType {}
/** MsgClearAdmin removes any admin stored for a smart contract */

export interface MsgClearAdmin {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */

  contract: string;
}
/** MsgClearAdmin removes any admin stored for a smart contract */

export interface MsgClearAdminSDKType {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */

  contract: string;
}
/** MsgClearAdminResponse returns empty data */

export interface MsgClearAdminResponse {}
/** MsgClearAdminResponse returns empty data */

export interface MsgClearAdminResponseSDKType {}

function createBaseMsgStoreCode(): MsgStoreCode {
  return {
    sender: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: undefined
  };
}

export const MsgStoreCode = {
  encode(message: MsgStoreCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
    }

    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCode();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.wasmByteCode = reader.bytes();
          break;

        case 5:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgStoreCode>): MsgStoreCode {
    const message = createBaseMsgStoreCode();
    message.sender = object.sender ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    return message;
  },

  fromSDK(object: MsgStoreCodeSDKType): MsgStoreCode {
    return {
      sender: isSet(object.sender) ? object.sender : undefined,
      wasmByteCode: isSet(object.wasm_byte_code) ? object.wasm_byte_code : undefined,
      instantiatePermission: isSet(object.instantiate_permission) ? AccessConfig.fromSDK(object.instantiate_permission) : undefined
    };
  },

  toSDK(message: MsgStoreCode): MsgStoreCodeSDKType {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.wasmByteCode !== undefined && (obj.wasm_byte_code = message.wasmByteCode);
    message.instantiatePermission !== undefined && (obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toSDK(message.instantiatePermission) : undefined);
    return obj;
  }

};

function createBaseMsgStoreCodeResponse(): MsgStoreCodeResponse {
  return {
    codeId: Long.UZERO
  };
}

export const MsgStoreCodeResponse = {
  encode(message: MsgStoreCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCodeResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCodeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgStoreCodeResponse>): MsgStoreCodeResponse {
    const message = createBaseMsgStoreCodeResponse();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    return message;
  },

  fromSDK(object: MsgStoreCodeResponseSDKType): MsgStoreCodeResponse {
    return {
      codeId: isSet(object.code_id) ? object.code_id : undefined
    };
  },

  toSDK(message: MsgStoreCodeResponse): MsgStoreCodeResponseSDKType {
    const obj: any = {};
    message.codeId !== undefined && (obj.code_id = message.codeId);
    return obj;
  }

};

function createBaseMsgInstantiateContract(): MsgInstantiateContract {
  return {
    sender: "",
    admin: "",
    codeId: Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}

export const MsgInstantiateContract = {
  encode(message: MsgInstantiateContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }

    if (!message.codeId.isZero()) {
      writer.uint32(24).uint64(message.codeId);
    }

    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }

    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.admin = reader.string();
          break;

        case 3:
          message.codeId = (reader.uint64() as Long);
          break;

        case 4:
          message.label = reader.string();
          break;

        case 5:
          message.msg = reader.bytes();
          break;

        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgInstantiateContract>): MsgInstantiateContract {
    const message = createBaseMsgInstantiateContract();
    message.sender = object.sender ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: MsgInstantiateContractSDKType): MsgInstantiateContract {
    return {
      sender: isSet(object.sender) ? object.sender : undefined,
      admin: isSet(object.admin) ? object.admin : undefined,
      codeId: isSet(object.code_id) ? object.code_id : undefined,
      label: isSet(object.label) ? object.label : undefined,
      msg: isSet(object.msg) ? object.msg : undefined,
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromSDK(e)) : []
    };
  },

  toSDK(message: MsgInstantiateContract): MsgInstantiateContractSDKType {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.admin !== undefined && (obj.admin = message.admin);
    message.codeId !== undefined && (obj.code_id = message.codeId);
    message.label !== undefined && (obj.label = message.label);
    message.msg !== undefined && (obj.msg = message.msg);

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.funds = [];
    }

    return obj;
  }

};

function createBaseMsgInstantiateContractResponse(): MsgInstantiateContractResponse {
  return {
    address: "",
    data: new Uint8Array()
  };
}

export const MsgInstantiateContractResponse = {
  encode(message: MsgInstantiateContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContractResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContractResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgInstantiateContractResponse>): MsgInstantiateContractResponse {
    const message = createBaseMsgInstantiateContractResponse();
    message.address = object.address ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },

  fromSDK(object: MsgInstantiateContractResponseSDKType): MsgInstantiateContractResponse {
    return {
      address: isSet(object.address) ? object.address : undefined,
      data: isSet(object.data) ? object.data : undefined
    };
  },

  toSDK(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseSDKType {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  }

};

function createBaseMsgExecuteContract(): MsgExecuteContract {
  return {
    sender: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}

export const MsgExecuteContract = {
  encode(message: MsgExecuteContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }

    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.contract = reader.string();
          break;

        case 3:
          message.msg = reader.bytes();
          break;

        case 5:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgExecuteContract>): MsgExecuteContract {
    const message = createBaseMsgExecuteContract();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: MsgExecuteContractSDKType): MsgExecuteContract {
    return {
      sender: isSet(object.sender) ? object.sender : undefined,
      contract: isSet(object.contract) ? object.contract : undefined,
      msg: isSet(object.msg) ? object.msg : undefined,
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromSDK(e)) : []
    };
  },

  toSDK(message: MsgExecuteContract): MsgExecuteContractSDKType {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = message.msg);

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.funds = [];
    }

    return obj;
  }

};

function createBaseMsgExecuteContractResponse(): MsgExecuteContractResponse {
  return {
    data: new Uint8Array()
  };
}

export const MsgExecuteContractResponse = {
  encode(message: MsgExecuteContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContractResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContractResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgExecuteContractResponse>): MsgExecuteContractResponse {
    const message = createBaseMsgExecuteContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },

  fromSDK(object: MsgExecuteContractResponseSDKType): MsgExecuteContractResponse {
    return {
      data: isSet(object.data) ? object.data : undefined
    };
  },

  toSDK(message: MsgExecuteContractResponse): MsgExecuteContractResponseSDKType {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    return obj;
  }

};

function createBaseMsgMigrateContract(): MsgMigrateContract {
  return {
    sender: "",
    contract: "",
    codeId: Long.UZERO,
    msg: new Uint8Array()
  };
}

export const MsgMigrateContract = {
  encode(message: MsgMigrateContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }

    if (!message.codeId.isZero()) {
      writer.uint32(24).uint64(message.codeId);
    }

    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.contract = reader.string();
          break;

        case 3:
          message.codeId = (reader.uint64() as Long);
          break;

        case 4:
          message.msg = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgMigrateContract>): MsgMigrateContract {
    const message = createBaseMsgMigrateContract();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },

  fromSDK(object: MsgMigrateContractSDKType): MsgMigrateContract {
    return {
      sender: isSet(object.sender) ? object.sender : undefined,
      contract: isSet(object.contract) ? object.contract : undefined,
      codeId: isSet(object.code_id) ? object.code_id : undefined,
      msg: isSet(object.msg) ? object.msg : undefined
    };
  },

  toSDK(message: MsgMigrateContract): MsgMigrateContractSDKType {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.codeId !== undefined && (obj.code_id = message.codeId);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  }

};

function createBaseMsgMigrateContractResponse(): MsgMigrateContractResponse {
  return {
    data: new Uint8Array()
  };
}

export const MsgMigrateContractResponse = {
  encode(message: MsgMigrateContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateContractResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContractResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgMigrateContractResponse>): MsgMigrateContractResponse {
    const message = createBaseMsgMigrateContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },

  fromSDK(object: MsgMigrateContractResponseSDKType): MsgMigrateContractResponse {
    return {
      data: isSet(object.data) ? object.data : undefined
    };
  },

  toSDK(message: MsgMigrateContractResponse): MsgMigrateContractResponseSDKType {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    return obj;
  }

};

function createBaseMsgUpdateAdmin(): MsgUpdateAdmin {
  return {
    sender: "",
    newAdmin: "",
    contract: ""
  };
}

export const MsgUpdateAdmin = {
  encode(message: MsgUpdateAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.newAdmin !== "") {
      writer.uint32(18).string(message.newAdmin);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAdmin();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.newAdmin = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateAdmin>): MsgUpdateAdmin {
    const message = createBaseMsgUpdateAdmin();
    message.sender = object.sender ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.contract = object.contract ?? "";
    return message;
  },

  fromSDK(object: MsgUpdateAdminSDKType): MsgUpdateAdmin {
    return {
      sender: isSet(object.sender) ? object.sender : undefined,
      newAdmin: isSet(object.new_admin) ? object.new_admin : undefined,
      contract: isSet(object.contract) ? object.contract : undefined
    };
  },

  toSDK(message: MsgUpdateAdmin): MsgUpdateAdminSDKType {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.newAdmin !== undefined && (obj.new_admin = message.newAdmin);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  }

};

function createBaseMsgUpdateAdminResponse(): MsgUpdateAdminResponse {
  return {};
}

export const MsgUpdateAdminResponse = {
  encode(_: MsgUpdateAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAdminResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAdminResponse();

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

  fromPartial(_: DeepPartial<MsgUpdateAdminResponse>): MsgUpdateAdminResponse {
    const message = createBaseMsgUpdateAdminResponse();
    return message;
  },

  fromSDK(_: MsgUpdateAdminResponseSDKType): MsgUpdateAdminResponse {
    return {};
  },

  toSDK(_: MsgUpdateAdminResponse): MsgUpdateAdminResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgClearAdmin(): MsgClearAdmin {
  return {
    sender: "",
    contract: ""
  };
}

export const MsgClearAdmin = {
  encode(message: MsgClearAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearAdmin();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgClearAdmin>): MsgClearAdmin {
    const message = createBaseMsgClearAdmin();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    return message;
  },

  fromSDK(object: MsgClearAdminSDKType): MsgClearAdmin {
    return {
      sender: isSet(object.sender) ? object.sender : undefined,
      contract: isSet(object.contract) ? object.contract : undefined
    };
  },

  toSDK(message: MsgClearAdmin): MsgClearAdminSDKType {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  }

};

function createBaseMsgClearAdminResponse(): MsgClearAdminResponse {
  return {};
}

export const MsgClearAdminResponse = {
  encode(_: MsgClearAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearAdminResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearAdminResponse();

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

  fromPartial(_: DeepPartial<MsgClearAdminResponse>): MsgClearAdminResponse {
    const message = createBaseMsgClearAdminResponse();
    return message;
  },

  fromSDK(_: MsgClearAdminResponseSDKType): MsgClearAdminResponse {
    return {};
  },

  toSDK(_: MsgClearAdminResponse): MsgClearAdminResponseSDKType {
    const obj: any = {};
    return obj;
  }

};