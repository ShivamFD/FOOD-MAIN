

import React, { useEffect, useState } from 'react';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { toast } from 'react-toastify';
import { FaRupeeSign, FaTrash, FaEdit } from 'react-icons/fa';
import { useGetProductsQuery, useDeleteProductMutation } from '../../slices/productsApiSlice';
import Loader from '../../components/Loader';
import Paginate from '../../components/Paginate';
import Message from '../../components/Message';
import Meta from '../../components/Meta';
import { addCurrency } from '../../utils/addCurrency';

const ProductListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(100); // Proper limit set to 100 or other value
  const [totalPage, setTotalPage] = useState(0);
  const [total, setTotal] = useState(0);

  const skip = (currentPage - 1) * limit; // Correct skip calculation

  // Fetching products with limit and skip
  const { data, isLoading, error } = useGetProductsQuery({ limit, skip });

  const [deleteProduct, { isLoading: isDeleteProductLoading }] = useDeleteProductMutation();

  useEffect(() => {
    if (data?.total) {
      console.log("✅ Total Products from API:", data.total);
      setTotal(data.total);

      const calculatedTotalPages = Math.ceil(data.total / limit);
      console.log("✅ Calculated Total Pages:", calculatedTotalPages);

      // Set total page if data is valid
      if (calculatedTotalPages > 0) {
        setTotalPage(calculatedTotalPages);
      }
    }
  }, [data, limit]);

  const deleteHandler = async (productId) => {
    try {
      const { data } = await deleteProduct(productId);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  const pageHandler = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPage && pageNum !== currentPage) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <>
      <div style={{paddingLeft:'3rem'}}>
      <Row className='align-items-center'>
        <Col>
          <Meta title={'Product List'} />
          <h1>Products</h1>
        </Col>
        <Col className='text-end'>
          <LinkContainer to={'/admin/product/create'}>
            <Button className='my-3' variant='warning'>Add Product</Button>
          </LinkContainer>
        </Col>
      </Row>
      {isDeleteProductLoading && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Table striped hover bordered responsive size='sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>MENU</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {data?.products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{addCurrency(product.price)}</td>
                  <td>{product.menu?.name || 'No menu assigned'}</td> {/* Displaying menu name */}
                  <td>
                    <LinkContainer to={`/admin/product/update/${product._id}`}>
                      <Button className='btn-sm' variant='light'>
                        <FaEdit />
                      </Button>
                    </LinkContainer>

                    <Button
                      className='btn-sm'
                      variant='light'
                      onClick={() => deleteHandler(product._id)}
                    >
                      <FaTrash style={{ color: 'red' }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Ensure pagination is shown only if `totalPage > 1` */}
          {totalPage > 1 && (
            <Paginate currentPage={currentPage} totalPage={totalPage} pageHandler={pageHandler} />
          )}
        </>
      )}
      </div>
    </>
  );
};

export default ProductListPage;

