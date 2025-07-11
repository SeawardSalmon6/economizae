import { MarketModel } from "~types/models/market/types";

export type MarketCardProps = {
  market: MarketModel;
  onMarketClick?: (market: MarketModel) => void;
};
