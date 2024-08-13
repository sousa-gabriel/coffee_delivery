import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh);
  margin: auto;
  padding: 2rem;
  background: ${({ theme }) => theme["background"]};
  display: flex;
  flex-direction: column;
`;
