import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Albums, Post, Posts, Todo, Todos, User, Users } from 'types';
import { getRandomAvatar, getRandomPicture } from 'utils/images';

export const placeholderApi = createApi({
  reducerPath: 'placeholderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),

  endpoints: builder => {
    return {
      // ---- Albums endpoints ----
      getUserAlbums: builder.query<Albums, User['id']>({
        query: id => `users/${id}/albums`,
        transformResponse: (albums: Albums) =>
          albums.map(album => ({
            ...album,
            image: getRandomPicture(album.title),
          })),
      }),

      // ---- Posts endpoints ----
      getPosts: builder.query<Posts, void>({
        query: () => 'posts',
        transformResponse: (posts: Posts) =>
          posts.map(post => ({
            ...post,
            image: getRandomPicture(post.title),
          })),
      }),

      getUserPosts: builder.query<Posts, User['id']>({
        query: id => `users/${id}/posts`,
        transformResponse: (posts: Posts) =>
          posts.map(post => ({
            ...post,
            image: getRandomPicture(post.title),
          })),
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
                  { ...newPost, image: getRandomPicture(newPost.title) },
                  ...draftPosts,
                ]
              )
            );
            dispatch(
              placeholderApi.util.updateQueryData(
                'getUserPosts',
                newPost.userId,
                draftPosts => [
                  { ...newPost, image: getRandomPicture(newPost.title) },
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
      }),

      getUserTodos: builder.query<Todos, User['id']>({
        query: id => `users/${id}/todos`,
      }),

      updateTodo: builder.mutation<
        Todo,
        Partial<Todo> & Pick<Todo, 'id' | 'userId'>
      >({
        query: ({ id, userId, ...patch }) => ({
          url: `todos/${id}`,
          method: 'PATCH',
          body: patch,
        }),
        onQueryStarted: (
          { id, userId, ...patch },
          { dispatch, queryFulfilled }
        ) => {
          // perform an optimistic cache update
          const patchAllResult = dispatch(
            placeholderApi.util.updateQueryData(
              'getTodos',
              undefined,
              draftTodos =>
                draftTodos.map(todo =>
                  todo.id === id ? { ...todo, ...patch } : todo
                )
            )
          );
          const patchUserResult = dispatch(
            placeholderApi.util.updateQueryData(
              'getUserTodos',
              userId,
              draftTodos =>
                draftTodos.map(todo =>
                  todo.id === id ? { ...todo, ...patch } : todo
                )
            )
          );
          queryFulfilled.catch(() => {
            patchAllResult.undo();
            patchUserResult.undo();
          });
        },
      }),

      deleteTodo: builder.mutation<Todo, Pick<Todo, 'id' | 'userId'>>({
        query: ({ id }) => ({
          url: `todos/${id}`,
          method: 'DELETE',
        }),
        onQueryStarted: ({ id, userId }, { dispatch, queryFulfilled }) => {
          // perform an optimistic cache update
          const patchAllResult = dispatch(
            placeholderApi.util.updateQueryData(
              'getTodos',
              undefined,
              draftTodos => draftTodos.filter(todo => todo.id !== id)
            )
          );
          const patchUserResult = dispatch(
            placeholderApi.util.updateQueryData(
              'getUserTodos',
              userId,
              draftTodos => draftTodos.filter(todo => todo.id !== id)
            )
          );
          queryFulfilled.catch(() => {
            patchAllResult.undo();
            patchUserResult.undo();
          });
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

      getUser: builder.query<User, User['id']>({
        query: id => `users/${id}`,
        transformResponse: (user: User) => ({
          ...user,
          avatar: getRandomAvatar(user.id),
        }),
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
  useGetUserAlbumsQuery,
  useGetUserPostsQuery,
  useGetUserTodosQuery,
} = placeholderApi;
