import styled from "styled-components";

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme["yellow-light"]};
  border-radius: 100px;
`;

export const Label = styled.p`
  font-family: "Roboto";
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme }) => theme["yellow-dark"]};
  line-height: "130%";
`;
