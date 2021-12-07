import React, { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

export const Context = createContext([]);

export default function App({ data }) {
  return (
    <Context.Provider value={data}>
      <Routes>
        {routes.map(({ path, exact, component: C }) => (
          <Route key={path} path={path} exact={exact} element={<C />} />
        ))}
      </Routes>
    </Context.Provider>
  );
}
