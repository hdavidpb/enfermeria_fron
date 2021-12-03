import { SmallIconCaontainer } from "../../globalStyles";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { BiExit } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import * as sc from "./styles";

const Sidebar = () => {
  return (
    <sc.SideBarContainer>
      <sc.ListModules>
        <NavLink
          className={({ isActive }) =>
            isActive ? "central_active_link modules__titem" : "modules__titem"
          }
          to="/enfermeria/pacientes"
          end
        >
          <sc.TitleModule>Pacientes</sc.TitleModule>
          <SmallIconCaontainer>
            <RiArrowRightSLine />
          </SmallIconCaontainer>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "central_active_link modules__titem" : "modules__titem"
          }
          to="/enfermeria/solicitud-insumos"
          end
        >
          <sc.TitleModule>Solicitud Insumos</sc.TitleModule>
          <SmallIconCaontainer>
            <RiArrowRightSLine />
          </SmallIconCaontainer>
        </NavLink>
      </sc.ListModules>

      <sc.Footer>
        <sc.ExitHeader to="/hygea">
          <p>Salir</p>
          <sc.CloseIconContainer>
            <BiExit />
          </sc.CloseIconContainer>
        </sc.ExitHeader>
        <sc.WaterMarc>Developed by LYA ELECTRONIC v:0.0.1</sc.WaterMarc>
      </sc.Footer>
    </sc.SideBarContainer>
  );
};

export default Sidebar;
