// import React from 'react';
// import { Nav } from 'react-bootstrap';
// import {
//   FaCartShopping,
//   FaCircleUser,
//   FaGauge,
//   FaPowerOff,
//   FaTable,
//   FaUserGroup,
//   FaUsers
// } from 'react-icons/fa6';
// import { LinkContainer } from 'react-router-bootstrap';
// import { useLogoutMutation } from '../../slices/usersApiSlice';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { logout } from '../../slices/authSlice';
// import { toast } from 'react-toastify';

// const Sidebar = () => {
//   const [logoutApiCall] = useLogoutMutation();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const logoutHandler = async () => {
//     try {
//       await logoutApiCall().unwrap();
//       dispatch(logout());

//       navigate('/admin/login');
//       toast.success('Logout successful');
//     } catch (error) {
//       toast.error(error?.data?.message || error.error);
//     }
//   };
//   return (
//     <>
//       <LinkContainer to='/admin/dashboard' className='mb-2'>
//         <Nav.Link>
//           <strong>
//             <FaGauge
//               style={{ marginRight: '10px', marginBottom: '3px' }}
//               size={16}
//             />
//             Dashboard
//           </strong>
//         </Nav.Link>
//       </LinkContainer>
//       <LinkContainer to='/admin/product-list' className='mb-2'>
//         <Nav.Link>
//           <strong>
//             <FaTable
//               style={{ marginRight: '10px', marginBottom: '3px' }}
//               size={16}
//             />
//             Products
//           </strong>
//         </Nav.Link>
//       </LinkContainer>
//       <LinkContainer to='/admin/order-list' className='mb-2'>
//         <Nav.Link>
//           <strong>
//             <FaCartShopping
//               style={{ marginRight: '10px', marginBottom: '3px' }}
//               size={16}
//             />
//             Orders
//           </strong>
//         </Nav.Link>
//       </LinkContainer>
//       <LinkContainer to='/admin/user-list' className='mb-2'>
//         <Nav.Link>
//           <strong>
//             <FaUsers
//               style={{ marginRight: '10px', marginBottom: '3px' }}
//               size={16}
//             />
//             Users
//           </strong>
//         </Nav.Link>
//       </LinkContainer>
//       <LinkContainer to='/admin/admin-list' className='mb-2'>
//         <Nav.Link>
//           <strong>
//             <FaUserGroup
//               style={{ marginRight: '10px', marginBottom: '3px' }}
//               size={16}
//             />
//             Admins
//           </strong>
//         </Nav.Link>
//       </LinkContainer>
//       <LinkContainer to='/admin/profile' className='mb-2'>
//         <Nav.Link>
//           <strong>
//             <FaCircleUser
//               style={{ marginRight: '10px', marginBottom: '3px' }}
//               size={16}
//             />
//             Profile
//           </strong>
//         </Nav.Link>
//       </LinkContainer>
//       <Nav.Link onClick={logoutHandler}>
//         <strong>
//           <FaPowerOff
//             style={{ marginRight: '10px', marginBottom: '3px' }}
//             size={16}
//           />
//           Logout
//         </strong>
//       </Nav.Link>
//     </>
//   );
// };

// export default Sidebar;
import React from 'react';
import { Nav } from 'react-bootstrap';
import { 
  FaHome, 
  FaBoxOpen, 
  FaShoppingCart, 
  FaUsers, 
  FaUserShield, 
  FaUserCircle, 
  FaSignOutAlt 
} from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../slices/authSlice';
import { toast } from 'react-toastify';
import styled from 'styled-components';

// Styled Components for Sidebar
const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background: linear-gradient(to bottom, #1a1a2e, #16213e);
  color: white;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  
  @media (max-width: 768px) {
    width: 200px;
  }
`;

const SidebarTitle = styled.h2`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #f1f1f1;
`;

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SidebarLink = styled(Nav.Link)`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  border-radius: 8px;
  font-size: 16px;
  color: #f1f1f1;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background: #0f3460;
    transform: translateX(5px);
  }
  
  svg {
    margin-right: 10px;
    font-size: 18px;
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #ff4d4d;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 12px 15px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #ff4d4d;
    color: white;
    transform: translateX(5px);
  }

  svg {
    margin-right: 10px;
    font-size: 18px;
  }
`;

const Sidebar = () => {
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/admin/login');
      toast.success('Logout successful');
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <SidebarContainer>
      <div>
        <SidebarTitle>Admin Panel</SidebarTitle>
        <NavMenu>
          <SidebarItem to="/admin/dashboard" icon={<FaHome />} text="Dashboard" />
          <SidebarItem to="/admin/product-list" icon={<FaBoxOpen />} text="Products" />
          <SidebarItem to="/admin/order-list" icon={<FaShoppingCart />} text="Orders" />
          <SidebarItem to="/admin/user-list" icon={<FaUsers />} text="Users" />
          <SidebarItem to="/admin/admin-list" icon={<FaUserShield />} text="Admins" />
          <SidebarItem to="/admin/profile" icon={<FaUserCircle />} text="Profile" />
        </NavMenu>
      </div>

      <LogoutButton onClick={logoutHandler}>
        <FaSignOutAlt /> Logout
      </LogoutButton>
    </SidebarContainer>
  );
};

// SidebarItem component for better reusability
const SidebarItem = ({ to, icon, text }) => {
  return (
    <LinkContainer to={to}>
      <SidebarLink>
        {icon} {text}
      </SidebarLink>
    </LinkContainer>
  );
};

export default Sidebar;
