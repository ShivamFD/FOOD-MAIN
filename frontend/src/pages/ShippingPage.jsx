// // // import React, { useState } from "react";
// // // import { Form, Button } from "react-bootstrap";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { useNavigate } from "react-router-dom";
// // // import { saveShippingAddress } from "../slices/cartSlice";
// // // import FormContainer from "../components/FormContainer";
// // // import CheckoutSteps from "../components/CheckoutSteps";
// // // import Meta from "../components/Meta";

// // // const ShippingPage = () => {
// // //   const { shippingAddress } = useSelector((state) => state.cart);

// // //   const [address, setAddress] = useState(shippingAddress.address || "");
// // //   const [city, setCity] = useState(shippingAddress.city || "");
// // //   const [postalCode, setPostalCode] = useState(
// // //     shippingAddress.postalCode || ""
// // //   );
// // //   const [country, setCountry] = useState(shippingAddress.country || "");

// // //   const dispatch = useDispatch();
// // //   const navigate = useNavigate();

// // //   const submitHandler = (e) => {
// // //     e.preventDefault();
// // //     dispatch(
// // //       saveShippingAddress({
// // //         address,
// // //         city,
// // //         postalCode,
// // //         country,
// // //       })
// // //     );
// // //     navigate("/payment");
// // //   };

// // //   const isFormValid = address && city && postalCode && country;

// // //   return (
// // //     <FormContainer>
// // //       <CheckoutSteps step1 step2 />
// // //       <Meta title={"Shipping"} />
// // //       <h1>Shipping</h1>
// // //       <Form onSubmit={submitHandler}>
// // //         <Form.Group className="mb-3" controlId="address">
// // //           <Form.Label>Address</Form.Label>
// // //           <Form.Control
// // //             value={address}
// // //             type="text"
// // //             placeholder="Enter address"
// // //             onChange={(e) => setAddress(e.target.value)}
// // //             required
// // //           />
// // //         </Form.Group>
// // //         <Form.Group className="mb-3" controlId="city">
// // //           <Form.Label>City</Form.Label>
// // //           <Form.Control
// // //             value={city}
// // //             type="text"
// // //             placeholder="Enter city"
// // //             onChange={(e) => setCity(e.target.value)}
// // //             required
// // //           />
// // //         </Form.Group>
// // //         <Form.Group className="mb-3" controlId="postalCode">
// // //           <Form.Label>Postal Code</Form.Label>
// // //           <Form.Control
// // //             value={postalCode}
// // //             type="text"
// // //             placeholder="Enter postal code"
// // //             onChange={(e) => setPostalCode(e.target.value)}
// // //             required
// // //           />
// // //         </Form.Group>
// // //         <Form.Group className="mb-3" controlId="country">
// // //           <Form.Label>Country</Form.Label>
// // //           <Form.Control
// // //             value={country}
// // //             type="text"
// // //             placeholder="Enter country"
// // //             onChange={(e) => setCountry(e.target.value)}
// // //             required
// // //           />
// // //         </Form.Group>
// // //         {isFormValid && (
// // //           <Button className="mb-3 w-100" variant="warning" type="submit">
// // //             Continue
// // //           </Button>
// // //         )}
// // //       </Form>
// // //     </FormContainer>
// // //   );
// // // };

// // // export default ShippingPage;

// // import React, { useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// // import { saveShippingAddress } from "../slices/cartSlice";
// // import FormContainer from "../components/FormContainer";
// // import CheckoutSteps from "../components/CheckoutSteps";
// // import Meta from "../components/Meta";
// // import styled from "styled-components";
// // import shippingImage from "../assets/shippingImage.jpg"; // Make sure this path is correct

// // const ShippingPageContainer = styled.div`
// //   display: flex;
// //   justify-content: space-between;
// //   gap: 2rem;
// //   padding: 2rem;
// //   border-radius: 10px;
// //   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

// //   @media (max-width: 768px) {
// //     flex-direction: column;
// //     align-items: center;
// //   }
// // `;

// // const FormSection = styled.div`
// //   flex: 1;
// //   padding: 1rem;
// //   background-color: #f9f9f9;
// //   border-radius: 8px;
// //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// // `;

// // const ImageSection = styled.div`
// //   flex: 1;
// //   display: flex;
// //   justify-content: center;
// //   img {
// //     height: 25rem;
// //     width: 400%;
// //     max-width: 400px;
// //     margin-left: 200px;
// //     border-radius: 8px;
// //     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// //   }
// // `;

// // const Input = styled.input`
// //   width: 100%;
// //   padding: 10px;
// //   margin-bottom: 15px;
// //   border: 1px solid #ccc;
// //   border-radius: 4px;
// //   font-size: 16px;
// // `;

