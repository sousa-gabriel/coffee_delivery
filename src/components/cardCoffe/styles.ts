import styled from "styled-components";

export const CardCoffeeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 16rem;
  height: 20rem;
  border-radius: 6px 36px 6px 36px;
  flex-direction: column;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme["white"]};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -3.5rem;
    margin-bottom: 0.75rem;
  }

  h2 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-family: "Bool  2";
    font-size: 1.25rem;
    font-weight: 400;
    color: ${({ theme }) => theme["base-subtitle"]};
    line-height: "130%";
  }

  p {
    font-family: "Bool  2";
    font-size: 0.875rem;
    font-weight: 400;
    color: ${({ theme }) => theme["base-label"]};
    line-height: "130%";
    text-align: center;
  }
`;

export const Sales = styled.div`
  display: flex;
  width: 100%;
  height: 2.5rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  p {
    margin-right: 1rem;
    font-family: "Bool  2";
    font-size: 1.5rem;
    font-weight: 900;
    color: ${({ theme }) => theme["base-text"]};
  }
`;
