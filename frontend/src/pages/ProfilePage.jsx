// // import React from 'react';
// // import { Row, Col, Button, Table } from 'react-bootstrap';
// // import { FaCheck, FaXmark } from 'react-icons/fa6';
// // import { useGetMyOrdersQuery } from '../slices/ordersApiSlice';
// // import { LinkContainer } from 'react-router-bootstrap';
// // import { FaIndianRupeeSign } from 'react-icons/fa6';
// // import Loader from '../components/Loader';
// // import Message from '../components/Message';
// // import Meta from '../components/Meta';
// // import ProfileForm from '../components/ProfileForm';
// // import { addCurrency } from '../utils/addCurrency';

// // const ProfilePage = () => {
// //   const { data: orders, isLoading, error } = useGetMyOrdersQuery();
// //   return (
// //     <>
// //       <Row>
// //         <Col md={3}>
// //           <Meta title={'User Profile'} />
// //           <h2>My Profile</h2>
// //           <ProfileForm />
// //         </Col>
// //         <Col md={9}>
// //           <h2>My Orders</h2>
// //           {isLoading ? (
// //             <Loader />
// //           ) : error ? (
// //             <Message variant='danger'>
// //               {error?.data?.message || error.error}
// //             </Message>
// //           ) : (
// //             <Table striped hover responsive size='sm'>
// //               <thead>
// //                 <tr>
// //                   <th>ID</th>
// //                   <th>DATE</th>
// //                   <th>TOTAL</th>
// //                   <th>PAID</th>
// //                   <th>DELIVERED</th>
// //                   <th>DETAILS</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {orders.map(order => (
// //                   <tr key={order._id}>
// //                     <td>{order._id}</td>
// //                     <td>{new Date(order.createdAt).toLocaleDateString()}</td>
// //                     <td>{addCurrency(order.totalPrice)}</td>
// //                     <td>
// //                       {order.isPaid ? (
// //                         <FaCheck style={{ color: 'green' }} />
// //                       ) : (
// //                         <FaXmark style={{ color: 'red' }} />
// //                       )}
// //                     </td>
// //                     <td>
// //                       {order.isDelivered ? (
// //                         <FaCheck style={{ color: 'green' }} />
// //                       ) : (
// //                         <FaXmark style={{ color: 'red' }} />
// //                       )}
// //                     </td>
// //                     <td>
// //                       <LinkContainer to={`/order/${order._id}`}>
// //                         <Button className='btn-sm' variant='info'>
// //                           Details
// //                         </Button>
// //                       </LinkContainer>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </Table>
// //           )}
// //         </Col>
// //       </Row>
// //     </>
// //   );
// // };

// // export default ProfilePage; 

// import React from 'react';
// import { useGetMyOrdersQuery } from '../slices/ordersApiSlice';
// import { FaCheck, FaXmark } from 'react-icons/fa6';
// import { LinkContainer } from 'react-router-bootstrap';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import Meta from '../components/Meta';
// import ProfileForm from '../components/ProfileForm';
// import { addCurrency } from '../utils/addCurrency';
// import styled from 'styled-components';

// // Styled Components
// const ProfileContainer = styled.div`
//   display: flex;
//   gap: 20px;
//   padding: 30px;
//   background: #141e30;
//   border-radius: 10px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
//   color: #ffcc00;
//   flex-wrap: wrap;
// `;

// const ProfileSection = styled.div`
//   flex: 1;
//   min-width: 280px;
// `;

// const OrdersSection = styled.div`
//   flex: 2;
//   min-width: 500px;
// `;

// const Title = styled.h2`
//   font-size: 24px;
//   color: #ffcc00;
//   margin-bottom: 20px;
// `;

// const StyledTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   background: #1f2a40;
//   border-radius: 10px;
//   overflow: hidden;
//   color: #ffcc00;
//   text-align: center;

//   th, td {
//     padding: 12px;
//     border-bottom: 1px solid #ffcc00;
//   }

//   th {
//     background: #141e30;
//     font-size: 18px;
//   }

//   tr:hover {
//     background: rgba(255, 204, 0, 0.2);
//     transition: all 0.3s ease-in-out;
//   }
// `;

// const IconWrapper = styled.span`
//   font-size: 18px;
//   color: ${(props) => (props.success ? 'green' : 'red')};
// `;

// const DetailsButton = styled.button`
//   background: #ffcc00;
//   color: #141e30;
//   padding: 6px 12px;
//   border: none;
//   border-radius: 5px;
//   font-size: 14px;
//   cursor: pointer;
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     background: #e6b800;
//     transform: scale(1.05);
//   }
// `;

