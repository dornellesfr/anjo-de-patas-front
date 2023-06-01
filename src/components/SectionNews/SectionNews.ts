import styled from "styled-components";

const StyledSectionNews = styled.div`
  background-color: #f5f5f5;
  margin: 2rem 0;
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  & a {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  @media (max-width: 950px) {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default StyledSectionNews;