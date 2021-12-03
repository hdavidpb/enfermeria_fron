import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import GoBack from "../GoBack";

import * as sc from "../../styles";
import HeaderOptions from "../HeaderOptions";
import NavbarOrdersType from "../NavbarOrdersType";
import OrdersTable from "../OrdersTable";
import FilterTable from "../FilterTable";
const EsterilesNoOncologicos = () => {
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

export default EsterilesNoOncologicos;
