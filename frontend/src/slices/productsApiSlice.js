

import { PRODUCTS_URL, UPLOAD_URL , MENU_URL} from '../constants';
import { apiSlice } from './apiSlice';

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ limit, skip, search }) => ({
        url: PRODUCTS_URL,
        params: { limit, skip, search }
      }),
      providesTags: ['Product']
    }),
    getTopProducts: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}/top`
      }),
      providesTags: ['Product']
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`
      }),
      providesTags: ['Product']
    }),

    getMenus: builder.query({
      query: () => ({
        url: MENU_URL,  // Using the MENU_URL constant
      }),
     
      providesTags: ['Menu'],  // If you want to use caching and invalidation for menu data
   
    }),

    createProduct: builder.mutation({
      query: (productData) => ({
        url: PRODUCTS_URL,
        method: 'POST',
        body: productData
      }),
      invalidatesTags: ['Product']
    }),
    updateProduct: builder.mutation({
      query: ({ productId, ...productData }) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: 'PUT',
        body: productData
      }),
      invalidatesTags: ['Product']
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Product']
    }),
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: UPLOAD_URL,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Product']
    }),
    createProductReview: builder.mutation({
      // query: ({ productId, ...reviewData }) => ({
      query: ({ productId, rating, comment }) => ({
        // url: `${PRODUCTS_URL}/${productId}/review`, // ✅ FIXED URL
        url: `${PRODUCTS_URL}/${productId}/review`, // ✅ Corrected API URL
        method: 'POST',
        body: { rating, comment },
        headers: (headers) => {
          headers.set("Content-Type", "application/json");
          headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
          return headers;
        },
      }),
      invalidatesTags: ['Product']
    })
  })
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUploadProductImageMutation,
  useUpdateProductMutation,
  useCreateProductReviewMutation,
  useGetTopProductsQuery,
  useGetMenusQuery
} = productApiSlice;
