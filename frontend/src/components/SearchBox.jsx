// import React, { useState } from 'react';
// import {
//   Form,
//   Button,
//   InputGroup,
//   OverlayTrigger,
//   Tooltip
// } from 'react-bootstrap';
// import { FaSearch, FaTimes } from 'react-icons/fa';
// import { useDispatch } from 'react-redux';
// import { searchProduct, clearSearch } from '../slices/searchProductSlice';
// import styled from 'styled-components';
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
//     background: #906fa758;
//     cursor: not-allowed;
//   }
// `;

// function SearchBox() {
//   const [input, setInput] = useState('');

//   const dispatch = useDispatch();

//   const searchProductHandler = e => {
//     e.preventDefault();
//     dispatch(searchProduct(input));
//   };

//   const clearSearchHandler = () => {
//     dispatch(clearSearch());
//     setInput('');
//   };
//   return (
//     <Form onSubmit={searchProductHandler} className='d-flex'>
//       <InputGroup>
//         <Form.Control
//           size='sm'
//           type='text'
//           value={input}
//           onChange={e => setInput(e.target.value)}
//           placeholder='Search Products...'
//         />
//         {input === '' ? (
//           ''
//         ) : (
//           <Button type='button' variant='light' onClick={clearSearchHandler}>
//             <FaTimes />
//           </Button>
//         )}
//         <StyledButton type='submit' variant='warning'>
//           <FaSearch />
//         </StyledButton>
//       </InputGroup>
//     </Form>
//   );
// }

// export default SearchBox;
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { searchProduct, clearSearch } from "../slices/searchProductSlice";
import styled from "styled-components";

// 🍔 Styled Components
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledInput = styled(Form.Control)`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ff9800; /* Food-Themed Orange */
  border-radius: 25px;
  transition: all 0.3s ease-in-out;
  width: 250px;

  &:focus {
    border-color: #ffeb3b;
    outline: none;
    box-shadow: 0 0 8px rgba(255, 235, 59, 0.8);
  }
`;

const StyledButton = styled.button`
  background: #ff5722; /* Warm Orange */
  border: none;
  color: white;
  padding: 10px 14px;
  margin-left: 8px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #ff9800;
    transform: scale(1.1);
  }
`;

const ClearButton = styled(StyledButton)`
  background: #d84315; /* Deep Red */
  color: white;

  &:hover {
    background: #bf360c;
  }
`;

function SearchBox() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const searchProductHandler = (e) => {
    e.preventDefault();
    dispatch(searchProduct(input));
  };

  const clearSearchHandler = () => {
    dispatch(clearSearch());
    setInput("");
  };

  return (
    <SearchContainer>
      <Form onSubmit={searchProductHandler} className="d-flex">
        <InputGroup>
          <StyledInput
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for delicious items..."
          />
          {input && (
            <ClearButton type="button" onClick={clearSearchHandler}>
              <FaTimes />
            </ClearButton>
          )}
          <StyledButton type="submit">
            <FaSearch />
          </StyledButton>
        </InputGroup>
      </Form>
    </SearchContainer>
  );
}

export default SearchBox;
