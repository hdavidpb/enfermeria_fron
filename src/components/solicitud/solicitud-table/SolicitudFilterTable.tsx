import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import Select from "react-select";
import * as sc from "./styles";

const SolicitudFilterTable = () => {
  return (
    <sc.HeaderContainer>
      <sc.FilterContainer>
        <sc.InputContainer>
          <h6>Filtar por pabellón</h6>
          <Select options={[]} />
        </sc.InputContainer>
        <sc.InputContainer>
          <h6>Filtar por Tipo solicitud</h6>
          <Select options={[]} />
        </sc.InputContainer>
        <sc.InputContainer>
          <sc.IconContainer>
            <BiSearchAlt />
          </sc.IconContainer>
          <input type="text" placeholder="Buscar Documento ó nombre" />
        </sc.InputContainer>
      </sc.FilterContainer>
      <sc.CreateBtn>
        <HiPlus />
        <p>Crear Solicitud</p>
      </sc.CreateBtn>
    </sc.HeaderContainer>
  );
};

export default SolicitudFilterTable;
