// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["products", "users", "orders"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: () => ({}),
});
