import React, { useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WorkModal from './WorkModal';
import ImageGallery from 'react-image-gallery';


const Card = styled.div`
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  height: 15rem;
  margin: auto;
`;

const HoverInfo = styled.div`
  transition: background-color 0.1s ease;
  opacity: 0%;
  &:hover {
    background: black;
    opacity 100%;
  }
`;

const infoContainer = styled.div`
  display: grid;
  grid-template-areas: "Title" "Info";
  grid-template-columns: 100%;
`;

const Title = styled.h2`
  color: white;
  margin: 0.8em;
`;

const Info = styled.p`
color: white;
  font-family: arial;
  margin: 1em;
`;

const WorkCard = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModalOpen = () => {
    document.querySelector('body').style.overflow = !modalOpen
      ? 'hidden'
      : 'initial';
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <WorkModal
        toggleModalOpen={toggleModalOpen}
        onClose={toggleModalOpen}
        open={modalOpen}
        project={project}
      />
      <Card onClick={toggleModalOpen} background={project.background}>
             <imagesContainer>
                  <ImageGallery
                        items={project.images}
                        showBullets={false}
                        showThumbnails={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showNav={false}
                        style={{ position: 'relative', zIndex: '1' }}
                      />
             </imagesContainer> 
             <HoverInfo>
                  <infoContainer>
                    <Title>{project.projectTitle}</Title>
                    <Info>{project.projectInfo}</Info>
                  </infoContainer>
             </HoverInfo>
      </Card>
    </>
  );
};

WorkCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default WorkCard;
