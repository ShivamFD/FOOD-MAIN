
// // export default Menu;
// import React, { useEffect, useState, useRef } from "react";
// import styled from "styled-components";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// // Styled Components
// const MenuContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   overflow: hidden;
//   position: relative;
//   padding: 20px;
//   background: #f8f9fa;
//   border-radius: 12px;
// `;

// const ScrollButton = styled.button`
//   background: #fff;
//   border: none;
//   cursor: pointer;
//   padding: 10px;
//   border-radius: 50%;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
//   transition: transform 0.2s;

//   &:hover {
//     transform: scale(1.1);
//   }
// `;

// const MenuList = styled.div`
//   display: flex;
//   gap: 20px;
//   overflow-x: auto;
//   scroll-behavior: smooth;
//   padding: 10px;
//   scrollbar-width: none;
// `;

// const MenuItem = styled.div`
//   text-align: center;
//   cursor: pointer;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   padding: 10px;

//   &:hover {
//     transform: scale(1.1);
//   }

//   img {
//     width: 100px;
//     height: 100px;
//     border-radius: 50%;
//     object-fit: cover;
//     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
//     transition: transform 0.3s ease-in-out;
//   }

//   &:active img {
//     transform: scale(0.9);
//   }

//   p {
//     margin-top: 10px;
//     font-weight: bold;
//     color: #333;
//   }
// `;

// function Menu() {
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     // Fetch categories from backend
//     axios.get("http://localhost:5000/api/menu/menus")
//       .then((res) => setCategories(res.data))
//       .catch((err) => console.error("Error fetching categories:", err));
//   }, []);

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
//     }
//   };

//   return (
//     <MenuContainer>
//       <ScrollButton onClick={scrollLeft}><FaChevronLeft /></ScrollButton>
//       <MenuList ref={scrollRef}>
//         {categories.map((category) => (
//           <MenuItem key={category._id} onClick={() => navigate(`/menu/${category._id}`)}>
//             <img src={`http://localhost:5000/uploads/${category.image}`} alt={category.name} />
//             <p>{category.name}</p>
//           </MenuItem>
//         ))}
//       </MenuList>
//       <ScrollButton onClick={scrollRight}><FaChevronRight /></ScrollButton>
//     </MenuContainer>
//   );
// }

// export default Menu;





import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Styled Components
const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
`;

const ScrollButton = styled.button`
  background: #fff;
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const MenuList = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px;
  scrollbar-width: none;
`;

const MenuItem = styled.div`
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 10px;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
  }

  &:active img {
    transform: scale(0.9);
  }

  p {
    margin-top: 10px;
    font-weight: bold;
    color: #333;
  }
`;

function Menu() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  useEffect(() => {
    // Fetch categories from backend
    axios.get("http://localhost:5000/api/menu/menus")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleCategoryClick = (categoryId) => {
    // Navigate to the products page for the selected category by its ID
    navigate(`/menu/${categoryId}`);
  };

  return (
    <MenuContainer>
      <ScrollButton onClick={scrollLeft}><FaChevronLeft /></ScrollButton>
      <MenuList ref={scrollRef}>
        {categories.map((category) => (
          <MenuItem key={category._id} onClick={() => handleCategoryClick(category._id)}>
            <img src={`http://localhost:5000/uploads/${category.image}`} alt={category.name} />
            <p>{category.name}</p>
          </MenuItem>
        ))}
      </MenuList>
      <ScrollButton onClick={scrollRight}><FaChevronRight /></ScrollButton>
    </MenuContainer>
  );
}

export default Menu;
