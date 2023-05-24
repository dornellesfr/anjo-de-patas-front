import styled from 'styled-components';

const StyledPetCard = styled.div`
  .box-pet-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .box-component-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pet-card {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 32px;
    padding: 16px;
    width: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .pet-card img {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    margin-bottom: 16px;
    object-fit: cover;
  }

  .pet-card p {
    margin-bottom: 8px;
  }

  .button-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button-size {
    width: 200px;
  }

  .adopt-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }

  .button-card button {
    font-weight: bold;
    font-size: 16px;
    margin-top: 8px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #ff9501;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .pet-card button:hover {
    background-color: #45a049;
  }

  .button-redirect button {
    width: 200px;
    margin-bottom: 16px;
  }
`;

export default StyledPetCard;
