// // import React, { useEffect, useState } from "react";
// // import styled from "styled-components";
// // import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// // import axios from "axios";

// // // Styled Components
// // const MenuContainer = styled.div`
// //   display: flex;
// //   align-items: center;
// //   overflow: hidden;
// //   position: relative;
// //   padding: 20px;
// //   background: #f8f9fa;
// //   border-radius: 12px;
// // `;

// // const ScrollButton = styled.button`
// //   background: #fff;
// //   border: none;
// //   cursor: pointer;
// //   padding: 10px;
// //   border-radius: 50%;
// //   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
// //   transition: transform 0.2s;
  
// //   &:hover {
// //     transform: scale(1.1);
// //   }
// // `;

// // const MenuList = styled.div`
// //   display: flex;
// //   gap: 20px;
// //   overflow-x: auto;
// //   scroll-behavior: smooth;
// //   padding: 10px;
// //   scrollbar-width: none; /* Hide scrollbar for smooth UI */
// // `;

// // const MenuItem = styled.div`
// //   text-align: center;
// //   cursor: pointer;
// //   transition: transform 0.3s ease, box-shadow 0.3s ease;
// //   padding: 10px;

// //   &:hover {
// //     transform: scale(1.1);
// //   }

// //   img {
// //     width: 100px;
// //     height: 100px;
// //     border-radius: 50%;
// //     object-fit: cover;
// //     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
// //     transition: transform 0.3s ease-in-out;
// //   }

// //   &:active img {
// //     transform: scale(0.9);
// //   }

// //   p {
// //     margin-top: 10px;
// //     font-weight: bold;
// //     color: #333;
// //   }
// // `;

// // function Menu() {
// //   const [categories, setCategories] = useState([]);

// //   useEffect(() => {
// //     // Fetch menu categories from backend
// //     axios.get("/api/categories")
// //       .then((res) => setCategories(res.data))
// //       .catch((err) => console.error("Error fetching categories:", err));
// //   }, []);

// //   // Scroll Functions
// //   const scrollRef = React.useRef(null);
  
// //   const scrollLeft = () => {
// //     if (scrollRef.current) {
// //       scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
// //     }
// //   };

// //   const scrollRight = () => {
// //     if (scrollRef.current) {
// //       scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
// //     }
// //   };

// //   return (
// //     <MenuContainer>
// //       <ScrollButton onClick={scrollLeft}><FaChevronLeft /></ScrollButton>
// //       <MenuList ref={scrollRef}>
// //         {categories.map((category) => (
// //           <MenuItem key={category.id}>
// //             <img src={category.image} alt={category.name} />
// //             <p>{category.name}</p>
// //           </MenuItem>
// //         ))}
// //       </MenuList>
// //       <ScrollButton onClick={scrollRight}><FaChevronRight /></ScrollButton>
// //     </MenuContainer>
// //   );
// // }

// // export default Menu;
// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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

//   useEffect(() => {
//     // Dummy Data (use this if backend is not ready)
//     const dummyData = [
//       { id: 1, name: "Biryani", image: "https://via.placeholder.com/100?text=Biryani" },
//       { id: 2, name: "Pizza", image: "https://via.placeholder.com/100?text=Pizza" },
//       { id: 3, name: "Burger", image: "https://via.placeholder.com/100?text=Burger" },
//       { id: 4, name: "North Indian", image: "https://via.placeholder.com/100?text=North+Indian" },
//       { id: 5, name: "Chinese", image: "https://via.placeholder.com/100?text=Chinese" },
//       { id: 6, name: "Cake", image: "https://via.placeholder.com/100?text=Cake" },
//       { id: 7, name: "Rolls", image: "https://via.placeholder.com/100?text=Rolls" },

//     ];

//     setCategories(dummyData);

//     // Uncomment this when your backend is ready
//     // axios.get("/api/categories")
//     //   .then((res) => setCategories(res.data))
//     //   .catch((err) => console.error("Error fetching categories:", err));
//   }, []);

