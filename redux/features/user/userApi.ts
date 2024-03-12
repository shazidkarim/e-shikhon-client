import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) =>( {
        updateAvatar: builder.mutation({
            query: (avatar) => ({
                url: "update-user-avatar",
                method: "PUT",
                body:{ avatar },
            Credential:"incude" as const ,
            })
        }),
        editProfile: builder.mutation({
            query: ({name}) => ({
                url: "update-user-info",
                method: "PUT",
                body:{ name },
            Credential:"incude" as const ,
            })
        }),
        updatePassword: builder.mutation({
            query: ({oldPassword,newPassword}) => ({
                url: "update-user-password",
                method: "PUT",
                body:{ oldPassword,newPassword },
            Credential:"incude" as const ,
            })
        }),
        getAllUsers: builder.query({
            query: () => ({
                url: "get-users",
                method: "GET",
            Credential:"incude" as const ,
            })
        }),
    })
});

export const { useUpdateAvatarMutation,useEditProfileMutation,useUpdatePasswordMutation,useGetAllUsersQuery} = userApi;