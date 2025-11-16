import { baseApi } from '@/redux/baseApi';
import { ApiResponse } from '@/types';
import { IUser } from '@/types/api.types';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Logged in User Info
    userInfo: builder.query({
      query: () => ({
        url: '/user/me',
        method: 'GET',
      }),
      providesTags: ['USER'],
    }),
    // All Registered User Info -> Only for admin
    allUsersInfo: builder.query<ApiResponse<IUser[]>, unknown>({
      query: (params) => ({
        url: '/user/all-users',
        method: 'GET',
        params,
      }),
      providesTags: ['USER'],
    }),
    // Update user-role -> Only Admin can change
    updateRole: builder.mutation({
      query: ({
        userInfo,
        id,
      }: {
        userInfo: { role: string };
        id: string;
      }) => ({
        url: `/user/update-role/${id}`,
        method: 'PATCH',
        data: userInfo,
      }),
      invalidatesTags: ['USER'],
    }),
  }),
});

export const { useUserInfoQuery, useAllUsersInfoQuery, useUpdateRoleMutation } =
  userApi;
