"use client "
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
 
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    devTools: false,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})


// ======> gpt codde <==== //

// import { configureStore } from "@reduxjs/toolkit";
// import { authApi } from "./features/auth/authApi"; 
// import { apiSlice } from "./features/api/apiSlice";

// export const store = configureStore({
//     reducer: {
//         [apiSlice.reducerPath]: apiSlice.reducer,
//         [authApi.reducerPath]: authApi.reducer,
//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware), 
//     devTools: false,
// });

// // call the refresh token function on every page load

// const initializeApp = async () => {
//     await store.dispatch(apiSlice.endpoints.refreshToken.initiate({},{forceRefetch:true}))
//     await store.dispatch(apiSlice.endpoints.loadUser.initiate({},{forceRefetch:true}))
// }
// initializeApp();

