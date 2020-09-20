import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  font-family: var(--font-code);
  font-weight: 500;
  text-transform: uppercase;
  position: sticky;
  top: 0;
  z-index: 30;
  box-shadow: 0px 2px 3px var(--color-shadow);
`;
