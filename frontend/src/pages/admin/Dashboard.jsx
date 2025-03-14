// import React from 'react';
// import { Row, Col, Card } from 'react-bootstrap';
// import { FaStore, FaUsers, FaShoppingBag, FaWallet } from 'react-icons/fa';

// import { useGetProductsQuery } from '../../slices/productsApiSlice';
// import { useGetUsersQuery } from '../../slices/usersApiSlice';
// import { useGetOrdersQuery } from '../../slices/ordersApiSlice';

// import { addCurrency } from '../../utils/addCurrency';

// import Loader from '../../components/Loader';
// import Meta from '../../components/Meta';
// import ProductPriceChart from '../../components/Admin/ProductPriceChart';
// import OrderPriceChart from '../../components/Admin/OrderPriceChart';
// import DashboardCard from '../../components/Admin/DashboardCard';

// const Dashboard = () => {
//   const { data, isLoading } = useGetProductsQuery({});
//   const { data: users, isLoading: isUsersLoading } = useGetUsersQuery({});
//   const { data: orders, isLoading: isOrdersLoading } = useGetOrdersQuery({});

//   return (
//     <>
//       {isLoading || isUsersLoading || isOrdersLoading ? (
//         <Loader />
//       ) : (
//         <>
//           <Row>
//             <Meta title={'Admin Dashboard'} />
//             <Col md={6} lg={3} className='position-relative'>
//               <DashboardCard
//                 title={'Products'}
//                 icon={<FaStore size={40} />}
//                 value={data?.total}
//                 bgColor={'bg-info'}
//               />
//             </Col>
//             <Col md={6} lg={3} className='position-relative'>
//               <DashboardCard
//                 title={'Users'}
//                 icon={<FaUsers size={40} />}
//                 value={users?.length}
//                 bgColor={'bg-danger'}
//               />
//             </Col>
//             <Col md={6} lg={3} className='position-relative'>
//               <DashboardCard
//                 title={'Orders'}
//                 icon={<FaShoppingBag size={40} />}
//                 value={orders?.length}
//                 bgColor={'bg-warning'}
//               />
//             </Col>
//             <Col md={6} lg={3} className='position-relative'>
//               <DashboardCard
//                 title={'Revenue'}
//                 icon={<FaWallet size={40} />}
//                 value={addCurrency(
//                   orders?.reduce((acc, item) => acc + item.totalPrice, 0)
//                 )}
//                 bgColor={'bg-success'}
//               />
//             </Col>
//           </Row>

//           <Row>
//             <Col md={12} lg={6}>
//               <ProductPriceChart products={data?.products} />
//             </Col>
//             <Col md={12} lg={6}>
//               <OrderPriceChart orders={orders} />
//             </Col>
//           </Row>
//         </>
//       )}
//     </>
//   );
// };

// // export default Dashboard;import React from 'react';
// import { FaStore, FaUsers, FaShoppingBag, FaWallet } from 'react-icons/fa';
// import styled from 'styled-components';

// import { useGetProductsQuery } from '../../slices/productsApiSlice';
// import { useGetUsersQuery } from '../../slices/usersApiSlice';
// import { useGetOrdersQuery } from '../../slices/ordersApiSlice';

// import { addCurrency } from '../../utils/addCurrency';

// import Loader from '../../components/Loader';
// import Meta from '../../components/Meta';
// import ProductPriceChart from '../../components/Admin/ProductPriceChart';
// import OrderPriceChart from '../../components/Admin/OrderPriceChart';
// import DashboardCard from '../../components/Admin/DashboardCard';

// // Styled Components
// const DashboardContainer = styled.div`
//   padding: 20px;
//   background: linear-gradient(135deg, #141e30, #243b55);
//   min-height: 100vh;
//   color: white;
//   padding-left: 5rem;
// `;

// const CardsRow = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 20px;
//   margin-bottom: 20px;
// `;

// const ChartRow = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 20px;
// `;

// // Dashboard Component
// const Dashboard = () => {
//   const { data, isLoading } = useGetProductsQuery({});
//   const { data: users, isLoading: isUsersLoading } = useGetUsersQuery({});
//   const { data: orders, isLoading: isOrdersLoading } = useGetOrdersQuery({});

