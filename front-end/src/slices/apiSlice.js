import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

const baseQuery = fetchBaseQuery({ // fetchBaseQuery is a function that returns a baseQuery object
  baseUrl: BASE_URL,
});




export const apiSlice = createApi({ // createApi is a function that returns an API object
  baseQuery,
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: (builder) => ({}), // endpoints is a function that returns an object
});