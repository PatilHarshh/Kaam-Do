import React, { useState } from 'react';
import styled from 'styled-components';

const candidates = [
  { id: 1, image: 'https://randomuser.me/api/portraits/men/1.jpg', review: 'Amazing job search platform! Found my dream job in weeks. Highly recommend!' },
  { id: 2, image: 'https://randomuser.me/api/portraits/women/2.jpg', review: 'Exceptional site with valuable tips and smooth application process.' },
  { id: 3, image: 'https://randomuser.me/api/portraits/men/3.jpg', review: 'A must-use for job hunters! Professional resume builder and seamless process.' },
  { id: 4, image: 'https://randomuser.me/api/portraits/women/4.jpg', review: 'Lifesaver site! Found job openings in my desired location. Flawless experience!' },
  { id: 5, image: 'https://randomuser.me/api/portraits/men/5.jpg', review: 'Top-notch platform with a wide variety of job listings and helpful resume builder.' },
  { id: 6, image: 'https://randomuser.me/api/portraits/women/6.jpg', review: 'Highly recommended! Easy to navigate and full of insightful articles. Fantastic!' },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px 0;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #4a90e2;
  font-weight: bold;
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Carousel = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ translateX }) => `translateX(-${translateX}px)`};
`;

const Card = styled.div`
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 12px;
  margin: 0 8px;
  background: linear-gradient(135deg, #f9f9f9, #e0e0e0);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    flex: 0 0 90%;
  }
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Review = styled.p`
  margin-top: 16px;
  text-align: center;
  padding: 0 16px;
  font-family: 'Arial', sans-serif;
  color: #333;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 2em;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  ${({ direction }) => (direction === 'left' ? 'left: 0;' : 'right: 0;')}
`;

const CandidateReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 320;
  const visibleCards = 2;
  const totalVisibleWidth = cardWidth * visibleCards;

  const next = () => {
    if (currentIndex < candidates.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Container>
      <Title>Candidate Reviews</Title>
      <CarouselContainer>
        <ArrowButton direction="left" onClick={prev} disabled={currentIndex === 0}>
          &lt;
        </ArrowButton>
        <Carousel translateX={currentIndex * cardWidth}>
          {candidates.map(candidate => (
            <Card key={candidate.id}>
              <Image src={candidate.image} alt={`Candidate ${candidate.id}`} />
              <Review>{candidate.review}</Review>
            </Card>
          ))}
        </Carousel>
        <ArrowButton direction="right" onClick={next} disabled={currentIndex >= candidates.length - visibleCards}>
          &gt;
        </ArrowButton>
      </CarouselContainer>
    </Container>
  );
};

export default CandidateReviews;
