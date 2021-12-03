import React from "react";
import * as sc from "../../styles";
import FilterTable from "../FilterTable";
import GoBack from "../GoBack";
import HeaderOptions from "../HeaderOptions";
import NavbarOrdersType from "../NavbarOrdersType";
import OrdersTable from "../OrdersTable";

const NutricionesParenterales = () => {
  return (
    <sc.PatientOrderDetailContainer>
      <GoBack />

      <HeaderOptions />
      <NavbarOrdersType />
      <FilterTable />
      <OrdersTable />
    </sc.PatientOrderDetailContainer>
  );
};

export default NutricionesParenterales;
