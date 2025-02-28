import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={8} lg={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import styled from 'styled-components';

// const StyledContainer = styled(Container)`
//   display: flex;
//  gap: 2rem;
//   align-items: center;
//   min-height: 70vh; /* Ensures the form is vertically centered */
//   width: 10%;
//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
  
// `;  

// const StyledCol = styled(Col)`
//   background: #fff; 
//   padding: 2rem;
//   box-sizing: border-box;
//   border-radius: 10px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   width: 100%;
//   // max-width: 600px; /* Limits the form width */
// `;

// const FormContainer = ({ children }) => {
//   return (
//     <StyledContainer>
//       <Row className="justify-content-center w-100">
//         <StyledCol xs={12} md={10} lg={8}>
//           {children}
//         </StyledCol>
//       </Row>
//     </StyledContainer>
//   );
// };

// export default FormContainer;
