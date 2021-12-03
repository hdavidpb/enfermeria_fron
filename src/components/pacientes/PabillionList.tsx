import React from "react";
import { useNavigate } from "react-router-dom";
import * as sc from "./styles";

const PabillionList = () => {
  const navigate = useNavigate();

  const handleNavigate = (id: string = "1") => {
    navigate(`/enfermeria/pacientes/orders/esteriles-no-oncologicos/${id}`);
  };

  return (
    <sc.PabillionContainer>
      <h3>UCI ADULTOS 2</h3>
      <sc.PabllionBoxContainer>
        <sc.BetListContiner>
          <sc.BedContainer onClick={() => handleNavigate()}>
            <h1></h1>
            <h4>UCI01</h4>
          </sc.BedContainer>
          <sc.BedContainer onClick={() => handleNavigate()}>
            <h1></h1>
            <h4>UCI01</h4>
          </sc.BedContainer>
          <sc.BedContainer onClick={() => handleNavigate()}>
            <h1></h1>
            <h4>UCI01</h4>
          </sc.BedContainer>
          <sc.BedContainer onClick={() => handleNavigate()}>
            <h1></h1>
            <h4>UCI01</h4>
          </sc.BedContainer>
          <sc.BedContainer onClick={() => handleNavigate()}>
            <h1></h1>
            <h4>UCI01</h4>
          </sc.BedContainer>
          <sc.BedContainer onClick={() => handleNavigate()}>
            <h1></h1>
            <h4>UCI01</h4>
          </sc.BedContainer>
          <sc.BedContainer onClick={() => handleNavigate()}>
            <h1></h1>
            <h4>UCI01</h4>
          </sc.BedContainer>
          <sc.BedContainer onClick={() => handleNavigate()}>
            <h1></h1>
            <h4>UCI01</h4>
          </sc.BedContainer>
          <sc.BedContainer onClick={() => handleNavigate()}>
            <h1></h1>
            <h4>UCI01</h4>
          </sc.BedContainer>
          <sc.BedContainer onClick={() => handleNavigate()}>
            <h1></h1>
            <h4>UCI01</h4>
          </sc.BedContainer>
          <sc.BedContainer onClick={() => handleNavigate()}>
            <h1></h1>
            <h4>UCI01</h4>
          </sc.BedContainer>
          <sc.BedContainer onClick={() => handleNavigate()}>
            <h1></h1>
            <h4>UCI01</h4>
          </sc.BedContainer>
          <sc.BedContainer onClick={() => handleNavigate()}>
            <h1></h1>
            <h4>UCI01</h4>
          </sc.BedContainer>
          <sc.BedContainer onClick={() => handleNavigate()}>
            <h1></h1>
            <h4>UCI01</h4>
          </sc.BedContainer>
          <sc.BedContainer onClick={() => handleNavigate()}>
            <h1></h1>
            <h4>UCI01</h4>
          </sc.BedContainer>{" "}
          <sc.BedContainer onClick={() => handleNavigate()}>
            <h1></h1>
            <h4>UCI01</h4>
          </sc.BedContainer>
          <sc.BedContainer onClick={() => handleNavigate()}>
            <h1></h1>
            <h4>UCI01</h4>
          </sc.BedContainer>
        </sc.BetListContiner>
      </sc.PabllionBoxContainer>
    </sc.PabillionContainer>
  );
};

export default PabillionList;
