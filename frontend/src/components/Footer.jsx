// import React from 'react';
// import styled from 'styled-components';
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing React Icons
// import { Link } from 'react-router-dom'; // React Router's Link component
// import Logo from '../assets/FooterLogo.png'

// const FooterWrapper = styled.footer`
//    background: #e7400d;
//    color: #fff;
//    font-weight: bold;
//    font-size: 18px;
//    padding: 20px 0;
//    text-align: center;
//    height: 14rem;
// `;

// const FooterContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;
//   height: 14rem;
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
//           <img src={Logo} alt="Food Website Logo" />
//           <p>Foodie</p>
//         </FooterLogo>
//         <FooterLinks>
//           <ul>
//             {/* Footer Links updated to use React Router Link */}
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/privacy">Privacy Policy</Link></li>
//             <li><Link to="/terms">Terms and Conditions</Link></li>
//             <li><Link to="/services">Services</Link></li>
//             <li><Link to="/faq">FAQs</Link></li>
//             <li><Link to="/delivery">Delivery Information</Link></li>
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
import Logo from '../assets/FooterLogo.png'

const FooterWrapper = styled.footer`
   background: #e7400d;
   color: #fff;
   font-weight: bold;
   font-size: 18px;
   padding: 20px 0;
   text-align: center;
   height: 12rem; /* Reduced height */
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  flex-wrap: wrap; /* Allow items to wrap on small screens */
  justify-content: space-around; /* Spread items across the space */
`;

const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 120px; /* Reduced logo size */
  }
  p {
    margin-top: 5px;
    font-size: 20px; /* Font size for the website name */
  }
`;

const FooterLinks = styled.div`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap; /* Allow links to wrap */
    justify-content: center; /* Center the links */
    margin: 0;
  }

  ul li {
    display: inline-block;
    margin-right: 15px;
    margin-bottom: 10px; /* Space between links */
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
  display: flex;
  justify-content: center;
  margin-top: 10px;

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
  margin-top: 10px;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLogo>
          <img src={Logo} alt="Food Website Logo" />
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
