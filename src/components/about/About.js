import React, { useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import DownArrow from './DownArrow';

const Container = styled.div`
  align-items: center;
  height: 100%;
  justify-content: center;
`;

const TextContainer = styled.div`
  color: White;
  font-family: 'Space Mono', monospace;
  margin-top: 20%;
  text-align: center;
`;

const ColorSpan = styled.span`
  color: white;
`;

const Background = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: -1;
  background-color: black;
`;


const H1 = styled.h1`
  ${media.phone`font-size: 1.6em;`}
`;

function About() {
  const [arrowVisible] = useState(true);

  return (
    <>
      <Background>
      </Background>
      <Container id="about">
        <TextContainer>
          <H1>
            I’m <ColorSpan>Thomas Nghia nguyen</ColorSpan>, a multidisciplinary designer.
            <br />
            I do a little bit of everything, and a lot of nothing
          </H1>
        </TextContainer>
      </Container>
      <DownArrow visible={arrowVisible} />
    </>
  );
}

export default About;
