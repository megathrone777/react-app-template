import { createOverviewStore, type TOverviewStore } from "@/store";

import type { LoaderFunction } from "react-router";

export const overviewLoader: LoaderFunction = async (): Promise<
  TRouteLoaderStore<TOverviewStore>
> => {
  const store = createOverviewStore();

  void store.getState().loadLogs();

  return { store };
};
