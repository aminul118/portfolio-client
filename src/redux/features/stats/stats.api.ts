import baseApi from '@/redux/baseApi';

const statsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // GET - Get User Stats
    getUserStats: builder.query({
      query: () => ({
        url: '/stats/user',
        method: 'GET',
      }),
    }),
    getTeamStats: builder.query({
      query: () => ({
        url: '/stats/team',
        method: 'GET',
      }),
    }),
    getEventStats: builder.query({
      query: () => ({
        url: '/stats/event',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetUserStatsQuery,
  useGetTeamStatsQuery,
  useGetEventStatsQuery,
} = statsApi;
