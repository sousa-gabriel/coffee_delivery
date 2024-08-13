import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["yellow-light"]};
  border-radius: 6px;
  position: relative;
`;

export const Card = styled.p`
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  background-color: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme["white"]};
  border-radius: 50%;
  position: absolute;
  top: -8px;
  right: -8px;
`;
