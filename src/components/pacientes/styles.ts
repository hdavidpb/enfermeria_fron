import { Link } from "react-router-dom";
import styled from "styled-components";

export const PatientsContainer = styled.div`
  width: 100%;
  height: 96vh;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2/6;
  padding-right: 6rem;

  /* gap: 1rem; */

  @media (max-width: 1375px) {
    padding-right: 1rem;
  }
`;

export const PatientsColumnContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  gap: 3rem;

  @media (max-height: 768px) {
    gap: 1rem;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  border-bottom: solid 1px #80808073;

  & h3 {
    margin-bottom: 0;
    font-size: 20px;
    color: #9a9ff9;
  }
`;

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  gap: 10px;

  & h3 {
    margin-bottom: 0;
    font-size: 20px;
    color: #9a9ff9;
  }
`;

export const SelectContainer = styled.div`
  width: 250px;
`;

export const PabillionContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h3 {
    width: 100%;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    padding: 10px;
    background: #9a9ff9;
    color: #ffffff;
  }
`;

export const PabllionBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: #9a9ff9;
  }
  box-shadow: 0px 3px 6px #00000029;
`;

export const BetListContiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  gap: 10px;
  flex-wrap: wrap;
`;

export const BedContainer = styled.div`
  width: 100px;
  height: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  & h1 {
    margin-bottom: 0;
    width: 100%;
    height: 90%;
    border-bottom: solid 1px black;
    background: #9a9ff9;
    cursor: pointer;
  }

  & h3 {
    margin-bottom: 0;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-word;
  }
`;

export const PatientOrderDetailContainer = styled.div`
  width: 100%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-column: 2/6;
  padding-right: 6rem;
  padding-top: 3rem;
  gap: 1rem;

  @media (max-width: 1375px) {
    padding-right: 1rem;
  }
`;

export const GoBackContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const GoBackBtn = styled(Link)`
  padding: 8px;
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cdcffe;
  gap: 5px;
  cursor: pointer;
  text-decoration: none;

  & p {
    margin-bottom: 0;
    flex: 1;
    font-size: 15px;
    color: #3f4a59;
  }
`;

export const HeaderOptions = styled.div`
  width: 360px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;

  & button {
    width: 100%;
    border: none;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3f4a59;
    transition: all 0.4s;
    cursor: pointer;

    &:first-child {
      border-right: solid 1px #8080804a;
      border-radius: 6px 0 0 6px;
    }
    &:last-child {
      border-radius: 0 6px 6px 0;
    }
  }
`;

export const OrderTypeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & h1 {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 16px;
    margin-bottom: 0;
    color: #3f4a59;
  }
`;

export const OrdersOptionContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 16px;
  background: #ffffff 0% 0% no-repeat padding-box;
`;

export const TableOrdersContainer = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 5px;
`;

export const TitlesTableContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 16px;
  & h1 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-word;
    background: #cdcffe 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 6px;
    margin-bottom: 0;
    color: #3f4a59;
    font-size: 16px;
    padding: 7px;
  }

  & button {
    width: 100%;
    background: #86e97f 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 21px;
    border: none;
    color: #3f4a59;
    font-size: 16px;
    padding: 7px;
  }
`;

export const TableOrdersListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  padding: 10px;
  gap: 10px;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #9a9ff9;
    border-radius: 6px;
  }
`;

export const TableListItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  align-items: center;
  font-size: 15px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  padding: 10px;
  gap: 16px;
  & p {
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-word;
    padding: 5px;
    color: #617187;
  }
`;

/** CUSTOM CHECKBOX **/

export const CheckContainer = styled.div`
  margin: auto;
  width: 30px;
  height: 30px;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border: 1px solid #aaaaaa;
  border-radius: 4px;
  position: relative;

  & input {
    position: absolute;
    width: 100%;
    height: 100%;
    appearance: none;
    --webkit-appearance: none;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s;
    outline: none;

    &:hover {
      background: #a5a5a5;
    }
    &:after {
      font-family: "Font Awesome 5 Free";
      content: "\f00c";
      font-weight: bold;
      font-size: 20px;
      color: #64e85b;
      display: none;
    }

    &:checked {
      background: #f2f2f2;
    }
    &:checked::after {
      display: block;
    }
  }
  /* 
  & input::after {
    font-family: "Font Awesome 5 Free";
    content: "\f00c";
    font-weight: bold;
    font-size: 20px;
    color: #64e85b;
    display: none;
  } */

  & label {
    position: absolute;
    display: none;
    width: 100%;
    height: 100%;
    background: red;
  }
`;