// // const Label = styled.label`
// //   font-size: 14px;
// //   margin-bottom: 5px;
// //   display: block;
// //   color: #333;
// // `;

// // const SubmitButton = styled.button`
// //   width: 100%;
// //   padding: 10px;
// //   background-color: #ffc107;
// //   border: none;
// //   border-radius: 4px;
// //   font-size: 16px;
// //   color: #fff;
// //   cursor: pointer;

// //   &:hover {
// //     background-color: #e0a800;
// //   }
// // `;

// // const ShippingPage = () => {
// //   const { shippingAddress } = useSelector((state) => state.cart);

// //   const [address, setAddress] = useState(shippingAddress.address || "");
// //   const [city, setCity] = useState(shippingAddress.city || "");
// //   const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || "");
// //   const [country, setCountry] = useState(shippingAddress.country || "");

// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const submitHandler = (e) => {
// //     e.preventDefault();
// //     dispatch(
// //       saveShippingAddress({
// //         address,
// //         city,
// //         postalCode,
// //         country,
// //       })
// //     );
// //     navigate("/payment");
// //   };

// //   const isFormValid = address && city && postalCode && country;

// //   return (
// //     <FormContainer>
// //       <CheckoutSteps step1 step2 />
// //       <Meta title={"Shipping"} />
// //       <h1>Shipping</h1>
// //       <ShippingPageContainer>
// //         <FormSection>
// //           <form onSubmit={submitHandler}>
// //             <div>
// //               <Label htmlFor="address">Address</Label>
// //               <Input
// //                 id="address"
// //                 type="text"
// //                 value={address}
// //                 placeholder="Enter address"
// //                 onChange={(e) => setAddress(e.target.value)}
// //                 required
// //               />
// //             </div>

// //             <div>
// //               <Label htmlFor="city">City</Label>
// //               <Input
// //                 id="city"
// //                 type="text"
// //                 value={city}
// //                 placeholder="Enter city"
// //                 onChange={(e) => setCity(e.target.value)}
// //                 required
// //               />
// //             </div>

// //             <div>
// //               <Label htmlFor="postalCode">Postal Code</Label>
// //               <Input
// //                 id="postalCode"
// //                 type="text"
// //                 value={postalCode}
// //                 placeholder="Enter postal code"
// //                 onChange={(e) => setPostalCode(e.target.value)}
// //                 required
// //               />
// //             </div>

// //             <div>
// //               <Label htmlFor="country">Country</Label>
// //               <Input
// //                 id="country"
// //                 type="text"
// //                 value={country}
// //                 placeholder="Enter country"
// //                 onChange={(e) => setCountry(e.target.value)}
// //                 required
// //               />
// //             </div>

// //             {isFormValid && (
// //               <SubmitButton type="submit">Continue</SubmitButton>
// //             )}
// //           </form>
// //         </FormSection>

// //         <ImageSection>
// //           <img src={shippingImage} alt="Shipping Illustration" />
// //         </ImageSection>
// //       </ShippingPageContainer>
// //     </FormContainer>
// //   );
// // };

// // export default ShippingPage;
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { saveShippingAddress } from "../slices/cartSlice";
// import FormContainer from "../components/FormContainer";
// import CheckoutSteps from "../components/CheckoutSteps";
// import Meta from "../components/Meta";
// import styled from "styled-components";
// import shippingImage from "../assets/shippingImage.jpg"; // Make sure this path is correct

// const ShippingPageContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap; /* Ensure wrapping on smaller screens */
//   justify-content: space-between;
//   gap: 2rem;
//   padding: 2rem;
//   border-radius: 10px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
//   background-color: #141e30;

//   @media (max-width: 768px) {
//     flex-direction: column; /* Stack in column on mobile */
//     align-items: center;
//     gap: 1rem; /* Reduce gap on mobile */
//   }
// `;

// const FormSection = styled.div`
//   flex: 1;
//   min-width: 300px; /* Ensure form doesn't get too small */
//   padding: 1rem;
//   background-color: #0a0a2b35;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  

//   @media (max-width: 768px) {
//     width: 100%; /* Full width on mobile */
//   }
// `;

// const ImageSection = styled.div`
//   flex: 1;
//   min-width: 300px; /* Ensure image doesn't get too small */
//   display: flex;
//   justify-content: center;
//   align-items: center; /* Center the image vertically */

//   img {
//     max-width: 100%; /* Ensure image is responsive */
//     height: auto; /* Maintain aspect ratio */
//     border-radius: 8px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   }

