import baseApi from '@/redux/baseApi';
import { ApiResponse, IBlog } from '@/types';

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // POST - Add Regular Event
    addBlog: builder.mutation({
      query: (eventInfo) => ({
        url: '/blog/create',
        method: 'POST',
        data: eventInfo,
      }),
      invalidatesTags: ['BLOG'],
    }),

    // GET - Get All Events
    getAllBlogs: builder.query<ApiResponse<IBlog[]>, Record<string, string>>({
      query: (params) => ({
        url: '/blog/get-all',
        method: 'GET',
        params,
      }),
      providesTags: ['BLOG'],
    }),

    // DELETE - Delete Upcoming Event
    deleteBlog: builder.mutation({
      query: (slug) => ({
        url: `/blog/${slug}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['BLOG'],
    }),
  }),
});

export const {
  useAddBlogMutation,
  useGetAllBlogsQuery,
  useDeleteBlogMutation,
} = blogApi;
