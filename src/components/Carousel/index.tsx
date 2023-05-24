import { useState } from 'react';
import type { ICarousel } from '../../helpers/carousel/ICarousel';
import StyledCarousel from './Carousel';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function Carousel({ slides }: { slides: ICarousel[]}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextImage() {
    let newIndex;

    if (currentIndex === slides.length - 1) {
      newIndex = 0;
    } else {
      newIndex = currentIndex + 1;
    }

    setCurrentIndex(newIndex);
  }

  function beforeImage() {
    let newIndex;

    if (currentIndex < 1) {
      newIndex = slides.length - 1;
    } else {
      newIndex = currentIndex - 1;
    }

    setCurrentIndex(newIndex);
  }

  function dotSelectImage(index: number) {
    setCurrentIndex(index);
  }

  return (
    <StyledCarousel>
      <div className='container-carousel'>
        <ArrowCircleLeftIcon className='left-arrow' onClick={nextImage} />
        <ArrowCircleRightIcon className='right-arrow' onClick={beforeImage} />
        <div className='carousel-image' style={{backgroundImage: `url(${slides[currentIndex].image})`}} />
        <p className='description-slide'>{slides[currentIndex].description}</p>
        <div className='dots-container'>
          { slides.map((_slide, index) => (
              <div
                key={index} className='dot'
                onClick={() => dotSelectImage(index)}
              >
                ⬤
              </div>
          )) }
        </div>
      </div>
    </StyledCarousel>
  );
}

export default Carousel;
