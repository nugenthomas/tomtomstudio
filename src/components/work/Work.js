import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title';
import media from 'styles/media';
import WorkCard from './WorkCard';
import workItems from 'data/workItems';

const MainContainer = styled.div`
margin-top: 25%;
margin-bottom: 25%;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  ${media.tablet`
    grid-template-columns: repeat(auto-fit, minmax(60%, 1fr));
  `}
  ${media.phone`
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  `}
`;

const WorkInfo = styled.p`
  line-height: 1.5em;
  margin-top: 0;
  margin-bottom: 2rem;
  text-align: center;
  color: black;
`;


function Work() {
  return (
    <MainContainer>
      <Title text="Selected Works" />
      <WorkInfo>
        These are some of my selected works. Please contact me for full case study.
      </WorkInfo>
      <Grid>
        {workItems.map(project => (
          <WorkCard
            key={project.projectTitle}
            project={project}
          />
        ))}
      </Grid>
    </MainContainer>
  );
};

export default Work;