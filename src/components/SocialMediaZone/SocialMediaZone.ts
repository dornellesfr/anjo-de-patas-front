import styled, { keyframes } from 'styled-components';
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const SocialMediaZone = styled.div`
  .div-icons {
    background-color: #FF9501;
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    animation: ${fadeIn} 1s ease-in-out;
  }
  .div-icons img {
    padding: 24px;
    width: 70px;
    transition: transform 0.5s ease-in-out;
  }
  .div-icons img.social-icon:hover {
    transform: scale(1.2);
  }
`;
export default SocialMediaZone;