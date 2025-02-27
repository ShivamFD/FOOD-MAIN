
// import React, { useEffect, useState } from "react";
// import { Row, Col, Form } from "react-bootstrap";
// import { useGetProductsQuery } from "../slices/productsApiSlice";
// import { useSelector } from "react-redux";
// import Product from "../components/Product";
// import Loader from "../components/Loader";
// import Message from "../components/Message";
// import Paginate from "../components/Paginate";
// import ProductCarousel from "../components/ProductCarousel";
// import Meta from "../components/Meta";
// import styled, { keyframes } from "styled-components";
// import { FaFilter, FaTags, FaBoxes } from "react-icons/fa";

// // Animations
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const slideIn = keyframes`
//   from { transform: translateX(-50px); opacity: 0; }
//   to { transform: translateX(0); opacity: 1; }
// `;

// // Styled Components
// const HomePageContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   padding: 20px;
//   background-color: #141e30;
//   animation: ${fadeIn} 0.8s ease-in-out;
// `;

// const FiltersContainer = styled.div`
//   width: 25%;
//   /* background-color: #141e30; */
//   background-color: #141e30;
//   color: #ffcc00;
//   padding: 20px;
//   border-radius: 12px;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
//   animation: ${slideIn} 0.8s ease-in-out;
//   transition: all 0.3s ease;
  
//   &:hover {
//     transform: scale(1.03);
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//     margin-bottom: 20px;
//   }
// `;

// const FilterTitle = styled.h3`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   font-weight: bold;
//   margin: 10px 0 25px 0;
//   color: #ffcc00;
//   transition: color 0.3s ease;

//   &:hover {
//     color: #ffd700;
//   }
// `;

// const StyledFormGroup = styled(Form.Group)`
//   margin-bottom: 15px;
// `;

// const FormControl = styled(Form.Control)`
//   width: 100%;
//   border-radius: 8px;
//   padding: 10px;
//   background-color: #1e2a37;
//   color: #ffcc00;
//   border: 1px solid #ffcc00;
//   transition: background-color 0.3s ease;
  
//   &:hover {
//     background-color: #2d3a49;
//   }
// `;

// const StyledFormCheck = styled(Form.Check)`
//   margin-bottom: 10px;
//   color: #ffcc00;

//   input {
//     background-color: #1e2a37;
//     color: #ffcc00;
//     border: 1px solid #ffcc00;
//     transition: background-color 0.3s ease;

//     &:checked {
//       background-color: #ffd700;
//     }
//   }

//   label {
//     color: #ffcc00;
//   }

//   &:hover input {
//     background-color: #2d3a49;
//   }
// `;

// const ProductsContainer = styled.div`
//   flex: 1;
//   padding: 20px;
//   border-radius: 12px;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
//   background-color: #141e30;
//   color: white;
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: #1e2a37;
//   }
// `;
// const Center = styled.h2`
// text-align: center;
// color: #6d4c41;
// `;

// const HomePage = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const { search } = useSelector((state) => state.search);
//   const { data, isLoading, error } = useGetProductsQuery({});

//   const categories = ["Mens Footwear", "Womens Footwear", "Kids Footwear", "Sports Footwear"];
//   const brands = ["Puma", "Nike", "Adidas", "Croma", "Campus"];

//   const priceRanges = [
//     { label: "Up to ₹499", min: 0, max: 499 },
//     { label: "₹500 - ₹999", min: 500, max: 999 },
//     { label: "₹1000 - ₹1499", min: 1000, max: 1499 },
//     { label: "₹1500 - ₹1999", min: 1500, max: 1999 },
//     { label: "₹2000+", min: 2000, max: Infinity },
//   ];

//   useEffect(() => {
//     if (data?.products) {
//       let filtered = [...data.products];

//       if (selectedCategory !== "all") {
//         filtered = filtered.filter((product) => product.category?.toLowerCase() === selectedCategory.toLowerCase());
//       }

//       if (selectedPriceRanges.length > 0) {
//         filtered = filtered.filter((product) =>
//           selectedPriceRanges.some((range) => product.price >= range.min && product.price <= range.max)
//         );
//       }

//       if (selectedBrands.length > 0) {
//         filtered = filtered.filter((product) => selectedBrands.includes(product.brand));
//       }

//       setFilteredProducts(filtered);
//     }
//   }, [data, selectedCategory, selectedPriceRanges, selectedBrands]);

//   const handlePriceRangeChange = (e, range) => {
//     setSelectedPriceRanges((prev) =>
//       e.target.checked ? [...prev, range] : prev.filter((r) => r.label !== range.label)
//     );
//   };

//   const handleBrandChange = (e) => {
//     setSelectedBrands((prev) =>
//       prev.includes(e.target.value) ? prev.filter((b) => b !== e.target.value) : [...prev, e.target.value]
//     );
//   };

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant="danger">{error?.data?.message || error.error}</Message>
//       ) : (
//         <>
//           {!search && <ProductCarousel />}
//           <Meta />
//           <Center>Latest Products</Center>
//           <Row>
//             {data?.products?.slice(0, 8).map((product) => (
//               <Col key={product._id} sm={12} md={6} lg={3}>
//                 <Product product={product} />
//               </Col>
//             ))}
//           </Row>

