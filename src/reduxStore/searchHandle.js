const SEARCH = "SEARCH";

export const searchHandle = (value) => {
    return {
        type: SEARCH,
        payload: value,
    };
};

const searchReducer = (value = "", action) => {
    switch (action.type) {
        case SEARCH:
            return action.payload;
        default:
            return value;
    };
};

export default searchReducer;