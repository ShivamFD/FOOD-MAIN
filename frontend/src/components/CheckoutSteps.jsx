// // import React from 'react';
// // import { Nav } from 'react-bootstrap';
// // import { LinkContainer } from 'react-router-bootstrap';

// // const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
// //   return (
// //     <Nav className='justify-content-center mb-4'>
// //       <Nav.Item>
// //         {step1 ? (
// //           <LinkContainer to='/login'>
// //             <Nav.Link>Sign In</Nav.Link>
// //           </LinkContainer>
// //         ) : (
// //           <Nav.Link disabled>Sign In</Nav.Link>
// //         )}
// //       </Nav.Item>
// //       <Nav.Item>
// //         {step2 ? (
// //           <LinkContainer to='/shipping'>
// //             <Nav.Link>Shipping</Nav.Link>
// //           </LinkContainer>
// //         ) : (
// //           <Nav.Link disabled>Shipping</Nav.Link>
// //         )}
// //       </Nav.Item>
// //       <Nav.Item>
// //         {step3 ? (
// //           <LinkContainer to='/payment'>
// //             <Nav.Link>Payment</Nav.Link>
// //           </LinkContainer>
// //         ) : (
// //           <Nav.Link disabled>Payment</Nav.Link>
// //         )}
// //       </Nav.Item>
// //       <Nav.Item>
// //         {step4 ? (
// //           <LinkContainer to='/place-order'>
// //             <Nav.Link>Place Order</Nav.Link>
// //           </LinkContainer>
// //         ) : (
// //           <Nav.Link disabled>Place Order</Nav.Link>
// //         )}
// //       </Nav.Item>
// //     </Nav>
// //   );
// // };

// // export default CheckoutSteps;
// import React from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import styled, { keyframes } from 'styled-components';

// // Animations
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(-10px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const stepHighlight = keyframes`
//   0% { height: 0%; }
//   100% { height: 100%; }
// `;

// // Styled Components
// const StepsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 20px auto;
//   width: 100%;
//   max-width: 400px;
//   position: relative;
// `;

// const StepWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 15px;
//   position: relative;
// `;

// const StepCircle = styled.div`
//   width: 35px;
//   height: 35px;
//   border-radius: 50%;
//   background: ${({ active }) => (active ? '#4CAF50' : '#2c3e50')};
//   color: #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-weight: bold;
//   transition: background 0.3s ease-in-out;
//   animation: ${fadeIn} 0.5s ease-in-out;

//   &:hover {
//     background: ${({ active }) => (active ? '#45a049' : '#34495e')};
//     transform: scale(1.1);
//   }
// `;

// const StepText = styled.span`
//   font-size: 1rem;
//   font-weight: bold;
//   color: ${({ active }) => (active ? '#4CAF50' : '#ccc')};
//   transition: color 0.3s ease-in-out;
//   cursor: ${({ active }) => (active ? 'pointer' : 'default')};

//   &:hover {
//     text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
//   }
// `;

// const LineContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
//   height: 50px;
// `;

// const VerticalLine = styled.div`
//   width: 4px;
//   height: ${({ active }) => (active ? '50px' : '0px')};
//   background: ${({ active }) => (active ? '#4CAF50' : '#34495e')};
//   transition: height 0.5s ease-in-out;
//   position: absolute;
//   top: -5px;
// `;

// // Main Component
// const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
//   return (
//     <StepsContainer>
//       {/* Step 1 */}
//       <StepWrapper>
//         <StepCircle active={step1}>1</StepCircle>
//         {step1 ? (
//           <LinkContainer to='/login'>
//             <StepText active={step1}>Sign In</StepText>
//           </LinkContainer>
//         ) : (
//           <StepText active={step1}>Sign In</StepText>
//         )}
//       </StepWrapper>
//       <LineContainer>
//         <VerticalLine active={step2 || step3 || step4} />
//       </LineContainer>

//       {/* Step 2 */}
//       <StepWrapper>
//         <StepCircle active={step2}>2</StepCircle>
//         {step2 ? (
//           <LinkContainer to='/shipping'>
//             <StepText active={step2}>Shipping</StepText>
//           </LinkContainer>
//         ) : (
//           <StepText active={step2}>Shipping</StepText>
//         )}
//       </StepWrapper>
//       <LineContainer>
//         <VerticalLine active={step3 || step4} />
//       </LineContainer>

//       {/* Step 3 */}
//       <StepWrapper>
//         <StepCircle active={step3}>3</StepCircle>
//         {step3 ? (
//           <LinkContainer to='/payment'>
//             <StepText active={step3}>Payment</StepText>
//           </LinkContainer>
//         ) : (
//           <StepText active={step3}>Payment</StepText>
//         )}
//       </StepWrapper>
//       <LineContainer>
//         <VerticalLine active={step4} />
//       </LineContainer>

//       {/* Step 4 */}
//       <StepWrapper>
//         <StepCircle active={step4}>4</StepCircle>
//         {step4 ? (
//           <LinkContainer to='/place-order'>
//             <StepText active={step4}>Place Order</StepText>
//           </LinkContainer>
//         ) : (
//           <StepText active={step4}>Place Order</StepText>
//         )}
//       </StepWrapper>
//     </StepsContainer>
//   );
// };

// export default CheckoutSteps;
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import styled, { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const stepHighlight = keyframes`
  0% { height: 0%; }
  100% { height: 100%; }
`;

// Styled Components
const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  width: 100%;
  max-width: 400px;
  position: relative;

  /* Responsive */
  @media (max-width: 768px) {
    max-width: 100%;
    flex-direction: row;  /* Switch to horizontal layout */
    justify-content: space-between;  /* Distribute the steps evenly */
    align-items: flex-start;  /* Align to the top for horizontal view */
    gap: 15px;
  }
`;

const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;

  /* Responsive */
  @media (max-width: 768px) {
    flex-direction: column;  /* Stack steps vertically on smaller screens */
    align-items: center;
  }
`;

const StepCircle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${({ active }) => (active ? '#4CAF50' : '#2c3e50')};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  transition: background 0.3s ease-in-out;
  animation: ${fadeIn} 0.5s ease-in-out;

  &:hover {
    background: ${({ active }) => (active ? '#45a049' : '#34495e')};
    transform: scale(1.1);
  }

  /* Responsive */
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const StepText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ active }) => (active ? '#4CAF50' : '#ccc')};
  transition: color 0.3s ease-in-out;
  cursor: ${({ active }) => (active ? 'pointer' : 'default')};

  &:hover {
    text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  }

  /* Responsive */
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 50px;

  /* Responsive */
  @media (max-width: 768px) {
    height: 0;  /* Hide vertical lines on mobile */
  }
