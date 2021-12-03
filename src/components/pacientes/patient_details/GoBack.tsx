import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import * as sc from "../styles";

const GoBack = () => {
  return (
    <sc.GoBackContainer>
      <sc.GoBackBtn to="/enfermeria/pacientes">
        <RiArrowLeftSLine size={18} />
        <p>Regresar</p>
      </sc.GoBackBtn>
    </sc.GoBackContainer>
  );
};

export default GoBack;
