import React from "react";
import styled from "styled-components";

// Styled Components
const PrivacyContainer = styled.div`
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

const PrivacyPage = () => {
  return (
    <PrivacyContainer>
      <Title>Privacy Policy</Title>

      <Section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to <Highlight>Food Delight</Highlight>. Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
        </p>
      </Section>

      <Section>
        <h2>2. Information We Collect</h2>
        <p>
          We collect information when you visit our website, place an order, or contact us. This may include your <Highlight>name, email, phone number, and delivery address</Highlight>.
        </p>
      </Section>

      <Section>
        <h2>3. How We Use Your Information</h2>
        <p>
          We use your information to provide services, process your orders, and improve our website. We <Highlight>never share</Highlight> your personal details with third parties without your consent.
        </p>
      </Section>

      <Section>
        <h2>4. Cookies & Tracking</h2>
        <p>
          Our website uses <Highlight>cookies</Highlight> to enhance your experience. You can disable cookies in your browser settings, but this may affect certain features.
        </p>
      </Section>

      <Section>
        <h2>5. Data Security</h2>
        <p>
          We implement strict security measures to protect your information. Your data is stored securely and accessed only when necessary.
        </p>
      </Section>

      <Section>
        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about our privacy policy, please contact us at <Highlight>support@fooddelight.com</Highlight>.
        </p>
      </Section>
    </PrivacyContainer>
  );
};

export default PrivacyPage;
