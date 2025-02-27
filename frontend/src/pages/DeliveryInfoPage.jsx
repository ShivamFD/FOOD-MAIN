import React from "react";
import styled from "styled-components";
import { FaTruck, FaClock, FaMoneyBillWave, FaUtensils } from "react-icons/fa";

const DeliveryInfoPage = () => {
  return (
    <Container>
      <h1>Delivery Information</h1>
      <InfoCard>
        <IconWrapper>
          <FaTruck />
        </IconWrapper>
        <h2>Fast & Reliable Delivery</h2>
        <p>We ensure quick and reliable delivery to your doorstep within 30-60 minutes.</p>
      </InfoCard>

      <InfoCard>
        <IconWrapper>
          <FaClock />
        </IconWrapper>
        <h2>Delivery Hours</h2>
        <p>We deliver from 10:00 AM to 11:00 PM every day, ensuring fresh and hot meals anytime.</p>
      </InfoCard>

      <InfoCard>
        <IconWrapper>
          <FaMoneyBillWave />
        </IconWrapper>
        <h2>Payment Methods</h2>
        <p>We accept Cash on Delivery, Credit/Debit Cards, and Online Payments.</p>
      </InfoCard>

      <InfoCard>
        <IconWrapper>
          <FaUtensils />
        </IconWrapper>
        <h2>Fresh & Hot Food</h2>
        <p>All orders are prepared fresh with the finest ingredients to ensure great taste and quality.</p>
      </InfoCard>
    </Container>
  );
};

export default DeliveryInfoPage;

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  text-align: center;
  padding: 20px;
  background: #fff3e6;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
`;

const InfoCard = styled.div`
  background: #ffcc80;
  padding: 20px;
  border-radius: 10px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    background: #ffb74d;
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #d35400;
  margin-right: 15px;
`;
