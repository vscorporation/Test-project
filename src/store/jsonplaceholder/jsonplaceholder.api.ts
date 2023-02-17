import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IAlbums, IPosts, IUsers} from "../../models/models";

export const jsonplaceholderApi = createApi({
    reducerPath: 'jsonplaceholder/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: build => ({
        searchUsers: build.query<IUsers[], string>({
            query: (search:string) => ({
                url: 'users'
            })
        }),
        searchAlbums: build.query<IAlbums[], number>({
            query: (search:number) => ({
                url: 'albums',
                params:{
                    userId: search
                }
            })
        }),
        searchPosts: build.query<IPosts[], string>({
            query: (search:string) => ({
                url: 'posts',
                params:{
                    userId: search
                }
            })
        }),

    })

})

export const {useSearchUsersQuery, useSearchAlbumsQuery, useSearchPostsQuery} = jsonplaceholderApi