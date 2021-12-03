import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import Select from "react-select";
import * as sc from "./styles";

const FilterTable = () => {
  return (
    <sc.FilterContainer>
      <sc.InputContainer>
        <h1>Filtar por pabellón</h1>
        <Select options={[]} />
      </sc.InputContainer>
      <sc.InputContainer>
        <h1>Filtar por paciente</h1>
        <sc.IconContainer>
          <BiSearchAlt />
        </sc.IconContainer>
        <input type="text" placeholder="Buscar" />
      </sc.InputContainer>
      <sc.InputContainer button={true}>
        <button>Buscar</button>
      </sc.InputContainer>
    </sc.FilterContainer>
  );
};

export default FilterTable;
