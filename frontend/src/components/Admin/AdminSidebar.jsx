
// import React from 'react';
// import { Nav } from 'react-bootstrap';
// import { 
//   FaHome, 
//   FaBoxOpen, 
//   FaShoppingCart, 
//   FaUsers, 
//   FaUserShield, 
//   FaUserCircle, 
//   FaSignOutAlt 
// } from 'react-icons/fa';
// import { LinkContainer } from 'react-router-bootstrap';
// import { useLogoutMutation } from '../../slices/usersApiSlice';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { logout } from '../../slices/authSlice';
// import { toast } from 'react-toastify';
// import styled from 'styled-components';

// // Styled Components for Sidebar
// const SidebarContainer = styled.div`
//   width: 250px;
//   height: 100vh;
//   background: linear-gradient(to bottom, #e7400d, #ff6334, #000000);

//   color: white;
//   padding: 20px;
//   position: fixed;
//   left: 0;
//   top: 0;
//   box-shadow: 4px 0 10px rgba(0, 0, 0, 0.3);
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   transition: all 0.3s ease-in-out;
  
//   @media (max-width: 768px) {
//     width: 200px;
//   }
// `;

// const SidebarTitle = styled.h2`
//   text-align: center;
//   font-size: 22px;
//   font-weight: bold;
//   margin-bottom: 30px;
//   color: #f1f1f1;
// `;

// const NavMenu = styled.nav`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const SidebarLink = styled(Nav.Link)`
//   display: flex;
//   align-items: center;
//   padding: 12px 15px;
//   border-radius: 8px;
//   font-size: 16px;
//   color: #f1f1f1;
//   transition: all 0.3s ease-in-out;
  
//   &:hover {
//     background: #2e2e2e;
//     transform: translateX(5px);
//   }
  
//   svg {
//     margin-right: 10px;
//     font-size: 18px;
//   }
// `;

// const LogoutButton = styled.button`
//   background: none;
//   border: none;
//   color: #ff4d4d;
//   font-size: 16px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   padding: 12px 15px;
//   border-radius: 8px;
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     background: #ff4d4d;
//     color: white;
//     transform: translateX(5px);
//   }

//   svg {
//     margin-right: 10px;
//     font-size: 18px;
//   }
// `;

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
//     <SidebarContainer>
//       <div>
//         <SidebarTitle>Admin Panel</SidebarTitle>
//         <NavMenu>
//           <SidebarItem to="/admin/dashboard" icon={<FaHome />} text="Dashboard" />
//           <SidebarItem to="/admin/product-list" icon={<FaBoxOpen />} text="Products" />
//           <SidebarItem to="/admin/order-list" icon={<FaShoppingCart />} text="Orders" />
//           <SidebarItem to="/admin/user-list" icon={<FaUsers />} text="Users" />
//           <SidebarItem to="/admin/admin-list" icon={<FaUserShield />} text="Admins" />
//           <SidebarItem to="/admin/profile" icon={<FaUserCircle />} text="Profile" />
//           <SidebarItem to="/admin/menu-management" icon={<FaUserCircle />} text="Menu" />


//         </NavMenu>
//       </div>

//       <LogoutButton onClick={logoutHandler}>
//         <FaSignOutAlt /> Logout
//       </LogoutButton>
//     </SidebarContainer>
//   );
// };

// // SidebarItem component for better reusability
// const SidebarItem = ({ to, icon, text }) => {
//   return (
//     <LinkContainer to={to}>
//       <SidebarLink>
//         {icon} {text}
//       </SidebarLink>
//     </LinkContainer>
//   );
// };

// export default Sidebar;
import React from 'react';
import { FaHome, FaBoxOpen, FaShoppingCart, FaUsers, FaUserShield, FaUserCircle, FaSignOutAlt, FaUtensils } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../slices/authSlice';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  height: calc(100vh - 60px);
  /* background: linear-gradient(to bottom, #ff4500, #ff7f50); */
  background: #ff6347;
  color: white;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 60px;
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

const SidebarLink = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  border-radius: 8px;
  font-size: 16px;
  color: #f1f1f1;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #2e2e2e;
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
  color: #ff0000;
  font-weight: 999;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 12px 15px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #f50000;
    color: white;
    font-weight: 999;
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
        <NavMenu>
          <SidebarItem to="/admin/dashboard" icon={<FaHome />} text="Dashboard" />
          <SidebarItem to="/admin/product-list" icon={<FaBoxOpen />} text="Products" />
          <SidebarItem to="/admin/order-list" icon={<FaShoppingCart />} text="Orders" />
          <SidebarItem to="/admin/user-list" icon={<FaUsers />} text="Users" />
          <SidebarItem to="/admin/admin-list" icon={<FaUserShield />} text="Admins" />
          <SidebarItem to="/admin/profile" icon={<FaUserCircle />} text="Profile" />
          <SidebarItem to="/admin/menu-management" icon={<FaUtensils />} text="Menu" />
        </NavMenu>
      </div>

      <LogoutButton onClick={logoutHandler}>
        <FaSignOutAlt /> Logout
      </LogoutButton>
    </SidebarContainer>
  );
};

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
