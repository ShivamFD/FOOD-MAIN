// // import React, { useState } from 'react';

// // import {
// //   Row,
// //   Col,
// //   ListGroup,
// //   Button,
// //   Image,
// //   Card,
// //   Form,
// //   ListGroupItem
// // } from 'react-bootstrap';
// // import { Link, useParams, useNavigate } from 'react-router-dom';
// // import { useDispatch, useSelector } from 'react-redux';
// // import {
// //   useGetProductDetailsQuery,
// //   useCreateProductReviewMutation
// // } from '../slices/productsApiSlice';
// // import { addToCart } from '../slices/cartSlice';
// // import { toast } from 'react-toastify';
// // import Rating from '../components/Rating';
// // import Loader from '../components/Loader';
// // import Message from '../components/Message';
// // import Meta from '../components/Meta';
// // import { addCurrency } from '../utils/addCurrency';
// // import Reviews from '../components/Reviews';

// // const ProductPage = () => {
// //   const { id: productId } = useParams();
// //   const [qty, setQty] = useState(1);
// //   const [rating, setRating] = useState(0);
// //   const [comment, setComment] = useState('');

// //   const { userInfo } = useSelector(state => state.auth);

// //   const {
// //     data: product,
// //     isLoading,
// //     error
// //   } = useGetProductDetailsQuery(productId);

// //   const [createProductReview, { isLoading: isCreateProductReviewLoading }] =
// //     useCreateProductReviewMutation();

// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();

// //   const addToCartHandler = () => {
// //     dispatch(addToCart({ ...product, qty }));
// //     navigate('/cart');
// //   };
// //   const submitHandler = async e => {
// //     e.preventDefault();
// //     try {
// //       const res = await createProductReview({
// //         productId,
// //         rating,
// //         comment
// //       });
// //       if (res.error) {
// //         toast.error(res.error?.data?.message);
// //       }
// //       toast.success(res.data.message);
// //     } catch (error) {
// //       toast.error(error?.data?.message || error.error);
// //     }

// //     setRating(0);
// //     setComment('');
// //   };
// //   return (
// //     <>
// //       {isLoading ? (
// //         <Loader />
// //       ) : error ? (
// //         <Message variant='danger'>
// //           {error?.data?.message || error.error}
// //         </Message>
// //       ) : (
// //         <>
// //           <Link to='/' className='btn btn-light my-3'>
// //             Go Back
// //           </Link>
// //           <Meta title={product.name} description={product.description} />
// //           <Row>
// //             <Col md={5}>
// //               <Image src={product.image} alt={product.name} fluid />
// //               <Row className='review d-none d-md-block'>
// //                 <Col>
// //                   <Reviews
// //                     product={product}
// //                     userInfo={userInfo}
// //                     rating={rating}
// //                     laoding={isCreateProductReviewLoading}
// //                     setRating={setRating}
// //                     comment={comment}
// //                     setComment={setComment}
// //                     submitHandler={submitHandler}
// //                   />
// //                 </Col>
// //               </Row>
// //             </Col>
// //             <Col md={4}>
// //               <ListGroup variant='flush'>
// //                 <ListGroup.Item>
// //                   <h3>{product.name}</h3>
// //                 </ListGroup.Item>
// //                 <ListGroup.Item>
// //                   <Rating
// //                     value={product.rating}
// //                     text={`${product.numReviews} reviews`}
// //                   />
// //                 </ListGroup.Item>
// //                 <ListGroup.Item>
// //                   Price: {addCurrency(product.price)}
// //                 </ListGroup.Item>
// //                 <ListGroup.Item>
// //                   <strong> About this item:</strong>
// //                   {product.description}
// //                 </ListGroup.Item>
// //               </ListGroup>
// //             </Col>
// //             <Col md={3}>
// //               <Card>
// //                 <ListGroup variant='flush'>
// //                   <ListGroup.Item>
// //                     <Row>
// //                       <Col>Price:</Col>
// //                       <Col>
// //                         <strong>{addCurrency(product.price)}</strong>
// //                       </Col>
// //                     </Row>
// //                   </ListGroup.Item>
// //                   <ListGroup.Item>
// //                     <Row>
// //                       <Col>Status:</Col>
// //                       <Col>
// //                         {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
// //                       </Col>
// //                     </Row>
// //                   </ListGroup.Item>
// //                   {product.countInStock > 0 && (
// //                     <ListGroup.Item>
// //                       <Row>
// //                         <Col>Qty:</Col>
// //                         <Col>
// //                           <Form.Control
// //                             as='select'
// //                             value={qty}
// //                             onChange={e => setQty(Number(e.target.value))}
// //                           >
// //                             {Array.from(
// //                               { length: product.countInStock },
// //                               (_, i) => (
// //                                 <option key={i + 1} value={i + 1}>
// //                                   {i + 1}
// //                                 </option>
// //                               )
// //                             )}
// //                           </Form.Control>
// //                         </Col>
// //                       </Row>
// //                     </ListGroup.Item>
// //                   )}
// //                   <ListGroupItem>
// //                     <Button
// //                       className='w-100'
// //                       variant='warning'
// //                       type='button'
// //                       disabled={product.countInStock === 0}
// //                       onClick={addToCartHandler}
// //                     >
// //                       Add To Cart
// //                     </Button>
// //                   </ListGroupItem>
// //                 </ListGroup>
// //               </Card>
// //             </Col>
// //           </Row>
// //           <Row className='review d-block d-md-none'>
// //             <Col md={6}>
// //               <Reviews
// //                 product={product}
// //                 userInfo={userInfo}
// //                 rating={rating}
// //                 laoding={isCreateProductReviewLoading}
// //                 setRating={setRating}
// //                 comment={comment}
// //                 setComment={setComment}
// //                 submitHandler={submitHandler}
// //               />
// //             </Col>
// //           </Row>
// //         </>
// //       )}
// //     </>
// //   );
// // };

