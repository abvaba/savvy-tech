export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    modal: {
        open: boolean;
        title: string;
    };
    form: {
        id: string;
        title: string;
        subTitle: string;
    };
    itemsApi: import("@reduxjs/toolkit/query").CombinedState<{
        getItems: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, object, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "items", import("../types").Item[], "itemsApi", unknown>;
        createItem: import("@reduxjs/toolkit/query").MutationDefinition<import("../types").ItemFormData, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, object, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "items", import("../types").Item, "itemsApi", unknown>;
        updateItem: import("@reduxjs/toolkit/query").MutationDefinition<{
            id: string;
            data: import("../types").ItemFormData;
        }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, object, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "items", import("../types").Item, "itemsApi", unknown>;
        deleteItem: import("@reduxjs/toolkit/query").MutationDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, object, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "items", void, "itemsApi", unknown>;
    }, "items", "itemsApi">;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        modal: {
            open: boolean;
            title: string;
        };
        form: {
            id: string;
            title: string;
            subTitle: string;
        };
        itemsApi: import("@reduxjs/toolkit/query").CombinedState<{
            getItems: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, object, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "items", import("../types").Item[], "itemsApi", unknown>;
            createItem: import("@reduxjs/toolkit/query").MutationDefinition<import("../types").ItemFormData, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, object, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "items", import("../types").Item, "itemsApi", unknown>;
            updateItem: import("@reduxjs/toolkit/query").MutationDefinition<{
                id: string;
                data: import("../types").ItemFormData;
            }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, object, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "items", import("../types").Item, "itemsApi", unknown>;
            deleteItem: import("@reduxjs/toolkit/query").MutationDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, object, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "items", void, "itemsApi", unknown>;
        }, "items", "itemsApi">;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
