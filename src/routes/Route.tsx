import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "../pages/Products";
import Index from "../pages/Index";
import ProductDetail from "../pages/ProductDetail";
import PageNotFound from "../pages/PageNotFound";
import BuyRoute from "./BuyRoute";
import OrderRoute from "./OrderRoute";
import AdminRoute from "./AdminRoute";

interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <>
      <Switch>
        <Route path={"/buy"}>
          <BuyRoute />
        </Route>
        <Route path={"/orders"}>
          <OrderRoute />
        </Route>
        <Route path={"/admin"}>
          <AdminRoute />
        </Route>
        <Route path={"products/:id"}>
          <ProductDetail />
        </Route>
        <Route path={"/products"}>
          <Products />
        </Route>
        <Route path={"/"} exact={true}>
          <Index />
        </Route>
        <Route path={"*"}>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
