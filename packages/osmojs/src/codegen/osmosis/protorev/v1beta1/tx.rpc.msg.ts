import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSetHotRoutes, MsgSetHotRoutesResponse, MsgSetDeveloperAccount, MsgSetDeveloperAccountResponse, MsgSetMaxPoolPointsPerTx, MsgSetMaxPoolPointsPerTxResponse, MsgSetMaxPoolPointsPerBlock, MsgSetMaxPoolPointsPerBlockResponse, MsgSetPoolWeights, MsgSetPoolWeightsResponse, MsgSetBaseDenoms, MsgSetBaseDenomsResponse } from "./tx";
export interface Msg {
  /**
   * SetHotRoutes sets the hot routes that will be explored when creating
   * cyclic arbitrage routes. Can only be called by the admin account.
   */
  setHotRoutes(request: MsgSetHotRoutes): Promise<MsgSetHotRoutesResponse>;
  /**
   * SetDeveloperAccount sets the account that can withdraw a portion of the
   * profits from the protorev module. This will be Skip's address.
   */

  setDeveloperAccount(request: MsgSetDeveloperAccount): Promise<MsgSetDeveloperAccountResponse>;
  /**
   * SetMaxPoolPointsPerTx sets the maximum number of pool points that can be
   * consumed per transaction. Can only be called by the admin account.
   */

  setMaxPoolPointsPerTx(request: MsgSetMaxPoolPointsPerTx): Promise<MsgSetMaxPoolPointsPerTxResponse>;
  /**
   * SetMaxPoolPointsPerBlock sets the maximum number of pool points that can be
   * consumed per block. Can only be called by the admin account.
   */

  setMaxPoolPointsPerBlock(request: MsgSetMaxPoolPointsPerBlock): Promise<MsgSetMaxPoolPointsPerBlockResponse>;
  /**
   * SetPoolWeights sets the weights of each pool type in the store. Can only be
   * called by the admin account.
   */

  setPoolWeights(request: MsgSetPoolWeights): Promise<MsgSetPoolWeightsResponse>;
  /**
   * SetBaseDenoms sets the base denoms that will be used to create cyclic
   * arbitrage routes. Can only be called by the admin account.
   */

  setBaseDenoms(request: MsgSetBaseDenoms): Promise<MsgSetBaseDenomsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setHotRoutes = this.setHotRoutes.bind(this);
    this.setDeveloperAccount = this.setDeveloperAccount.bind(this);
    this.setMaxPoolPointsPerTx = this.setMaxPoolPointsPerTx.bind(this);
    this.setMaxPoolPointsPerBlock = this.setMaxPoolPointsPerBlock.bind(this);
    this.setPoolWeights = this.setPoolWeights.bind(this);
    this.setBaseDenoms = this.setBaseDenoms.bind(this);
  }

  setHotRoutes(request: MsgSetHotRoutes): Promise<MsgSetHotRoutesResponse> {
    const data = MsgSetHotRoutes.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetHotRoutes", data);
    return promise.then(data => MsgSetHotRoutesResponse.decode(new _m0.Reader(data)));
  }

  setDeveloperAccount(request: MsgSetDeveloperAccount): Promise<MsgSetDeveloperAccountResponse> {
    const data = MsgSetDeveloperAccount.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetDeveloperAccount", data);
    return promise.then(data => MsgSetDeveloperAccountResponse.decode(new _m0.Reader(data)));
  }

  setMaxPoolPointsPerTx(request: MsgSetMaxPoolPointsPerTx): Promise<MsgSetMaxPoolPointsPerTxResponse> {
    const data = MsgSetMaxPoolPointsPerTx.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetMaxPoolPointsPerTx", data);
    return promise.then(data => MsgSetMaxPoolPointsPerTxResponse.decode(new _m0.Reader(data)));
  }

  setMaxPoolPointsPerBlock(request: MsgSetMaxPoolPointsPerBlock): Promise<MsgSetMaxPoolPointsPerBlockResponse> {
    const data = MsgSetMaxPoolPointsPerBlock.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetMaxPoolPointsPerBlock", data);
    return promise.then(data => MsgSetMaxPoolPointsPerBlockResponse.decode(new _m0.Reader(data)));
  }

  setPoolWeights(request: MsgSetPoolWeights): Promise<MsgSetPoolWeightsResponse> {
    const data = MsgSetPoolWeights.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetPoolWeights", data);
    return promise.then(data => MsgSetPoolWeightsResponse.decode(new _m0.Reader(data)));
  }

  setBaseDenoms(request: MsgSetBaseDenoms): Promise<MsgSetBaseDenomsResponse> {
    const data = MsgSetBaseDenoms.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetBaseDenoms", data);
    return promise.then(data => MsgSetBaseDenomsResponse.decode(new _m0.Reader(data)));
  }

}