//   @media (max-width: 768px) {
//     width: 100%; /* Full width on mobile */
//     img {
//       max-width: 80%; /* Reduce image size on mobile */
//     }
//   }
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin-bottom: 15px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 16px;
// `;

// const Label = styled.label`
//   font-size: 14px;
//   margin-bottom: 5px;
//   display: block;
//   color: #fff;
//   font-weight: bold;
//   `;

// const StyledButton = styled.button`
// width: 100%;
//   background: linear-gradient(135deg, #9500ffab, #fff);
//   border: none;
//   color: #141e30;
//   padding: 10px 20px;
//   text-decoration: none;
//   border-radius: 8px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background: linear-gradient(145deg, #fff,#906fa7ab);;
//   }

//   &:disabled {
//     background: #e6b800;
//     cursor: not-allowed;
//   }
// `;

// const ShippingPage = () => {
//   const { shippingAddress } = useSelector((state) => state.cart);

//   const [address, setAddress] = useState(shippingAddress.address || "");
//   const [city, setCity] = useState(shippingAddress.city || "");
//   const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || "");
//   const [country, setCountry] = useState(shippingAddress.country || "");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(
//       saveShippingAddress({
//         address,
//         city,
//         postalCode,
//         country,
//       })
//     );
//     navigate("/payment");
//   };

//   const isFormValid = address && city && postalCode && country;

//   return (
//     <FormContainer>
//       <CheckoutSteps step1 step2 />
//       <Meta title={"Shipping"} />
//       <h1>Shipping</h1>
//       <ShippingPageContainer>
//         <FormSection>
//           <form onSubmit={submitHandler}>
//             <div>
//               <Label htmlFor="address">Address</Label>
//               <Input
//                 id="address"
//                 type="text"
//                 value={address}
//                 placeholder="Enter address"
//                 onChange={(e) => setAddress(e.target.value)}
//                 required
//               />
//             </div>

//             <div>
//               <Label htmlFor="city">City</Label>
//               <Input
//                 id="city"
//                 type="text"
//                 value={city}
//                 placeholder="Enter city"
//                 onChange={(e) => setCity(e.target.value)}
//                 required
//               />
//             </div>

//             <div>
//               <Label htmlFor="postalCode">Postal Code</Label>
//               <Input
//                 id="postalCode"
//                 type="text"
//                 value={postalCode}
//                 placeholder="Enter postal code"
//                 onChange={(e) => setPostalCode(e.target.value)}
//                 required
//               />
//             </div>

//             <div>
//               <Label htmlFor="country">Country</Label>
//               <Input
//                 id="country"
//                 type="text"
//                 value={country}
//                 placeholder="Enter country"
//                 onChange={(e) => setCountry(e.target.value)}
//                 required
//               />
//             </div>

//             {isFormValid && (
//               <StyledButton type="submit">Continue</StyledButton>
//             )}
//           </form>
//         </FormSection>

//         <ImageSection>
//           <img src={shippingImage} alt="Shipping Illustration" />
//         </ImageSection>
//       </ShippingPageContainer>
//     </FormContainer>
//   );
// };

// export default ShippingPage;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../slices/cartSlice";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import Meta from "../components/Meta";
import styled from "styled-components";

const ShippingPageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 65vh;
  padding: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.5rem;
  }
`;

const Sidebar = styled.div`
position: fixed;
  left: 35%;
  top: 35%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    width: 100%;
  }
`;

const FormSection = styled.div`
  flex: 0.7;
  width: 75%;
  margin-left: auto;
  padding-left: 250px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
  color: #333;
  font-weight: bold;
`;

const StyledButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #6200ea, #8e24aa);
  border: none;
  color: white;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(145deg, #8e24aa, #6200ea);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ShippingPage = () => {
  const { shippingAddress } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || "");
  const [country, setCountry] = useState(shippingAddress.country || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  const isFormValid = address && city && postalCode && country;

  return (
    <FormContainer>
      <Meta title="Shipping" />
      <ShippingPageContainer>
        <Sidebar>
          <CheckoutSteps step1 step2 />
        </Sidebar>
        <FormSection>
          <h1>Shipping</h1>
          <form onSubmit={submitHandler}>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                type="text"
                value={address}
                placeholder="Enter address"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                type="text"
                value={city}
                placeholder="Enter city"
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input
                id="postalCode"
                type="text"
                value={postalCode}
                placeholder="Enter postal code"
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                type="text"
                value={country}
                placeholder="Enter country"
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>

            {isFormValid && <StyledButton type="submit">Continue</StyledButton>}
          </form>
        </FormSection>
      </ShippingPageContainer>
    </FormContainer>
  );
};

export default ShippingPage;
