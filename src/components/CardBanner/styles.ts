import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1rem;

  p {
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme["base-text"]};
    line-height: "130%";
  }
`;

const TYPE_COLORS = {
  cart: "yellow-dark",
  package: "base-text",
  coffee: "yellow",
  timer: "purple",
} as const;

interface IconRoundProps {
  type: keyof typeof TYPE_COLORS;
}

export const IconRound = styled.div<IconRoundProps>`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 99999px;
  background: ${(props) => props.theme[TYPE_COLORS[props.type]]};
  margin-right: 12px;
`;
