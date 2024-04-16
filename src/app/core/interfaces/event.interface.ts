import { MarketType } from "./market.interface";

export type EventType = {
    id: string;
    name: string;
    markets: MarketType[];
};