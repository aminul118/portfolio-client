import baseApi from '@/redux/baseApi';
import { ApiResponse, IProject } from '@/types';

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // POST - Add Regular Event
    addProject: builder.mutation({
      query: (payload) => ({
        url: '/projects',
        method: 'POST',
        data: payload,
      }),
      invalidatesTags: ['PROJECT'],
    }),

    // GET - Get All Upcoming Events
    getAllProjects: builder.query<ApiResponse<IProject[]>, unknown>({
      query: (params) => ({
        url: '/projects',
        method: 'GET',
        params,
      }),
      providesTags: ['PROJECT'],
    }),

    // DELETE - Delete Upcoming Event
    deleteSingleProject: builder.mutation({
      query: (slug) => ({
        url: `/projects/${slug}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['PROJECT'],
    }),
  }),
});

export const {
  useAddProjectMutation,
  useGetAllProjectsQuery,
  useDeleteSingleProjectMutation,
} = projectApi;
