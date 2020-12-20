import React, { useCallback, useMemo, useEffect, useState } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import styled from 'styled-components/macro';
import { viewportCss, containerCss, slideCss } from './CarouselConfig';
import { throttle } from 'lodash-es';

const Carousel = ({ carouselContent }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    draggable: true,
    inViewThreshold: 1,
  });
  const [centeredIndex, setCenteredIndex] = useState(0);

  const handleScroll = useCallback(() => {
    setCenteredIndex(emblaApi.slidesInView()[0]);
  }, [emblaApi]);

  const throttledHandleScroll = useMemo(() => throttle(handleScroll, 500), [
    handleScroll,
  ]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('scroll', throttledHandleScroll);
    }
  }, [emblaApi, throttledHandleScroll]);

  return (
    <div style={viewportCss} ref={emblaRef}>
      <div style={containerCss}>
        {carouselContent?.map((content, index) => {
          return (
            <div style={slideCss} key={index}>
              <Box isCenter={index === centeredIndex}>{content}</Box>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

const Box = styled.div`
  width: ${(props) => (props.isCenter ? '200px' : '150px')};
  height: ${(props) => (props.isCenter ? '150px' : '100px')};
  border-radius: 5px;
  background: papayawhip;
  color: salmon;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: height 0.5s ease-out;
  animation: ${(props) => props.isScrolling && 'spin 5s infinite'};

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    50% {
      transfrom: rotate(50deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
