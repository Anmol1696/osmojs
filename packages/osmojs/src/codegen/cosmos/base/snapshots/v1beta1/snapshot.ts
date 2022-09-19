import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial, isSet } from "@osmonauts/helpers";
/** Snapshot contains Tendermint state sync snapshot info. */

export interface Snapshot {
  height: Long;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: Metadata;
}
/** Snapshot contains Tendermint state sync snapshot info. */

export interface SnapshotSDKType {
  height: Long;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: MetadataSDKType;
}
/** Metadata contains SDK-specific snapshot metadata. */

export interface Metadata {
  /** SHA-256 chunk hashes */
  chunkHashes: Uint8Array[];
}
/** Metadata contains SDK-specific snapshot metadata. */

export interface MetadataSDKType {
  /** SHA-256 chunk hashes */
  chunk_hashes: Uint8Array[];
}
/** SnapshotItem is an item contained in a rootmulti.Store snapshot. */

export interface SnapshotItem {
  store?: SnapshotStoreItem;
  iavl?: SnapshotIAVLItem;
  extension?: SnapshotExtensionMeta;
  extensionPayload?: SnapshotExtensionPayload;
  kv?: SnapshotKVItem;
  schema?: SnapshotSchema;
}
/** SnapshotItem is an item contained in a rootmulti.Store snapshot. */

export interface SnapshotItemSDKType {
  store?: SnapshotStoreItemSDKType;
  iavl?: SnapshotIAVLItemSDKType;
  extension?: SnapshotExtensionMetaSDKType;
  extension_payload?: SnapshotExtensionPayloadSDKType;
  kv?: SnapshotKVItemSDKType;
  schema?: SnapshotSchemaSDKType;
}
/** SnapshotStoreItem contains metadata about a snapshotted store. */

export interface SnapshotStoreItem {
  name: string;
}
/** SnapshotStoreItem contains metadata about a snapshotted store. */

export interface SnapshotStoreItemSDKType {
  name: string;
}
/** SnapshotIAVLItem is an exported IAVL node. */

export interface SnapshotIAVLItem {
  key: Uint8Array;
  value: Uint8Array;
  /** version is block height */

  version: Long;
  /** height is depth of the tree. */

  height: number;
}
/** SnapshotIAVLItem is an exported IAVL node. */

export interface SnapshotIAVLItemSDKType {
  key: Uint8Array;
  value: Uint8Array;
  /** version is block height */

  version: Long;
  /** height is depth of the tree. */

  height: number;
}
/** SnapshotExtensionMeta contains metadata about an external snapshotter. */

export interface SnapshotExtensionMeta {
  name: string;
  format: number;
}
/** SnapshotExtensionMeta contains metadata about an external snapshotter. */

export interface SnapshotExtensionMetaSDKType {
  name: string;
  format: number;
}
/** SnapshotExtensionPayload contains payloads of an external snapshotter. */

export interface SnapshotExtensionPayload {
  payload: Uint8Array;
}
/** SnapshotExtensionPayload contains payloads of an external snapshotter. */

export interface SnapshotExtensionPayloadSDKType {
  payload: Uint8Array;
}
/** SnapshotKVItem is an exported Key/Value Pair */

export interface SnapshotKVItem {
  key: Uint8Array;
  value: Uint8Array;
}
/** SnapshotKVItem is an exported Key/Value Pair */

export interface SnapshotKVItemSDKType {
  key: Uint8Array;
  value: Uint8Array;
}
/** SnapshotSchema is an exported schema of smt store */

export interface SnapshotSchema {
  keys: Uint8Array[];
}
/** SnapshotSchema is an exported schema of smt store */

export interface SnapshotSchemaSDKType {
  keys: Uint8Array[];
}

function createBaseSnapshot(): Snapshot {
  return {
    height: Long.UZERO,
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: undefined
  };
}

export const Snapshot = {
  encode(message: Snapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }

    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }

    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }

    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }

    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = (reader.uint64() as Long);
          break;

        case 2:
          message.format = reader.uint32();
          break;

        case 3:
          message.chunks = reader.uint32();
          break;

        case 4:
          message.hash = reader.bytes();
          break;

        case 5:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Snapshot>): Snapshot {
    const message = createBaseSnapshot();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    return message;
  },

  fromSDK(object: SnapshotSDKType): Snapshot {
    return {
      height: isSet(object.height) ? object.height : undefined,
      format: isSet(object.format) ? object.format : undefined,
      chunks: isSet(object.chunks) ? object.chunks : undefined,
      hash: isSet(object.hash) ? object.hash : undefined,
      metadata: isSet(object.metadata) ? Metadata.fromSDK(object.metadata) : undefined
    };
  },

  toSDK(message: Snapshot): SnapshotSDKType {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.format !== undefined && (obj.format = message.format);
    message.chunks !== undefined && (obj.chunks = message.chunks);
    message.hash !== undefined && (obj.hash = message.hash);
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toSDK(message.metadata) : undefined);
    return obj;
  }

};

function createBaseMetadata(): Metadata {
  return {
    chunkHashes: []
  };
}

