// import React from 'react';
// import Message from './Message';
// import { Link } from 'react-router-dom';
// import { Button, Form, ListGroup } from 'react-bootstrap';
// import Rating from './Rating';

// const Reviews = ({
//   product,
//   userInfo,
//   submitHandler,
//   rating,
//   setRating,
//   comment,
//   setComment,
//   loading
// }) => {
//   return (
//     <>
//       <h2>Reviews</h2>
//       {product.reviews.length === 0 && <Message>No Reviews</Message>}
//       <ListGroup variant='flush'>
//         {product.reviews.map(review => (
//           <ListGroup.Item key={review._id}>
//             <strong>{review.name}</strong>
//             <Rating value={review.rating} />
//             <p>{new Date(review.createdAt).toDateString()}</p>
//             <p>{review.comment}</p>
//           </ListGroup.Item>
//         ))}
//         <ListGroup.Item>
//           <h2>Write a Customer Review</h2>

//           {userInfo ? (
//             <Form onSubmit={submitHandler}>
//               <Form.Group className='my-2' controlId='rating'>
//                 <Form.Label>Rating</Form.Label>
//                 <Form.Control
//                   as='select'
//                   required
//                   value={rating}
//                   onChange={e => setRating(e.target.value)}
//                 >
//                   <option value=''>Select...</option>
//                   <option value='1'>1 - Poor</option>
//                   <option value='2'>2 - Fair</option>
//                   <option value='3'>3 - Good</option>
//                   <option value='4'>4 - Very Good</option>
//                   <option value='5'>5 - Excellent</option>
//                 </Form.Control>
//               </Form.Group>
//               <Form.Group className='my-2' controlId='comment'>
//                 <Form.Label>Comment</Form.Label>
//                 <Form.Control
//                   as='textarea'
//                   row='3'
//                   required
//                   value={comment}
//                   onChange={e => setComment(e.target.value)}
//                 ></Form.Control>
//               </Form.Group>
//               <Button
//                 className='w-100'
//                 disabled={loading}
//                 type='submit'
//                 variant='warning'
//               >
//                 Submit
//               </Button>
//             </Form>
//           ) : (
//             <Message>
//               Please <Link to='/login'>sign in</Link> to write a review
//             </Message>
//           )}
//         </ListGroup.Item>
//       </ListGroup>
//     </>
//   );
// };

// export default Reviews;
// import React from 'react';
// import Message from './Message';
// import { Link } from 'react-router-dom';
// import { Button, Form, ListGroup } from 'react-bootstrap';
// import Rating from './Rating';
// import styled from 'styled-components';

// // Styled Components
// const ReviewsContainer = styled.div`
//   background-color: #141e30;
//   padding: 20px;
//   color: #ffcc00;
//   border-radius: 12px;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const ReviewTitle = styled.h2`
//   color: #ffcc00;
// `;

// const WriteReviewTitle = styled.h2`
//   color: #ffcc00;
//   font-weight: bold;
// `;

// const ReviewFormGroup = styled(Form.Group)`
//   margin-bottom: 15px;
// `;

// const SubmitButton = styled(Button)`
//   background-color: #ffcc00;
//   border: none;
//   color: #141e30;
//   padding: 10px 20px;
//   text-decoration: none;
//   border-radius: 8px;
//   width: 100%;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #e6b800;
//   }

//   &:disabled {
//     background-color: #999;
//     cursor: not-allowed;
//   }
// `;

// const Reviews = ({
//   product,
//   userInfo,
//   submitHandler,
//   rating,
//   setRating,
//   comment,
//   setComment,
//   loading
// }) => {
//   return (
//     <ReviewsContainer>
//       <ReviewTitle>Reviews</ReviewTitle>
//       {product.reviews.length === 0 && <Message>No Reviews</Message>}
//       <ListGroup variant="flush">
//         {product.reviews.map(review => (
//           <ListGroup.Item key={review._id} style={{ backgroundColor: '#141e30', color: '#ffcc00' }}>
//             <strong>{review.name}</strong>
//             <Rating value={review.rating} />
//             <p>{new Date(review.createdAt).toDateString()}</p>
//             <p>{review.comment}</p>
//           </ListGroup.Item>
//         ))}
//         <ListGroup.Item style={{ backgroundColor: '#141e30', color: '#ffcc00' }}>
//           <WriteReviewTitle>Write a Customer Review</WriteReviewTitle>

