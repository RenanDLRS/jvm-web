import React, { useEffect } from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import { PublicRoutes } from "./RoutesEnum";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={PublicRoutes.home} element={<HomePage />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
