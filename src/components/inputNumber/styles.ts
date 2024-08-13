import styled from "styled-components";

export const ContainerInputNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme["base-input"]};
  border-radius: 5px;
  padding: 0.5rem;

  input {
    width: 2rem;
    text-align: center;
    border: none;
    background-color: ${({ theme }) => theme["base-input"]};
    color: ${({ theme }) => theme["base-text"]};
  }

  svg {
    color: ${({ theme }) => theme["purple"]};
    cursor: pointer;
  }

  :hover {
    svg {
      color: ${({ theme }) => theme["purple-dark"]};
    }
  }
`;
