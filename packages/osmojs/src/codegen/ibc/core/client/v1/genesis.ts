import { IdentifiedClientState, IdentifiedClientStateSDKType, ClientConsensusStates, ClientConsensusStatesSDKType, Params, ParamsSDKType } from "./client";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial, isSet } from "@osmonauts/helpers";
/** GenesisState defines the ibc client submodule's genesis state. */

export interface GenesisState {
  /** client states with their corresponding identifiers */
  clients: IdentifiedClientState[];
  /** consensus states from each client */

  clientsConsensus: ClientConsensusStates[];
  /** metadata from each client */

  clientsMetadata: IdentifiedGenesisMetadata[];
  params: Params;
  /** create localhost on initialization */

  createLocalhost: boolean;
  /** the sequence for the next generated client identifier */

  nextClientSequence: Long;
}
/** GenesisState defines the ibc client submodule's genesis state. */

export interface GenesisStateSDKType {
  /** client states with their corresponding identifiers */
  clients: IdentifiedClientStateSDKType[];
  /** consensus states from each client */

  clients_consensus: ClientConsensusStatesSDKType[];
  /** metadata from each client */

  clients_metadata: IdentifiedGenesisMetadataSDKType[];
  params: ParamsSDKType;
  /** create localhost on initialization */

  create_localhost: boolean;
  /** the sequence for the next generated client identifier */

  next_client_sequence: Long;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */

export interface GenesisMetadata {
  /** store key of metadata without clientID-prefix */
  key: Uint8Array;
  /** metadata value */

  value: Uint8Array;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */

export interface GenesisMetadataSDKType {
  /** store key of metadata without clientID-prefix */
  key: Uint8Array;
  /** metadata value */

  value: Uint8Array;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */

export interface IdentifiedGenesisMetadata {
  clientId: string;
  clientMetadata: GenesisMetadata[];
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */

export interface IdentifiedGenesisMetadataSDKType {
  client_id: string;
  client_metadata: GenesisMetadataSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    clients: [],
    clientsConsensus: [],
    clientsMetadata: [],
    params: undefined,
    createLocalhost: false,
    nextClientSequence: Long.UZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.clients) {
      IdentifiedClientState.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.clientsConsensus) {
      ClientConsensusStates.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.clientsMetadata) {
      IdentifiedGenesisMetadata.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }

    if (message.createLocalhost === true) {
      writer.uint32(40).bool(message.createLocalhost);
    }

    if (!message.nextClientSequence.isZero()) {
      writer.uint32(48).uint64(message.nextClientSequence);
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
          message.clients.push(IdentifiedClientState.decode(reader, reader.uint32()));
          break;

        case 2:
          message.clientsConsensus.push(ClientConsensusStates.decode(reader, reader.uint32()));
          break;

        case 3:
          message.clientsMetadata.push(IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
          break;

        case 4:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 5:
          message.createLocalhost = reader.bool();
          break;

        case 6:
          message.nextClientSequence = (reader.uint64() as Long);
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
    message.clients = object.clients?.map(e => IdentifiedClientState.fromPartial(e)) || [];
    message.clientsConsensus = object.clientsConsensus?.map(e => ClientConsensusStates.fromPartial(e)) || [];
    message.clientsMetadata = object.clientsMetadata?.map(e => IdentifiedGenesisMetadata.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.createLocalhost = object.createLocalhost ?? false;
    message.nextClientSequence = object.nextClientSequence !== undefined && object.nextClientSequence !== null ? Long.fromValue(object.nextClientSequence) : Long.UZERO;
    return message;
  },

  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      clients: Array.isArray(object?.clients) ? object.clients.map((e: any) => IdentifiedClientState.fromSDK(e)) : [],
      clientsConsensus: Array.isArray(object?.clients_consensus) ? object.clients_consensus.map((e: any) => ClientConsensusStates.fromSDK(e)) : [],
      clientsMetadata: Array.isArray(object?.clients_metadata) ? object.clients_metadata.map((e: any) => IdentifiedGenesisMetadata.fromSDK(e)) : [],
      params: isSet(object.params) ? Params.fromSDK(object.params) : undefined,
      createLocalhost: isSet(object.create_localhost) ? object.create_localhost : undefined,
      nextClientSequence: isSet(object.next_client_sequence) ? object.next_client_sequence : undefined
    };
  },

  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};

    if (message.clients) {
      obj.clients = message.clients.map(e => e ? IdentifiedClientState.toSDK(e) : undefined);
    } else {
      obj.clients = [];
    }

    if (message.clientsConsensus) {
      obj.clients_consensus = message.clientsConsensus.map(e => e ? ClientConsensusStates.toSDK(e) : undefined);
    } else {
      obj.clients_consensus = [];
    }

    if (message.clientsMetadata) {
      obj.clients_metadata = message.clientsMetadata.map(e => e ? IdentifiedGenesisMetadata.toSDK(e) : undefined);
    } else {
      obj.clients_metadata = [];
    }

    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    message.createLocalhost !== undefined && (obj.create_localhost = message.createLocalhost);
    message.nextClientSequence !== undefined && (obj.next_client_sequence = message.nextClientSequence);
    return obj;
  }

};

function createBaseGenesisMetadata(): GenesisMetadata {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}

export const GenesisMetadata = {
  encode(message: GenesisMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisMetadata>): GenesisMetadata {
    const message = createBaseGenesisMetadata();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },

  fromSDK(object: GenesisMetadataSDKType): GenesisMetadata {
    return {
      key: isSet(object.key) ? object.key : undefined,
      value: isSet(object.value) ? object.value : undefined
    };
  },

  toSDK(message: GenesisMetadata): GenesisMetadataSDKType {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  }

};

function createBaseIdentifiedGenesisMetadata(): IdentifiedGenesisMetadata {
  return {
    clientId: "",
    clientMetadata: []
  };
}

export const IdentifiedGenesisMetadata = {
  encode(message: IdentifiedGenesisMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }

    for (const v of message.clientMetadata) {
      GenesisMetadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedGenesisMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedGenesisMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.clientMetadata.push(GenesisMetadata.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<IdentifiedGenesisMetadata>): IdentifiedGenesisMetadata {
    const message = createBaseIdentifiedGenesisMetadata();
    message.clientId = object.clientId ?? "";
    message.clientMetadata = object.clientMetadata?.map(e => GenesisMetadata.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: IdentifiedGenesisMetadataSDKType): IdentifiedGenesisMetadata {
    return {
      clientId: isSet(object.client_id) ? object.client_id : undefined,
      clientMetadata: Array.isArray(object?.client_metadata) ? object.client_metadata.map((e: any) => GenesisMetadata.fromSDK(e)) : []
    };
  },

  toSDK(message: IdentifiedGenesisMetadata): IdentifiedGenesisMetadataSDKType {
    const obj: any = {};
    message.clientId !== undefined && (obj.client_id = message.clientId);

    if (message.clientMetadata) {
      obj.client_metadata = message.clientMetadata.map(e => e ? GenesisMetadata.toSDK(e) : undefined);
    } else {
      obj.client_metadata = [];
    }

    return obj;
  }

};