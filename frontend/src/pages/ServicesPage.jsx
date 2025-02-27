import React from "react";
import styled from "styled-components";

// Styled Components
const ServicesContainer = styled.div`
  max-width: 900px;
  margin: 50px auto;
  padding: 20px;
  background: #fff8f0;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
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
  margin-bottom: 20px;
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.3s;

  &:hover {
    color: #ff5733;
  }
`;

const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ServiceItem = styled.div`
  background: #ffe5d4;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, background 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background: #ffcc99;
  }

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
    color: #333;
    line-height: 1.5;
  }
`;

const ServicesPage = () => {
  return (
    <ServicesContainer>
      <Title>Our Services</Title>

      <ServiceList>
        <ServiceItem>
          <h2>🍽️ Dine-In</h2>
          <p>
            Enjoy a delightful dining experience with a cozy ambiance and a variety of delicious dishes.
          </p>
        </ServiceItem>

        <ServiceItem>
          <h2>🚀 Fast Home Delivery</h2>
          <p>
            Get your favorite food delivered to your doorstep within **30 minutes** with our fast and reliable service.
          </p>
        </ServiceItem>

        <ServiceItem>
          <h2>🛍️ Takeaway</h2>
          <p>
            Order online or visit our store to pick up your food at your convenience.
          </p>
        </ServiceItem>

        <ServiceItem>
          <h2>🎉 Catering Services</h2>
          <p>
            Planning an event? Let us handle the food with our professional catering services for all occasions.
          </p>
        </ServiceItem>

        <ServiceItem>
          <h2>📱 Online Ordering</h2>
          <p>
            Easily place your order through our website or mobile app for a hassle-free experience.
          </p>
        </ServiceItem>
      </ServiceList>
    </ServicesContainer>
  );
};

export default ServicesPage;
