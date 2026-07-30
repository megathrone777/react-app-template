export type TOverviewStoreState = {
  isLoading: boolean;
  logs: object[];
};

type TOverviewStoreActions = {
  loadLogs: () => Promise<void>;
};

export type TOverviewStore = TOverviewStoreState & TOverviewStoreActions;
