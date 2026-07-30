import React from "react";

import { Metadata } from "@/components";
import { useOverviewStore } from "@/hooks";
import { Spinner } from "@/ui";

const title: string = "Dashboard overview";

const OverviewPage: React.FC = () => {
  const { isLoading, logs } = useOverviewStore("isLoading", "logs");

  return (
    <>
      <Metadata {...{ title }} />
      <h1>{title}</h1>

      <div style={{ border: "2px solid green", padding: 10 }}>
        {isLoading ? <Spinner /> : <div>Loaded data ({logs.length})</div>}
      </div>
    </>
  );
};

export { OverviewPage };
