// // src/pages/MenuProductsPage.jsx
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import styled from "styled-components";

// const MenuProductsPage = () => {
//   const { menuId } = useParams();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/products?menuId=${menuId}`);
//         setProducts(res.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };
//     fetchProducts();
//   }, [menuId]);

//   return (
//     <Container>
//       <h2>Menu Products</h2>
//       <ProductGrid>
//         {products.map((product) => (
//           <ProductCard key={product._id}>
//             <ProductImage src={product.image} alt={product.name} />
//             <p>{product.name}</p>
//             <p>${product.price}</p>
//           </ProductCard>
//         ))}
//       </ProductGrid>
//     </Container>
//   );
// };

// // Styled Components
// const Container = styled.div`
//   padding: 20px;
//   text-align: center;
// `;

// const ProductGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   justify-content: center;
// `;

// const ProductCard = styled.div`
//   width: 150px;
//   border-radius: 10px;
//   padding: 10px;
//   background: #f9f9f9;
//   text-align: center;
// `;

// const ProductImage = styled.img`
//   width: 100px;
//   height: 100px;
//   border-radius: 10px;
//   object-fit: cover;
// `;

// export default MenuProductsPage;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
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

const ProductName = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #222;
  margin-top: 10px;
`;

const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #555;
`;

const MenuProductsPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/products?category=${category}`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <MenuContainer>
      <MenuTitle>{category} Dishes</MenuTitle>
      <ProductGrid>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id}>
              <ProductImage src={`http://localhost:5000/uploads/${product.image}`} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{addCurrency(product.price)}</ProductPrice>
            </ProductCard>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </ProductGrid>
    </MenuContainer>
  );
};

export default MenuProductsPage;
