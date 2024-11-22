import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

const baseQuery = fetchBaseQuery({ // fetchBaseQuery is a function that returns a baseQuery object
  baseUrl: BASE_URL,
});

//Redux docs



//By default, RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically 
//handles request headers and response parsing in a manner similar to common libraries like axios.


export const apiSlice = createApi({ // createApi is a function that returns an API object
  baseQuery,
  tagTypes: ['Product', 'Order', 'User'], // tagTypes is an array of strings that define the types of entities that can be cached
  endpoints: (builder) => ({}), // endpoints is a function that returns an object
});
//createApi is the core ....allows you to define a set of "endpoints" that describe 
//how to retrieve data from backend APIs and other async sources, including the configuration of how to fetch 
//and transform that data. It generates an "API slice" structure that contains Redux logic (and optionally React hooks) 
//that encapsulate the data fetching and caching process for you.
//TaTypes are like labels attached to cached data that help decide if the data should be affected by a mutation. 