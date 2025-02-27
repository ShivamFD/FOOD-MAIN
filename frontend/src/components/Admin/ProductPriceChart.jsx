// import React from 'react';
// import { Card } from 'react-bootstrap';
// import {
//   Area,
//   AreaChart,
//   CartesianGrid,
//   Legend,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   Tooltip
// } from 'recharts';

// const ProductPriceChart = ({ products }) => {
//   return (
//     <Card className='mb-3 py-3 px-2 rounded text-center'>
//       <Card.Title>Product Price Chart</Card.Title>
//       <ResponsiveContainer width='100%' height={350}>
//         <AreaChart
//           data={products}
//           margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
//         >
//           <CartesianGrid strokeDasharray='3 3' />
//           <XAxis />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Area
//             type='monotone'
//             dataKey='price'
//             stroke='#54B4D3'
//             fill='#0DCAF0'
//             activeDot={{ r: 8 }}
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     </Card>
//   );
// };

// export default ProductPriceChart;
// import React from 'react';
// import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
// import styled from 'styled-components';
// import { FaChartArea } from 'react-icons/fa';

// // Styled Components
// const ChartContainer = styled.div`
//   background: linear-gradient(135deg, #232526, #414345);
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
//     color: #0dcaf0;
//     font-size: 24px;
//   }
// `;

// const ProductPriceChart = ({ products }) => {
//   return (
//     <ChartContainer>
//       <ChartTitle>
//         <FaChartArea /> Product Price Chart
//       </ChartTitle>
//       <ResponsiveContainer width="100%" height={350}>
//         <AreaChart data={products} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Area type="monotone" dataKey="price" stroke="#54B4D3" fill="#0DCAF0" />
//         </AreaChart>
//       </ResponsiveContainer>
//     </ChartContainer>
//   );
// };

// export default ProductPriceChart;
// // 
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import { FaChartArea } from 'react-icons/fa';

// Styled Components
const ChartContainer = styled.div`
  background: white;
  color: #d94f05;
  border-radius: 12px;
  border: 0.7px solid #d44802;
  padding: 20px;
  box-shadow: 0px 4px 8px #ff6347;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  margin-top: 2rem;
  max-width: 600px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: -22px 16px 30px #d46855;
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

const ProductPriceChart = ({ products }) => {
  return (
    <ChartContainer>
      <ChartTitle>
        <FaChartArea /> Product Price Chart
      </ChartTitle>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={products} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="price" stroke="#ff5733" fill="#ffcc00" />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default ProductPriceChart;
