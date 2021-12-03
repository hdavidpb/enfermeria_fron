import styled from "styled-components";

export const SolicitudContainer = styled.div`
  width: 100%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-column: 2/6;
  padding-right: 6rem;
  padding-top: 3.2rem;
  gap: 1rem;
  /*  */
  /*  */
  @media (max-width: 1375px) {
    padding-right: 1rem;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

export const FilterContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  grid-column: 1/4;
  gap: 1rem;
  background: #f3f4ff 0% 0% no-repeat padding-box;
  padding: 19px;
  border-radius: 5px;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 4px;

  & h6 {
    position: absolute;
    top: -18px;
    left: 10px;
    margin-bottom: 0;
    font-size: 14px;
    color: #4e5c6e;
  }

  & input {
    width: 100%;
    height: 100%;
    border: 1px solid #cccccc;
    border-radius: 4px;
    outline: none;
    padding-left: 15%;
    transition: all 100ms;

    &:focus {
      border: solid 1px #2684ff;
      box-shadow: 0 0 0 1px #2684ff;
    }
  }
`;

export const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 9px;
  left: 9px;
  color: gray;
`;

export const CreateBtn = styled.button`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: #4e5c6e 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  gap: 6px;
  padding: 10px;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  & p {
    width: auto;
    margin-bottom: 0;
    font-size: 15px;
    color: #ffffff;
  }
`;

export const TableContaienr = styled.div`
  width: 100%;
  height: 68vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const TitlesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 6px;
`;

export const TableListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cdcffe;
    border-radius: 6px;
  }
`;

export const ItemListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  align-items: center;
  gap: 1rem;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 11px;
`;

export const TitleDesc = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border-radius: 6px;
  background: #cdcffe;
  margin-bottom: 0;
`;

export const ListDesc = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-word;
  flex-wrap: wrap;
  margin-bottom: 0;
  color: #617187;
  font-size: 14px;
  padding: 16px;
`;
