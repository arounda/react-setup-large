// import { parseQueryParams } from '@/utils/helpers';

import { api } from './api';

export const extendApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getServiceData: builder.query({
      query: (query) => {
        // const queryParams = parseQueryParams(query); // parse query objects
        return `/starships/${query}`;
      },
    }),
    postData: builder.mutation({
      query: () => ({
        url: `/service`,
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetServiceDataQuery, usePostDataMutation } = extendApiSlice;
