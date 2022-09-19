import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "@osmonauts/helpers";
/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */

export interface ListAllInterfacesRequest {}
/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */

export interface ListAllInterfacesRequestSDKType {}
/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */

export interface ListAllInterfacesResponse {
  /** interface_names is an array of all the registered interfaces. */
  interfaceNames: string[];
}
/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */

export interface ListAllInterfacesResponseSDKType {
  /** interface_names is an array of all the registered interfaces. */
  interface_names: string[];
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */

export interface ListImplementationsRequest {
  /** interface_name defines the interface to query the implementations for. */
  interfaceName: string;
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */

export interface ListImplementationsRequestSDKType {
  /** interface_name defines the interface to query the implementations for. */
  interface_name: string;
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */

export interface ListImplementationsResponse {
  implementationMessageNames: string[];
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */

export interface ListImplementationsResponseSDKType {
  implementation_message_names: string[];
}

function createBaseListAllInterfacesRequest(): ListAllInterfacesRequest {
  return {};
}

export const ListAllInterfacesRequest = {
  encode(_: ListAllInterfacesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAllInterfacesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAllInterfacesRequest();

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

  fromPartial(_: DeepPartial<ListAllInterfacesRequest>): ListAllInterfacesRequest {
    const message = createBaseListAllInterfacesRequest();
    return message;
  },

  fromSDK(_: ListAllInterfacesRequestSDKType): ListAllInterfacesRequest {
    return {};
  },

  toSDK(_: ListAllInterfacesRequest): ListAllInterfacesRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseListAllInterfacesResponse(): ListAllInterfacesResponse {
  return {
    interfaceNames: []
  };
}

export const ListAllInterfacesResponse = {
  encode(message: ListAllInterfacesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.interfaceNames) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAllInterfacesResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAllInterfacesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.interfaceNames.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ListAllInterfacesResponse>): ListAllInterfacesResponse {
    const message = createBaseListAllInterfacesResponse();
    message.interfaceNames = object.interfaceNames?.map(e => e) || [];
    return message;
  },

  fromSDK(object: ListAllInterfacesResponseSDKType): ListAllInterfacesResponse {
    return {
      interfaceNames: Array.isArray(object?.interface_names) ? object.interface_names.map((e: any) => e) : []
    };
  },

  toSDK(message: ListAllInterfacesResponse): ListAllInterfacesResponseSDKType {
    const obj: any = {};

    if (message.interfaceNames) {
      obj.interface_names = message.interfaceNames.map(e => e);
    } else {
      obj.interface_names = [];
    }

    return obj;
  }

};

function createBaseListImplementationsRequest(): ListImplementationsRequest {
  return {
    interfaceName: ""
  };
}

export const ListImplementationsRequest = {
  encode(message: ListImplementationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interfaceName !== "") {
      writer.uint32(10).string(message.interfaceName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListImplementationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListImplementationsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.interfaceName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ListImplementationsRequest>): ListImplementationsRequest {
    const message = createBaseListImplementationsRequest();
    message.interfaceName = object.interfaceName ?? "";
    return message;
  },

  fromSDK(object: ListImplementationsRequestSDKType): ListImplementationsRequest {
    return {
      interfaceName: isSet(object.interface_name) ? object.interface_name : undefined
    };
  },

  toSDK(message: ListImplementationsRequest): ListImplementationsRequestSDKType {
    const obj: any = {};
    message.interfaceName !== undefined && (obj.interface_name = message.interfaceName);
    return obj;
  }

};

function createBaseListImplementationsResponse(): ListImplementationsResponse {
  return {
    implementationMessageNames: []
  };
}

export const ListImplementationsResponse = {
  encode(message: ListImplementationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.implementationMessageNames) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListImplementationsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListImplementationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.implementationMessageNames.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ListImplementationsResponse>): ListImplementationsResponse {
    const message = createBaseListImplementationsResponse();
    message.implementationMessageNames = object.implementationMessageNames?.map(e => e) || [];
    return message;
  },

  fromSDK(object: ListImplementationsResponseSDKType): ListImplementationsResponse {
    return {
      implementationMessageNames: Array.isArray(object?.implementation_message_names) ? object.implementation_message_names.map((e: any) => e) : []
    };
  },

  toSDK(message: ListImplementationsResponse): ListImplementationsResponseSDKType {
    const obj: any = {};

    if (message.implementationMessageNames) {
      obj.implementation_message_names = message.implementationMessageNames.map(e => e);
    } else {
      obj.implementation_message_names = [];
    }

    return obj;
  }

};