// const ProfilePage = () => {
//   const { data: orders, isLoading, error } = useGetMyOrdersQuery();

//   return (
//     <>
//       <Meta title="User Profile" />
//       <ProfileContainer>
//         <ProfileSection>
//           <Title>My Profile</Title>
//           <ProfileForm />
//         </ProfileSection>

//         <OrdersSection>
//           <Title>My Orders</Title>
//           {isLoading ? (
//             <Loader />
//           ) : error ? (
//             <Message variant="danger">{error?.data?.message || error.error}</Message>
//           ) : (
//             <StyledTable>
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>DATE</th>
//                   <th>TOTAL</th>
//                   <th>PAID</th>
//                   <th>DELIVERED</th>
//                   <th>DETAILS</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orders.map((order) => (
//                   <tr key={order._id}>
//                     <td>{order._id}</td>
//                     <td>{new Date(order.createdAt).toLocaleDateString()}</td>
//                     <td>{addCurrency(order.totalPrice)}</td>
//                     <td>
//                       <IconWrapper success={order.isPaid}>
//                         {order.isPaid ? <FaCheck /> : <FaXmark />}
//                       </IconWrapper>
//                     </td>
//                     <td>
//                       <IconWrapper success={order.isDelivered}>
//                         {order.isDelivered ? <FaCheck /> : <FaXmark />}
//                       </IconWrapper>
//                     </td>
//                     <td>
//                       <LinkContainer to={`/order/${order._id}`}>
//                         <DetailsButton>Details</DetailsButton>
//                       </LinkContainer>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </StyledTable>
//           )}
//         </OrdersSection>
//       </ProfileContainer>
//     </>
//   );
// };

// export default ProfilePage;
// import React from 'react';
// import { useGetMyOrdersQuery } from '../slices/ordersApiSlice';
// import { FaCheck, FaXmark } from 'react-icons/fa6';
// import { LinkContainer } from 'react-router-bootstrap';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import Meta from '../components/Meta';
// import ProfileForm from '../components/ProfileForm';
// import { addCurrency } from '../utils/addCurrency';
// import styled from 'styled-components';

// // Styled Components
// const PageWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background: #141e30;
//   min-height: 100vh;
//   padding: 30px 20px;
// `;

// const ProfileContainer = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   display: flex;
//   flex-wrap: wrap;
//   /* gap: 20px; */
//   background: #141e30;
//   border-radius: 10px;
//   padding: 30px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
//   color: #fff;
//   /* justify-content: center; */

//   @media (max-width: 1024px) {
//     flex-direction: column;
//     padding: 20px;
//   }
// `;

// const ProfileSection = styled.div`
//   flex: 1;
//   min-width: 300px;
//   max-width: 100%;
//   background: #1f2a40;
//   padding: 20px;
//   border-radius: 8px;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// const OrdersSection = styled.div`
//   flex: 2;
//   min-width: 300px;
//   max-width: 100%;
//   background: #1f2a40;
//   padding-top: 20px;
//   border-radius: 8px;
//   overflow-x: auto;

//   @media (max-width: 1024px) {
//     min-width: 100%;
//   }
// `;

// const Title = styled.h2`
//   font-size: 24px;
//   color: #fff;
//   margin-bottom: 20px;
//   text-align: center;

//   @media (max-width: 768px) {
//     font-size: 20px;
//   }
// `;

// const TableWrapper = styled.div`
//   width: 100%;
//   overflow-x: auto;
//   border-radius: 10px;
//   padding: 10px;
//   background: #141e30;
// `;

// const StyledTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   background: #1f2a40;
//   color: #fff;
//   text-align: center;
//   min-width: 600px; /* Ensures table does not shrink too much */

//   th, td {
//     padding: 12px;
//     border-bottom: 1px solid #ffcc00;
//   }

//   th {
//     background: #141e30;
//     font-size: 18px;
//   }

//   tr:hover {
//     background: rgba(255, 204, 0, 0.2);
//     transition: all 0.3s ease-in-out;
//   }

//   @media (max-width: 768px) {
//     th, td {
//       font-size: 14px;
//       padding: 10px;
//     }
//   }
// `;

// const IconWrapper = styled.span`
//   font-size: 18px;
//   color: ${(props) => (props.success ? 'green' : 'red')};
// `;

// const DetailsButton = styled.button`
//   background: #fff;
//   color: #141e30;
//   padding: 6px 12px;
//   border: none;
//   border-radius: 5px;
//   font-size: 14px;
//   cursor: pointer;
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     background: #e6b800;
//     transform: scale(1.05);
//   }
// `;

