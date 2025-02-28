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
  background: linear-gradient(135deg, #ea5600, #ffffff);
  border: none;
  color: white;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(145deg, #d14e07, #ffffff);
    font-weight: bold;
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
