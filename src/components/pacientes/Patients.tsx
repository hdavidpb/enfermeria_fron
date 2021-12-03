import React from "react";
import Select from "react-select";
import PabillionList from "./PabillionList";
import * as sc from "./styles";

const Patients = () => {
  return (
    <sc.PatientsContainer>
      <sc.PatientsColumnContainer>
        <sc.HeaderContainer>
          <sc.TitleContainer>
            <h3>Pacientes</h3>
          </sc.TitleContainer>
        </sc.HeaderContainer>
        <sc.OptionsContainer>
          <h3>Pabellón</h3>
          <sc.SelectContainer>
            <Select options={[]} />
          </sc.SelectContainer>
        </sc.OptionsContainer>
        <PabillionList />
      </sc.PatientsColumnContainer>
    </sc.PatientsContainer>
  );
};

export default Patients;
