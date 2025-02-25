// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Badge } from "react-bootstrap";
// import { FaShoppingCart, FaUser, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
// import { LinkContainer } from "react-router-bootstrap";
// import { useSelector, useDispatch } from "react-redux";
// import { useLogoutMutation } from "../slices/usersApiSlice";
// import { logout } from "../slices/authSlice";
// import { toast } from "react-toastify";
// import SearchBox from "./SearchBox";
// import styled from "styled-components";

// // Styled Components
// const NavbarContainer = styled.nav`
//   background: #141e30;
//   color: #fff;
//   padding: 15px 20px;
//   position: fixed;
//   width: 100%;
//   top: 0;
//   z-index: 1000;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   transition: all 0.3s ease-in-out;
// `;

// const Brand = styled.div`
//   font-size: 24px;
//   font-weight: bold;
//   cursor: pointer;
//   transition: transform 0.3s ease, color 0.3s ease;

//   &:hover {
//     color: #fff;
//     font-weight: bold;
//     transform: scale(1.1);
//   }
// `;

// const NavLinks = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;

//   @media (max-width: 768px) {
//     display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
//     flex-direction: column;
//     position: absolute;
//     top: 60px;
//     right: 0;
//     width: 100%;
//     background: #1f2a40;
//     padding: 15px;
//     border-radius: 10px;
//     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
//   }
// `;

// const NavLink = styled.div`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   font-size: 16px;
//   transition: all 0.3s ease-in-out;
//   color: white;

//   &:hover {
//     color: #fff;
//     font-weight: bold;
//     transform: translateY(-2px);
//   }

//   svg {
//     margin-right: 8px;
//     transition: transform 0.3s ease-in-out;
//   }

//   &:hover svg {
//     transform: rotate(10deg);
//   }
// `;

// const LogoutButton = styled.button`
//   background: none;
//   border: none;
//   color: white;
//   font-size: 16px;
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     color: #ff4d4d;
//     transform: scale(1.1);
//   }

//   svg {
//     margin-right: 8px;
//   }
// `;

// const MenuButton = styled.button`
//   background: none;
//   border: none;
//   color: #ffcc00;
//   font-size: 24px;
//   cursor: pointer;
//   display: none;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const Header = () => {
//   const { cartItems } = useSelector((state) => state.cart);
//   const { userInfo } = useSelector((state) => state.auth);
//   const [logoutApiCall] = useLogoutMutation();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Logout handler with confirmation prompt
//   const logoutHandler = async () => {
//     const confirmLogout = window.confirm("Are you sure you want to log out?");
//     if (confirmLogout) {
//       try {
//         await logoutApiCall().unwrap();
//         dispatch(logout());
//         navigate("/login");
//         toast.success("Logout successful");
//       } catch (error) {
//         toast.error(error?.data?.message || error.error);
//       }
//     }
//   };

//   return (
//     <NavbarContainer>
//       <LinkContainer to="/">
//         <Brand>ShoeBiz</Brand>
//       </LinkContainer>

//       {/* Toggle Button for Small Screens */}
//       <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </MenuButton>

//       <NavLinks isOpen={menuOpen}>
//         <SearchBox />

//         <LinkContainer to="/cart">
//           <NavLink onClick={() => setMenuOpen(false)}>
//             <FaShoppingCart size={20} />
//             Cart
//             {cartItems.length > 0 && (
//               <Badge
//                 pill
//                 bg="warning"
//                 style={{ marginLeft: "5px", color: "#141e30" }}
//               >
//                 <strong>{cartItems.reduce((acc, item) => acc + item.qty, 0)}</strong>
//               </Badge>
//             )}
//           </NavLink>
//         </LinkContainer>

//         {userInfo ? (
//           <>
//             <LinkContainer to="/profile">
//               <NavLink onClick={() => setMenuOpen(false)}>
//                 <FaUser size={20} />
//                 {`Hello, ${userInfo.name}`}
//               </NavLink>
//             </LinkContainer>
//             <LogoutButton onClick={() => { logoutHandler(); setMenuOpen(false); }}>
//               <FaSignOutAlt size={20} />
//               Logout
//             </LogoutButton>
//           </>
//         ) : (
//           <LinkContainer to="/login">
//             <NavLink onClick={() => setMenuOpen(false)}>
//               <FaUser size={20} />
//               Sign In
//             </NavLink>
//           </LinkContainer>
//         )}
//       </NavLinks>
//     </NavbarContainer>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaSignOutAlt, FaBars, FaTimes, FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { toast } from "react-toastify";
import SearchBox from "./SearchBox";
import styled from "styled-components";

// 🍔 Styled Components
const NavbarContainer = styled.nav`
  background: #ff5722; /* Food-inspired color */
  color: #fff;
  padding: 15px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  display: flex;
  gap:30px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
`;

const Brand = styled.div`
  font-size: 26px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: #ffeb3b;
    transform: scale(1.1);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    background: #d84315;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const NavLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease-in-out;
  color: white;

  &:hover {
    color: #ffeb3b;
    transform: translateY(-2px);
  }

  svg {
    margin-right: 10px;
    transition: transform 0.3s ease-in-out;
  }

  &:hover svg {
    transform: rotate(10deg);
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: 2px solid #ffeb3b;
  color: white;
  font-size: 18px;
  padding: 6px 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #ffeb3b;
    color: #d84315;
    transform: scale(1.1);
  }

  svg {
    margin-right: 8px;
  }
`;
const Width=styled.div`
  width:250px;
`
const MenuButton = styled.button`
  background: none;
  border: none;
  color: #ffeb3b;
  font-size: 26px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Logout handler
  const logoutHandler = async () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      try {
        await logoutApiCall().unwrap();
        dispatch(logout());
        navigate("/login");
        toast.success("Logout successful");
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <NavbarContainer>
      <LinkContainer to="/">
        <Brand>
          <FaPizzaSlice size={30} />
          Foodie
          
        </Brand>
       
      </LinkContainer>

      {/* 🍔 Toggle Button for Small Screens */}
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>

      <NavLinks isOpen={menuOpen}>
       
      <SearchBox />
        <LinkContainer to="/cart">
          <NavLink onClick={() => setMenuOpen(false)}>
            <FaShoppingCart size={22} />
            Cart
            {cartItems.length > 0 && (
              <Badge
                pill
                bg="warning"
                style={{ marginLeft: "5px", color: "#ff5722" }}
              >
                <strong>{cartItems.reduce((acc, item) => acc + item.qty, 0)}</strong>
              </Badge>
            )}
          </NavLink>
        </LinkContainer>

        {userInfo ? (
          <>
            <LinkContainer to="/profile">
              <NavLink onClick={() => setMenuOpen(false)}>
                <Width>
                  <FaHamburger size={22} />
                  {`Hello, ${userInfo.name}`}
                </Width>
              </NavLink>
                
            </LinkContainer>
            <LogoutButton onClick={() => { logoutHandler(); setMenuOpen(false); }}>
              <FaSignOutAlt size={22} />
              Logout
            </LogoutButton>
          </>
        ) : (
          <LinkContainer to="/login">
            <NavLink onClick={() => setMenuOpen(false)}>
              <FaUser size={22} />
              Sign In
            </NavLink>
          </LinkContainer>
        )}
      </NavLinks>
    </NavbarContainer>
  );
};

export default Header;
