// // import React from 'react';
// // import { Container, Row, Col } from 'react-bootstrap';

// // const Footer = () => {
// //   const currentYear = new Date().getFullYear();
// //   return (
// //     <Container>
// //       <Row>
// //         <Col className='text-center py-3'>MERN Shop &copy; {currentYear}</Col>
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default Footer;
// import React from 'react';
// import styled from 'styled-components';
// const FooterWrapper = styled.footer`
//    background: #ff5722;
//    color: #fff;
//   padding: 20px 0;
//   text-align: center;
// `;

// const FooterContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;
// `;

// const FooterLogo = styled.div`
//   img {
//     width: 150px;
//   }
// `;

// const FooterLinks = styled.div`
//   ul {
//     list-style: none;
//     padding: 0;
//   }

//   ul li {
//     display: inline-block;
//     margin-right: 15px;
//   }

//   ul li a {
//     color: white;
//     text-decoration: none;
//     font-size: 14px;
//   }

//   ul li a:hover {
//     text-decoration: underline;
//   }
// `;

// const FooterSocial = styled.div`
//   a {
//     margin: 0 10px;
//     color: white;
//     text-decoration: none;
//     font-size: 14px;
//   }

//   a:hover {
//     color: #f39c12;
//   }
// `;

// const FooterCredit = styled.p`
//   margin-top: 20px;
//   font-size: 14px;
// `;


// const Footer = () => {
//   return (
//     <FooterWrapper>
//       <FooterContainer>
//         <FooterLogo>
//           <img src="logo.png" alt="Food Website Logo" />
//         </FooterLogo>
//         <FooterLinks>
//           <ul>
//             <li><a href="/about">About Us</a></li>
//             <li><a href="/contact">Contact</a></li>
//             <li><a href="/privacy">Privacy Policy</a></li>
//             <li><a href="/terms">Terms and Conditions</a></li>
//             <li><a href="/services">Services</a></li>
//             <li><a href="/faq">FAQs</a></li>
//             <li><a href="/delivery">Delivery Information</a></li>
//           </ul>
//         </FooterLinks>
//         <FooterSocial>
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
//         </FooterSocial>
//       </FooterContainer>
//       <FooterCredit>© 2025 Food Website. All Rights Reserved.</FooterCredit>
//     </FooterWrapper>
//   );
// };

// export default Footer;
// import React from 'react';
// import styled from 'styled-components';
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing React Icons
// import AboutUsPage from '../pages/AboutUsPage';

// const FooterWrapper = styled.footer`
//    background: #e7400d;
//    color: #fff;
//    font-weight: bold;
//     font-size: 18px;
//    padding: 20px 0;
//    text-align: center;
// `;

// const FooterContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;
// `;

// const FooterLogo = styled.div`
//   img {
//     width: 150px;
//   }
// `;

// const FooterLinks = styled.div`
//   ul {
//     list-style: none;
//     padding: 0;
//   }

//   ul li {
//     display: inline-block;
//     margin-right: 15px;
//   }

//   ul li a {
//     color: white;
//     text-decoration: none;
//     font-size: 14px;
//   }

//   ul li a:hover {
//     text-decoration: underline;
//     color: #ffe1009a;
//   }
// `;

// const FooterSocial = styled.div`
//   a {
//     margin: 0 10px;
//     color: white;
//     text-decoration: none;
//     font-size: 24px; /* Larger icons */
//   }

//   a:hover {
//     color: #f39c12;
//   }

//   /* Adding a smooth transition for hover effect */
//   a {
//     transition: color 0.3s ease;
//   }
// `;

// const FooterCredit = styled.p`
//   margin-top: 20px;
//   font-size: 14px;
// `;

// const Footer = () => {
//   return (
//     <FooterWrapper>
//       <FooterContainer>
//         <FooterLogo>
//           <img src="logo.png" alt="Food Website Logo" />
//         </FooterLogo>
//         <FooterLinks>
//           <ul>
//             <li><a href=" AboutUsPage">About Us</a></li>
//             <li><a href="/privacy">Privacy Policy</a></li>
//             <li><a href="/terms">Terms and Conditions</a></li>
//             <li><a href="/services">Services</a></li>
//             <li><a href="/faq">FAQs</a></li>
//             <li><a href="/delivery">Delivery Information</a></li>
//           </ul>
//         </FooterLinks>
//         <FooterSocial>
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//             <FaFacebook /> {/* Facebook Icon */}
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//             <FaTwitter /> {/* Twitter Icon */}
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//             <FaInstagram /> {/* Instagram Icon */}
//           </a>
//         </FooterSocial>
//       </FooterContainer>
//       <FooterCredit>© 2025 Food Website. All Rights Reserved.</FooterCredit>
//     </FooterWrapper>
//   );
// };

// export default Footer;
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing React Icons
import { Link } from 'react-router-dom'; // React Router's Link component

const FooterWrapper = styled.footer`
   background: #e7400d;
   color: #fff;
   font-weight: bold;
   font-size: 18px;
   padding: 20px 0;
   text-align: center;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterLogo = styled.div`
  img {
    width: 150px;
  }
`;

const FooterLinks = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    display: inline-block;
    margin-right: 15px;
  }

  ul li a {
    color: white;
    text-decoration: none;
    font-size: 14px;
  }

  ul li a:hover {
    text-decoration: underline;
    color: #ffe1009a;
  }
`;

const FooterSocial = styled.div`
  a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
    font-size: 24px; /* Larger icons */
  }

  a:hover {
    color: #f39c12;
  }

  /* Adding a smooth transition for hover effect */
  a {
    transition: color 0.3s ease;
  }
`;

const FooterCredit = styled.p`
  margin-top: 20px;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLogo>
          <img src="logo.png" alt="Food Website Logo" />
        </FooterLogo>
        <FooterLinks>
          <ul>
            {/* Footer Links updated to use React Router Link */}
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms and Conditions</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/delivery">Delivery Information</Link></li>
          </ul>
        </FooterLinks>
        <FooterSocial>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook /> {/* Facebook Icon */}
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter /> {/* Twitter Icon */}
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> {/* Instagram Icon */}
          </a>
        </FooterSocial>
      </FooterContainer>
      <FooterCredit>© 2025 Food Website. All Rights Reserved.</FooterCredit>
    </FooterWrapper>
  );
};

export default Footer;
