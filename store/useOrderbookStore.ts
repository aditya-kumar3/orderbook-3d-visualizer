import { create } from 'zustand';

type OrderbookState = {
  bids: any[];
  asks: any[];
  setBids: (bids: any[]) => void;
  setAsks: (asks: any[]) => void;
};

export const useOrderbookStore = create<OrderbookState>((set) => ({
  bids: [],
  asks: [],
  setBids: (bids) => set({ bids }),
  setAsks: (asks) => set({ asks }),
}));