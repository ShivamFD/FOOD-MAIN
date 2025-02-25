// // import React from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { FaTrash } from 'react-icons/fa';
// // import {
// //   Row,
// //   Col,
// //   Card,
// //   ListGroup,
// //   Form,
// //   Image,
// //   Button,
// //   ListGroupItem
// // } from 'react-bootstrap';
// // import { FaIndianRupeeSign } from 'react-icons/fa6';

// // import Message from '../components/Message';
// // import { addToCart, removeFromCart } from '../slices/cartSlice';
// // import Meta from '../components/Meta';
// // import { addCurrency } from '../utils/addCurrency';
// // const CartPage = () => {
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();
// //   const { cartItems } = useSelector(state => state.cart);

// //   const addToCartHandler = async (product, qty) => {
// //     dispatch(addToCart({ ...product, qty }));
// //   };

// //   const removeFromCartHandler = async id => {
// //     dispatch(removeFromCart(id));
// //   };

// //   const checkoutHandler = () => {
// //     navigate('/login?redirect=/shipping');
// //   };

// //   return (
// //     <>
// //       <Meta title={'Shopping Cart'} />
// //       <h1>Shopping Cart</h1>
// //       <Row>
// //         <Col md={8}>
// //           {cartItems.length === 0 && (
// //             <Message>
// //               Your cart is empty 👉 <Link to='/'>Go Back</Link>
// //             </Message>
// //           )}
// //           <ListGroup variant='flush'>
// //             {cartItems.map(item => (
// //               <ListGroup.Item className='my-3' key={item._id}>
// //                 <Row>
// //                   <Col md={2}>
// //                     <Image src={item.image} alt={item.name} fluid rounded />
// //                   </Col>
// //                   <Col md={3}>
// //                     <Link
// //                       to={`/product/${item._id}`}
// //                       className='product-title text-dark'
// //                       style={{ textDecoration: 'none' }}
// //                     >
// //                       {item.name}
// //                     </Link>
// //                   </Col>
// //                   <Col md={2}>{addCurrency(item.price)}</Col>
// //                   <Col md={2}>
// //                     <Form.Control
// //                       as='select'
// //                       value={item.qty}
// //                       onChange={e =>
// //                         addToCartHandler(item, Number(e.target.value))
// //                       }
// //                     >
// //                       {Array.from({ length: item.countInStock }, (_, i) => (
// //                         <option key={i + 1} value={i + 1}>
// //                           {i + 1}
// //                         </option>
// //                       ))}
// //                     </Form.Control>
// //                   </Col>
// //                   <Col md={2}>
// //                     <Button
// //                       type='button'
// //                       variant='light'
// //                       onClick={() => removeFromCartHandler(item._id)}
// //                     >
// //                       <FaTrash style={{color:'red'}}/>
// //                     </Button>
// //                   </Col>
// //                 </Row>
// //               </ListGroup.Item>
// //             ))}
// //           </ListGroup>
// //         </Col>
// //         <Col md={4}>
// //           {cartItems.length > 0 && (
// //             <Card>
// //               <ListGroup variant='flush'>
// //                 <ListGroup.Item>
// //                   <h2>
// //                     Subtotal (
// //                     {cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
// //                   </h2>
// //                   {addCurrency(
// //                     cartItems.reduce(
// //                       (acc, item) => acc + item.qty * item.price,
// //                       0
// //                     )
// //                   )}
// //                 </ListGroup.Item>
// //                 <ListGroupItem>
// //                   <Button
// //                     className='w-100'
// //                     variant='warning'
// //                     type='button'
// //                     disabled={cartItems.length === 0}
// //                     onClick={checkoutHandler}
// //                   >
// //                     Proceed To Checkout
// //                   </Button>
// //                 </ListGroupItem>
// //               </ListGroup>
// //             </Card>
// //           )}
// //         </Col>
// //       </Row>
// //     </>
// //   );
// // };

// // export default CartPage;
// // import React from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { FaTrash } from 'react-icons/fa';
// // import { FaIndianRupeeSign } from 'react-icons/fa6';
// // import { addToCart, removeFromCart } from '../slices/cartSlice';
// // import Meta from '../components/Meta';
// // import { addCurrency } from '../utils/addCurrency';
// // import Message from '../components/Message';
// // import styled from 'styled-components';

// // // Styled Components
// // const PageContainer = styled.div`
// //   padding: 30px;
// //   background: #141e30;
// //   color: #fff;
// //   border-radius: 10px;
// //   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
// // `;

// // const Title = styled.h1`
// //   font-size: 26px;
// //   color: #fff;
// //   margin-bottom: 20px;
// // `;

