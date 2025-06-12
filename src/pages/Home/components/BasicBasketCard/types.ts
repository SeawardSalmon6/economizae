import { MarketModel } from "~types/models/market/types";

export type BasicBasketCardProps = {
  market: MarketModel;
  onMarketClick?: (market: MarketModel) => void;
};