// // export default ProductPage;

// // // import React, { useState } from 'react';
// // // import {
// // //   Row,
// // //   Col,
// // //   ListGroup,
// // //   Button,
// // //   Image,
// // //   Card,
// // //   Form,
// // // } from 'react-bootstrap';
// // // import { Link, useParams, useNavigate } from 'react-router-dom';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import {
// // //   useGetProductDetailsQuery,
// // //   useCreateProductReviewMutation,
// // // } from '../slices/productsApiSlice';
// // // import { addToCart } from '../slices/cartSlice';
// // // import { toast } from 'react-toastify';
// // // import Rating from '../components/Rating';
// // // import Loader from '../components/Loader';
// // // import Message from '../components/Message';
// // // import Meta from '../components/Meta';
// // // import { addCurrency } from '../utils/addCurrency';
// // // import Reviews from '../components/Reviews';

// // // const ProductPage = () => {
// // //   const { id: productId } = useParams();
// // //   const [qty, setQty] = useState(1);
// // //   const [rating, setRating] = useState(0);
// // //   const [comment, setComment] = useState('');

// // //   const { userInfo } = useSelector((state) => state.auth);

// // //   // ✅ Fetch product details
// // //   const {
// // //     data: product,
// // //     isLoading,
// // //     error,
// // //     refetch, // ✅ Needed to update reviews after submission
// // //   } = useGetProductDetailsQuery(productId);

// // //   // ✅ API Mutation to create a product review
// // //   const [createProductReview, { isLoading: isCreateProductReviewLoading }] =
// // //     useCreateProductReviewMutation();

// // //   const navigate = useNavigate();
// // //   const dispatch = useDispatch();

// // //   const addToCartHandler = () => {
// // //     dispatch(addToCart({ ...product, qty }));
// // //     navigate('/cart');
// // //   };

  
// // //   // ✅ Fixed Review Submission Handler
// // //   // const submitHandler = async (e) => {
// // //   //   e.preventDefault();

// // //   //   if (!rating || !comment) {
// // //   //     toast.error('Please provide both rating and comment');
// // //   //     return;
// // //   //   }

// // //   //   try {
// // //   //     const res = await createProductReview({
// // //   //       productId, // ✅ Ensure productId is correctly passed
// // //   //       rating,
// // //   //       comment,
// // //   //     });

// // //   //     if (res.error) {
// // //   //       toast.error(res.error?.data?.message || 'Failed to submit review');
// // //   //     } else {
// // //   //       toast.success('Review submitted successfully');
// // //   //       setRating(0);
// // //   //       setComment('');
// // //   //       refetch(); // ✅ Refresh product details to show the new review
// // //   //     }
// // //   //   } catch (error) {
// // //   //     toast.error(error?.data?.message || 'Error submitting review');
// // //   //   }
// // //   // };

  
// // //   const submitHandler = async (e) => {
// // //     e.preventDefault();
  
