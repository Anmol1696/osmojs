import { CoinGeckoToken, CoinDenom, Exponent, CoinSymbol, PriceHash, CoinGeckoUSDResponse } from "./types";
import { Asset as OsmosisAsset } from "@chain-registry/types";
export declare const getOsmoAssetByDenom: (denom: CoinDenom) => OsmosisAsset;
export declare const getDenomForCoinGeckoId: (coinGeckoId: CoinGeckoToken) => CoinDenom;
export declare const osmoDenomToSymbol: (denom: CoinDenom) => CoinSymbol;
export declare const symbolToOsmoDenom: (token: CoinSymbol) => CoinDenom;
export declare const getExponentByDenom: (denom: CoinDenom) => Exponent;
export declare const convertGeckoPricesToDenomPriceHash: (prices: CoinGeckoUSDResponse) => PriceHash;
export declare const noDecimals: (num: number | string) => string;
export declare const baseUnitsToDollarValue: (prices: PriceHash, symbol: string, amount: string | number) => string;
export declare const dollarValueToDenomUnits: (prices: PriceHash, symbol: string, value: string | number) => string;
export declare const baseUnitsToDisplayUnits: (symbol: string, amount: string | number) => string;