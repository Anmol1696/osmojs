import { DenomTrace, DenomTraceSDKType, Params, ParamsSDKType } from "./transfer";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "@osmonauts/helpers";
/** GenesisState defines the ibc-transfer genesis state */

export interface GenesisState {
  portId: string;
  denomTraces: DenomTrace[];
  params: Params;
}
/** GenesisState defines the ibc-transfer genesis state */

export interface GenesisStateSDKType {
  port_id: string;
  denom_traces: DenomTraceSDKType[];
  params: ParamsSDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    portId: "",
    denomTraces: [],
    params: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    for (const v of message.denomTraces) {
      DenomTrace.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
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
          message.portId = reader.string();
          break;

        case 2:
          message.denomTraces.push(DenomTrace.decode(reader, reader.uint32()));
          break;

        case 3:
          message.params = Params.decode(reader, reader.uint32());
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
    message.portId = object.portId ?? "";
    message.denomTraces = object.denomTraces?.map(e => DenomTrace.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },

  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      portId: isSet(object.port_id) ? object.port_id : undefined,
      denomTraces: Array.isArray(object?.denom_traces) ? object.denom_traces.map((e: any) => DenomTrace.fromSDK(e)) : [],
      params: isSet(object.params) ? Params.fromSDK(object.params) : undefined
    };
  },

  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.portId !== undefined && (obj.port_id = message.portId);

    if (message.denomTraces) {
      obj.denom_traces = message.denomTraces.map(e => e ? DenomTrace.toSDK(e) : undefined);
    } else {
      obj.denom_traces = [];
    }

    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  }

};