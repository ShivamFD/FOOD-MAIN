// import React from 'react';
// import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

// const Rating = ({ value, text }) => {
//   return (
//     <div className='rating'>
//       <span>
//         {value >= 1 ? (
//           <FaStar />
//         ) : value >= 0.5 ? (
//           <FaStarHalfAlt />
//         ) : (
//           <FaRegStar />
//         )}
//       </span>
//       <span>
//         {value >= 2 ? (
//           <FaStar />
//         ) : value >= 1.5 ? (
//           <FaStarHalfAlt />
//         ) : (
//           <FaRegStar />
//         )}
//       </span>
//       <span>
//         {value >= 3 ? (
//           <FaStar />
//         ) : value >= 2.5 ? (
//           <FaStarHalfAlt />
//         ) : (
//           <FaRegStar />
//         )}
//       </span>
//       <span>
//         {value >= 4 ? (
//           <FaStar />
//         ) : value >= 3.5 ? (
//           <FaStarHalfAlt />
//         ) : (
//           <FaRegStar />
//         )}
//       </span>
//       <span>
//         {value >= 5 ? (
//           <FaStar />
//         ) : value >= 4.5 ? (
//           <FaStarHalfAlt />
//         ) : (
//           <FaRegStar />
//         )}
//       </span>
//       <span className='rating-text'>{text || 0}</span>
//     </div>
//   );
// };

// export default Rating;
// import React from 'react';
// import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
// import styled from 'styled-components';

// // Styled components
// const StyledRating = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const StyledStar = styled.span`
//   font-size: 1.5rem;
//   color: #ffd900dd;
//   transition: color 0.3s ease;

//   &:hover {
//     color: #ffd700;
//   }
//   @media (max-width: 375px) {
//     font-size: 0.8rem;
//   }
// `;

// const RatingText = styled.span`
//   color: #ffffff;
//   margin-left: 8px;
//   font-size: 1rem;
//   @media (max-width: 425px) {
//     font-size: 0.8rem;
//   }
// `;

// const Rating = ({ value, text }) => {
//   return (
//     <StyledRating>
//       <StyledStar>
//         {value >= 1 ? (
//           <FaStar />
//         ) : value >= 0.5 ? (
//           <FaStarHalfAlt />
//         ) : (
//           <FaRegStar />
//         )}
//       </StyledStar>
//       <StyledStar>
//         {value >= 2 ? (
//           <FaStar />
//         ) : value >= 1.5 ? (
//           <FaStarHalfAlt />
//         ) : (
//           <FaRegStar />
//         )}
//       </StyledStar>
//       <StyledStar>
//         {value >= 3 ? (
//           <FaStar />
//         ) : value >= 2.5 ? (
//           <FaStarHalfAlt />
//         ) : (
//           <FaRegStar />
//         )}
//       </StyledStar>
//       <StyledStar>
//         {value >= 4 ? (
//           <FaStar />
//         ) : value >= 3.5 ? (
//           <FaStarHalfAlt />
//         ) : (
//           <FaRegStar />
//         )}
//       </StyledStar>
//       <StyledStar>
//         {value >= 5 ? (
//           <FaStar />
//         ) : value >= 4.5 ? (
//           <FaStarHalfAlt />
//         ) : (
//           <FaRegStar />
//         )}
//       </StyledStar>
//       <RatingText>{text || 0}</RatingText>
//     </StyledRating>
//   );
// };

// export default Rating;
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import styled from "styled-components";

// Styled components
const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 12px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
  width: fit-content;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 425px) {
    padding: 6px 10px;
  }
`;

const Star = styled.span`
  font-size: 1.4rem;
  color: #ffeb3b;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: #ffd700;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

const RatingText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #8b0000;
  padding-left: 5px;

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

const Rating = ({ value, text }) => {
  return (
    <RatingWrapper>
      <Star>{value >= 1 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}</Star>
      <Star>{value >= 2 ? <FaStar /> : value >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar />}</Star>
      <Star>{value >= 3 ? <FaStar /> : value >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar />}</Star>
      <Star>{value >= 4 ? <FaStar /> : value >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar />}</Star>
      <Star>{value >= 5 ? <FaStar /> : value >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar />}</Star>
      <RatingText>{text || 0} </RatingText>
    </RatingWrapper>
  );
};

export default Rating;
