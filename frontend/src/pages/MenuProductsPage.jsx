// src/pages/MenuProductsPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const MenuProductsPage = () => {
  const { menuId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products?menuId=${menuId}`);
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [menuId]);

  return (
    <Container>
      <h2>Menu Products</h2>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product._id}>
            <ProductImage src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
          </ProductCard>
        ))}
      </ProductGrid>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const ProductCard = styled.div`
  width: 150px;
  border-radius: 10px;
  padding: 10px;
  background: #f9f9f9;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
`;

export default MenuProductsPage;
