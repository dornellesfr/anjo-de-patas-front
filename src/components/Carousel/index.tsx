import { useCallback, useEffect, useRef, useState } from 'react';
import type { ICarousel } from '../../@types/ICarousel';
import StyledCarousel from './Carousel';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function Carousel({ slides, vw, vh }: { slides: ICarousel[], vw: number, vh: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(0);


  const nextImage = useCallback(() => {
    let newIndex;
      if (currentIndex === slides.length - 1) {
        newIndex = 0;
      } else {
        newIndex = currentIndex + 1;
      }
  
      setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

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

  function getSlideStylesBackground(slideIndex: number): object {
    return ({
      backgroundImage: `url(${slides[slideIndex].image})`,
      width: `100%`
    });
  }

  function getSlidesContainerStyles() {
    const width = vw * slides.length;
    return ({
      display: 'flex',
      height: '100%',
      width: `${width}vw`,
      transition: 'transform ease-out 0.3s',
      transform: `translateX(${-(currentIndex * vw)}vw)`
    });
  }

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      nextImage();
    }, 6000);

    return () => clearTimeout(timerRef.current);
  }, [nextImage]);

  return (
    <StyledCarousel vw={vw} vh={vh}>
      <div className='container-carousel'>
        <ArrowCircleLeftIcon className='left-arrow' onClick={beforeImage} />
        <ArrowCircleRightIcon className='right-arrow' onClick={nextImage} />
        <div className='overflow-carousel'>
          <div style={getSlidesContainerStyles()}>
            { slides.map((_slides, index) => (
                <div key={index} className='carousel-image' style={getSlideStylesBackground(index)}></div>
            )) }
          </div>
        </div>
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