// // //     if (!rating || !comment) {
// // //       toast.error('Please provide both rating and comment');
// // //       return;
// // //     }
  
// // //     try {
// // //       const res = await createProductReview({
// // //         productId, // ✅ Ensure this is valid
// // //         rating,
// // //         comment
// // //       });
  
// // //       if (res.error) {
// // //         toast.error(res.error?.data?.message || 'Failed to submit review');
// // //       } else {
// // //         toast.success('Review submitted successfully');
// // //         setRating(0);
// // //         setComment('');
// // //         refetch(); // ✅ Refresh product details to show the new review
// // //       }
// // //     } catch (error) {
// // //       toast.error(error?.data?.message || 'Error submitting review');
// // //     }
// // //   };
  
// // //   return (
// // //     <>
// // //       {isLoading ? (
// // //         <Loader />
// // //       ) : error ? (
// // //         <Message variant="danger">{error?.data?.message || error.error}</Message>
// // //       ) : (
// // //         <>
// // //           <Link to="/" className="btn btn-light my-3">
// // //             Go Back
// // //           </Link>
// // //           <Meta title={product.name} description={product.description} />
// // //           <Row>
// // //             <Col md={5}>
// // //               <Image src={product.image} alt={product.name} fluid />
// // //               <Row className="review d-none d-md-block">
// // //                 <Col>
// // //                   <Reviews
// // //                     product={product}
// // //                     userInfo={userInfo}
// // //                     rating={rating}
// // //                     loading={isCreateProductReviewLoading}
// // //                     setRating={setRating}
// // //                     comment={comment}
// // //                     setComment={setComment}
// // //                     submitHandler={submitHandler}
// // //                   />
// // //                 </Col>
// // //               </Row>
// // //             </Col>
// // //             <Col md={4}>
// // //               <ListGroup variant="flush">
// // //                 <ListGroup.Item>
// // //                   <h3>{product.name}</h3>
// // //                 </ListGroup.Item>
// // //                 <ListGroup.Item>
// // //                   <Rating value={product.rating} text={`${product.numReviews} reviews`} />
// // //                 </ListGroup.Item>
// // //                 <ListGroup.Item>
// // //                   Price: {addCurrency(product.price)}
// // //                 </ListGroup.Item>
// // //                 <ListGroup.Item>
// // //                   <strong>About this item:</strong> {product.description}
// // //                 </ListGroup.Item>
// // //               </ListGroup>
// // //             </Col>
// // //             <Col md={3}>
// // //               <Card>
// // //                 <ListGroup variant="flush">
// // //                   <ListGroup.Item>
// // //                     <Row>
// // //                       <Col>Price:</Col>
// // //                       <Col>
// // //                         <strong>{addCurrency(product.price)}</strong>
// // //                       </Col>
// // //                     </Row>
// // //                   </ListGroup.Item>
// // //                   <ListGroup.Item>
// // //                     <Row>
// // //                       <Col>Status:</Col>
// // //                       <Col>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
// // //                     </Row>
// // //                   </ListGroup.Item>
// // //                   {product.countInStock > 0 && (
// // //                     <ListGroup.Item>
// // //                       <Row>
// // //                         <Col>Qty:</Col>
// // //                         <Col>
// // //                           <Form.Control
// // //                             as="select"
// // //                             value={qty}
// // //                             onChange={(e) => setQty(Number(e.target.value))}
// // //                           >
// // //                             {Array.from({ length: product.countInStock }, (_, i) => (
// // //                               <option key={i + 1} value={i + 1}>
// // //                                 {i + 1}
// // //                               </option>
// // //                             ))}
// // //                           </Form.Control>
// // //                         </Col>
// // //                       </Row>
// // //                     </ListGroup.Item>
// // //                   )}
// // //                   <ListGroup.Item>
// // //                     <Button
// // //                       className="w-100"
// // //                       variant="warning"
// // //                       type="button"
// // //                       disabled={product.countInStock === 0}
// // //                       onClick={addToCartHandler}
// // //                     >
// // //                       Add To Cart
// // //                     </Button>
// // //                   </ListGroup.Item>
// // //                 </ListGroup>
// // //               </Card>
// // //             </Col>
// // //           </Row>
// // //           <Row className="review d-block d-md-none">
// // //             <Col md={6}>
// // //               <Reviews
// // //                 product={product}
// // //                 userInfo={userInfo}
// // //                 rating={rating}
// // //                 loading={isCreateProductReviewLoading}
// // //                 setRating={setRating}
// // //                 comment={comment}
// // //                 setComment={setComment}
// // //                 submitHandler={submitHandler}
// // //               />
// // //             </Col>
// // //           </Row>
// // //         </>
// // //       )}
// // //     </>
// // //   );
// // // };

