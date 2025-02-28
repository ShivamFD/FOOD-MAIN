


// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import styled from 'styled-components';
// import { Row, Col, Button, Card } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../slices/cartSlice';
// import Rating from '../components/Rating';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import Meta from '../components/Meta';
// import { FaShoppingCart } from 'react-icons/fa';
// import { addCurrency } from '../utils/addCurrency';

// // Styled Components
// const MenuContainer = styled.div`
//   padding: 40px 20px;
//   min-height: 100vh;
// `;

// const ProductCard = styled(Card)`
//   border: none;
//   background: #fff;
//   box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
//   padding: 15px;
//   border-radius: 10px;
//   transition: all 0.3s ease;
//   cursor: pointer;
//   text-align: center;
//   position: relative;
//   height: 390px; /* Reduced height */

//   &:hover {
//     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
//     transform: translateY(-3px);
//   }
// `;

// const ProductImage = styled.img`
//   width: 100%;
//   height: 140px; /* Smaller image */
//   object-fit: cover;
//   border-radius: 8px;
//   margin-bottom: 8px;
// `;

// const ProductTitle = styled.h5`
//   font-weight: bold;
//   color: #d35400;
//   margin-bottom: 4px;
//   font-size: 1rem;
//   white-space: nowrap;
//   /* overflow: hidden; */
//   text-overflow: ellipsis;
// `;

// const ProductDescription = styled.p`
//   color: #666;
//   font-size: 0.9rem;
//   line-height: 1.3;
//   padding-top: 1rem;
//   height: 20px; /* Fixed height */
//   /* overflow: hidden; */
// `;

// const RatingWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 0.9rem;
//   margin-top: 1rem;
//   margin-bottom: 6px;

//   span {
//     margin-left: 4px;
//     color: #777;
//   }
// `;

// const PriceTag = styled.div`
//   font-size: 1.1rem;
//   font-weight: bold;
//   color: #222;
//   margin: 4px 0;
// `;

// const StyledButton = styled(Button)`
//   background-color: rgba(234, 104, 18, 0.81);
//   border: none;
//   font-size: 0.9rem;
//   font-weight: bold;
//   padding: 8px;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.3s ease;
//   border-radius: 6px;

//   &:hover {
//     background-color: #e65c00;
//     transform: scale(1.05);
//   }

//   svg {
//     margin-left: 6px;
//   }
// `;

// const MenuProductsPage = () => {
//   const { id } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const { userInfo } = useSelector(state => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(`http://localhost:5000/api/menu/menu/${id}`);
//         if (response.data && Array.isArray(response.data.products)) {
//           setProducts(response.data.products);
//         } else {
//           setError('No products found for this menu.');
//         }
//       } catch (error) {
//         setError('There was an error fetching the products.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchProducts();
//     }
//   }, [id]);

//   const addToCartHandler = (product) => {
//     dispatch(addToCart({ ...product, qty: 1 }));
//     navigate('/cart');
//   };

//   const handleProductClick = (productId) => {
//     navigate(`/product/${productId}`);
//   };

//   return (
//     <MenuContainer>
//       <Meta title="Menu Products" description="List of products available in the menu" />

//       {loading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant="danger">{error}</Message>
//       ) : (
//         <Row>
//           {products.length > 0 ? (
//             products.map((product) => (
//               <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//                 <ProductCard onClick={() => handleProductClick(product._id)}>
//                 <ProductImage
//   src={`http://localhost:5000${product.image}`}
//   alt={product.name}
// />


//                   <ProductTitle>{product.name}</ProductTitle>
//                   <RatingWrapper>
//                     <Rating value={product.rating} />
//                     <span>({product.numReviews})</span>
//                   </RatingWrapper>
//                   <ProductDescription>{product.description}</ProductDescription>
//                   <PriceTag>{addCurrency(product.price)}</PriceTag>

//                   <StyledButton
//                     disabled={product.countInStock === 0}
//                     onClick={() => addToCartHandler(product)}
//                   >
//                     Add To Cart <FaShoppingCart />
//                   </StyledButton>
//                 </ProductCard>
//               </Col>
//             ))
//           ) : (
//             <Message variant="info">No products found for this menu.</Message>
//           )}
//         </Row>
//       )}
//     </MenuContainer>
//   );
// };

