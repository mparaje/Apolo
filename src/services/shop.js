import { base_url } from "../database"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const shopApi = createApi({
    reducerPath:"shopApi",
    baseQuery:fetchBaseQuery({baseUrl:base_url}),
    endpoints:(builder)=> ({
        getProductsBySubcategory: builder.query({
            query: (subcategorySlug) => ({
                url: `products.json`,
                params: {
                    orderBy: '"subcategorySlug"',
                    equalTo: `"${subcategorySlug}"`
                }
            }),
            transformResponse: (response) => {
                if (!response) return [];
                
                // Transformar los datos para incluir ID
                return Object.entries(response).map(([key, value]) => ({
                    id: key, // Usar la key de Firebase como ID
                    ...value
                }));
            }
        }),
        getCategories:builder.query({
            query:() =>  "categories.json",
            transformResponse: (response) => {
                if (!response) return [];
                
                // Transformar categorías de la misma manera
                return Object.entries(response).map(([key, value]) => ({
                    id: key,
                    ...value
                }));
            }
        })
    })
})

export const { useGetProductsBySubcategoryQuery, useGetCategoriesQuery} = shopApi

//".read": "now < 1740798000000",  // 2025-3-1 ".write": "now < 1740798000000",  // 2025-3-1