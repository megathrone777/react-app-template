import { createStore, type StoreApi } from "zustand/vanilla";

import type { TOverviewStoreState, TOverviewStore } from "./Overview.types";

const initialState: TOverviewStoreState = {
  isLoading: false,
  logs: [],
};

const createOverviewStore = (): StoreApi<TOverviewStore> =>
  createStore<TOverviewStore>((set, get) => ({
    ...initialState,

    loadLogs: async () => {
      const { isLoading } = get();

      if (isLoading) return;
      set({ isLoading: true });

      try {
        // fetch request
        set({ logs: [] });
      } catch (error) {
        console.error(error);
      } finally {
        set({ isLoading: false });
      }
    },
  }));

export { createOverviewStore };
