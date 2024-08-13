import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 10px 8px;
  background-color: ${(props) => props.theme["purple-light"]};
  border-radius: 6px;
  color: ${(props) => props.theme["purple-dark"]};

  p {
    font-size: 0.87rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }
`;
