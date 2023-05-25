import { ReactElement } from 'react';
import { Button } from '@mui/material';

import StyledPetCard from './PetCard';
import PetsIcon from '@mui/icons-material/Pets';

const mockPetData = [
  {
    name: 'Tutu',
    age: 8,
    size: 'Médio',
    sex: 'Macho',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr55v1f3d1akpWslWFkpTDikRWelZEzWr8_twEurjI0aUArYkV2gzO1pX5wMmjX_4yr6I&usqp=CAU',
  },
  {
    name: 'Bella',
    age: 3,
    size: 'Pequeno',
    sex: 'Fêmea',
    image:
      'https://blog-static.petlove.com.br/wp-content/uploads/2020/01/gato-laranja.jpg',
  },
  {
    name: 'Luna',
    age: 2,
    size: 'Pequeno',
    sex: 'Fêmea',
    image:
      'https://i0.statig.com.br/bancodeimagens/6b/2f/3v/6b2f3vlff1qtq7q8515lgexen.jpg',
  },
  {
    name: 'Max',
    age: 5,
    size: 'Grande',
    sex: 'Macho',
    image:
      'https://www.patasdacasa.com.br/sites/patasdacasa/files/styles/webp/public/noticias/2020/05/ja-ouviu-falar-no-gato-escaminha-E-uma-raca-de-gato-ou-um-padrao-de-cor-tire-todas-as-suas-duvidas.jpg.webp?itok=sJt0DuUy',
  },
];

function PetCard(): ReactElement {
  return (
    <StyledPetCard>
      <section className="box-component-card">
        <div className="box-pet-card">
          {mockPetData.map((pet, index) => (
            <div className="pet-card" key={index}>
              <div>
                <img src={pet.image} alt="img-pet" />
              </div>
              <div>
                <p>Nome: {pet.name}</p>
                <p>Idade: {pet.age}</p>
                <p>Porte: {pet.size}</p>
                <p>Sexo: {pet.sex}</p>
              </div>
              <div className="button-card">
                <button className="adopt-button button-size">
                  <PetsIcon />
                  <span>Adotar</span>
                  <PetsIcon />
                </button>
                <button className="adopt-button button-size">
                  <PetsIcon />
                  <span>Apadrinhar</span>
                  <PetsIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="button-redirect">
          <Button variant="contained">Ver mais</Button>
        </div>
      </section>
    </StyledPetCard>
  );
}

export default PetCard;