// export default MenuProductsPage;











// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import styled from 'styled-components';
// import { Row, Col } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import Rating from '../components/Rating';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import Meta from '../components/Meta';

// // Styled Components
// const MenuContainer = styled.div`
//   padding: 20px;
//   min-height: 100vh;
//   /* max-width: 1500px; // Increased to accommodate three wider cards with 15px gaps */
//   width: 100%;
//   margin: 0 auto;
//   background: #ffffff;
// `;

// const ProductGrid = styled(Row)`
//   gap: 55px;
//   justify-content: flex-start;
// `;

// const ProductCard = styled(Col)`
//   background: #fff;
//   border-radius: 8px;
//   box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   width: 280px; // Increased width for three cards per row
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
//     transform: translateY(-3px);
//   }
// `;

// const ProductImage = styled.img`
//   width: 100%;
//   height: 210px; // Adjusted height proportionally for wider cards (180px * 300/250)
//   object-fit: cover;
//   border-bottom: 1px solid #e0e0e0;
// `;

// const ProductDetails = styled.div`
//   padding: 12px; // Slightly increased padding for wider cards
//   text-align: left;
// `;

// const ProductTitle = styled.h5`
//   font-weight: 500;
//   color: #d35400;
//   font-size: 1.1rem; // Slightly larger font for wider cards
//   margin: 0 0 6px 0;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   line-height: 1.2;
// `;

// const RatingWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   font-size: 0.9rem;
//   color: #777;
//   margin-bottom: 6px;

//   span {
//     margin-left: 5px;
//   }
// `;

// const PriceTag = styled.div`
//   font-size: 1.1rem; // Slightly larger font for wider cards
//   font-weight: 600;
//   color: #333;
//   margin-bottom: 6px;
// `;

// // Function to format currency
// const addCurrency = (price) => {
//   return `₹${price.toFixed(2)}`;
// };

// const OfferTag = styled.div`
//   position: absolute;
//   top: 12px; // Slightly adjusted for wider cards
//   left: 12px;
//   background: #007bff;
//   color: #fff;
//   padding: 5px 10px; // Slightly larger padding for wider cards
//   border-radius: 4px;
//   font-size: 0.9rem; // Slightly larger font for wider cards
// `;

// const DeliveryTime = styled.div`
//   font-size: 0.9rem;
//   color: #777;
//   margin-top: 6px;
// `;

// const MenuProductsPage = () => {
//   const { id } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const { userInfo } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(`http://localhost:5000/api/menu/menu/${id}`);
//         console.log('API Response:', response.data.products); // Debug to check data structure
//         if (response.data && Array.isArray(response.data.products)) {
//           setProducts(response.data.products);
//         } else {
//           setError('No products found for this menu.');
//         }
//       } catch (error) {
//         setError('There was an error fetching the products.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchProducts();
//     }
//   }, [id]);

//   const handleProductClick = (productId) => {
//     navigate(`/product/${productId}`);
//   };

//   return (
//     <MenuContainer>
//       <Meta title="Menu Products" description="List of products available in the menu" />

//       {loading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant="danger">{error}</Message>
//       ) : (
//         <ProductGrid>
//           {products.length > 0 ? (
//             products.map((product) => (
//               <ProductCard key={product._id} xs={12} sm={6} md={4} lg={3}>
//                 <div style={{ position: 'relative' }}>
//                   {product.discount && (
//                     <OfferTag>{`₹${product.discount} OFF`}</OfferTag>
//                   )}
//                   <ProductImage
//                     src={`http://localhost:5000${product.image}`}
//                     alt={product.name}
//                     onClick={() => handleProductClick(product._id)}
//                   />
//                 </div>
//                 <ProductDetails>
//                   <ProductTitle onClick={() => handleProductClick(product._id)}>
//                     {product.name}
//                   </ProductTitle>
//                   <RatingWrapper>
//                     <Rating value={product.rating || 0} /> {/* Default to 0 if rating is undefined */}
//                     <span>({product.numReviews || 0})</span> {/* Default to 0 if numReviews is undefined */}
//                   </RatingWrapper>
//                   <PriceTag>{addCurrency(product.price)} for one</PriceTag>
//                   <DeliveryTime>{product.deliveryTime || `${Math.floor(Math.random() * (59 - 20 + 1)) + 20} min`}</DeliveryTime>