//   return (
//     <DashboardContainer>
//       {isLoading || isUsersLoading || isOrdersLoading ? (
//         <Loader />
//       ) : (
//         <>
//           <Meta title={'Admin Dashboard'} />
//           <CardsRow>
//             <DashboardCard
//               title={'Products'}
//               icon={<FaStore size={40} />}
//               value={data?.total}
//             />
//             <DashboardCard
//               title={'Users'}
//               icon={<FaUsers size={40} />}
//               value={users?.length}
//             />
//             <DashboardCard
//               title={'Orders'}
//               icon={<FaShoppingBag size={40} />}
//               value={orders?.length}
//             />
//             <DashboardCard
//               title={'Revenue'}
//               icon={<FaWallet size={40} />}
//               value={addCurrency(
//                 orders?.reduce((acc, item) => acc + item.totalPrice, 0)
//               )}
//             />
//           </CardsRow>

//           <ChartRow>
//             <ProductPriceChart products={data?.products} />
//             <OrderPriceChart orders={orders} />
//           </ChartRow>
//         </>
//       )}
//     </DashboardContainer>
//   );
// };

// export default Dashboard;




import { FaStore, FaUsers, FaShoppingBag, FaWallet } from 'react-icons/fa';
import styled from 'styled-components';

import { useGetProductsQuery } from '../../slices/productsApiSlice';
import { useGetUsersQuery } from '../../slices/usersApiSlice';
import { useGetOrdersQuery } from '../../slices/ordersApiSlice';

import { addCurrency } from '../../utils/addCurrency';

import Loader from '../../components/Loader';
import Meta from '../../components/Meta';
import ProductPriceChart from '../../components/Admin/ProductPriceChart';
import OrderPriceChart from '../../components/Admin/OrderPriceChart';
import DashboardCard from '../../components/Admin/DashboardCard';

// Styled Components
const DashboardContainer = styled.div`
  padding: 20px;
  background: #f2f2f2; /* Light Grey Background */
  min-height: 100vh;
  color: #333333; /* Dark Charcoal Text Color */
  padding-left: 5rem;
`;

const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
`;

const ChartRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

// Updated Dashboard Card styles with your color theme
const DashboardCardContainer = styled.div`
  background-color: #ffffff;  /* White background for cards */
  color: #333333;  /* Dark Charcoal Text */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .icon {
    color: #e7400d;  /* Primary Color for Icons */
    font-size: 40px;
  }

  .value {
    font-size: 24px;
    font-weight: bold;
  }

  .title {
    font-size: 18px;
    font-weight: 600;
  }

  /* Hover effect for card */
  &:hover {
    /* background-color: #ff7f32; Accent Color on Hover */
    background: #ff63479a;
    color: #ffffff;
    box-shadow: -22px 16px 30px #d46855;

  }
`;

const Dashboard = () => {
  const { data, isLoading } = useGetProductsQuery({});
  const { data: users, isLoading: isUsersLoading } = useGetUsersQuery({});
  const { data: orders, isLoading: isOrdersLoading } = useGetOrdersQuery({});

  return (
    <DashboardContainer>
      {isLoading || isUsersLoading || isOrdersLoading ? (
        <Loader />
      ) : (
        <>
          <Meta title={'Admin Dashboard'} />
          <CardsRow>
            <DashboardCardContainer>
              <div>
                <div className="icon">
                  <FaStore />
                </div>
                <div className="title">Products</div>
              </div>
              <div className="value">{data?.total}</div>
            </DashboardCardContainer>
            <DashboardCardContainer>
              <div>
                <div className="icon">
                  <FaUsers />
                </div>
                <div className="title">Users</div>
              </div>
              <div className="value">{users?.length}</div>
            </DashboardCardContainer>
            <DashboardCardContainer>
              <div>
                <div className="icon">
                  <FaShoppingBag />
                </div>
                <div className="title">Orders</div>
              </div>
              <div className="value">{orders?.length}</div>
            </DashboardCardContainer>
            <DashboardCardContainer>
              <div>
                <div className="icon">
                  <FaWallet />
                </div>
                <div className="title">Revenue</div>
              </div>
              <div className="value">
                {addCurrency(
                  orders?.reduce((acc, item) => acc + item.totalPrice, 0)
                )}
              </div>
            </DashboardCardContainer>
          </CardsRow>

          <ChartRow>
            <ProductPriceChart products={data?.products} />
            <OrderPriceChart orders={orders} />
          </ChartRow>
        </>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
