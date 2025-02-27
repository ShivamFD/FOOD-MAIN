import React from "react";
import styled from "styled-components";

// Styled Components
const TermsContainer = styled.div`
  max-width: 900px;
  margin: 50px auto;
  padding: 20px;
  background: #fff8f0;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  animation: fadeIn 0.8s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h1`
  font-size: 28px;
  color: #d35400;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.3s;

  &:hover {
    color: #ff5733;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 22px;
    color: #e67e22;
    margin-bottom: 10px;
    transition: color 0.3s;

    &:hover {
      color: #d35400;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    color: #333;
  }
`;

const Highlight = styled.span`
  color: #d35400;
  font-weight: bold;
`;

const TermsPage = () => {
  return (
    <TermsContainer>
      <Title>Terms & Conditions</Title>

      <Section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to <Highlight>Food Delight</Highlight>. By using our website, you agree to follow these terms and conditions.
        </p>
      </Section>

      <Section>
        <h2>2. Ordering & Payment</h2>
        <p>
          All orders placed through our website are subject to availability. We accept <Highlight>online payments, credit/debit cards, and cash on delivery</Highlight>.
        </p>
      </Section>

      <Section>
        <h2>3. Delivery & Pickup</h2>
        <p>
          We offer <Highlight>home delivery</Highlight> and <Highlight>self-pickup</Highlight> options. Delivery times may vary based on your location.
        </p>
      </Section>

      <Section>
        <h2>4. Refund & Cancellation</h2>
        <p>
          You can cancel your order within <Highlight>10 minutes</Highlight> of placing it. Refunds will be processed within <Highlight>5-7 business days</Highlight>.
        </p>
      </Section>

      <Section>
        <h2>5. User Responsibilities</h2>
        <p>
          Customers must provide accurate delivery details and ensure someone is available to receive the order. We are not responsible for incorrect addresses.
        </p>
      </Section>

      <Section>
        <h2>6. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Continued use of our website means you accept any changes.
        </p>
      </Section>

      <Section>
        <h2>7. Contact Us</h2>
        <p>
          For any queries, please contact us at <Highlight>support@fooddelight.com</Highlight>.
        </p>
      </Section>
    </TermsContainer>
  );
};

export default TermsPage;
