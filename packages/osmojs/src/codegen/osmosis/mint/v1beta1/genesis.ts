import { Minter, MinterSDKType, Params, ParamsSDKType } from "./mint";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial, isSet } from "@osmonauts/helpers";
/** GenesisState defines the mint module's genesis state. */

export interface GenesisState {
  /** minter is a space for holding current rewards information. */
  minter: Minter;
  /** params defines all the paramaters of the module. */

  params: Params;
  /** current halven period start epoch */

  halvenStartedEpoch: Long;
}
/** GenesisState defines the mint module's genesis state. */

export interface GenesisStateSDKType {
  /** minter is a space for holding current rewards information. */
  minter: MinterSDKType;
  /** params defines all the paramaters of the module. */

  params: ParamsSDKType;
  /** current halven period start epoch */

  halven_started_epoch: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    minter: undefined,
    params: undefined,
    halvenStartedEpoch: Long.ZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minter !== undefined) {
      Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }

    if (!message.halvenStartedEpoch.isZero()) {
      writer.uint32(24).int64(message.halvenStartedEpoch);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minter = Minter.decode(reader, reader.uint32());
          break;

        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 3:
          message.halvenStartedEpoch = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.minter = object.minter !== undefined && object.minter !== null ? Minter.fromPartial(object.minter) : undefined;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.halvenStartedEpoch = object.halvenStartedEpoch !== undefined && object.halvenStartedEpoch !== null ? Long.fromValue(object.halvenStartedEpoch) : Long.ZERO;
    return message;
  },

  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      minter: isSet(object.minter) ? Minter.fromSDK(object.minter) : undefined,
      params: isSet(object.params) ? Params.fromSDK(object.params) : undefined,
      halvenStartedEpoch: isSet(object.halven_started_epoch) ? object.halven_started_epoch : undefined
    };
  },

  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter ? Minter.toSDK(message.minter) : undefined);
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    message.halvenStartedEpoch !== undefined && (obj.halven_started_epoch = message.halvenStartedEpoch);
    return obj;
  }

};