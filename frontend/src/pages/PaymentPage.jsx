// import React, { useState, useEffect } from 'react';
// import { Form, Button, Col } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { savePaymentMethod } from '../slices/cartSlice';
// import { useNavigate } from 'react-router-dom';
// import FormContainer from '../components/FormContainer';
// import CheckoutSteps from '../components/CheckoutSteps';
// import Meta from '../components/Meta';
// import styled from 'styled-components';
// const StyledButton = styled(Button)`
//   background: linear-gradient(135deg, #9500ffab, #fff);
//   border: none;
//   color: #141e30;
//   padding: 10px 20px;
//   text-decoration: none;
//   border-radius: 8px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background: linear-gradient(145deg, #fff,#906fa7ab);;
//   }

//   &:disabled {
//     background: #e6b800;
//     cursor: not-allowed;
//   }
// `;
// const Payment = () => {
//   const [paymentMethod, setPaymentMethod] = useState('Razorpay');

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { shippingAddress } = useSelector(state => state.cart);

//   useEffect(() => {
//     if (!shippingAddress) {
//       navigate('/shipping');
//     }
//   }, [shippingAddress, navigate]);

//   const submitHandler = e => {
//     e.preventDefault();
//     dispatch(savePaymentMethod(paymentMethod));
//     navigate('/place-order');
//   };
//   return (
//     <FormContainer>
//       <CheckoutSteps step1 step2 step3 />
//       <Meta title={'Payment Method'} />
//       <h1>Payment Method</h1>
//       <Form onSubmit={submitHandler}>
//         <Form.Group>
//           <Form.Label as='legend'>Select Method</Form.Label>
//           <Col>
//             <Form.Check
//               className='my-2'
//               type='radio'
//               id='Razorpay'
//               label='Razorpay'
//               name='paymentMethod'
//               value='Razorpay'
//               checked
//               onChange={e => setPaymentMethod(e.target.value)}
//             ></Form.Check>
//           </Col>
//         </Form.Group>
//         <StyledButton className='mb-3 w-100' variant='warning' type='submit'>
//           Continue
//         </StyledButton>
//       </Form>
//     </FormContainer>
//   );
// };

// export default Payment;
import React, { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../slices/cartSlice";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import Meta from "../components/Meta";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 80vh;
  padding: 2rem;
`;

const LeftSide = styled.div`
  position: fixed;
  left: 35%;
  top: 35%;
  transform: translate(-50%, -50%);
`;

const RightSide = styled.div`
  width: 75%;
  margin-left: auto;
  padding-left: 250px;
`;

const FormSection = styled.div`
  max-width: 500px;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  background: linear-gradient(135deg, #ff7300ab, #fff);
  border: none;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(145deg, #fff, #da6206ab);
    font-weight: bold;
  }

  &:disabled {
    background: #e6b800;
    cursor: not-allowed;
  }
`;

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("Razorpay");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shippingAddress } = useSelector((state) => state.cart);

  useEffect(() => {
    if (!shippingAddress) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/place-order");
  };

  return (
    <>
      <Meta title={"Payment Method"} />
      <PageContainer>
        {/* Fixed Left Side - Checkout Steps */}
        <LeftSide>
          <CheckoutSteps step1 step2 step3 />
        </LeftSide>

        {/* Right Side - Payment Form */}
        <RightSide>
          <FormSection>
            <h2 className="text-center">Payment Method</h2>
            <Form onSubmit={submitHandler}>
              <Form.Group>
                <Form.Label as="legend">Select Method</Form.Label>
                <Col>
                  <Form.Check
                    className="my-2"
                    type="radio"
                    id="Razorpay"
                    label="Razorpay"
                    name="paymentMethod"
                    value="Razorpay"
                    checked
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <StyledButton className="mt-3" variant="warning" type="submit">
                Continue
              </StyledButton>
            </Form>
          </FormSection>
        </RightSide>
      </PageContainer>
    </>
  );
};

export default Payment;
