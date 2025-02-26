import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useCreateProductMutation, useGetProductDetailsQuery, useUpdateProductMutation, useUploadProductImageMutation, useGetMenusQuery } from '../../slices/productsApiSlice';
import FormContainer from '../../components/FormContainer';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import Meta from '../../components/Meta';

const ProductFormPage = () => {
  const { id: productId } = useParams();

  const isUpdateMode = !!productId;

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [menuId, setMenuId] = useState(''); // State for menu selection

  const { data: product, isLoading: isProductLoading, error: productError } = useGetProductDetailsQuery(productId, { skip: !isUpdateMode });
  const { data: menus, isLoading: isMenusLoading, error: menusError } = useGetMenusQuery(); // Fetch menus

  const [createProduct, { isLoading: isCreateProductLoading }] = useCreateProductMutation();
  const [updateProduct, { isLoading: isUpdateProductLoading }] = useUpdateProductMutation();
  const [uploadProductImage, { isLoading: isUploadImageLoading }] = useUploadProductImageMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (isUpdateMode && product) {
      setName(product.name);
      setImage(product.image);
      setDescription(product.description);
      setPrice(product.price);
      setCountInStock(product.countInStock);
      setMenuId(product.menu._id); // Set the selected menu on update
    }
  }, [isUpdateMode, product]);

  const uploadFileHandler = async e => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    try {
      const res = await uploadProductImage(formData).unwrap();
      setImage(res.imageUrl);
      toast.success(res.message);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
  
    if (price === "" || Number(price) < 0) {
      toast.error("Price must be 0 or higher.");
      return;
    }
  
    const productData = {
      name,
      image,
      description,
      price: Number(price),
      countInStock,
      menuId: menuId || null,
    };
  
    console.log("Submitting Product Data:", productData); // Debugging
  
    try {
      if (isUpdateMode) {
        const { data } = await updateProduct({ productId, ...productData });
        console.log("Update Response:", data);
        toast.success(data.message);
      } else {
        const { data } = await createProduct(productData);
        console.log("Create Response:", data);
        toast.success(data.message);
      }
      navigate("/admin/product-list");
    } catch (error) {
      console.error("Product Save Error:", error);
      toast.error(error?.data?.message || error.error);
    }
  };
  

  return (
    <>
      <Meta title={isUpdateMode ? 'Update Product' : 'Create Product'} />
      <Link to='/admin/product-list' className='btn btn-light my-3'>
        Go Back
      </Link>
      {(isCreateProductLoading || isUpdateProductLoading || isUploadImageLoading) && <Loader />}
      {isProductLoading ? (
        <Loader />
      ) : productError ? (
        <Message variant='danger'>{productError?.data?.message || productError.error}</Message>
      ) : (
        <FormContainer>
          <h1>{isUpdateMode ? 'Update Product' : 'Create Product'}</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter name'
                value={name}
                onChange={e => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                min="0"
                onChange={e => {
                  const value = e.target.value;
                  if (value === '' || Number(value) >= 0) {
                    setPrice(value); // Allows clearing and entering new values
                  }
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='file'
                onChange={uploadFileHandler}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='countInStock'>
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter count in stock'
                value={countInStock}
                onChange={e => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            {/* Menu Selection */}
            <Form.Group controlId='menuId'>
              <Form.Label>Menu</Form.Label>
              <Form.Control
                as='select'
                value={menuId}
                onChange={e => setMenuId(e.target.value)}
              >
                <option value=''>Select Menu</option>
                {menus && menus.map((menu) => (
                  <option key={menu._id} value={menu._id}>
                    {menu.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='Enter description'
                value={description}
                onChange={e => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button
              type='submit'
              variant='primary'
              style={{ marginTop: '1rem' }}
            >
              {isUpdateMode ? 'Update Product' : 'Create Product'}
            </Button>
          </Form>
        </FormContainer>
      )}
    </>
  );
};

export default ProductFormPage;
