// import React from 'react';
// import { Card, Col, Row } from 'react-bootstrap';

// const DashboardCard = ({ title, icon, value, bgColor }) => {
//   return (
//     <Card className={`mb-3 p-3 rounded ${bgColor} text-light`}>
//       <Row className='align-items-center '>
//         <Col xs={4}>{icon}</Col>
//         <Col xs={8}>
//           <Card.Title>{title}</Card.Title>
//           <Card.Title>
//             <strong>{value}</strong>
//           </Card.Title>
//         </Col>
//       </Row>
//     </Card>
//   );
// };

// export default DashboardCard;
import React from 'react';
import styled from 'styled-components';

// Styled Components
const CardContainer = styled.div`
  background: linear-gradient(to right, #141e30, #243b55);
  color: white;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
  @media (max-width: 1024px) {
    margin: 1rem 0;
  }
  @media (min-width: 990px) And (max-width: 1200px) {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    margin-left: 35%;
    height: auto;
   
  }
`;

const IconWrapper = styled.div`
  font-size: 40px;
  color: #f1c40f;
  margin-right: 15px;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const Title = styled.h5`
  font-size: 18px;
  margin: 0;
  font-weight: 500;
`;

const Value = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-top: 5px;
`;

const DashboardCard = ({ title, icon, value }) => {
  return (
    <CardContainer>
      <IconWrapper>{icon}</IconWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </ContentWrapper>
    </CardContainer>
  );
};

export default DashboardCard;