export const Metadata = {
  encode(message: Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.chunkHashes) {
      writer.uint32(10).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chunkHashes.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.chunkHashes = object.chunkHashes?.map(e => e) || [];
    return message;
  },

  fromSDK(object: MetadataSDKType): Metadata {
    return {
      chunkHashes: Array.isArray(object?.chunk_hashes) ? object.chunk_hashes.map((e: any) => e) : []
    };
  },

  toSDK(message: Metadata): MetadataSDKType {
    const obj: any = {};

    if (message.chunkHashes) {
      obj.chunk_hashes = message.chunkHashes.map(e => e);
    } else {
      obj.chunk_hashes = [];
    }

    return obj;
  }

};

function createBaseSnapshotItem(): SnapshotItem {
  return {
    store: undefined,
    iavl: undefined,
    extension: undefined,
    extensionPayload: undefined,
    kv: undefined,
    schema: undefined
  };
}

export const SnapshotItem = {
  encode(message: SnapshotItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.store !== undefined) {
      SnapshotStoreItem.encode(message.store, writer.uint32(10).fork()).ldelim();
    }

    if (message.iavl !== undefined) {
      SnapshotIAVLItem.encode(message.iavl, writer.uint32(18).fork()).ldelim();
    }

    if (message.extension !== undefined) {
      SnapshotExtensionMeta.encode(message.extension, writer.uint32(26).fork()).ldelim();
    }

    if (message.extensionPayload !== undefined) {
      SnapshotExtensionPayload.encode(message.extensionPayload, writer.uint32(34).fork()).ldelim();
    }

    if (message.kv !== undefined) {
      SnapshotKVItem.encode(message.kv, writer.uint32(42).fork()).ldelim();
    }

    if (message.schema !== undefined) {
      SnapshotSchema.encode(message.schema, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotItem();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.store = SnapshotStoreItem.decode(reader, reader.uint32());
          break;

        case 2:
          message.iavl = SnapshotIAVLItem.decode(reader, reader.uint32());
          break;

        case 3:
          message.extension = SnapshotExtensionMeta.decode(reader, reader.uint32());
          break;

        case 4:
          message.extensionPayload = SnapshotExtensionPayload.decode(reader, reader.uint32());
          break;

        case 5:
          message.kv = SnapshotKVItem.decode(reader, reader.uint32());
          break;

        case 6:
          message.schema = SnapshotSchema.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SnapshotItem>): SnapshotItem {
    const message = createBaseSnapshotItem();
    message.store = object.store !== undefined && object.store !== null ? SnapshotStoreItem.fromPartial(object.store) : undefined;
    message.iavl = object.iavl !== undefined && object.iavl !== null ? SnapshotIAVLItem.fromPartial(object.iavl) : undefined;
    message.extension = object.extension !== undefined && object.extension !== null ? SnapshotExtensionMeta.fromPartial(object.extension) : undefined;
    message.extensionPayload = object.extensionPayload !== undefined && object.extensionPayload !== null ? SnapshotExtensionPayload.fromPartial(object.extensionPayload) : undefined;
    message.kv = object.kv !== undefined && object.kv !== null ? SnapshotKVItem.fromPartial(object.kv) : undefined;
    message.schema = object.schema !== undefined && object.schema !== null ? SnapshotSchema.fromPartial(object.schema) : undefined;
    return message;
  },

  fromSDK(object: SnapshotItemSDKType): SnapshotItem {
    return {
      store: isSet(object.store) ? SnapshotStoreItem.fromSDK(object.store) : undefined,
      iavl: isSet(object.iavl) ? SnapshotIAVLItem.fromSDK(object.iavl) : undefined,
      extension: isSet(object.extension) ? SnapshotExtensionMeta.fromSDK(object.extension) : undefined,
      extensionPayload: isSet(object.extension_payload) ? SnapshotExtensionPayload.fromSDK(object.extension_payload) : undefined,
      kv: isSet(object.kv) ? SnapshotKVItem.fromSDK(object.kv) : undefined,
      schema: isSet(object.schema) ? SnapshotSchema.fromSDK(object.schema) : undefined
    };
  },

  toSDK(message: SnapshotItem): SnapshotItemSDKType {
    const obj: any = {};
    message.store !== undefined && (obj.store = message.store ? SnapshotStoreItem.toSDK(message.store) : undefined);
    message.iavl !== undefined && (obj.iavl = message.iavl ? SnapshotIAVLItem.toSDK(message.iavl) : undefined);
    message.extension !== undefined && (obj.extension = message.extension ? SnapshotExtensionMeta.toSDK(message.extension) : undefined);
    message.extensionPayload !== undefined && (obj.extension_payload = message.extensionPayload ? SnapshotExtensionPayload.toSDK(message.extensionPayload) : undefined);
    message.kv !== undefined && (obj.kv = message.kv ? SnapshotKVItem.toSDK(message.kv) : undefined);
    message.schema !== undefined && (obj.schema = message.schema ? SnapshotSchema.toSDK(message.schema) : undefined);
    return obj;
  }

};

function createBaseSnapshotStoreItem(): SnapshotStoreItem {
  return {
    name: ""
  };
}

export const SnapshotStoreItem = {
  encode(message: SnapshotStoreItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotStoreItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotStoreItem();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SnapshotStoreItem>): SnapshotStoreItem {
    const message = createBaseSnapshotStoreItem();
    message.name = object.name ?? "";
    return message;
  },

  fromSDK(object: SnapshotStoreItemSDKType): SnapshotStoreItem {
    return {
      name: isSet(object.name) ? object.name : undefined
    };
  },

  toSDK(message: SnapshotStoreItem): SnapshotStoreItemSDKType {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  }

};

function createBaseSnapshotIAVLItem(): SnapshotIAVLItem {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    version: Long.ZERO,
    height: 0
  };
}

