import React from "react";
import { NavLink, useParams } from "react-router-dom";
import * as sc from "../styles";
const NavbarOrdersType = () => {
  const { id } = useParams();

  return (
    <sc.OrderTypeContainer>
      <h1>Selecciona el tipo de Órden</h1>
      <sc.OrdersOptionContainer>
        <NavLink
          to={`/enfermeria/pacientes/orders/esteriles-no-oncologicos/${id}`}
          className={({ isActive }) =>
            isActive
              ? "orderstype__link active__order__type"
              : "orderstype__link"
          }
          end
        >
          Esteriles No-Oncológicos
        </NavLink>
        <NavLink
          to={`/enfermeria/pacientes/orders/oncologicos-hospitalarios/${id}`}
          className={({ isActive }) =>
            isActive
              ? "orderstype__link active__order__type"
              : "orderstype__link"
          }
          end
        >
          Oncológicas Hospitalarias
        </NavLink>
        <NavLink
          to={`/enfermeria/pacientes/orders/oncologicos-ambulatorios/${id}`}
          className={({ isActive }) =>
            isActive
              ? "orderstype__link active__order__type"
              : "orderstype__link"
          }
          end
        >
          Oncológicas Ambulatorias
        </NavLink>
        <NavLink
          to={`/enfermeria/pacientes/orders/nutriciones-parenterales/${id}`}
          className={({ isActive }) =>
            isActive
              ? "orderstype__link active__order__type"
              : "orderstype__link"
          }
          end
        >
          Nutriciones Parenterales
        </NavLink>
      </sc.OrdersOptionContainer>
    </sc.OrderTypeContainer>
  );
};

export default NavbarOrdersType;
