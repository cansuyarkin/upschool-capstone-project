const USER_LOGIN = "USER_LOGIN";
const USER_LOGOUT = "USER_LOGOUT";


export const userLogin = (username, password) => {
    return {
        type: USER_LOGIN,
        payload: { username, password }
    };
};

export const userLogout = () => {
    return {
        type: USER_LOGOUT,
    }
};

const initialState = 
    {
        avatarUrl: "https://i.picsum.photos/id/1005/150/150.jpg?hmac=-Q1z4K5WO9Q7qDB-R9vrj9440_mRxpeHZMOFHblbB6s",
        username: "username",
        password: "password",
        socials: {
            twitter: "https://twitter.com/",
            instagram: "https://www.instagram.com/"
        },
        seenList: {
            seenFilms: [],
            totalCount: 0
        },
        favorites: {
            favoriteFilms: [],
            totalCount: 0
        },
        joinDate: "December 2021",
        userLogin: false,
    }



const userReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case USER_LOGIN:
            console.log("action",action)
            return action.payload.username === state.username && action.payload.password === state.password && { ...state, userLogin: true }
            
        case USER_LOGOUT:
            return { ...state, userLogin: false }
        default:
            return state
    }
};

export default userReducer;

