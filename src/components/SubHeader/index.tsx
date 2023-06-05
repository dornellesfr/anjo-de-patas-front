import { ReactElement } from 'react';
import StyledSubHeader from './SubHeader';
import img from '../../assets/imgs/dog.jpg'

function SubHeader(): ReactElement {
  return (
    <StyledSubHeader background={img}>
      <div className='color-background'/>
      <h2>Nossas novidades</h2>
    </StyledSubHeader>
  );
}

export default SubHeader;
