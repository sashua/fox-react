import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post, Posts, Todo, Todos, User, Users } from 'types';
import { getRandomAvatar, getRandomPicture } from 'utils/images';

type TagType = 'Post' | 'Todo' | 'User';

export const placeholderApi = createApi({
  reducerPath: 'placeholderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Post', 'Todo', 'Users'] as TagType[],

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
        providesTags: ['Post'],
      }),

      addPost: builder.mutation<Post, Omit<Post, 'id'>>({
        query: newPost => ({
          url: 'posts',
          method: 'POST',
          body: newPost,
        }),
        onQueryStarted: (_, { dispatch, queryFulfilled }) => {
          // perform an pessimistic cache update
          queryFulfilled.then(({ data: newPost }) => {
            dispatch(
              placeholderApi.util.updateQueryData(
                'getPosts',
                undefined,
                draftPosts => [
                  { ...newPost, image: getRandomPicture(newPost.id) },
                  ...draftPosts,
                ]
              )
            );
          });
        },
      }),

      // --- Todos endpoints ---
      getTodos: builder.query<Todos, void>({
        query: () => 'todos',
        providesTags: ['Todo'],
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
        providesTags: result =>
          result
            ? result.map(user => ({ type: 'User' as const, id: user.id }))
            : ['User'],
      }),

      getUser: builder.query<User, User['id']>({
        query: id => `users/${id}`,
        transformResponse: (user: User) => ({
          ...user,
          avatar: getRandomAvatar(user.id),
        }),
        providesTags: result =>
          result ? [{ type: 'User' as const, id: result.id }] : ['User'],
      }),
    };
  },
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useGetUsersQuery,
  useGetUserQuery,
} = placeholderApi;