//                 </ProductDetails>
//               </ProductCard>
//             ))
//           ) : (
//             <Message variant="info">No products found for this menu.</Message>
//           )}
//         </ProductGrid>
//       )}
//     </MenuContainer>
//   );
// };

// export default MenuProductsPage;















import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';

// Styled Components
const MenuContainer = styled.div`
  padding: 20px;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  background: #ffffff;
`;

const MenuHeader = styled.h2`
  font-weight: 600;
  color: #d35400;
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: left;
`;

const ProductGrid = styled(Row)`
  gap: 95px;
  justify-content: flex-start;
`;

const ProductCard = styled(Col)`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 280px; // Increased width for three cards per row
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 210px; // Adjusted height proportionally for wider cards (180px * 300/250)
  object-fit: cover;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-top: 10px;
`;

const ProductDetails = styled.div`
  padding: 12px; // Slightly increased padding for wider cards
  text-align: left;
`;

const ProductTitle = styled.h5`
  font-weight: 500;
  color: #d35400;
  font-size: 1.1rem; // Slightly larger font for wider cards
  margin: 0 0 6px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 6px;

  span {
    margin-left: 5px;
  }
`;

const PriceTag = styled.div`
  font-size: 1.1rem; // Slightly larger font for wider cards
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
`;

// Function to format currency
const addCurrency = (price) => {
  return `₹${price.toFixed(2)}`;
};

const OfferTag = styled.div`
  position: absolute;
  top: 12px; // Slightly adjusted for wider cards
  left: 12px;
  background: #007bff;
  color: #fff;
  padding: 5px 10px; // Slightly larger padding for wider cards
  border-radius: 4px;
  font-size: 0.9rem; // Slightly larger font for wider cards
`;

const DeliveryTime = styled.div`
  font-size: 0.9rem;
  color: #777;
  margin-top: 6px;
`;

const MenuProductsPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [menuName, setMenuName] = useState(''); // State to store menu name
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/api/menu/menu/${id}`);
        console.log('API Response:', response.data); // Debug to check data structure
        if (response.data && Array.isArray(response.data.products)) {
          setProducts(response.data.products);
          // Assuming the menu name is in response.data.name or a similar field
          setMenuName(response.data.name || 'Menu Products'); // Default to 'Menu Products' if not found
        } else {
          setError('No products found for this menu.');
        }
      } catch (error) {
        setError('There was an error fetching the products.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProducts();
    }
  }, [id]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <MenuContainer>
      <Meta title="Menu Products" description="List of products available in the menu" />

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <MenuHeader>{menuName} Dishes</MenuHeader>
          <ProductGrid>
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product._id} xs={12} sm={6} md={4} lg={3}>
                  <div style={{ position: 'relative' }}>
                    {product.discount && (
                      <OfferTag>{`₹${product.discount} OFF`}</OfferTag>
                    )}
                    <ProductImage
                      src={`http://localhost:5000${product.image}`}
                      alt={product.name}
                      onClick={() => handleProductClick(product._id)}
                    />
                  </div>
                  <ProductDetails>
                    <ProductTitle onClick={() => handleProductClick(product._id)}>
                      {product.name}
                    </ProductTitle>
                    <RatingWrapper>
                      <Rating value={product.rating || 0} /> {/* Default to 0 if rating is undefined */}
                      <span>({product.numReviews || 0})</span> {/* Default to 0 if numReviews is undefined */}
                    </RatingWrapper>
                    <PriceTag>{addCurrency(product.price)} for one</PriceTag>
                    <DeliveryTime>{product.deliveryTime || `${Math.floor(Math.random() * (59 - 20 + 1)) + 20} min`}</DeliveryTime>
                  </ProductDetails>
                </ProductCard>
              ))
            ) : (
              <Message variant="info">No products found for this menu.</Message>
            )}
          </ProductGrid>
        </>
      )}
    </MenuContainer>
  );
};

export default MenuProductsPage;