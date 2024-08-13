import styled from "styled-components";

export const BannerContainer = styled.div`
  padding: 5.8rem 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 40%;
  }
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.6rem;
  max-width: 60%;

  h1 {
    font-family: "Bool  2";
    font-size: 3rem;
    font-weight: 900;
    color: ${({ theme }) => theme["base-title"]};
    line-height: "130%";
  }

  p {
    font-family: "Roboto";
    font-size: 1.25rem;
    font-weight: 400;
    color: ${({ theme }) => theme["base-subtitle"]};
    line-height: "130%";
  }
`;

export const BannerDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;
