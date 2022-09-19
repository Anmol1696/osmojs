import { LCDClient } from "@osmonauts/lcd";
import { ModuleBalanceRequest, ModuleBalanceResponseSDKType, ModuleLockedAmountRequest, ModuleLockedAmountResponseSDKType, AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponseSDKType, AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponseSDKType, AccountLockedCoinsRequest, AccountLockedCoinsResponseSDKType, AccountLockedPastTimeRequest, AccountLockedPastTimeResponseSDKType, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponseSDKType, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponseSDKType, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponseSDKType, LockedDenomRequest, LockedDenomResponseSDKType, LockedRequest, LockedResponseSDKType, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponseSDKType, AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponseSDKType, AccountLockedDurationRequest, AccountLockedDurationResponseSDKType, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponseSDKType } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }
  /* Return full balance of the module */


  async moduleBalance(_params: ModuleBalanceRequest = {}): Promise<ModuleBalanceResponseSDKType> {
    const endpoint = `osmosis/lockup/v1beta1/module_balance`;
    return await this.get<ModuleBalanceResponseSDKType>(endpoint);
  }
  /* Return locked balance of the module */


  async moduleLockedAmount(_params: ModuleLockedAmountRequest = {}): Promise<ModuleLockedAmountResponseSDKType> {
    const endpoint = `osmosis/lockup/v1beta1/module_locked_amount`;
    return await this.get<ModuleLockedAmountResponseSDKType>(endpoint);
  }
  /* Returns unlockable coins which are not withdrawn yet */


  async accountUnlockableCoins(params: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponseSDKType> {
    const endpoint = `osmosis/lockup/v1beta1/account_unlockable_coins/${params.owner}`;
    return await this.get<AccountUnlockableCoinsResponseSDKType>(endpoint);
  }
  /* Returns unlocking coins */


  async accountUnlockingCoins(params: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponseSDKType> {
    const endpoint = `osmosis/lockup/v1beta1/account_unlocking_coins/${params.owner}`;
    return await this.get<AccountUnlockingCoinsResponseSDKType>(endpoint);
  }
  /* Return a locked coins that can't be withdrawn */


  async accountLockedCoins(params: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponseSDKType> {
    const endpoint = `osmosis/lockup/v1beta1/account_locked_coins/${params.owner}`;
    return await this.get<AccountLockedCoinsResponseSDKType>(endpoint);
  }
  /* Returns locked records of an account with unlock time beyond timestamp */


  async accountLockedPastTime(params: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.timestamp !== "undefined") {
      options.params.timestamp = params.timestamp;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_pasttime/${params.owner}`;
    return await this.get<AccountLockedPastTimeResponseSDKType>(endpoint, options);
  }
  /* Returns locked records of an account with unlock time beyond timestamp
  excluding tokens started unlocking */


  async accountLockedPastTimeNotUnlockingOnly(params: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.timestamp !== "undefined") {
      options.params.timestamp = params.timestamp;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_pasttime_not_unlocking_only/${params.owner}`;
    return await this.get<AccountLockedPastTimeNotUnlockingOnlyResponseSDKType>(endpoint, options);
  }
  /* Returns unlocked records with unlock time before timestamp */


  async accountUnlockedBeforeTime(params: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.timestamp !== "undefined") {
      options.params.timestamp = params.timestamp;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_unlocked_before_time/${params.owner}`;
    return await this.get<AccountUnlockedBeforeTimeResponseSDKType>(endpoint, options);
  }
  /* Returns lock records by address, timestamp, denom */


  async accountLockedPastTimeDenom(params: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.timestamp !== "undefined") {
      options.params.timestamp = params.timestamp;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_pasttime_denom/${params.owner}`;
    return await this.get<AccountLockedPastTimeDenomResponseSDKType>(endpoint, options);
  }
  /* Returns total locked per denom with longer past given time */


  async lockedDenom(params: LockedDenomRequest): Promise<LockedDenomResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }

    const endpoint = `osmosis/lockup/v1beta1/locked_denom`;
    return await this.get<LockedDenomResponseSDKType>(endpoint, options);
  }
  /* Returns lock record by id */


  async lockedByID(params: LockedRequest): Promise<LockedResponseSDKType> {
    const endpoint = `osmosis/lockup/v1beta1/locked_by_id/${params.lockId}`;
    return await this.get<LockedResponseSDKType>(endpoint);
  }
  /* Returns synthetic lockups by native lockup id */


  async syntheticLockupsByLockupID(params: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponseSDKType> {
    const endpoint = `osmosis/lockup/v1beta1/synthetic_lockups_by_lock_id/${params.lockId}`;
    return await this.get<SyntheticLockupsByLockupIDResponseSDKType>(endpoint);
  }
  /* Returns account locked records with longer duration */


  async accountLockedLongerDuration(params: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_longer_duration/${params.owner}`;
    return await this.get<AccountLockedLongerDurationResponseSDKType>(endpoint, options);
  }
  /* Returns account locked records with a specific duration */


  async accountLockedDuration(params: AccountLockedDurationRequest): Promise<AccountLockedDurationResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_duration/${params.owner}`;
    return await this.get<AccountLockedDurationResponseSDKType>(endpoint, options);
  }
  /* Returns account locked records with longer duration excluding tokens
  started unlocking */


  async accountLockedLongerDurationNotUnlockingOnly(params: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_longer_duration_not_unlocking_only/${params.owner}`;
    return await this.get<AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType>(endpoint, options);
  }
  /* Returns account's locked records for a denom with longer duration */


  async accountLockedLongerDurationDenom(params: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_longer_duration_denom/${params.owner}`;
    return await this.get<AccountLockedLongerDurationDenomResponseSDKType>(endpoint, options);
  }

}