// const ProfilePage = () => {
//   const { data: orders, isLoading, error } = useGetMyOrdersQuery();

//   return (
//     <>
//       <Meta title="User Profile" />
//       <PageWrapper>
//         <ProfileContainer>
//           <ProfileSection>
//             <Title>My Profile</Title>
//             <ProfileForm />
//           </ProfileSection>

//           <OrdersSection>
//             <Title>My Orders</Title>
//             {isLoading ? (
//               <Loader />
//             ) : error ? (
//               <Message variant="danger">{error?.data?.message || error.error}</Message>
//             ) : (
//               <TableWrapper>
//                 <StyledTable>
//                   <thead>
//                     <tr>
//                       <th>ID</th>
//                       <th>DATE</th>
//                       <th>TOTAL</th>
//                       <th>PAID</th>
//                       <th>DELIVERED</th>
//                       <th>DETAILS</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {orders.map((order) => (
//                       <tr key={order._id}>
//                         <td>{order._id}</td>
//                         <td>{new Date(order.createdAt).toLocaleDateString()}</td>
//                         <td>{addCurrency(order.totalPrice)}</td>
//                         <td>
//                           <IconWrapper success={order.isPaid}>
//                             {order.isPaid ? <FaCheck /> : <FaXmark />}
//                           </IconWrapper>
//                         </td>
//                         <td>
//                           <IconWrapper success={order.isDelivered}>
//                             {order.isDelivered ? <FaCheck /> : <FaXmark />}
//                           </IconWrapper>
//                         </td>
//                         <td>
//                           <LinkContainer to={`/order/${order._id}`}>
//                             <DetailsButton>Details</DetailsButton>
//                           </LinkContainer>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </StyledTable>
//               </TableWrapper>
//             )}
//           </OrdersSection>
//         </ProfileContainer>
//       </PageWrapper>
//     </>
//   );
// };

// export default ProfilePage;
import React from 'react';
import { useGetMyOrdersQuery } from '../slices/ordersApiSlice';
import { FaCheck, FaXmark } from 'react-icons/fa6';
import { LinkContainer } from 'react-router-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';
import ProfileForm from '../components/ProfileForm';
import { addCurrency } from '../utils/addCurrency';
import styled from 'styled-components';

// Styled Components
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 40px 20px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ProfileSection = styled.div`
  width: 100%;
  padding: 30px;

`;

const OrdersSection = styled.div`
  width: 100%;
  padding: 30px;
  overflow-x: auto;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 10px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  min-width: 600px;

  th, td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
  }

  th {
    background: #f5f5f5;
    font-size: 18px;
  }

  tr:hover {
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    th, td {
      font-size: 14px;
      padding: 10px;
    }
  }
`;

const IconWrapper = styled.span`
  font-size: 18px;
  color: ${(props) => (props.success ? 'green' : 'red')};
`;

const DetailsButton = styled.button`
  background: #007bff;
  color: white;
  padding: 8px 14px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #0056b3;
    transform: scale(1.05);
  }
`;

const ProfilePage = () => {
  const { data: orders, isLoading, error } = useGetMyOrdersQuery();

  return (
    <>
      <Meta title="User Profile" />
      <PageWrapper>
        <ContentWrapper>
          {/* Profile Section */}
          <ProfileSection>
            <Title>My Profile</Title>
            <ProfileForm />
          </ProfileSection>

          {/* Orders Section */}
          <OrdersSection>
            <Title>My Orders</Title>
            {isLoading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error?.data?.message || error.error}</Message>
            ) : (
              <TableWrapper>
                <StyledTable>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>DATE</th>
                      <th>TOTAL</th>
                      <th>PAID</th>
                      <th>DELIVERED</th>
                      <th>DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                        <td>{addCurrency(order.totalPrice)}</td>
                        <td>
                          <IconWrapper success={order.isPaid}>
                            {order.isPaid ? <FaCheck /> : <FaXmark />}
                          </IconWrapper>
                        </td>
                        <td>
                          <IconWrapper success={order.isDelivered}>
                            {order.isDelivered ? <FaCheck /> : <FaXmark />}
                          </IconWrapper>
                        </td>
                        <td>
                          <LinkContainer to={`/order/${order._id}`}>
                            <DetailsButton>Details</DetailsButton>
                          </LinkContainer>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </StyledTable>
              </TableWrapper>
            )}
          </OrdersSection>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default ProfilePage;
