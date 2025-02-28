// // import React, { useState } from 'react';
// // import { Button, Card } from 'react-bootstrap';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useDispatch } from 'react-redux';
// // import { addCurrency } from '../utils/addCurrency';
// // import { addToCart } from '../slices/cartSlice';
// // import Rating from './Rating';

// // const Product = ({ product }) => {
// //   const [qty, setQty] = useState(1);
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const addToCartHandler = () => {
// //     dispatch(addToCart({ ...product, qty }));
// //     navigate('/cart');
// //   };
// //   return (
// //     <Card className='my-3 p-3 rounded text-center'>
// //       <Link
// //         to={`/product/${product._id}`}
// //         style={{ textDecoration: 'none' }}
// //         className='text-dark'
// //       >
// //         <Card.Img
// //           variant='top'
// //           src={product.image}
// //           style={{ height: '200px', objectFit: 'contain' }}
// //         />
// //         <Card.Body>
// //           <Card.Title as='div' className='product-title'>
// //             <strong>{product.name}</strong>
// //           </Card.Title>

// //           <Card.Text as='div' className='mb-3'>
// //             <Rating
// //               value={product.rating}
// //               text={`(${product.numReviews} reviews)`}
// //             />
// //           </Card.Text>
// //           <Card.Text as='h3'>{addCurrency(product.price)}</Card.Text>
// //         </Card.Body>
// //       </Link>
// //       <Button
// //         variant='warning'
// //         type='button'
// //         disabled={product.countInStock === 0}
// //         onClick={addToCartHandler}
// //       >
// //         Add To Cart
// //       </Button>
// //     </Card>
// //   );
// // };

// // export default Product;

// // import React, { useState } from 'react';
// // import { Button } from 'react-bootstrap';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useDispatch } from 'react-redux';
// // import { addCurrency } from '../utils/addCurrency';
// // import { addToCart } from '../slices/cartSlice';
// // import Rating from './Rating';
// // import styled from 'styled-components';

// // const StyledCard = styled.div`
// //   margin: 1rem auto;
// //   padding: 1rem;
// //   border-radius: 15px;
// //   text-align: center;
// //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// //   background-color: #fff;
// //   width: 100%;
// //   max-width: 300px;

// //   @media (min-width: 768px) {
// //     max-width: 250px;
// //   }

// //   @media (min-width: 992px) {
// //     max-width: 280px;
// //   }
// // `;

// // const StyledImage = styled.img`
// //   height: 200px;
// //   object-fit: contain;
// //   width: 100%;
// // `;

// // const ProductTitle = styled.div`
// //   font-weight: bold;
// //   margin-top: 0.5rem;
// // `;

// // const Product = ({ product }) => {
// //   const [qty, setQty] = useState(1);
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const addToCartHandler = () => {
// //     dispatch(addToCart({ ...product, qty }));
// //     navigate('/cart');
// //   };

// //   return (
// //     <StyledCard>
// //       <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'black' }}>
// //         <StyledImage src={product.image} alt={product.name} />
// //         <ProductTitle>{product.name}</ProductTitle>
// //         <div className='mb-3'>
// //           <Rating value={product.rating} text={`(${product.numReviews} reviews)`} />
// //         </div>
// //         <h3>{addCurrency(product.price)}</h3>
// //       </Link>
// //       <Button
// //         variant='warning'
// //         type='button'
// //         disabled={product.countInStock === 0}
// //         onClick={addToCartHandler}
// //       >
// //         Add To Cart
// //       </Button>
// //     </StyledCard>
// //   );
// // };

// // export default Product;
// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addCurrency } from '../utils/addCurrency';
// import { addToCart } from '../slices/cartSlice';
// import Rating from './Rating';
// import styled from 'styled-components';

// const StyledCard = styled.div`
//   margin: 1rem auto;
//   padding: 1rem;
//   border-radius: 15px;
//   text-align: center;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   background-color: #141e30;
//   width: 100%;
//   max-width: 300px;
//   color: #fff;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//   }

//   @media (min-width: 768px) {
//     max-width: 250px;
//   }

//   @media (min-width: 992px) {
//     max-width: 280px;
//   }
//   @media (max-width: 425px) {
//     max-width: 200px;
//     font-size: 0.8rem;
//   }
// `;

// const StyledImage = styled.img`
//   height: 200px;
//   object-fit: contain;
//   width: 100%;
// `;

// const ProductTitle = styled.div`
//   font-weight: bold;
//   margin-top: 0.5rem;
//   background: linear-gradient(135deg, #ffcc00, #fff);
//   -webkit-background-clip: text;
//   color: transparent;
//   @media (max-width: 425px) {
//     font-size: 0.8rem;
//   }
// `;

// const StyledButton = styled(Button)`
//   background: linear-gradient(135deg, #9500ffab, #fff);
//   border: none;
//   color: #141e30;
//   padding: 10px 20px;
//   text-decoration: none;
//   border-radius: 8px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background: linear-gradient(145deg, #fff,#906fa7ab);
//     font-weight: bold;
//   }

//   &:disabled {
//     background: #e6b800;
//     cursor: not-allowed;
//   }
// `;
// const H3= styled.h3`
//   color: #fff;
//   font-size: 1.5rem;
//   font-weight: bold;
//   margin-top: 0.5rem;
//   @media (max-width: 425px) {
//     font-size: 0.8rem;
//   }
// `

// const Product = ({ product }) => {
//   const [qty, setQty] = useState(1);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const addToCartHandler = () => {
//     dispatch(addToCart({ ...product, qty }));
//     navigate('/cart');
//   };

//   return (
//     <StyledCard>
//       <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: '#fff' }}>
//         <StyledImage src={product.image} alt={product.name} />
//         <ProductTitle>{product.name}</ProductTitle>
//         <div className='mb-3'>
//           <Rating value={product.rating} text={`(${product.numReviews} reviews)`} />
//         </div>
//         <H3>{addCurrency(product.price)}</H3>
//       </Link>
//       <StyledButton
//         variant='warning'
//         type='button'
//         disabled={product.countInStock === 0}
//         onClick={addToCartHandler}
//       >
//         Add To Cart
//       </StyledButton>
//     </StyledCard>
//   );
// };

// export default Product;



// // import React, { useState } from 'react';
// // import { Button } from 'react-bootstrap';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useDispatch } from 'react-redux';
// // import { addCurrency } from '../utils/addCurrency';
// // import { addToCart } from '../slices/cartSlice';
// // import Rating from './Rating';
// // import styled from 'styled-components';

// // const StyledCard = styled.div`
// //   margin: 1rem auto;
// //   padding: 1rem;
// //   border-radius: 0.5rem;
// //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// //   text-align: center;
// //   background-color: #fff;
// //   max-width: 300px;

// //   @media (min-width: 992px) {
// //     max-width: ${({ isSingle }) => (isSingle ? '400px' : '300px')};
// //   }

// //   @media (max-width: 768px) {
// //     max-width: 70%;
// //     padding: 0.5rem;
// //   }
// //   @media (max-width: 475px) {
// //     width: 10%;
// //     padding: 0.5rem;
// //   }
// // `;

// // const StyledImage = styled.img`
// //   height: 200px;
// //   object-fit: contain;
// //   width: 100%;

// //   @media (max-width: 768px) {
// //     height: 150px;
// //   }
// // `;

// // const Product = ({ product, isSingle }) => {
// //   const [qty, setQty] = useState(1);
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const addToCartHandler = () => {
// //     dispatch(addToCart({ ...product, qty }));
// //     navigate('/cart');
// //   };

// //   return (
// //     <StyledCard isSingle={isSingle}>
// //       <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }} className='text-dark'>
// //         <StyledImage src={product.image} alt={product.name} />
// //         <div>
// //           <h5 className='product-title'><strong>{product.name}</strong></h5>
// //           <div className='mb-3'>
// //             <Rating value={product.rating} text={`(${product.numReviews} reviews)`} />
// //           </div>
// //           <h3>{addCurrency(product.price)}</h3>
// //         </div>
// //       </Link>
// //       <Button
// //         variant='warning'
// //         type='button'
// //         disabled={product.countInStock === 0}
// //         onClick={addToCartHandler}
// //       >
// //         Add To Cart
// //       </Button>
// //     </StyledCard>
// //   );
// // };

// // export default Product;
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addCurrency } from "../utils/addCurrency";
// import { addToCart } from "../slices/cartSlice";
// import Rating from "./Rating";
// import styled from "styled-components";
// import { FaCartPlus } from "react-icons/fa";
// import { MdRestaurantMenu } from "react-icons/md";

// // Styled Components for the Product Card
// const ProductCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   border-radius: 20px;
//   padding: 1.2rem;
//   /* background: linear-gradient(135deg, #ffebcd, #ffb347); */
//   box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
//   text-align: center;
//   transition: all 0.3s ease-in-out;
//   width: 100%;
//   max-width: 320px;
//   position: relative;
//   overflow: hidden;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
//   }

//   @media (max-width: 425px) {
//     max-width: 220px;
//     padding: 0.8rem;
//   }
// `;

// // Styled Image
// const ProductImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
//   border-radius: 15px;
//   background: #fff;
//   transition: transform 0.3s ease-in-out;

//   ${ProductCard}:hover & {
//     transform: scale(1.05);
//   }

//   @media (max-width: 425px) {
//     height: 160px;
//   }
// `;

// // Styled Title
// const ProductTitle = styled.h3`
//   font-size: 1.2rem;
//   font-weight: bold;
//   color: #8b0000;
//   margin-top: 0.5rem;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;

//   svg {
//     color: #ff4500;
//   }

//   @media (max-width: 425px) {
//     font-size: 1rem;
//   }
// `;

// // Styled Price
// const PriceTag = styled.h3`
//   font-size: 1.5rem;
//   color: #ff4500;
//   font-weight: bold;
//   margin: 0.5rem 0;

//   @media (max-width: 425px) {
//     font-size: 1.2rem;
//   }
// `;

// // Styled Button
// const AddToCartButton = styled.button`
//   background: linear-gradient(135deg, #ff6347, #ff4500);
//   color: #fff;
//   font-size: 1rem;
//   font-weight: bold;
//   padding: 12px 18px;
//   border: none;
//   border-radius: 10px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   transition: all 0.3s ease-in-out;
//   box-shadow: 0 4px 10px rgba(255, 69, 0, 0.2);

//   &:hover {
//     background: linear-gradient(135deg, #ff4500, #ff6347);
//     transform: scale(1.05);
//   }

//   &:disabled {
//     background: #bbb;
//     cursor: not-allowed;
//   }

//   @media (max-width: 425px) {
//     font-size: 0.9rem;
//     padding: 10px 16px;
//   }
// `;

// const Product = ({ product }) => {
//   const [qty, setQty] = useState(1);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const addToCartHandler = () => {
//     dispatch(addToCart({ ...product, qty }));
//     navigate("/cart");
//   };

//   return (
//     <ProductCard>
//       <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
//         <ProductImage src={product.image} alt={product.name} />
//       </Link>

//       <ProductTitle>
//         <MdRestaurantMenu size={20} /> {product.name}
//       </ProductTitle>

//       <div className="mb-3">
//         <Rating value={product.rating} text={`(${product.numReviews} reviews)`} />
//       </div>

//       <PriceTag>{addCurrency(product.price)}</PriceTag>

//       <AddToCartButton
//         disabled={product.countInStock === 0}
//         onClick={addToCartHandler}
//       >
//         <FaCartPlus size={18} /> Add To Cart
//       </AddToCartButton>
//     </ProductCard>
//   );
// };

// export default Product;
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
