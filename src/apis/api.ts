import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getCookies } from '@/cookies';

const token = getCookies('bearerToken');

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      return headers.set('Authorization', `Bearer ${token}`);
    },
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => {
        return `${import.meta.env.VITE_API_URL}`;
      },
    }),
  }),
});

export const { useGetDataQuery } = api;