export const SnapshotIAVLItem = {
  encode(message: SnapshotIAVLItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }

    if (!message.version.isZero()) {
      writer.uint32(24).int64(message.version);
    }

    if (message.height !== 0) {
      writer.uint32(32).int32(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotIAVLItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotIAVLItem();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        case 3:
          message.version = (reader.int64() as Long);
          break;

        case 4:
          message.height = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SnapshotIAVLItem>): SnapshotIAVLItem {
    const message = createBaseSnapshotIAVLItem();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.ZERO;
    message.height = object.height ?? 0;
    return message;
  },

  fromSDK(object: SnapshotIAVLItemSDKType): SnapshotIAVLItem {
    return {
      key: isSet(object.key) ? object.key : undefined,
      value: isSet(object.value) ? object.value : undefined,
      version: isSet(object.version) ? object.version : undefined,
      height: isSet(object.height) ? object.height : undefined
    };
  },

  toSDK(message: SnapshotIAVLItem): SnapshotIAVLItemSDKType {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    message.version !== undefined && (obj.version = message.version);
    message.height !== undefined && (obj.height = message.height);
    return obj;
  }

};

function createBaseSnapshotExtensionMeta(): SnapshotExtensionMeta {
  return {
    name: "",
    format: 0
  };
}

export const SnapshotExtensionMeta = {
  encode(message: SnapshotExtensionMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotExtensionMeta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotExtensionMeta();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.format = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SnapshotExtensionMeta>): SnapshotExtensionMeta {
    const message = createBaseSnapshotExtensionMeta();
    message.name = object.name ?? "";
    message.format = object.format ?? 0;
    return message;
  },

  fromSDK(object: SnapshotExtensionMetaSDKType): SnapshotExtensionMeta {
    return {
      name: isSet(object.name) ? object.name : undefined,
      format: isSet(object.format) ? object.format : undefined
    };
  },

  toSDK(message: SnapshotExtensionMeta): SnapshotExtensionMetaSDKType {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.format !== undefined && (obj.format = message.format);
    return obj;
  }

};

function createBaseSnapshotExtensionPayload(): SnapshotExtensionPayload {
  return {
    payload: new Uint8Array()
  };
}

export const SnapshotExtensionPayload = {
  encode(message: SnapshotExtensionPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload.length !== 0) {
      writer.uint32(10).bytes(message.payload);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotExtensionPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotExtensionPayload();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.payload = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SnapshotExtensionPayload>): SnapshotExtensionPayload {
    const message = createBaseSnapshotExtensionPayload();
    message.payload = object.payload ?? new Uint8Array();
    return message;
  },

  fromSDK(object: SnapshotExtensionPayloadSDKType): SnapshotExtensionPayload {
    return {
      payload: isSet(object.payload) ? object.payload : undefined
    };
  },

  toSDK(message: SnapshotExtensionPayload): SnapshotExtensionPayloadSDKType {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  }

};

function createBaseSnapshotKVItem(): SnapshotKVItem {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}

export const SnapshotKVItem = {
  encode(message: SnapshotKVItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotKVItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotKVItem();

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

  fromPartial(object: DeepPartial<SnapshotKVItem>): SnapshotKVItem {
    const message = createBaseSnapshotKVItem();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },

  fromSDK(object: SnapshotKVItemSDKType): SnapshotKVItem {
    return {
      key: isSet(object.key) ? object.key : undefined,
      value: isSet(object.value) ? object.value : undefined
    };
  },

  toSDK(message: SnapshotKVItem): SnapshotKVItemSDKType {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  }

};

function createBaseSnapshotSchema(): SnapshotSchema {
  return {
    keys: []
  };
}

export const SnapshotSchema = {
  encode(message: SnapshotSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keys) {
      writer.uint32(10).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotSchema();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.keys.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SnapshotSchema>): SnapshotSchema {
    const message = createBaseSnapshotSchema();
    message.keys = object.keys?.map(e => e) || [];
    return message;
  },

  fromSDK(object: SnapshotSchemaSDKType): SnapshotSchema {
    return {
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => e) : []
    };
  },

  toSDK(message: SnapshotSchema): SnapshotSchemaSDKType {
    const obj: any = {};

    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = [];
    }

    return obj;
  }

};