//           {userInfo ? (
//             <Form onSubmit={submitHandler}>
//               <ReviewFormGroup className="my-2" controlId="rating">
//                 <Form.Label>Rating</Form.Label>
//                 <Form.Control
//                   as="select"
//                   required
//                   value={rating}
//                   onChange={e => setRating(e.target.value)}
//                 >
//                   <option value="">Select...</option>
//                   <option value="1">1 - Poor</option>
//                   <option value="2">2 - Fair</option>
//                   <option value="3">3 - Good</option>
//                   <option value="4">4 - Very Good</option>
//                   <option value="5">5 - Excellent</option>
//                 </Form.Control>
//               </ReviewFormGroup>
//               <ReviewFormGroup className="my-2" controlId="comment">
//                 <Form.Label>Comment</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   row="3"
//                   required
//                   value={comment}
//                   onChange={e => setComment(e.target.value)}
//                 ></Form.Control>
//               </ReviewFormGroup>
//               <SubmitButton disabled={loading} type="submit" variant="warning">
//                 Submit
//               </SubmitButton>
//             </Form>
//           ) : (
//             <Message>
//               Please <Link to="/login" style={{ color: '#ffcc00' }}>sign in</Link> to write a review
//             </Message>
//           )}
//         </ListGroup.Item>
//       </ListGroup>
//     </ReviewsContainer>
//   );
// };

// export default Reviews;
import React from 'react';
import Message from './Message';
import { Link } from 'react-router-dom';
import { Button, Form, ListGroup } from 'react-bootstrap';
import Rating from './Rating';
import styled from 'styled-components';

// Styled Components
const ReviewsContainer = styled.div`
  padding: 20px;
`;

const ReviewTitle = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 15px;
  font-weight: bold;
`;

const WriteReviewTitle = styled.h3`
  color: #222;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`;

const ReviewFormGroup = styled(Form.Group)`
  margin-bottom: 15px;
`;

const SubmitButton = styled(Button)`
  background-color: #0056b3;
  border: none;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 8px;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004494;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ReviewItem = styled(ListGroup.Item)`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Reviews = ({
  product,
  userInfo,
  submitHandler,
  rating,
  setRating,
  comment,
  setComment,
  loading
}) => {
  return (
    <ReviewsContainer>
      <ReviewTitle>Customer Reviews</ReviewTitle>
      {product.reviews.length === 0 && <Message>No Reviews</Message>}
      <ListGroup variant="flush">
        {product.reviews.map(review => (
          <ReviewItem key={review._id}>
            <strong style={{ color: '#0056b3' }}>{review.name}</strong>
            <Rating value={review.rating} />
            <p style={{ fontSize: '14px', color: '#666' }}>{new Date(review.createdAt).toDateString()}</p>
            <p>{review.comment}</p>
          </ReviewItem>
        ))}
        <ReviewItem>
          <WriteReviewTitle>Write a Review</WriteReviewTitle>
          {userInfo ? (
            <Form onSubmit={submitHandler}>
              <ReviewFormGroup controlId="rating">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  as="select"
                  required
                  value={rating}
                  onChange={e => setRating(e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </Form.Control>
              </ReviewFormGroup>
              <ReviewFormGroup controlId="comment">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  row="3"
                  required
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                ></Form.Control>
              </ReviewFormGroup>
              <SubmitButton disabled={loading} type="submit">
                Submit
              </SubmitButton>
            </Form>
          ) : (
            <Message>
              Please <Link to="/login" style={{ color: '#0056b3', fontWeight: 'bold' }}>sign in</Link> to write a review.
            </Message>
          )}
        </ReviewItem>
      </ListGroup>
    </ReviewsContainer>
  );
};

export default Reviews;