//   // Scroll Functions
//   const scrollRef = React.useRef(null);

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
//           <MenuItem key={category.id}>
//             <img src={category.image} alt={category.name} />
//             <p>{category.name}</p>
//           </MenuItem>
//         ))}
//       </MenuList>
//       <ScrollButton onClick={scrollRight}><FaChevronRight /></ScrollButton>
//     </MenuContainer>
//   );
// }

// export default Menu;
// // // import React, { useEffect, useState } from "react";
// // // import styled from "styled-components";
// // // import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// // // import axios from "axios";
// // // import { useNavigate } from "react-router-dom";

// // // // Styled Components
// // // const MenuContainer = styled.div`
// // //   display: flex;
// // //   align-items: center;
// // //   justify-content: space-between;
// // //   overflow: hidden;
// // //   position: relative;
// // //   padding: 20px;
// // //   background: #f8f9fa;
// // //   border-radius: 12px;
// // // `;

// // // const ScrollButton = styled.button`
// // //   background: #fff;
// // //   border: none;
// // //   cursor: pointer;
// // //   padding: 10px;
// // //   border-radius: 50%;
// // //   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
// // //   transition: transform 0.2s;

// // //   &:hover {
// // //     transform: scale(1.1);
// // //   }
// // // `;

// // // const MenuList = styled.div`
// // //   display: flex;
// // //   gap: 20px;
// // //   overflow-x: auto;
// // //   scroll-behavior: smooth;
// // //   padding: 10px;
// // //   scrollbar-width: none;
// // // `;

// // // const MenuItem = styled.div`
// // //   text-align: center;
// // //   cursor: pointer;
// // //   transition: transform 0.3s ease, box-shadow 0.3s ease;
// // //   padding: 10px;

// // //   &:hover {
// // //     transform: scale(1.1);
// // //   }

// // //   img {
// // //     width: 100px;
// // //     height: 100px;
// // //     border-radius: 50%;
// // //     object-fit: cover;
// // //     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
// // //     transition: transform 0.3s ease-in-out;
// // //   }

// // //   p {
// // //     margin-top: 10px;
// // //     font-weight: bold;
// // //     color: #333;
// // //   }
// // // `;

// // // function Menu() {
// // //   const [categories, setCategories] = useState([]);
// // //   const navigate = useNavigate();
// // //   const scrollRef = React.useRef(null);

// // //   useEffect(() => {
// // //     axios
// // //       .get("/api/categories")
// // //       .then((res) => setCategories(res.data))
// // //       .catch((err) => console.error("Error fetching categories:", err));
// // //   }, []);

// // //   const handleCategoryClick = (categoryName) => {
// // //     navigate(`/menu/${categoryName}`);
// // //   };

// // //   return (
// // //     <MenuContainer>
// // //       <ScrollButton onClick={() => scrollRef.current.scrollBy({ left: -200, behavior: "smooth" })}>
// // //         <FaChevronLeft />
// // //       </ScrollButton>
// // //       <MenuList ref={scrollRef}>
// // //         {categories.map((category) => (
// // //           <MenuItem key={category._id} onClick={() => handleCategoryClick(category.name)}>
// // //             <img src={category.image} alt={category.name} />
// // //             <p>{category.name}</p>
// // //           </MenuItem>
// // //         ))}
// // //       </MenuList>
// // //       <ScrollButton onClick={() => scrollRef.current.scrollBy({ left: 200, behavior: "smooth" })}>
// // //         <FaChevronRight />
// // //       </ScrollButton>
// // //     </MenuContainer>
// // //   );
// // // }

// // // export default Menu;
// // import React, { useEffect, useState } from 'react';
// // import styled from 'styled-components';
// // import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // // Styled Components
// // const MenuContainer = styled.div`
// //   display: flex;
// //   align-items: center;
// //   justify-content: space-between;
// //   overflow: hidden;
// //   position: relative;
// //   padding: 20px;
// //   background: #f8f9fa;
// //   border-radius: 12px;
// // `;

