import type { StoreApi } from "zustand/vanilla";

declare global {
  type TRouteLoaderStore<S> = {
    store: StoreApi<S>;
  };
}

export {};