// // const CartList = styled.div`
// //   background: #1f2a40;
// //   padding: 20px;
// //   border-radius: 10px;
// // `;

// // const CartItem = styled.div`
// //   display: flex;
// //   align-items: center;
// //   gap: 20px;
// //   padding: 15px;
// //   border-bottom: 1px solid #ffcc00;

// //   &:hover {
// //     background: rgba(255, 204, 0, 0.1);
// //     transition: all 0.3s ease-in-out;
// //   }
// //   @media (max-width: 375px) {
// //     flex-direction: column;
// //     gap: 10px;
// //   }
// //   @media (max-width: 768px) {
// //     flex-wrap: wrap-reverse;
// //     gap: 5px;
// //   }
// // `;

// // const ProductImage = styled.img`
// //   width: 60px;
// //   height: 60px;
// //   border-radius: 8px;
// //   object-fit: cover;
// // `;

// // const ProductName = styled(Link)`
// //   flex: 1;
// //   color: <div id="fff"></div>;
// //   text-decoration: none;
// //   font-size: 16px;
// //   transition: color 0.3s ease-in-out;

// //   &:hover {
// //     color: #e6b800;
// //   }
// // `;

// // const ProductPrice = styled.span`
// //   font-size: 18px;
// //   font-weight: bold;
// //   color: #fff;
// // `;

// // const QuantitySelect = styled.select`
// //   padding: 5px;
// //   border: 1px solid #fff;
// //   background: #1f2a40;
// //   color: #fff;
// //   border-radius: 5px;
// //   transition: all 0.3s ease-in-out;

// //   &:hover {
// //     box-shadow: 0px 0px 8px #512f7bc7;
// //   }
// // `;

// // const RemoveButton = styled.button`
// //   background: none;
// //   border: none;
// //   cursor: pointer;
// //   transition: transform 0.3s ease-in-out;

// //   &:hover {
// //     transform: scale(1.2);
// //   }

// //   svg {
// //     color: red;
// //   }
// // `;

// // const SummaryCard = styled.div`
// //   background: #1f2a40;
// //   padding: 20px;
// //   border-radius: 10px;
// //   text-align: center;
// //   color: #fff;
// //   margin-top: 20px;
// // `;

// // const CheckoutButton = styled.button`
// //   width: 100%;
// //   max-width: 300px;
// //   padding: 12px;
// //   font-size: 18px;
// //   font-weight: bold;
// //   background: linear-gradient(135deg, #9500ffab, #fff);
// //   color: #141e30;
// //   border: none;
// //   border-radius: 5px;
// //   transition: all 0.3s ease-in-out;
// //   cursor: pointer;
// //   margin-top: 15px;

// //   &:hover {
// //     background: #ffffff87;
// //     transform: scale(1.05);
// //   }
// // `;

// // const CartPage = () => {
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();
// //   const { cartItems } = useSelector((state) => state.cart);

// //   const addToCartHandler = async (product, qty) => {
// //     dispatch(addToCart({ ...product, qty }));
// //   };

// //   const removeFromCartHandler = async (id) => {
// //     dispatch(removeFromCart(id));
// //   };

// //   const checkoutHandler = () => {
// //     navigate('/login?redirect=/shipping');
// //   };

// //   return (
// //     <>
// //       <Meta title={'Shopping Cart'} />
// //       <PageContainer>
// //         <Title>Shopping Cart</Title>

// //         {cartItems.length === 0 ? (
// //           <Message>
// //             Your cart is empty 👉 <Link to="/">Go Back</Link>
// //           </Message>
// //         ) : (
// //           <>
// //             <CartList>
// //               {cartItems.map((item) => (
// //                 <CartItem key={item._id}>
// //                   <ProductImage src={item.image} alt={item.name} />
// //                   <ProductName to={`/product/${item._id}`}>{item.name}</ProductName>
// //                   <ProductPrice>{addCurrency(item.price)}</ProductPrice>
// //                   <QuantitySelect
// //                     value={item.qty}
// //                     onChange={(e) => addToCartHandler(item, Number(e.target.value))}
// //                   >
// //                     {Array.from({ length: item.countInStock }, (_, i) => (
// //                       <option key={i + 1} value={i + 1}>
// //                         {i + 1}
// //                       </option>
// //                     ))}
// //                   </QuantitySelect>
// //                   <RemoveButton onClick={() => removeFromCartHandler(item._id)}>
// //                     <FaTrash />
// //                   </RemoveButton>
// //                 </CartItem>
// //               ))}
// //             </CartList>

