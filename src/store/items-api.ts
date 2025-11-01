import {
  type BaseQueryFn,
  createApi,
  type EndpointBuilder,
  type FetchArgs,
  fetchBaseQuery,
  type FetchBaseQueryError,
  type FetchBaseQueryMeta
} from '@reduxjs/toolkit/query/react';

import { Item, ItemFormData } from '@types/item';

export const itemsApi = createApi({
  reducerPath: 'itemsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
    prepareHeaders: (headers: Headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('X-Requested-With', 'XMLHttpRequest');
      return headers;
    }
  }),
  tagTypes: ['items'],
  endpoints: (builder:  EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta>, "items", "itemsApi">) => ({
    getItems: builder.query<Item[], void>({
      query: () => '',
      providesTags: ['items']
    }),
    createItem: builder.mutation<Item, ItemFormData>({
      query: (itemData) => ({
        url: '',
        method: 'POST',
        body: {
          ...itemData
        },
      }),
      invalidatesTags: ['items'],
    }),
    updateItem: builder.mutation<Item, { id: string; data: ItemFormData }>({
      query: ({id, data}) => ({
        url: `/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'items', id },
        'items',
      ],
    }),
    deleteItem: builder.mutation<void, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['items'],
    }),
  })
})

export const {
  useGetItemsQuery,
  useCreateItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = itemsApi;
