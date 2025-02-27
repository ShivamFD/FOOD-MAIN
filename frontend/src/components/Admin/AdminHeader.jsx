// import React from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
// import { LinkContainer } from 'react-router-bootstrap';
// import AdminSidebar from './AdminSidebar';

// const AdminHeader = () => {
//   const { userInfo } = useSelector(state => state.auth);

//   return (
//     <Navbar
//       bg='dark'
//       variant='dark'
//       expand='md'
//       collapseOnSelect
//       className='fixed-top'
//     >
//       <Container fluid>
//         <LinkContainer to='/admin/dashboard'>
//           <Navbar.Brand>MERN Shop Admin</Navbar.Brand>
//         </LinkContainer>
//         <Navbar.Toggle aria-controls='basic-navbar-nav' />
//         <Navbar.Collapse id='basic-navbar-nav'>
//           <Nav className='ms-auto m-2 '>
//             <Nav.Link> Hello,👋{userInfo?.name}</Nav.Link>
//             <div className='d-md-none '>
//               <AdminSidebar />
//             </div>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default AdminHeader;
// import React from 'react';
// import styled from 'styled-components';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import AdminSidebar from './AdminSidebar';
// import { FaUserCircle } from 'react-icons/fa';

// const AdminHeader = () => {
//   const { userInfo } = useSelector(state => state.auth);

//   return (
//     <NavbarContainer>
//       <NavBar>
//         <Brand to='/admin/dashboard'>🍕 Food Admin Panel</Brand>
//         <NavItems>
//           <UserInfo>
//             <FaUserCircle /> Hello, {userInfo?.name}
//           </UserInfo>
//           <SidebarWrapper>
//             <AdminSidebar />
//           </SidebarWrapper>
//         </NavItems>
//       </NavBar>
//     </NavbarContainer>
//   );
// };

// export default AdminHeader;

// const NavbarContainer = styled.div`
//   position: fixed;
//   top: 0;
//   width: 100%;
//   background: #ff6347;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
//   z-index: 1000;
//   transition: background 0.3s ease-in-out;
// `;

// const NavBar = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 15px 20px;
//   max-width: 1200px;
//   margin: auto;
// `;

// const Brand = styled(Link)`
//   font-size: 1.8rem;
//   font-weight: bold;
//   color: #fff;
//   text-decoration: none;
//   transition: color 0.3s;

//   &:hover {
//     color: #f4e04d;
//   }
// `;

// const NavItems = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const UserInfo = styled.div`
//   font-size: 1.2rem;
//   color: #fff;
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   transition: transform 0.3s;

//   &:hover {
//     transform: scale(1.1);
//   }
// `;

// const SidebarWrapper = styled.div`
//   display: none;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;
import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import { FaUserCircle, FaBars } from 'react-icons/fa';

const AdminHeader = () => {
  const { userInfo } = useSelector(state => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavBar>
        <Brand to='/admin/dashboard'>🍕 Food Admin Panel</Brand>
        <NavItems>
          <UserInfo>
            <FaUserCircle /> Hello, {userInfo?.name}
          </UserInfo>
          <Hamburger onClick={toggleMenu}>
            <FaBars />
          </Hamburger>
        </NavItems>
      </NavBar>
      {isOpen && (
        <MobileMenu>
          <AdminSidebar />
        </MobileMenu>
      )}
    </NavbarContainer>
  );
};

export default AdminHeader;

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background: #ff6347;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: background 0.3s ease-in-out;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  max-width: 1200px;
  margin: auto;
`;

const Brand = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #f4e04d;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const UserInfo = styled.div`
  font-size: 1.2rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background: #ff7f50;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
`;