// //             <SummaryCard>
// //               <h2>
// //                 Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
// //               </h2>
// //               <h3>
// //                 {addCurrency(cartItems.reduce((acc, item) => acc + item.qty * item.price, 0))}
// //               </h3>
// //               <CheckoutButton onClick={checkoutHandler} disabled={cartItems.length === 0}>
// //                 Proceed To Checkout
// //               </CheckoutButton>
// //             </SummaryCard>
// //           </>
// //         )}
// //       </PageContainer>
// //     </>
// //   );
// // };

// // export default CartPage;
// // import React from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { FaTrash } from 'react-icons/fa';
// // import { addToCart, removeFromCart } from '../slices/cartSlice';
// // import Meta from '../components/Meta';
// // import { addCurrency } from '../utils/addCurrency';
// // import Message from '../components/Message';
// // import styled from 'styled-components';

// // // Styled Components
// // const PageContainer = styled.div`
// //   padding: 30px;
// //   display: flex;
// //   flex-direction: column;
// //   gap: 20px;
// // `;

// // const Title = styled.h1`
// //   font-size: 26px;
// //   color: #141e30;
// //   text-align: center;
// //   margin-bottom: 20px;
// // `;

// // const CartContent = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   gap: 20px;
// //   max-width: 900px;
// //   margin: 0 auto;
// // `;

// // const CartItem = styled.div`
// //   display: flex;
// //   align-items: center;
// //   gap: 15px;
// //   padding: 15px;
// //   border: 1px solid #ddd;
// //   border-radius: 8px;
// //   flex-wrap: wrap;
// //   justify-content: space-between;
// // `;

// // const ProductImage = styled.img`
// //   width: 80px;
// //   height: 80px;
// //   border-radius: 8px;
// //   object-fit: cover;
// // `;

// // const ProductDetails = styled.div`
// //   flex: 1;
// //   display: flex;
// //   flex-direction: column;
// //   gap: 5px;
// // `;

// // const ProductName = styled(Link)`
// //   font-size: 16px;
// //   font-weight: bold;
// //   color: #141e30;
// //   text-decoration: none;

// //   &:hover {
// //     color: #e6b800;
// //   }
// // `;

// // const ProductPrice = styled.span`
// //   font-size: 18px;
// //   font-weight: bold;
// // `;

// // const QuantityWrapper = styled.div`
// //   display: flex;
// //   align-items: center;
// //   gap: 10px;
// // `;

// // const QuantitySelect = styled.select`
// //   padding: 5px;
// //   border: 1px solid #141e30;
// //   border-radius: 5px;
// // `;

// // const RemoveButton = styled.button`
// //   background: none;
// //   border: none;
// //   cursor: pointer;
// //   transition: transform 0.3s ease-in-out;

// //   &:hover {
// //     transform: scale(1.2);
// //   }

// //   svg {
// //     color: red;
// //   }
// // `;

// // const SummarySection = styled.div`
// //   padding: 20px;
// //   border: 1px solid #ddd;
// //   border-radius: 10px;
// //   text-align: center;
// //   max-width: 400px;
// //   margin: 0 auto;
// // `;

// // const CheckoutButton = styled.button`
// //   width: 100%;
// //   padding: 12px;
// //   font-size: 18px;
// //   font-weight: bold;
// //   background: #141e30;
// //   color: white;
// //   border: none;
// //   border-radius: 5px;
// //   transition: all 0.3s ease-in-out;
// //   cursor: pointer;
// //   margin-top: 15px;

// //   &:hover {
// //     background: #1f2a40;
// //   }
// // `;

// // const CartPage = () => {
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();
// //   const { cartItems } = useSelector((state) => state.cart);

// //   const addToCartHandler = (product, qty) => {
// //     dispatch(addToCart({ ...product, qty }));
// //   };

// //   const removeFromCartHandler = (id) => {
// //     dispatch(removeFromCart(id));
// //   };

// //   const checkoutHandler = () => {
// //     navigate('/login?redirect=/shipping');
// //   };

// //   return (
// //     <>
// //       <Meta title={'Shopping Cart'} />
// //       <PageContainer>
// //         <Title>Shopping Cart</Title>

