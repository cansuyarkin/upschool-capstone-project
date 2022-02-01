const TIMEWINDOW = "TIMEWINDOW";

export const timewindowChange = (value) => {
    return {
        type: TIMEWINDOW,
        payload: value,
    }
};

const trendingReducer = (trendingValue = "today", action) => {
    switch (action.type) {
        case TIMEWINDOW:
            return action.payload;
        default:
            return trendingValue;
    }
};

export default trendingReducer;