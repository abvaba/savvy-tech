declare const initialState: {
    id: string;
    title: string;
    subTitle: string;
};
declare const formSlice: import("@reduxjs/toolkit").Slice<{
    id: string;
    title: string;
    subTitle: string;
}, {
    resetFormData: () => {
        id: string;
        title: string;
        subTitle: string;
    };
    setFormData: (state: import("immer").WritableDraft<{
        id: string;
        title: string;
        subTitle: string;
    }>, action: {
        payload: any;
        type: string;
    }) => void;
}, "form", "form", import("@reduxjs/toolkit").SliceSelectors<{
    id: string;
    title: string;
    subTitle: string;
}>>;
export declare const resetFormData: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"form/resetFormData">, setFormData: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "form/setFormData">;
declare const formSelector: (state: {
    form: typeof initialState;
}) => {
    id: string;
    title: string;
    subTitle: string;
};
export { formSlice, formSelector };
