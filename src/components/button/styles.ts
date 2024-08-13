import styled from "styled-components";

export const ButtonDefault = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const ButtonPrimary = styled(ButtonDefault)`
  width: 100%;
  background-color: ${({ theme }) => theme["yellow"]};

  p {
    font-family: "Roboto";
    font-size: 0.875rem;
    font-weight: 700;
    color: ${({ theme }) => theme["white"]};
    line-height: "160%";
  }

  &:hover {
    background-color: ${({ theme }) => theme["yellow-dark"]};
  }
`;

export const ButtonSecondary = styled(ButtonDefault)`
  width: 100%;
  background-color: ${({ theme }) => theme["base-button"]};

  p {
    font-family: "Roboto";
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme["base-text"]};
    line-height: "160%";
  }
`;

export const ButtonIcon = styled(ButtonDefault)`
  background-color: ${({ theme }) => theme["purple-dark"]};
  padding: 0.5rem;

  svg {
    color: ${({ theme }) => theme["white"]};
  }

  &:hover {
    background-color: ${({ theme }) => theme["purple"]};
  }
`;
