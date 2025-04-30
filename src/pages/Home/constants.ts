import { MarketModel } from "../../types/models/market/types";

export const MARKETS: MarketModel[] = [
  {
    id: "1",
    name: "Super Muffato Dahma",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f0c9193d81e374c2cb66a0463c55e6cc7f8109c?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88",
    rating: "4.8",
    distance: "1.7km",
    price: "Aqui sua lista fica por R$ 103,87",
  },
  {
    id: "2",
    name: "Pão de Açúcar - Dahma",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab3dee75a78cd4e8382da751a2a711f50b742988?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88",
    rating: "4.8",
    distance: "2.9km",
    price: "Aqui sua lista fica por R$ 129,03",
  },
  {
    id: "3",
    name: "Proença Supermercados",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab3dee75a78cd4e8382da751a2a711f50b742988?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88",
    rating: "4.8",
    distance: "1.7km",
    price: "Aqui sua lista fica por R$ 156,90",
  },
  {
    id: "4",
    name: "Pão de Açúcar - Dahma",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab3dee75a78cd4e8382da751a2a711f50b742988?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88",
    rating: "4.8",
    distance: "2.9km",
    price: "Aqui sua lista fica por R$ 129,03",
  },
  {
    id: "5",
    name: "Super Muffato Dahma",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f0c9193d81e374c2cb66a0463c55e6cc7f8109c?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88",
    rating: "4.8",
    distance: "1.7km",
    price: "Aqui sua lista fica por R$ 103,87",
  },
  {
    id: "6",
    name: "Proença Supermercados",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab3dee75a78cd4e8382da751a2a711f50b742988?placeholderIfAbsent=true&apiKey=d83e7b782cab4cabaa5ad67426cc8d88",
    rating: "4.8",
    distance: "1.7km",
    price: "Aqui sua lista fica por R$ 156,90",
  },
];

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
