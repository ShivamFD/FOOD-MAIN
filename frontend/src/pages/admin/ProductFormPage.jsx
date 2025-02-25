  // import React, { useEffect, useState } from 'react';
  // import { Link, useNavigate, useParams } from 'react-router-dom';
  // import { Button, Form } from 'react-bootstrap';
  // import { toast } from 'react-toastify';
  // import {
  //   useCreateProductMutation,
  //   useGetProductDetailsQuery,
  //   useUpdateProductMutation,
  //   useUploadProductImageMutation
  // } from '../../slices/productsApiSlice';
  // import FormContainer from '../../components/FormContainer';
  // import Loader from '../../components/Loader';
  // import Message from '../../components/Message';
  // import Meta from '../../components/Meta';
  
  // const ProductFormPage = () => {
  //   const { id: productId } = useParams();
  
  //   const isUpdateMode = !!productId;
  
  //   const [name, setName] = useState('');
  //   const [image, setImage] = useState('');
  //   const [description, setDescription] = useState('');
  //   const [brand, setBrand] = useState('');
  //   const [category, setCategory] = useState('');
  //   const [price, setPrice] = useState(0);
  //   const [countInStock, setCountInStock] = useState(0);
  
  //   const categories = ['Mens Footwear', 'Womens Footwear', 'Kids Footwear', 'Sports Footwear'];
  //   const brands = ['Puma', 'Nike', 'Adidas', 'Croma', 'Campus'];
  
  //   const getProductQueryResult = useGetProductDetailsQuery(productId);
  
  //   const {
  //     data: product,
  //     isLoading,
  //     error
  //   } = isUpdateMode
  //     ? getProductQueryResult
  //     : { data: null, isLoading: false, error: null };
  
  //   const [createProduct, { isLoading: isCreateProductLoading }] =
  //     useCreateProductMutation();
  //   const [updateProduct, { isLoading: isUpdateProductLoading }] =
  //     useUpdateProductMutation();
  //   const [uploadProductImage, { isLoading: isUploadImageLoading }] =
  //     useUploadProductImageMutation();
  
  //   const navigate = useNavigate();
  
  //   useEffect(() => {
  //     if (isUpdateMode && product) {
  //       setName(product.name);
  //       setImage(product.image);
  //       setDescription(product.description);
  //       setBrand(product.brand);
  //       setCategory(product.category);
  //       setPrice(product.price);
  //       setCountInStock(product.countInStock);
  //     }
  //   }, [isUpdateMode, product]);
  
  //   const uploadFileHandler = async e => {
  //     const formData = new FormData();
  //     formData.append('image', e.target.files[0]);
  //     try {
  //       const res = await uploadProductImage(formData).unwrap();
  //       setImage(res.imageUrl);
  //       toast.success(res.message);
  //     } catch (error) {
  //       toast.error(error?.data?.message || error.error);
  //     }
  //   };
  
  //   const submitHandler = async e => {
  //     e.preventDefault();
  //     try {
  //       const productData = {
  //         name,
  //         image,
  //         description,
  //         brand,
  //         category,
  //         price,
  //         countInStock
  //       };
  //       if (isUpdateMode) {
  //         const { data } = await updateProduct({
  //           productId,
  //           ...productData
  //         });
  //         toast.success(data.message);
  //       } else {
  //         const { data } = await createProduct(productData);
  
  //         toast.success(data.message);
  //       }
  //       navigate('/admin/product-list');
  //     } catch (error) {
  //       toast.error(error?.data?.message || error.error);
  //     }
  //   };
  
  //   return (
  //     <>
  //       <Meta title={'Product Form'} />
  //       <Link to='/admin/product-list' className='btn btn-light my-3'>
  //         Go Back
  //       </Link>
  //       {(isUpdateProductLoading ||
  //         isCreateProductLoading ||
  //         isUploadImageLoading) && <Loader />}
  //       {isLoading ? (
  //         <Loader />
  //       ) : error ? (
  //         <Message variant='danger'>
  //           {error?.data?.message || error.error}
  //         </Message>
  //       ) : (
  //         <FormContainer>
  //           <Meta title={'Product Form'} />
  //           <h1>{isUpdateMode ? 'Update Product' : 'Create Product'}</h1>
  //           <Form onSubmit={submitHandler}>
  //             <Form.Group controlId='name'>
  //               <Form.Label>Name</Form.Label>
  //               <Form.Control
  //                 type='name'
  //                 placeholder='Enter name'
  //                 value={name}
  //                 onChange={e => setName(e.target.value)}
  //               ></Form.Control>
  //             </Form.Group>
  
  //             <Form.Group controlId='price'>
  //               <Form.Label>Price</Form.Label>
  //               <Form.Control
  //                 type='number'
  //                 placeholder='Enter price'
  //                 value={price}
  //                 onChange={e => setPrice(e.target.value)}
  //               ></Form.Control>
  //             </Form.Group>
  
  //             <Form.Group controlId='image'>
  //               <Form.Label>Image</Form.Label>
  //               <Form.Control
  //                 type='file'
  //                 onChange={uploadFileHandler}
  //               ></Form.Control>
  //             </Form.Group>
  
  //             <Form.Group controlId='brand'>
  //               <Form.Label>Brand</Form.Label>
  //               <Form.Control
  //                 as='select'
  //                 value={brand}
  //                 onChange={e => setBrand(e.target.value)}
  //               >
  //                 <option value=''>Select Brand</option>
  //                 {brands.map((brand, index) => (
  //                   <option key={index} value={brand}>
  //                     {brand}
  //                   </option>
  //                 ))}
  //               </Form.Control>
  //             </Form.Group>
  
  //             <Form.Group controlId='countInStock'>
  //               <Form.Label>Count In Stock</Form.Label>
  //               <Form.Control
  //                 type='number'
  //                 placeholder='Enter countInStock'
  //                 value={countInStock}
  //                 onChange={e => setCountInStock(e.target.value)}
  //               ></Form.Control>
  //             </Form.Group>
  
  //             <Form.Group controlId='category'>
  //               <Form.Label>Category</Form.Label>
  //               <Form.Control
  //                 as='select'
  //                 value={category}
  //                 onChange={e => setCategory(e.target.value)}
  //               >
  //                 <option value=''>Select Category</option>
  //                 {categories.map((category, index) => (
  //                   <option key={index} value={category}>
  //                     {category}
  //                   </option>
  //                 ))}
  //               </Form.Control>
  //             </Form.Group>
  
  //             <Form.Group controlId='description'>
  //               <Form.Label>Description</Form.Label>
  //               <Form.Control
  //                 as='textarea'
  //                 rows={3}
  //                 type='text'
  //                 placeholder='Enter description'
  //                 value={description}
  //                 onChange={e => setDescription(e.target.value)}
  //               ></Form.Control>
  //             </Form.Group>
  
  //             <Button
  //               type='submit'
  //               variant='primary'
  //               style={{ marginTop: '1rem' }}
  //             >
  //               {isUpdateMode ? 'Update Product' : 'Create Product'}
  //             </Button>
  //           </Form>
  //         </FormContainer>
  //       )}
  //     </>
  //   );
  // };
  
  // export default ProductFormPage;
  import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import {
  useCreateProductMutation,
  useGetProductDetailsQuery,
  useUpdateProductMutation,
  useUploadProductImageMutation
} from '../../slices/productsApiSlice';
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
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [countInStock, setCountInStock] = useState(0);

  const categories = ['Mens Footwear', 'Womens Footwear', 'Kids Footwear', 'Sports Footwear'];
  const brands = ['Puma', 'Nike', 'Adidas', 'Croma', 'Campus'];

  const getProductQueryResult = useGetProductDetailsQuery(productId);

  const {
    data: product,
    isLoading,
    error
  } = isUpdateMode
    ? getProductQueryResult
    : { data: null, isLoading: false, error: null };

  const [createProduct, { isLoading: isCreateProductLoading }] =
    useCreateProductMutation();
  const [updateProduct, { isLoading: isUpdateProductLoading }] =
    useUpdateProductMutation();
  const [uploadProductImage, { isLoading: isUploadImageLoading }] =
    useUploadProductImageMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (isUpdateMode && product) {
      setName(product.name);
      setImage(product.image);
      setDescription(product.description);
      setBrand(product.brand);
      setCategory(product.category);
      setPrice(product.price);
      setCountInStock(product.countInStock);
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

  const submitHandler = async e => {
    e.preventDefault();

    // 🔥 Validate price (it should not be empty or negative)
    if (price === '' || Number(price) < 0) {
      toast.error('Price must be 0 or higher.');
      return;
    }

    try {
      const productData = {
        name,
        image,
        description,
        brand,
        category,
        price: Number(price), // Convert string to number
        countInStock
      };
      if (isUpdateMode) {
        const { data } = await updateProduct({
          productId,
          ...productData
        });
        toast.success(data.message);
      } else {
        const { data } = await createProduct(productData);
        toast.success(data.message);
      }
      navigate('/admin/product-list');
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <>
      <Meta title={'Product Form'} />
      <Link to='/admin/product-list' className='btn btn-light my-3'>
        Go Back
      </Link>
      {(isUpdateProductLoading ||
        isCreateProductLoading ||
        isUploadImageLoading) && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <FormContainer>
          <Meta title={'Product Form'} />
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

            <Form.Group controlId='brand'>
              <Form.Label>Brand</Form.Label>
              <Form.Control
                as='select'
                value={brand}
                onChange={e => setBrand(e.target.value)}
              >
                <option value=''>Select Brand</option>
                {brands.map((brand, index) => (
                  <option key={index} value={brand}>
                    {brand}
                  </option>
                ))}
              </Form.Control>
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

            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                as='select'
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value=''>Select Category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
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
