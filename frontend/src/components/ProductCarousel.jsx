// import React from "react";
// import { Link } from "react-router-dom";
// import { Carousel, Image } from "react-bootstrap";
// import { useGetTopProductsQuery } from "../slices/productsApiSlice";
// import { addCurrency } from "../utils/addCurrency";
// import Loader from "./Loader";
// import Message from "./Message";

// const ProductCarousel = () => {
//   const { data: products } = useGetTopProductsQuery();
//   return (
//     <Carousel fade className="text-center bg-secondary mb-5 z-0">
//       {products?.map((product) => (
//         <Carousel.Item key={product._id} interval={3000}>
//           <Link to={`/product/${product._id}`}>
//             <Image
//               src={product.image}
//               alt={product.name}
//               fluid
//               style={{
//                 height: "500px",
//                   objectFit: "cover",
//               }}
//             />
//             <Carousel.Caption className="pb-5 px-5 ">
//               <h3 className="product-title">{product.name}</h3>
//               <h1>{addCurrency(product.price)}</h1>
//             </Carousel.Caption>
//           </Link>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// export default ProductCarousel;


import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";
import { addCurrency } from "../utils/addCurrency";
import Loader from "./Loader";
import Message from "./Message";
import styled from "styled-components";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  if (isLoading) return <Loader />;
  if (error) return <Message variant="danger">{error?.data?.message || "Failed to load products"}</Message>;

  return (
    <Carousel data-bs-theme="dark" fade className="text-center bg-secondary mb-5">
      {products?.map((product) => (
        <Carousel.Item key={product._id} interval={3000}>
          <Link to={`/product/${product._id}`}>
            <Image
              src={product.image}
              alt={product.name}
              fluid
              className="d-block w-100"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>{product.name}</h3>
              <h5>{addCurrency(product.price)}</h5>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