// // const ScrollButton = styled.button`
// //   background: #fff;
// //   border: none;
// //   cursor: pointer;
// //   padding: 10px;
// //   border-radius: 50%;
// //   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
// //   transition: transform 0.2s;

// //   &:hover {
// //     transform: scale(1.1);
// //   }
// // `;

// // const MenuList = styled.div`
// //   display: flex;
// //   gap: 20px;
// //   overflow-x: auto;
// //   scroll-behavior: smooth;
// //   padding: 10px;
// //   scrollbar-width: none;
// // `;

// // const MenuItem = styled.div`
// //   text-align: center;
// //   cursor: pointer;
// //   transition: transform 0.3s ease, box-shadow 0.3s ease;
// //   padding: 10px;

// //   &:hover {
// //     transform: scale(1.1);
// //   }

// //   img {
// //     width: 100px;
// //     height: 100px;
// //     border-radius: 50%;
// //     object-fit: cover;
// //     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
// //     transition: transform 0.3s ease-in-out;
// //   }

// //   &:active img {
// //     transform: scale(0.9);
// //   }

// //   p {
// //     margin-top: 10px;
// //     font-weight: bold;
// //     color: #333;
// //   }
// // `;

// // function Menu() {
// //   const [categories, setCategories] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchCategories = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5000/api/menus'); // Adjust API URL
// //         setCategories(response.data);
// //       } catch (error) {
// //         console.error('Error fetching categories:', error);
// //       }
// //     };

// //     fetchCategories();
// //   }, []);

// //   // Scroll Functions
// //   const scrollRef = React.useRef(null);

// //   const scrollLeft = () => {
// //     if (scrollRef.current) {
// //       scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
// //     }
// //   };

// //   const scrollRight = () => {
// //     if (scrollRef.current) {
// //       scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
// //     }
// //   };

// //   return (
// //     <MenuContainer>
// //       <ScrollButton onClick={scrollLeft}><FaChevronLeft /></ScrollButton>
// //       <MenuList ref={scrollRef}>
// //         {categories.map((category) => (
// //           <MenuItem key={category._id} onClick={() => navigate(`/menu/${category._id}`)}>
// //             <img src={`http://localhost:5000/uploads/${category.image}`} alt={category.name} />
// //             <p>{category.name}</p>
// //           </MenuItem>
// //         ))}
// //       </MenuList>
// //       <ScrollButton onClick={scrollRight}><FaChevronRight /></ScrollButton>
// //     </MenuContainer>
// //   );
// // }

// // export default Menu;
// // src/components/MenuCard.jsx
// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import styled from "styled-components";

// // const Menu= ({ menu }) => {
// //   const navigate = useNavigate();

// //   return (
// //     <Card onClick={() => navigate(`/menu/${menu._id}`)}>
// //       {/* <Image src={menu.image || "/placeholder.jpg"} alt={menu.name} /> */}
// //       <Image src={menu?.image || "/placeholder.jpg"} alt={menu?.name || "Menu Item"} />

// //       <Title>{menu?.name}</Title>
// //     </Card>
// //   );
// // };

// // // Styled Components
// // const Card = styled.div`
// //   width: 120px;
// //   height: 120px;
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   cursor: pointer;
// //   transition: 0.3s;
  
// //   &:hover {
// //     transform: scale(1.05);
// //   }
// // `;

// // const Image = styled.img`
// //   width: 100px;
// //   height: 100px;
// //   border-radius: 50%;
// //   object-fit: cover;
// // `;

// // const Title = styled.p`
// //   margin-top: 8px;
// //   font-size: 14px;
// //   font-weight: bold;
// // `;

// // export default Menu;
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

  return (
    <MenuContainer>
      <ScrollButton onClick={scrollLeft}><FaChevronLeft /></ScrollButton>
      <MenuList ref={scrollRef}>
        {categories.map((category) => (
          <MenuItem key={category._id} onClick={() => navigate(`/menu/${category.name}`)}>
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
