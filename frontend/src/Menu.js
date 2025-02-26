import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';

const App = () => {
  return (
    <div className='position-relative'>
      <Header/>
      <main>
        <Container>
          <Outlet />
          <Menu />
        </Container>
      </main>
      <Footer />
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default App;
