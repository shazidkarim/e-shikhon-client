
import { apiSlice } from "../api/apiSlice";

export const notificationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllNotifications: builder.query({
      query: () => ({
        url: "get-all-notifications",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    undateNotificationStatus: builder.mutation({
      query: (id) => ({
        url: `/update-notification/${id}`,
        method: "PUT",
        credentials: "include" as const,
      }),
    }),
  }),
});


export const {useGetAllNotificationsQuery,useUndateNotificationStatusMutation} = notificationApi;