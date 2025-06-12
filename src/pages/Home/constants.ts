import { MarketModel } from "~types/models/market/types";
import { ProductModel } from "~types/models/product/types";
import MARKETS_JSON from "~assets/json/markets.json";
import PRODUCTS_JSON from "~assets/json/products.json";


export const MARKETS: MarketModel[] = MARKETS_JSON;

export const PRODUCTS: ProductModel[] = PRODUCTS_JSON;
export const BASIC_BASKET_PRODUCTS = [...PRODUCTS_JSON]

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
