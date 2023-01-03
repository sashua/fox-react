import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Posts, Todos, Users } from 'types';
import { getRandomAvatar, getRandomPicture } from 'utils/images';

export const placeholderApi = createApi({
  reducerPath: 'placeholderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: builder => ({
    getPosts: builder.query<Posts, void>({
      query: () => 'posts',
      transformResponse: (posts: Posts) =>
        posts.map(post => ({
          ...post,
          image: getRandomPicture(post.id),
        })),
    }),

    getTodos: builder.query<Todos, void>({
      query: () => 'todos',
    }),

    getUsers: builder.query<Users, void>({
      query: () => 'users',
      transformResponse: (users: Users) =>
        users.map(user => ({
          ...user,
          avatar: getRandomAvatar(user.id),
        })),
    }),
  }),
});

export const { useGetPostsQuery, useGetTodosQuery, useGetUsersQuery } =
  placeholderApi;
