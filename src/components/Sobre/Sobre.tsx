import React from 'react';
import { Button } from '../../../node_modules/@mui/material/index';
import StyledSobre from './StyledSobre';

function Sobre(): ReactElement {
  return (
    <StyledSobre>
      <div className="div-conteudo">
        <div className="texto">
          <h2>Quem somos?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="div-video">
          <video controls>
            <source
              src={
                'https://www.youtube.com/watch?v=oLqS_b3jAYM&list=RDyjwCLTU_wu8&index=8'
              }
              type="video/mp4"
            />
          </video>
          <Button variant="contained">Saiba mais</Button>
        </div>
      </div>
    </StyledSobre>
  );
}

export default Sobre;
