import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Posts, Todo, Todos, Users } from 'types';
import { getRandomAvatar, getRandomPicture } from 'utils/images';

export const placeholderApi = createApi({
  reducerPath: 'placeholderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),

  endpoints: builder => {
    return {
      // ---- Posts endpoints ----
      getPosts: builder.query<Posts, void>({
        query: () => 'posts',
        transformResponse: (posts: Posts) =>
          posts.map(post => ({
            ...post,
            image: getRandomPicture(post.id),
          })),
      }),

      // ---- Todos endpoints ----
      getTodos: builder.query<Todos, void>({
        query: () => 'todos',
      }),

      updateTodo: builder.mutation<Todo, Partial<Todo> & Pick<Todo, 'id'>>({
        query: ({ id, ...patch }) => ({
          url: `todos/${id}`,
          method: 'PATCH',
          body: patch,
        }),
        onQueryStarted: ({ id, ...patch }, { dispatch, queryFulfilled }) => {
          // perform an optimistic cache update
          const patchResult = dispatch(
            placeholderApi.util.updateQueryData(
              'getTodos',
              undefined,
              draftTodos =>
                draftTodos.map(todo =>
                  todo.id === id ? { ...todo, ...patch } : todo
                )
            )
          );
          queryFulfilled.catch(patchResult.undo);
        },
      }),

      deleteTodo: builder.mutation<Todo, Todo['id']>({
        query: id => ({
          url: `todos/${id}`,
          method: 'DELETE',
        }),
        onQueryStarted: (id, { dispatch, queryFulfilled }) => {
          // perform an optimistic cache update
          const patchResult = dispatch(
            placeholderApi.util.updateQueryData(
              'getTodos',
              undefined,
              draftTodos => draftTodos.filter(todo => todo.id !== id)
            )
          );
          queryFulfilled.catch(patchResult.undo);
        },
      }),

      // ---- Users endpoints ----
      getUsers: builder.query<Users, void>({
        query: () => 'users',
        transformResponse: (users: Users) =>
          users.map(user => ({
            ...user,
            avatar: getRandomAvatar(user.id),
          })),
      }),
    };
  },
});

export const {
  useGetPostsQuery,
  useGetTodosQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useGetUsersQuery,
} = placeholderApi;
