import baseApi from '@/redux/baseApi';

const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // POST - Add Regular Event
    createContact: builder.mutation({
      query: (payload) => ({
        url: '/contact/create',
        method: 'POST',
        data: payload,
      }),
      invalidatesTags: ['CONTACT'],
    }),
  }),
});

export const { useCreateContactMutation } = contactApi;