//           <Center className="m-4">All Products</Center>

//           <HomePageContainer>
//             {/* Filters Section */}
//             <FiltersContainer>
//               <FilterTitle ><FaFilter /> Filters</FilterTitle>

//               {/* Category Filter */}
//               <StyledFormGroup>
//                 <FilterTitle><FaBoxes /> Select Category</FilterTitle>
//                 <FormControl as="select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
//                   <option value="all">All Categories</option>
//                   {categories.map((cat, index) => (
//                     <option key={index} value={cat}>{cat}</option>
//                   ))}
//                 </FormControl>
//               </StyledFormGroup>

//               {/* Price Filter */}
//               <FilterTitle><FaTags /> Price Range</FilterTitle>
//               <StyledFormGroup>
//                 {priceRanges.map((range) => (
//                   <StyledFormCheck
//                     key={range.label}
//                     type="checkbox"
//                     label={range.label}
//                     checked={selectedPriceRanges.some((r) => r.label === range.label)}
//                     onChange={(e) => handlePriceRangeChange(e, range)}
//                   />
//                 ))}
//               </StyledFormGroup>

//               {/* Brand Selection */}
//               <FilterTitle><FaTags /> Brands</FilterTitle>
//               <StyledFormGroup>
//                 {brands.map((brand) => (
//                   <StyledFormCheck
//                     key={brand}
//                     type="checkbox"
//                     label={brand}
//                     value={brand}
//                     checked={selectedBrands.includes(brand)}
//                     onChange={handleBrandChange}
//                   />
//                 ))}
//               </StyledFormGroup>
//             </FiltersContainer>

//             {/* Products Section */}
//             <ProductsContainer>
//               <Row>
//                 {filteredProducts.length > 0 ? (
//                   filteredProducts.map((product) => (
//                     <Col key={product._id} sm={12} md={6} lg={4}>
//                       <Product product={product} />
//                     </Col>
//                   ))
//                 ) : (
//                   <Message variant="info">No products found.</Message>
//                 )}
//               </Row>
//             </ProductsContainer>
//           </HomePageContainer>
//         </>
//       )}
//     </>
//   );
// };

// export default HomePage;
import React, { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Menu from "../components/Menu";
import Paginate from "../components/Paginate";
import Meta from "../components/Meta";
import BannerImg from '../assets/Banner.png'
import styled, { keyframes } from "styled-components";
import { FaPizzaSlice, FaHamburger, FaUtensils } from 'react-icons/fa';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HomePageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  animation: ${fadeIn} 0.8s ease-in-out;
`;

const HeaderWrapper = styled.div`
  text-align: center;
  padding: 50px 20px 20px 20px;
  background-color: #fff3e6;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #e7400d;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;  /* Space between text and icon */

  /* Add some responsive styling */
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-top: 10px;
  line-height: 1.6;
`;

const ProductsContainer = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
  transition: all 0.3s ease;
`;

const Center = styled.h2`
  text-align: center;
  color: #cb3705;
  background: linear-gradient(135deg, #ffcc00, #fff);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-image: url(${BannerImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  @media (max-width: 768px) {
    height:340px;
    background-size: cover;
  }
  @media (max-width: 475px) {
    height: 200px;
    background-size: contain;
    margin: 0;
    padding: 0;
  }
  @media  (max-width: 1023px) {
    height: 400px;
    background-size: cover;
  }
`;

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const { search } = useSelector((state) => state.search);
  const { data, isLoading, error } = useGetProductsQuery({});

  // Effect to update filtered products based on the search
  useEffect(() => {
    if (data?.products) {
      // Apply filters to products
      let filtered = data.products;

      // Category filter (if selected)
      if (selectedCategory !== "all") {
        filtered = filtered.filter((product) => product.category === selectedCategory);
      }

      setFilteredProducts(filtered); // Update the filtered products state
    }
  }, [data, selectedCategory, search]); // Re-run effect when data or selectedCategory changes

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <BannerContainer></BannerContainer>
          <HeaderWrapper>
      <Title>
        <IconWrapper>
          <FaPizzaSlice size={30} />
        </IconWrapper>
        What are you craving today? 🍕
      </Title>
      <Description>
        Whether it's a delicious pizza, a juicy burger, or something sweet, we've got you covered! Take a look at our menu and find your next craving. 😋
      </Description>
    </HeaderWrapper> 
          {!search && <Menu />}
          <Center className="m-4">All Products</Center>

          <HomePageContainer>
            {/* Products Section */}
            <ProductsContainer>
              <Row>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <Col key={product._id} sm={12} md={4} lg={3}>
                      <Product product={product} />
                    </Col>
                  ))
                ) : (
                  <Message variant="info">No products found.</Message>
                )}
              </Row>
            </ProductsContainer>
          </HomePageContainer>
          
    
        </>
      )}
    </>
  );
};

export default HomePage;
