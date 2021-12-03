import styled from "styled-components";

interface IProps {
  button?: boolean;
}

export const FilterContainer = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: #f3f4ff 0% 0% no-repeat padding-box;
  border: 1px solid #9a9ff9;
  border-radius: 5px;
  padding: 1.2rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  background: ${({ button }: IProps) =>
    button ? "none" : "#ffffff 0% 0% no-repeat padding-box"};
  border: ${({ button }: IProps) => (button ? "none" : "1px solid #cccccc")};
  border-radius: 4px;

  & input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding-left: 40px;
    transition: all 0.3s;
    border-radius: 4px;

    &:focus {
      border: solid 1px #2684ff;

      box-shadow: 0 0 0 1px #2684ff;
    }
  }

  & h1 {
    margin-bottom: 0;
    font-size: 13px;
    color: #4e5c6e;
    position: absolute;
    top: -18px;
  }

  & button {
    margin: auto;
    width: 120px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: #4e5c6e 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 6px;
    color: #ffffff;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 4px;
  left: 7px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: gray;
`;
