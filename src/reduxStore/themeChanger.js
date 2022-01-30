const THEMECHANGE = "THEMECHANGE";

export const themeChange = (themeChanged) => {
    return {
        type: THEMECHANGE,
        payload: themeChanged,
    }
};

const themeChangeReducer = (theme = true, action) => {
    switch (action.type) {
        case THEMECHANGE: 
            return !action.payload
        default:
            return theme
    }
};

export default themeChangeReducer;