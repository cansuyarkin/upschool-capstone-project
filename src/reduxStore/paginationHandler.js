const PAGINATION = "PAGINATION";

export const paginationHandler = (currentPage, perPage) => {
    return {
        type: PAGINATION,
        payload: {currentPage, perPage},
    }
};

const paginationReducer = (currentPage = 1, action) => {
    switch (action.type) {
        case PAGINATION:
            return action.payload.currentPage * action.payload.perPage;
        default:
            return currentPage;
    }
};

export default paginationReducer;

