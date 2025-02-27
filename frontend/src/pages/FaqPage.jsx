import React, { useState } from 'react';
import styled from 'styled-components';

const FaqWrapper = styled.div`
  padding: 50px;
  background-color: #f9f9f9;
`;

const FaqTitle = styled.h1`
  text-align: center;
  font-size: 32px;
  margin-bottom: 30px;
  color: #e7400d;
`;

const FaqContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const FaqItem = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

const Question = styled.div`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: #333;
  transition: color 0.3s ease;
  
  &:hover {
    color: #e7400d;
  }
`;

const Answer = styled.div`
  font-size: 16px;
  color: #555;
  margin-top: 10px;
  padding-left: 20px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is your delivery policy?",
      answer: "We offer free delivery for orders above $50. For orders below that amount, a small delivery charge will apply.",
    },
    {
      question: "How can I place an order?",
      answer: "You can place an order by visiting our menu page and adding your desired items to the cart. Once ready, proceed to checkout.",
    },
    {
      question: "Do you offer vegan options?",
      answer: "Yes, we have a variety of vegan options available on our menu. Please check the 'Vegan' section when browsing our menu.",
    },
    {
      question: "How do I cancel an order?",
      answer: "You can cancel an order within 10 minutes of placing it. Please contact our customer support to process the cancellation.",
    },
    {
      question: "Do you offer gift cards?",
      answer: "Yes, we offer gift cards in various denominations. You can purchase them from our website or directly from our store.",
    },
  ];

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the open FAQ if clicked again
    } else {
      setOpenIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <FaqWrapper>
      <FaqTitle>Frequently Asked Questions</FaqTitle>
      <FaqContainer>
        {faqData.map((faq, index) => (
          <FaqItem key={index}>
            <Question onClick={() => toggleAnswer(index)}>{faq.question}</Question>
            <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
          </FaqItem>
        ))}
      </FaqContainer>
    </FaqWrapper>
  );
};

export default FaqPage;   
