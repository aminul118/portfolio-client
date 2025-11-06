import { baseApi } from '@/redux/baseApi';

export const otpApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Send OTP
    sendOtp: builder.mutation({
      query: (userInfo) => ({
        url: '/otp/send',
        method: 'POST',
        data: userInfo,
      }),
    }),

    // Verify OTP
    verifyOtp: builder.mutation({
      query: (userInfo) => ({
        url: '/otp/verify',
        method: 'POST',
        data: userInfo,
      }),
    }),
  }),
});

export const { useSendOtpMutation, useVerifyOtpMutation } = otpApi;