// // // export default ProductPage;
// // import React, { useState } from 'react';
// // import {
// //   Row,
// //   Col,
// //   ListGroup,
// //   Button,
// //   Image,
// //   Card,
// //   Form,
// //   ListGroupItem
// // } from 'react-bootstrap';
// // import { Link, useParams, useNavigate } from 'react-router-dom';
// // import { useDispatch, useSelector } from 'react-redux';
// // import {
// //   useGetProductDetailsQuery,
// //   useCreateProductReviewMutation
// // } from '../slices/productsApiSlice';
// // import { addToCart } from '../slices/cartSlice';
// // import { toast } from 'react-toastify';
// // import Rating from '../components/Rating';
// // import Loader from '../components/Loader';
// // import Message from '../components/Message';
// // import Meta from '../components/Meta';
// // import { addCurrency } from '../utils/addCurrency';
// // import Reviews from '../components/Reviews';
// // import styled, { keyframes } from 'styled-components';

// // // Animations
// // const fadeIn = keyframes`
// //   from { opacity: 0; transform: translateY(20px); }
// //   to { opacity: 1; transform: translateY(0); }
// // `;

// // const ProductPageContainer = styled.div`
// //   background-color: #141e30;
// //   padding: 20px;
// //   animation: ${fadeIn} 0.8s ease-in-out;
// // `;

// // const BackButton = styled(Link)`
// //   background-color: #ffcc00;
// //   color: #141e30;
// //   padding: 10px 20px;
// //   text-decoration: none;
// //   border-radius: 8px;
// //   margin-bottom: 20px;
// //   display: inline-block;
// //   transition: background-color 0.3s ease;

// //   &:hover {
// //     background-color: #e6b800;
// //   }
// // `;

// // const ProductTitle = styled.h3`
// //   color: #ffcc00;
// // `;

// // const ProductDescription = styled.div`
// //   color: #fff;
// // `;

// // const ProductInfoCard = styled(Card)`
// //   background-color: #141e30;
// //   border: 1px solid #ffcc00;
// //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// // `;

// // const ProductInfoListGroup = styled(ListGroup)`
// //   background-color: #141e30;
// //   color: #ffcc00;
// // `;

// // const ProductPage = () => {
// //   const { id: productId } = useParams();
// //   const [qty, setQty] = useState(1);
// //   const [rating, setRating] = useState(0);
// //   const [comment, setComment] = useState('');

// //   const { userInfo } = useSelector(state => state.auth);

// //   const {
// //     data: product,
// //     isLoading,
// //     error
// //   } = useGetProductDetailsQuery(productId);

// //   const [createProductReview, { isLoading: isCreateProductReviewLoading }] =
// //     useCreateProductReviewMutation();

// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();

// //   const addToCartHandler = () => {
// //     dispatch(addToCart({ ...product, qty }));
// //     navigate('/cart');
// //   };
// //   const submitHandler = async e => {
// //     e.preventDefault();
// //     try {
// //       const res = await createProductReview({
// //         productId,
// //         rating,
// //         comment
// //       });
// //       if (res.error) {
// //         toast.error(res.error?.data?.message);
// //       }
// //       toast.success(res.data.message);
// //     } catch (error) {
// //       toast.error(error?.data?.message || error.error);
// //     }

