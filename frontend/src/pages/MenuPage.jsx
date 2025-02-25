import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';
import { addCurrency } from '../utils/addCurrency';

// Styled Components
const MenuContainer = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
`;

const MenuTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #222;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const ProductCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  text-align: center;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
`;

const ProductName = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: #222;
  text-decoration: none;
  margin-top: 10px;
  display: block;

  &:hover {
    color: #ff6600;
  }
`;

const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #555;
`;

const MenuPage = () => {
  const { products } = useSelector((state) => state.productList);

  return (
    <MenuContainer>
      <MenuTitle>
        <FaUtensils /> Our Menu
      </MenuTitle>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product._id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName to={`/product/${product._id}`}>{product.name}</ProductName>
            <ProductPrice>{addCurrency(product.price)}</ProductPrice>
          </ProductCard>
        ))}
      </ProductGrid>
    </MenuContainer>
  );
};

export default MenuPage;
