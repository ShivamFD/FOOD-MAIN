import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCurrency } from "../utils/addCurrency";
import { addToCart } from "../slices/cartSlice";
import styled from "styled-components";
import { FaCartPlus } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";

// Styled Components for the Product Card
const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  text-align: center;
  transition: all 0.3s ease-in-out;
  width: 100%;
  max-width: 400px;
  position: relative;
  overflow: hidden;
  background: #fff;
  height: 480px;
  margin: 2rem 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// Styled Image
const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  background: #fff;
  transition: transform 0.3s ease-in-out;

  ${ProductCard}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;

// Styled Title
const ProductTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  color: #8b0000;
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #ff4500;
  }
`;

// Styled Price
const PriceTag = styled.h3`
  font-size: 1.6rem;
  color: #ff4500;
  font-weight: bold;
  margin: 0.8rem 0;
`;

// Styled Button
const AddToCartButton = styled.button`
  background: linear-gradient(135deg, #ff6347, #ff4500);
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 14px 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(255, 69, 0, 0.2);

  &:hover {
    background: linear-gradient(135deg, #ff4500, #ff6347);
    transform: scale(1.05);
  }

  &:disabled {
    background: #bbb;
    cursor: not-allowed;
  }
`;

const Product = ({ product }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  return (
    <ProductCard>
      <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
        <ProductImage src={product.image} alt={product.name} />
      </Link>

      <ProductTitle>
        <MdRestaurantMenu size={22} /> {product.name}
      </ProductTitle>

      <PriceTag>{addCurrency(product.price)}</PriceTag>

      <AddToCartButton
        disabled={product.countInStock === 0}
        onClick={addToCartHandler}
      >
        <FaCartPlus size={20} /> Add To Cart
      </AddToCartButton>
    </ProductCard>
  );
};

export default Product;
