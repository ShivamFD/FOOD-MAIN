// import React from 'react';
// import { Card } from 'react-bootstrap';
// import {
//   Bar,
//   BarChart,
//   CartesianGrid,
//   Legend,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   Tooltip
// } from 'recharts';

// const OrderPriceChart = ({ orders }) => {
//   return (
//     <Card className='mb-3 py-3 px-2 rounded text-center'>
//       <Card.Title>Order Price Chart</Card.Title>
//       <ResponsiveContainer width='100%' height={350}>
//         <BarChart
//           data={orders}
//           margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
//         >
//           <CartesianGrid strokeDasharray='3 3' />
//           <XAxis />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar
//             type='monotone'
//             dataKey='itemsPrice'
//             fill='#7AC6E1'
//             activeDot={{ r: 8 }}
//           />
//           <Bar
//             type='monotone'
//             dataKey='taxPrice'
//             fill='#EB6F80'
//             activeDot={{ r: 8 }}
//           />
//           <Bar
//             type='monotone'
//             dataKey='totalPrice'
//             fill='#FFD949'
//             activeDot={{ r: 8 }}
//           />
//         </BarChart>
//       </ResponsiveContainer>
//     </Card>
//   );
// };

// export default OrderPriceChart;
// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
// import styled from 'styled-components';
// import { FaChartBar } from 'react-icons/fa';

// // Styled Components
// const ChartContainer = styled.div`
//   background: linear-gradient(135deg, #1e3c72, #2a5298);
//   color: white;
//   border-radius: 12px;
//   padding: 20px;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   text-align: center;
//   margin-top: 2rem;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
//   }
// `;

// const ChartTitle = styled.h3`
//   font-size: 20px;
//   font-weight: bold;
//   margin-bottom: 15px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 10px;

//   svg {
//     color: #ffd700;
//     font-size: 24px;
//   }
// `;

// const OrderPriceChart = ({ orders }) => {
//   return (
//     <ChartContainer>
//       <ChartTitle>
//         <FaChartBar /> Order Price Chart
//       </ChartTitle>
//       <ResponsiveContainer width="100%" height={350}>
//         <BarChart data={orders} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="itemsPrice" fill="#7AC6E1" />
//           <Bar dataKey="taxPrice" fill="#EB6F80" />
//           <Bar dataKey="totalPrice" fill="#FFD949" />
//         </BarChart>
//       </ResponsiveContainer>
//     </ChartContainer>
//   );
// };

// export default OrderPriceChart;
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import { FaChartBar } from 'react-icons/fa';

// Styled Components
const ChartContainer = styled.div`
  background: #fff;
  color: #d44802;
  border-radius: 12px;
  border: 0.7px solid #d44802;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(207, 111, 66, 0.955);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  margin-top: 2rem;
  max-width: 600px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 10px 16px 30px #ff6347;

  }
`;

const ChartTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    color: #ffd700;
    font-size: 24px;
  }
`;

const OrderPriceChart = ({ orders }) => {
  return (
    <ChartContainer>
      <ChartTitle>
        <FaChartBar /> Order Price Chart
      </ChartTitle>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={orders} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="itemsPrice" fill="#ffcc00" />
          <Bar dataKey="taxPrice" fill="#ff5733" />
          <Bar dataKey="totalPrice" fill="#33ff57" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default OrderPriceChart;