// //     setRating(0);
// //     setComment('');
// //   };
// //   return (
// //     <ProductPageContainer>
// //       {isLoading ? (
// //         <Loader />
// //       ) : error ? (
// //         <Message variant='danger'>
// //           {error?.data?.message || error.error}
// //         </Message>
// //       ) : (
// //         <>
// //           <BackButton to='/'>Go Back</BackButton>
// //           <Meta title={product.name} description={product.description} />
// //           <Row>
// //             <Col md={5}>
// //               <Image src={product.image} alt={product.name} fluid />
// //               <Row className='review d-none d-md-block'>
// //                 <Col>
// //                   <Reviews
// //                     product={product}
// //                     userInfo={userInfo}
// //                     rating={rating}
// //                     laoding={isCreateProductReviewLoading}
// //                     setRating={setRating}
// //                     comment={comment}
// //                     setComment={setComment}
// //                     submitHandler={submitHandler}
// //                   />
// //                 </Col>
// //               </Row>
// //             </Col>
// //             <Col md={4}>
// //               <ProductInfoListGroup variant='flush'>
// //                 <ProductInfoListGroup.Item>
// //                   <ProductTitle>{product.name}</ProductTitle>
// //                 </ProductInfoListGroup.Item>
// //                 <ProductInfoListGroup.Item>
// //                   <Rating
// //                     value={product.rating}
// //                     text={`${product.numReviews} reviews`}
// //                   />
// //                 </ProductInfoListGroup.Item>
// //                 <ProductInfoListGroup.Item>
// //                   Price: {addCurrency(product.price)}
// //                 </ProductInfoListGroup.Item>
// //                 <ProductInfoListGroup.Item>
// //                   <strong> About this item:</strong>
// //                   <ProductDescription>{product.description}</ProductDescription>
// //                 </ProductInfoListGroup.Item>
// //               </ProductInfoListGroup>
// //             </Col>
// //             <Col md={3}>
// //               <ProductInfoCard>
// //                 <ProductInfoListGroup variant='flush'>
// //                   <ProductInfoListGroup.Item>
// //                     <Row>
// //                       <Col>Price:</Col>
// //                       <Col>
// //                         <strong>{addCurrency(product.price)}</strong>
// //                       </Col>
// //                     </Row>
// //                   </ProductInfoListGroup.Item>
// //                   <ProductInfoListGroup.Item>
// //                     <Row>
// //                       <Col>Status:</Col>
// //                       <Col>
// //                         {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
// //                       </Col>
// //                     </Row>
// //                   </ProductInfoListGroup.Item>
// //                   {product.countInStock > 0 && (
// //                     <ProductInfoListGroup.Item>
// //                       <Row>
// //                         <Col>Qty:</Col>
// //                         <Col>
// //                           <Form.Control
// //                             as='select'
// //                             value={qty}
// //                             onChange={e => setQty(Number(e.target.value))}
// //                           >
// //                             {Array.from(
// //                               { length: product.countInStock },
// //                               (_, i) => (
// //                                 <option key={i + 1} value={i + 1}>
// //                                   {i + 1}
// //                                 </option>
// //                               )
// //                             )}
// //                           </Form.Control>
// //                         </Col>
// //                       </Row>
// //                     </ProductInfoListGroup.Item>
// //                   )}
// //                   <ListGroupItem>
// //                     <Button
// //                       className='w-100'
// //                       variant='warning'
// //                       type='button'
// //                       disabled={product.countInStock === 0}
// //                       onClick={addToCartHandler}
// //                     >
// //                       Add To Cart
// //                     </Button>
// //                   </ListGroupItem>
// //                 </ProductInfoListGroup>
// //               </ProductInfoCard>
// //             </Col>
// //           </Row>
// //           <Row className='review d-block d-md-none'>
// //             <Col md={6}>
// //               <Reviews
// //                 product={product}
// //                 userInfo={userInfo}
// //                 rating={rating}
// //                 laoding={isCreateProductReviewLoading}
// //                 setRating={setRating}
// //                 comment={comment}
// //                 setComment={setComment}
// //                 submitHandler={submitHandler}
// //               />
// //             </Col>
// //           </Row>
// //         </>
// //       )}
// //     </ProductPageContainer>
// //   );
// // };

// // export default ProductPage;
// import React, { useState } from 'react';
// import { Row, Col, ListGroup, Button, Image, Card, Form, ListGroupItem } from 'react-bootstrap';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useGetProductDetailsQuery, useCreateProductReviewMutation } from '../slices/productsApiSlice';
// import { addToCart } from '../slices/cartSlice';
// import { toast } from 'react-toastify';
// import Rating from '../components/Rating';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import Meta from '../components/Meta';
// import { addCurrency } from '../utils/addCurrency';
// import Reviews from '../components/Reviews';
// import styled, { keyframes } from 'styled-components';

