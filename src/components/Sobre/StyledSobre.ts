import styled from 'styled-components';

const StyledSobre = styled.div`
  .div-conteudo {
    display: flex;
    height: 400px;
    margin-top: 32px;
    background-color: #f1f1f1;
  }

  & .texto {
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: justify;
    line-height: 1.5;
    font-size: 22px;
    padding-left: 5%;
    padding-top: 2%;
    padding-right: 2%;
  }

  & .div-video {
    padding: 32px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & .div-video video {
    padding: 16px;
    width: 500px;
    height: 500px;
    padding-top: 5%;
  }

  & .div-video button {
    width: 500px;
    font-weight: bold;
  }
`;
export default StyledSobre;
