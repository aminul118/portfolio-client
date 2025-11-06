import { baseApi } from '@/redux/baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //  Login
    login: builder.mutation({
      query: (userInfo) => ({
        url: '/auth/login',
        method: 'POST',
        data: userInfo,
      }),
      invalidatesTags: ['USER'],
    }),

    // Log out
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['USER'],
    }),

    // Registration using register form
    register: builder.mutation({
      query: (userInfo) => ({
        url: '/user/register',
        method: 'POST',
        data: userInfo,
      }),
      invalidatesTags: ['USER'],
    }),

    // Registration form admin portal
    registerForAdmin: builder.mutation({
      query: (userInfo) => ({
        url: '/user/admin/register',
        method: 'POST',
        data: userInfo,
      }),
      invalidatesTags: ['USER'],
    }),

    // Forgot Password
    forgotPassword: builder.mutation({
      query: (payload) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        data: payload,
      }),
      invalidatesTags: ['USER'],
    }),

    // Reset Password
    resetPassword: builder.mutation({
      query: (payload) => ({
        url: '/auth/reset-password',
        method: 'POST',
        data: payload,
        headers: {
          Authorization: `${payload.token}`,
        },
      }),
      invalidatesTags: ['USER'],
    }),
    // Change Password
    changePassword: builder.mutation({
      query: (payload) => ({
        url: '/auth/change-password',
        method: 'POST',
        data: payload,
      }),
      invalidatesTags: ['USER'],
    }),

    // set Password
    setPassword: builder.mutation({
      query: (payload) => ({
        url: '/auth/set-password',
        method: 'POST',
        data: payload,
      }),
      invalidatesTags: ['USER'],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useRegisterForAdminMutation,
  useResetPasswordMutation,
  useSetPasswordMutation,
  useForgotPasswordMutation,
  useLogoutMutation,
  useChangePasswordMutation,
} = authApi;
