import { useRouteLoaderData } from "react-router";
import { useStore } from "zustand";
import { useShallow } from "zustand/react/shallow";

import type { TOverviewStore } from "@/store";

const useOverviewStore = <K extends keyof TOverviewStore>(
  ...storeKeys: K[]
): Pick<TOverviewStore, K> => {
  const loaderData = useRouteLoaderData<TRouteLoaderStore<TOverviewStore>>("overview");

  if (!loaderData) throw new Error("useOverviewStore used outside the devices route");

  return useStore(
    loaderData.store,
    useShallow(
      (state) =>
        Object.fromEntries(storeKeys.map((key) => [key, state[key]])) as Pick<TOverviewStore, K>
    )
  );
};

export { useOverviewStore };
