import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import ScrollToTop from './components/ScrollTop';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='position-relative'>
      <ScrollToTop />
      <Header/>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <ToastContainer autoClose={1000} />
      <Footer/>
    </div>
  );
};

export default App;
