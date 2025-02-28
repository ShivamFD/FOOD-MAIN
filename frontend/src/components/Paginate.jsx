import React from "react";
import styled from "styled-components";
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from "react-icons/fa";

// Styled Components
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 10px;
  background: linear-gradient(135deg, #ff6600, #ff3300);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom:1.8rem;
`;

const PageButton = styled.button`
  background: ${(props) => (props.active ? "#ffd700" : "#fff")};
  color: ${(props) => (props.active ? "#000" : "#ff3300")};
  border: none;
  padding: 8px 14px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin: 0 5px;
  border-radius: 5px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #ffcc00;
    color: #000;
    transform: scale(1.1);
  }

  &:disabled {
    background: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #fff;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #ffd700;
    transform: scale(1.2);
  }

  &:disabled {
    color: #999;
    cursor: not-allowed;
  }
`;

// Scroll to Top Function
const scrollToTop = () => {
  window.scrollTo({
    top: 950, // Adjust this to where your product section starts
    behavior: "smooth",
  });
};

const Paginate = ({ currentPage, totalPage, pageHandler }) => {
  const handlePageChange = (page) => {
    if (page !== currentPage) {
      pageHandler(page);
      scrollToTop();
    }
  };

  return (
    <PaginationContainer>
      <IconWrapper onClick={() => handlePageChange(1)} disabled={currentPage <= 1}>
        <FaAngleDoubleLeft />
      </IconWrapper>
      <IconWrapper onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1}>
        <FaAngleLeft />
      </IconWrapper>

      {[...Array(totalPage)].map((_, i) => (
        <PageButton
          key={i}
          active={i + 1 === currentPage}
          onClick={() => handlePageChange(i + 1)}
        >
          {i + 1}
        </PageButton>
      ))}

      <IconWrapper onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= totalPage}>
        <FaAngleRight />
      </IconWrapper>
      <IconWrapper onClick={() => handlePageChange(totalPage)} disabled={currentPage >= totalPage}>
        <FaAngleDoubleRight />
      </IconWrapper>
    </PaginationContainer>
  );
};

export default Paginate;