// // Animations
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const ProductPageContainer = styled.div`
//   background-color: #141e30;
//   padding: 20px;
//   animation: ${fadeIn} 0.8s ease-in-out;
// `;

// const BackButton = styled(Link)`
//   background-color: #ffcc00;
//   color: #141e30;
//   padding: 10px 20px;
//   text-decoration: none;
//   border-radius: 8px;
//   margin-bottom: 20px;
//   display: inline-block;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #e6b800;
//   }
// `;

// const ProductTitle = styled.h3`
//   color: #ffcc00;
// `;

// const ProductDescription = styled.div`
//   color: #fff;
// `;

// const ProductInfoCard = styled(Card)`
//   background-color: #141e30;
//   border: 1px solid #ffcc00;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const ProductInfoListGroup = styled(ListGroup)`
//   background-color: #141e30;
//   color: #ffcc00;
// `;

// const ProductPage = () => {
//   const { id: productId } = useParams();
//   const [qty, setQty] = useState(1);
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState('');

//   const { userInfo } = useSelector(state => state.auth);

//   const {
//     data: product,
//     isLoading,
//     error
//   } = useGetProductDetailsQuery(productId);

//   const [createProductReview, { isLoading: isCreateProductReviewLoading }] = useCreateProductReviewMutation();

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const addToCartHandler = () => {
//     dispatch(addToCart({ ...product, qty }));
//     navigate('/cart');
//   };

//   const submitHandler = async e => {
//     e.preventDefault();
//     try {
//       const res = await createProductReview({
//         productId,
//         rating,
//         comment
//       });
//       if (res.error) {
//         toast.error(res.error?.data?.message);
//       }
//       toast.success(res.data.message);
//     } catch (error) {
//       toast.error(error?.data?.message || error.error);
//     }

//     setRating(0);
//     setComment('');
//   };

//   return (
//     <ProductPageContainer>
//       {isLoading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant='danger'>{error?.data?.message || error.error}</Message>
//       ) : (
//         <>
//           <BackButton to='/'>Go Back</BackButton>
//           <Meta title={product.name} description={product.description} />
//           <Row>
//             <Col md={5} sm={12} xs={12}>
//               <Image src={product.image} alt={product.name} fluid />
//               <Row className='review d-none d-md-block'>
//                 <Col>
//                   <Reviews
//                     product={product}
//                     userInfo={userInfo}
//                     rating={rating}
//                     laoding={isCreateProductReviewLoading}
//                     setRating={setRating}
//                     comment={comment}
//                     setComment={setComment}
//                     submitHandler={submitHandler}
//                   />
//                 </Col>
//               </Row>
//             </Col>
//             <Col md={4} sm={12} xs={12}>
//               <ProductInfoListGroup variant='flush'>
//                 <ProductInfoListGroup.Item>
//                   <ProductTitle>{product.name}</ProductTitle>
//                 </ProductInfoListGroup.Item>
//                 <ProductInfoListGroup.Item>
//                   <Rating value={product.rating} text={`${product.numReviews} reviews`} />
//                 </ProductInfoListGroup.Item>
//                 <ProductInfoListGroup.Item>
//                   Price: {addCurrency(product.price)}
//                 </ProductInfoListGroup.Item>
//                 <ProductInfoListGroup.Item>
//                   <strong> About this item:</strong>
//                   <ProductDescription>{product.description}</ProductDescription>
//                 </ProductInfoListGroup.Item>
//               </ProductInfoListGroup>
//             </Col>
//             <Col md={3} sm={12} xs={12}>
//               <ProductInfoCard>
//                 <ProductInfoListGroup variant='flush'>
//                   <ProductInfoListGroup.Item>
//                     <Row>
//                       <Col>Price:</Col>
//                       <Col>
//                         <strong>{addCurrency(product.price)}</strong>
//                       </Col>
//                     </Row>
//                   </ProductInfoListGroup.Item>
//                   <ProductInfoListGroup.Item>
//                     <Row>
//                       <Col>Status:</Col>
//                       <Col>
//                         {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
//                       </Col>
//                     </Row>
//                   </ProductInfoListGroup.Item>
//                   {product.countInStock > 0 && (
//                     <ProductInfoListGroup.Item>
//                       <Row>
//                         <Col>Qty:</Col>
//                         <Col>
//                           <Form.Control
//                             as='select'
//                             value={qty}
//                             onChange={e => setQty(Number(e.target.value))}
//                           >
//                             {Array.from(
//                               { length: product.countInStock },
//                               (_, i) => (
//                                 <option key={i + 1} value={i + 1}>
//                                   {i + 1}
//                                 </option>
//                               )
//                             )}
//                           </Form.Control>
//                         </Col>
//                       </Row>
//                     </ProductInfoListGroup.Item>
//                   )}
//                   <ListGroupItem>
//                     <Button
//                       className='w-100'
//                       variant='warning'
//                       type='button'
//                       disabled={product.countInStock === 0}
//                       onClick={addToCartHandler}
//                     >
//                       Add To Cart
//                     </Button>
//                   </ListGroupItem>
//                 </ProductInfoListGroup>
//               </ProductInfoCard>
//             </Col>
//           </Row>
//           <Row className='review d-block d-md-none'>
//             <Col md={6}>
//               <Reviews
//                 product={product}
//                 userInfo={userInfo}
//                 rating={rating}
//                 laoding={isCreateProductReviewLoading}
//                 setRating={setRating}
//                 comment={comment}
//                 setComment={setComment}
//                 submitHandler={submitHandler}
//               />
//             </Col>
//           </Row>
//         </>
//       )}
//     </ProductPageContainer>
//   );
// };

// export default ProductPage;
import React, { useState } from 'react';
import { Row, Col, ListGroup, Button, Image, Card, Form } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductDetailsQuery, useCreateProductReviewMutation } from '../slices/productsApiSlice';
import { addToCart } from '../slices/cartSlice';
import { toast } from 'react-toastify';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';
import { addCurrency } from '../utils/addCurrency';
import Reviews from '../components/Reviews';
import { FaShoppingCart, FaCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  padding: 40px 20px;
  min-height: 100vh;
`;

const BackButton = styled(Link)`
  color: #333;
  font-weight: bold;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const ProductTitle = styled.h2`
  font-weight: 600;
  color: #222;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.5;
`;

const ProductCard = styled(Card)`
  border: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
`;

const StyledButton = styled(Button)`
  background-color: #007bff;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  svg {
    margin-left: 8px;
  }
`;

const ProductPage = () => {
  const { id: productId } = useParams();
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const { userInfo } = useSelector(state => state.auth);
  const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);
  const [createProductReview, { isLoading: isCreateProductReviewLoading }] = useCreateProductReviewMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate('/cart');
  };

  const submitHandler = async e => {
    e.preventDefault();
    try {
      const res = await createProductReview({ productId, rating, comment });
      if (res.error) {
        toast.error(res.error?.data?.message);
      } else {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
    setRating(0);
    setComment('');
  };

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <BackButton to="/">← Go Back</BackButton>
          <Meta title={product.name} description={product.description} />

          <Row>
            {/* Left Section - Product Details & Reviews */}
            <Col md={7}>
              <Image src={product.image} alt={product.name} fluid />
              <ProductTitle>{product.name}</ProductTitle>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
              <ProductDescription>{product.description}</ProductDescription>

              <Reviews
                product={product}
                userInfo={userInfo}
                rating={rating}
                laoding={isCreateProductReviewLoading}
                setRating={setRating}
                comment={comment}
                setComment={setComment}
                submitHandler={submitHandler}
              />
            </Col>

            {/* Right Section - Pricing, Stock & Actions */}
            <Col md={5}>
              <ProductCard>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>{addCurrency(product.price)}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? (
                          <span style={{ color: 'green', fontWeight: 'bold' }}>
                            <FaCheckCircle /> In Stock
                          </span>
                        ) : (
                          <span style={{ color: 'red', fontWeight: 'bold' }}>Out Of Stock</span>
                        )}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty:</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={e => setQty(Number(e.target.value))}
                          >
                            {Array.from({ length: product.countInStock }, (_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <StyledButton className="w-100" disabled={product.countInStock === 0} onClick={addToCartHandler}>
                      Add To Cart <FaShoppingCart />
                    </StyledButton>
                  </ListGroup.Item>
                </ListGroup>
              </ProductCard>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default ProductPage;