// //         {cartItems.length === 0 ? (
// //           <Message>
// //             Your cart is empty 👉 <Link to="/">Go Back</Link>
// //           </Message>
// //         ) : (
// //           <CartContent>
// //             {cartItems.map((item) => (
// //               <CartItem key={item._id}>
// //                 <ProductImage src={item.image} alt={item.name} />
// //                 <ProductDetails>
// //                   <ProductName to={`/product/${item._id}`}>{item.name}</ProductName>
// //                   <ProductPrice>{addCurrency(item.price)}</ProductPrice>
// //                 </ProductDetails>
// //                 <QuantityWrapper>
// //                   <QuantitySelect
// //                     value={item.qty}
// //                     onChange={(e) => addToCartHandler(item, Number(e.target.value))}
// //                   >
// //                     {Array.from({ length: item.countInStock }, (_, i) => (
// //                       <option key={i + 1} value={i + 1}>
// //                         {i + 1}
// //                       </option>
// //                     ))}
// //                   </QuantitySelect>
// //                 </QuantityWrapper>
// //                 <RemoveButton onClick={() => removeFromCartHandler(item._id)}>
// //                   <FaTrash />
// //                 </RemoveButton>
// //               </CartItem>
// //             ))}

// //             <SummarySection>
// //               <h2>
// //                 Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
// //               </h2>
// //               <h3>
// //                 {addCurrency(cartItems.reduce((acc, item) => acc + item.qty * item.price, 0))}
// //               </h3>
// //               <CheckoutButton onClick={checkoutHandler} disabled={cartItems.length === 0}>
// //                 Proceed To Checkout
// //               </CheckoutButton>
// //             </SummarySection>
// //           </CartContent>
// //         )}
// //       </PageContainer>
// //     </>
// //   );
// // };

// // export default CartPage;
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaTrash } from 'react-icons/fa';
// import { addToCart, removeFromCart } from '../slices/cartSlice';
// import Meta from '../components/Meta';
// import { addCurrency } from '../utils/addCurrency';
// import Message from '../components/Message';
// import styled from 'styled-components';

// // Styled Components
// const CartContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 30px;
//   gap: 20px;
// `;

// const Title = styled.h1`
//   font-size: 28px;
//   color: #141e30;
//   text-align: center;
//   margin-bottom: 20px;
// `;

// const CartLayout = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   gap: 20px;
  
//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const ProductSection = styled.div`
//   flex: 2;
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
// `;

// const SummarySection = styled.div`
//   flex: 1;
//   background: #f8f9fa;
//   padding: 20px;
//   border-radius: 10px;
//   text-align: center;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

//   h2 {
//     font-size: 20px;
//     margin-bottom: 10px;
//   }

//   h3 {
//     font-size: 24px;
//     color: #1a1a1a;
//     margin-bottom: 15px;
//   }
// `;

// const CartItem = styled.div`
//   display: grid;
//   grid-template-columns: 80px 1fr auto auto;
//   gap: 15px;
//   align-items: center;
//   padding: 15px;
//   background: white;
//   border-radius: 8px;
//   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

//   @media (max-width: 600px) {
//     grid-template-columns: 80px 1fr;
//     grid-template-rows: auto auto;
//     gap: 10px;
//   }
// `;

// const ProductImage = styled.img`
//   width: 80px;
//   height: 80px;
//   border-radius: 8px;
//   object-fit: cover;
// `;

// const ProductDetails = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
// `;

// const ProductName = styled(Link)`
//   font-size: 16px;
//   font-weight: bold;
//   color: #141e30;
//   text-decoration: none;

//   &:hover {
//     color: #e6b800;
//   }
// `;

// const ProductPrice = styled.span`
//   font-size: 18px;
//   font-weight: bold;
// `;

// const QuantitySelect = styled.select`
//   padding: 5px;
//   border: 1px solid #141e30;
//   border-radius: 5px;
// `;

// const RemoveButton = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
//   transition: transform 0.3s ease-in-out;

//   &:hover {
//     transform: scale(1.2);
//   }

//   svg {
//     color: red;
//   }
// `;

// const CheckoutButton = styled.button`
//   width: 100%;
//   padding: 12px;
//   font-size: 18px;
//   font-weight: bold;
//   background: #141e30;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   transition: all 0.3s ease-in-out;
//   cursor: pointer;
//   margin-top: 15px;

//   &:hover {
//     background: #1f2a40;
//   }
// `;

// const CartPage = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { cartItems } = useSelector((state) => state.cart);

//   const addToCartHandler = (product, qty) => {
//     dispatch(addToCart({ ...product, qty }));
//   };

//   const removeFromCartHandler = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   const checkoutHandler = () => {
//     navigate('/login?redirect=/shipping');
//   };

//   return (
//     <>
//       <Meta title={'Shopping Cart'} />
//       <CartContainer>
//         <Title>Shopping Cart</Title>

