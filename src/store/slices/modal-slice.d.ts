declare const initialState: {
    open: boolean;
    title: string;
};
declare const modalSlice: import("@reduxjs/toolkit").Slice<{
    open: boolean;
    title: string;
}, {
    closeModal: () => {
        open: boolean;
        title: string;
    };
    openModal: (state: import("immer").WritableDraft<{
        open: boolean;
        title: string;
    }>, action: {
        payload: any;
        type: string;
    }) => void;
}, "modal", "modal", import("@reduxjs/toolkit").SliceSelectors<{
    open: boolean;
    title: string;
}>>;
export declare const closeModal: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"modal/closeModal">, openModal: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "modal/openModal">;
declare const modalSelector: (state: {
    modal: typeof initialState;
}) => {
    open: boolean;
    title: string;
};
export { modalSlice, modalSelector };
