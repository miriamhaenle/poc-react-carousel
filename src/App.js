import styled from 'styled-components';
import Carousel from './Carousel/Carousel';

export default function App() {
  const someRandomStuff = [
    'Slide 1',
    'Slide 2',
    'Slide 3',
    'Slide 4',
    'Slide 5',
    'Slide 6',
    'Slide 7',
  ];
  return (
    <AppWrapper>
      <h1>Hello World </h1>
      <div className="content-box">Hier könnte Ihr Content stehen </div>
      <Carousel carouselContent={someRandomStuff} />
    </AppWrapper>
  );
}

const AppWrapper = styled.main`
  background: salmon;

  font-family: sans-serif;
  color: ivory;
  position: relative;

  h1 {
    color: ivory;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 3rem;
    text-align: center;
    padding-top: 1.5rem;
  }

  .content-box {
    padding: 2rem 5rem;
    height: 50vh;
  }
`;
