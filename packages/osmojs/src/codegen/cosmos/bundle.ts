import * as _0 from "./ics23/v1/proofs";
import * as _1 from "./auth/v1beta1/auth";
import * as _2 from "./auth/v1beta1/genesis";
import * as _3 from "./auth/v1beta1/query";
import * as _4 from "./authz/v1beta1/authz";
import * as _5 from "./authz/v1beta1/event";
import * as _6 from "./authz/v1beta1/genesis";
import * as _7 from "./authz/v1beta1/query";
import * as _8 from "./authz/v1beta1/tx";
import * as _9 from "./bank/v1beta1/authz";
import * as _10 from "./bank/v1beta1/bank";
import * as _11 from "./bank/v1beta1/genesis";
import * as _12 from "./bank/v1beta1/query";
import * as _13 from "./bank/v1beta1/tx";
import * as _14 from "./base/abci/v1beta1/abci";
import * as _15 from "./base/node/v1beta1/query";
import * as _16 from "./base/query/v1beta1/pagination";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/v1beta1/coin";
import * as _19 from "./crypto/ed25519/keys";
import * as _20 from "./crypto/multisig/keys";
import * as _21 from "./crypto/secp256k1/keys";
import * as _22 from "./crypto/secp256r1/keys";
import * as _23 from "./distribution/v1beta1/distribution";
import * as _24 from "./distribution/v1beta1/genesis";
import * as _25 from "./distribution/v1beta1/query";
import * as _26 from "./distribution/v1beta1/tx";
import * as _27 from "./gov/v1beta1/genesis";
import * as _28 from "./gov/v1beta1/gov";
import * as _29 from "./gov/v1beta1/query";
import * as _30 from "./gov/v1beta1/tx";
import * as _31 from "./staking/v1beta1/authz";
import * as _32 from "./staking/v1beta1/genesis";
import * as _33 from "./staking/v1beta1/query";
import * as _34 from "./staking/v1beta1/staking";
import * as _35 from "./staking/v1beta1/tx";
import * as _36 from "./tx/signing/v1beta1/signing";
import * as _37 from "./tx/v1beta1/service";
import * as _38 from "./tx/v1beta1/tx";
import * as _39 from "./upgrade/v1beta1/query";
import * as _40 from "./upgrade/v1beta1/upgrade";
import * as _188 from "./authz/v1beta1/tx.amino";
import * as _189 from "./bank/v1beta1/tx.amino";
import * as _190 from "./distribution/v1beta1/tx.amino";
import * as _191 from "./gov/v1beta1/tx.amino";
import * as _192 from "./staking/v1beta1/tx.amino";
import * as _193 from "./authz/v1beta1/tx.registry";
import * as _194 from "./bank/v1beta1/tx.registry";
import * as _195 from "./distribution/v1beta1/tx.registry";
import * as _196 from "./gov/v1beta1/tx.registry";
import * as _197 from "./staking/v1beta1/tx.registry";
import * as _198 from "./auth/v1beta1/query.lcd";
import * as _199 from "./authz/v1beta1/query.lcd";
import * as _200 from "./bank/v1beta1/query.lcd";
import * as _201 from "./base/node/v1beta1/query.lcd";
import * as _202 from "./distribution/v1beta1/query.lcd";
import * as _203 from "./gov/v1beta1/query.lcd";
import * as _204 from "./staking/v1beta1/query.lcd";
import * as _205 from "./tx/v1beta1/service.lcd";
import * as _206 from "./upgrade/v1beta1/query.lcd";
import * as _207 from "./auth/v1beta1/query.rpc.Query";
import * as _208 from "./authz/v1beta1/query.rpc.Query";
import * as _209 from "./bank/v1beta1/query.rpc.Query";
import * as _210 from "./base/node/v1beta1/query.rpc.Service";
import * as _211 from "./distribution/v1beta1/query.rpc.Query";
import * as _212 from "./gov/v1beta1/query.rpc.Query";
import * as _213 from "./staking/v1beta1/query.rpc.Query";
import * as _214 from "./tx/v1beta1/service.rpc.Service";
import * as _215 from "./upgrade/v1beta1/query.rpc.Query";
import * as _216 from "./authz/v1beta1/tx.rpc.msg";
import * as _217 from "./bank/v1beta1/tx.rpc.msg";
import * as _218 from "./distribution/v1beta1/tx.rpc.msg";
import * as _219 from "./gov/v1beta1/tx.rpc.msg";
import * as _220 from "./staking/v1beta1/tx.rpc.msg";
import * as _330 from "./lcd";
import * as _331 from "./rpc.query";
import * as _332 from "./rpc.tx";
export namespace cosmos {
  export namespace ics23 {
    export const v1 = { ..._0
    };
  }
  export namespace auth {
    export const v1beta1 = { ..._1,
      ..._2,
      ..._3,
      ..._198,
      ..._207
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._188,
      ..._193,
      ..._199,
      ..._208,
      ..._216
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._189,
      ..._194,
      ..._200,
      ..._209,
      ..._217
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._14
      };
    }
    export namespace node {
      export const v1beta1 = { ..._15,
        ..._201,
        ..._210
      };
    }
    export namespace query {
      export const v1beta1 = { ..._16
      };
    }
    export namespace reflection {
      export const v2alpha1 = { ..._17
      };
    }
    export const v1beta1 = { ..._18
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._19
    };
    export const multisig = { ..._20
    };
    export const secp256k1 = { ..._21
    };
    export const secp256r1 = { ..._22
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._190,
      ..._195,
      ..._202,
      ..._211,
      ..._218
    };
  }
  export namespace gov {
    export const v1beta1 = { ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._191,
      ..._196,
      ..._203,
      ..._212,
      ..._219
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._192,
      ..._197,
      ..._204,
      ..._213,
      ..._220
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._36
      };
    }
    export const v1beta1 = { ..._37,
      ..._38,
      ..._205,
      ..._214
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._39,
      ..._40,
      ..._206,
      ..._215
    };
  }
  export const ClientFactory = { ..._330,
    ..._331,
    ..._332
  };
}