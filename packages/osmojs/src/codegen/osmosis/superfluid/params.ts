import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "@osmonauts/helpers";
/** Params holds parameters for the superfluid module */

export interface Params {
  /**
   * the risk_factor is to be cut on OSMO equivalent value of lp tokens for
   * superfluid staking, default: 5%
   */
  minimumRiskFactor: string;
}
/** Params holds parameters for the superfluid module */

export interface ParamsSDKType {
  /**
   * the risk_factor is to be cut on OSMO equivalent value of lp tokens for
   * superfluid staking, default: 5%
   */
  minimum_risk_factor: string;
}

function createBaseParams(): Params {
  return {
    minimumRiskFactor: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minimumRiskFactor !== "") {
      writer.uint32(10).string(message.minimumRiskFactor);
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
          message.minimumRiskFactor = reader.string();
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
    message.minimumRiskFactor = object.minimumRiskFactor ?? "";
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      minimumRiskFactor: isSet(object.minimum_risk_factor) ? object.minimum_risk_factor : undefined
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.minimumRiskFactor !== undefined && (obj.minimum_risk_factor = message.minimumRiskFactor);
    return obj;
  }

};