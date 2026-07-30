import React from "react";
import { NavLink, isRouteErrorResponse, useRouteError } from "react-router";

import { wrapperClass } from "./ErrorBoundary.css";

const ErrorBoundary: React.FC = () => {
  const error = useRouteError();

  const renderContent = (): React.ReactElement => {
    if (isRouteErrorResponse(error)) {
      return (
        <h1>
          {error.status} {error.statusText}
        </h1>
      );
    }

    if (error instanceof Error) {
      return (
        <>
          <h1>Error: Something went wrong</h1>
          <p>{error.message}</p>
          <p>The stack trace is:</p>
          <pre>{error.stack}</pre>
        </>
      );
    }

    return <h1>Error: Something went wrong</h1>;
  };

  return (
    <div className={wrapperClass}>
      {renderContent()}

      <p>
        <NavLink to="/">Back to main page</NavLink>
      </p>
    </div>
  );
};

export { ErrorBoundary };