`;

const VerticalLine = styled.div`
  width: 4px;
  height: ${({ active }) => (active ? '50px' : '0px')};
  background: ${({ active }) => (active ? '#4CAF50' : '#34495e')};
  transition: height 0.5s ease-in-out;
  position: absolute;
  top: -5px;

  /* Responsive */
  @media (max-width: 768px) {
    height: 0;  /* Hide vertical lines on mobile */
    width: 0;  /* Hide vertical lines on mobile */
  }
`;

// Main Component
const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <StepsContainer>
      {/* Step 1 */}
      <StepWrapper>
        <StepCircle active={step1}>1</StepCircle>
        {step1 ? (
          <LinkContainer to='/login'>
            <StepText active={step1}>Sign In</StepText>
          </LinkContainer>
        ) : (
          <StepText active={step1}>Sign In</StepText>
        )}
      </StepWrapper>
      <LineContainer>
        <VerticalLine active={step2 || step3 || step4} />
      </LineContainer>

      {/* Step 2 */}
      <StepWrapper>
        <StepCircle active={step2}>2</StepCircle>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <StepText active={step2}>Shipping</StepText>
          </LinkContainer>
        ) : (
          <StepText active={step2}>Shipping</StepText>
        )}
      </StepWrapper>
      <LineContainer>
        <VerticalLine active={step3 || step4} />
      </LineContainer>

      {/* Step 3 */}
      <StepWrapper>
        <StepCircle active={step3}>3</StepCircle>
        {step3 ? (
          <LinkContainer to='/payment'>
            <StepText active={step3}>Payment</StepText>
          </LinkContainer>
        ) : (
          <StepText active={step3}>Payment</StepText>
        )}
      </StepWrapper>
      <LineContainer>
        <VerticalLine active={step4} />
      </LineContainer>

      {/* Step 4 */}
      <StepWrapper>
        <StepCircle active={step4}>4</StepCircle>
        {step4 ? (
          <LinkContainer to='/place-order'>
            <StepText active={step4}>Place Order</StepText>
          </LinkContainer>
        ) : (
          <StepText active={step4}>Place Order</StepText>
        )}
      </StepWrapper>
    </StepsContainer>
  );
};

export default CheckoutSteps;
