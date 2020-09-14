import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  place-items: center;
  font-family: var(--font-code);
  font-weight: 500;
  text-transform: uppercase;
`;

export const Row = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 0px;
  width: 100vw;
`;