//         {cartItems.length === 0 ? (
//           <Message>
//             Your cart is empty 👉 <Link to="/">Go Back</Link>
//           </Message>
//         ) : (
//           <CartLayout>
//             <ProductSection>
//               {cartItems.map((item) => (
//                 <CartItem key={item._id}>
//                   <ProductImage src={item.image} alt={item.name} />
//                   <ProductDetails>
//                     <ProductName to={`/product/${item._id}`}>{item.name}</ProductName>
//                     <ProductPrice>{addCurrency(item.price)}</ProductPrice>
//                   </ProductDetails>
//                   <QuantitySelect
//                     value={item.qty}
//                     onChange={(e) => addToCartHandler(item, Number(e.target.value))}
//                   >
//                     {Array.from({ length: item.countInStock }, (_, i) => (
//                       <option key={i + 1} value={i + 1}>
//                         {i + 1}
//                       </option>
//                     ))}
//                   </QuantitySelect>
//                   <RemoveButton onClick={() => removeFromCartHandler(item._id)}>
//                     <FaTrash />
//                   </RemoveButton>
//                 </CartItem>
//               ))}
//             </ProductSection>

//             <SummarySection>
//               <h2>
//                 Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
//               </h2>
//               <h3>
//                 {addCurrency(cartItems.reduce((acc, item) => acc + item.qty * item.price, 0))}
//               </h3>
//               <CheckoutButton onClick={checkoutHandler} disabled={cartItems.length === 0}>
//                 Proceed To Checkout
//               </CheckoutButton>
//             </SummarySection>
//           </CartLayout>
//         )}
//       </CartContainer>
//     </>
//   );
// };

// export default CartPage;
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';
import { addToCart, removeFromCart } from '../slices/cartSlice';
import Meta from '../components/Meta';

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping');
  };

  return (
    <>
      <Meta title={'Shopping Cart'} />
      <CartContainer>
        <Title>Shopping Cart</Title>

        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty 👉 <BackLink to="/">Go Back</BackLink>
          </Message>
        ) : (
          <>
            <CartTable>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <ProductInfo>
                        <ProductImage src={item.image} alt={item.name} />
                        <ProductName to={`/product/${item._id}`}>{item.name}</ProductName>
                      </ProductInfo>
                    </td>
                    <td>₹{item.price}</td>
                    <td>
                      <QuantitySelect
                        value={item.qty}
                        onChange={(e) => addToCartHandler(item, Number(e.target.value))}
                      >
                        {Array.from({ length: item.countInStock }, (_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </QuantitySelect>
                    </td>
                    <td>₹{(item.qty * item.price).toFixed(2)}</td>
                    <td>
                      <RemoveButton onClick={() => removeFromCartHandler(item._id)}>
                        <FaTrash />
                      </RemoveButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </CartTable>

            {/* Cart Totals Section */}
            <CartTotals>
              <h3>Cart Totals</h3>
              <CartTotalRow>
                <span>Subtotal:</span>
                <span>₹{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</span>
              </CartTotalRow> <hr />
              <CartTotalRow>
                <span>Shipping:</span>
                <span>₹50.00</span>
              </CartTotalRow> <hr />
              <CartTotalRow>
                <strong>Total:</strong>
                <strong>
                  ₹{(cartItems.reduce((acc, item) => acc + item.qty * item.price, 0) + 50).toFixed(2)}
                </strong>
              </CartTotalRow> <hr />
            </CartTotals>

            {/* Proceed to Checkout Button */}
            <CheckoutContainer>
              <CheckoutButton onClick={checkoutHandler} disabled={cartItems.length === 0}>
                Proceed to Checkout
              </CheckoutButton>
            </CheckoutContainer>
          </>
        )}
      </CartContainer>
    </>
  );
};

export default CartPage;

/* Styled Components */
const CartContainer = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Message = styled.p`
  text-align: center;
  font-size: 18px;
`;

const BackLink = styled.a`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`;

const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
    text-align: center;
  }

  th {
    background-color: #f8f8f8;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  object-fit: cover;
`;

const ProductName = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
`;

const QuantitySelect = styled.select`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: red;
  font-size: 16px;
`;

const CartTotals = styled.div`
  max-width: 880px;
  margin: auto;
  padding: 40px;
  border-radius: 10px;
  background: #f8f8f8;
  @media (max-width: 768px) {
    min-width: 450px;
    margin: 0;
  } 
`;

const CartTotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
`;

const CheckoutContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const CheckoutButton = styled.button`
  padding: 12px 20px;
  font-size: 18px;
  border: none;
  background: #ff6a00;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
  &:hover {
    background: #e16805;
    border-radius: 50px;
    font-weight: bold;
  }
`;
