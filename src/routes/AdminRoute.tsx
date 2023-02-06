import React from "react";
import { Switch, Route } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import ManageProducts from "../pages/ManageProducts";
import ManageOrderDetail from "../pages/ManageOrderDetail";
import ManageOrders from "../pages/ManageOrders";

interface Props {}

const AdminRoute: React.FC<Props> = () => {
  return (
    <>
      <Switch>
        <Route path={"/admin/manage-products"}>
          <ManageProducts />
        </Route>
        <Route path={"/admin/manage-orders/:id"}>
          <ManageOrderDetail />
        </Route>
        <Route path={"/admin/manage-orders"}>
          <ManageOrders />
        </Route>
        <Route path={"/admin/manage-users"}>
          <ManageOrders />
        </Route>
        <Route path={"*"}>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
};

export default AdminRoute;
