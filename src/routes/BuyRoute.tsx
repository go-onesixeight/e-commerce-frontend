import React from "react";
import { Switch, Route } from "react-router-dom";
import MyCart from "../pages/MyCart";
import SelectAddress from "../pages/SelectAddress";
import Checkout from "../pages/Checkout";
import PageNotFound from "../pages/PageNotFound";

interface Props {}

const BuyRoute: React.FC<Props> = () => {
  return (
    <>
      <Switch>
        <Route path={"/buy/my-cart"}>
          <MyCart />
        </Route>
        <Route path={"/buy/select-address"}>
          <SelectAddress />
        </Route>
        <Route path={"/buy/checkout"}>
          <Checkout />
        </Route>
        <Route path={"*"}>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
};

export default BuyRoute;
