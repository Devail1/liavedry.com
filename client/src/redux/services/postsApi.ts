import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API}/api` }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "posts",
      providesTags: (result) =>
        result ? [...result.map(({ id }) => ({ type: "Posts", id })), "Posts"] : ["Posts"],
    }),
    getPostBySlug: builder.query({
      query: (slug) => `posts/${slug}`,
    }),
    createPost: builder.mutation({
      query: (postData) => ({
        url: "posts",
        method: "POST",
        body: postData,
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePost: builder.mutation({
      query: ({ id, data }) => ({
        url: `posts/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ({ id }) => [{ type: "Posts", id }],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ({ id }) => [{ type: "Posts", id }],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostBySlugQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  util: { getRunningQueriesThunk },
} = postsApi;

export const { getAllPosts, getPostBySlug } = postsApi.endpoints;
