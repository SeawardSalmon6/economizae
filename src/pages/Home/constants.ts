import { MarketModel } from "~types/models/market/types";
import MARKETS_JSON from "~assets/json/markets.json";

export const MARKETS: MarketModel[] = MARKETS_JSON;

export const FEATURED_MARKETS = [...MARKETS];
export const BASIC_BASKET_ITEMS = [
  {
    ...MARKETS[1],
    price: "Aqui a cesta básica fica por R$ 129,03",
  },
  {
    ...MARKETS[0],
    price: "Aqui a cesta básica fica por R$ 129,03",
  },
  {
    ...MARKETS[2],
    price: "Aqui a cesta básica fica por R$ 129,03",
  },
];
