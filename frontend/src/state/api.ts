import { createApi } from "@reduxjs/toolkit/query/react";

import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
    reducerPath: "api",
    tagTypes: [],
    endpoints: (build) => ({}),
});

export const {} = api; 