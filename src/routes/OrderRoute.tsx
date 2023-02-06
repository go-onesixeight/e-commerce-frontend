import React from "react";
import { Switch, Route } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Orders from "../pages/Orders";
import OrderDetail from "../pages/OrderDetail";

interface Props {}

const OrderRoute: React.FC<Props> = () => {
  return (
    <>
      <Switch>
        <Route path={"/orders/my-orders/:id"}>
          <OrderDetail />
        </Route>
        <Route path={"/orders/my-orders"}>
          <Orders />
        </Route>
        <Route path={"*"}>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
};

export default OrderRoute;
