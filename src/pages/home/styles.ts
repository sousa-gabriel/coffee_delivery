import styled from "styled-components";

export const HomeContainer = styled.div``;

export const Title = styled.p`
  margin-top: 2rem;
  margin-bottom: 3.3rem;
  font-family: "Bool  2";
  font-size: 2rem;
  font-weight: 900;
  color: ${({ theme }) => theme["base-subtitle"]};
`;

export const ContentCards = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 2rem 0px;
`;
