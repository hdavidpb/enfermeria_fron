import styled from "styled-components";

export const SolicitudContainer = styled.div`
  width: 100%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 2/6;
  padding-right: 6rem;

  gap: 1rem;
  /*  */
  /*  */
  @media (max-width: 1375px) {
    padding-right: 1rem;
  }
`;
