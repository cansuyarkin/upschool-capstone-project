const USER_LOGIN = "USER_LOGIN";
const USER_LOGOUT = "USER_LOGOUT";
const ADD_SEEN_MOVIES = "ADD_SEEN_MOVIES"
const ADD_FAV_MOVIES = "ADD_FAV_MOVIES"

export const userLogin = (username, password) => ({
    type: USER_LOGIN,
    payload: { username, password }
});

export const userLogout = () => ({
    type: USER_LOGOUT,
});

export const addSeenList = (id) => ({
    type: ADD_SEEN_MOVIES,
    payload: id
})

export const addFavList = (id) => ({
    type: ADD_FAV_MOVIES,
    payload: id
})

const initialState = {
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


            return action.payload.username === state.username && action.payload.password === state.password ? { ...state, userLogin: true } : { ...state, userLogin: false }
           
        case USER_LOGOUT:
            return { ...state, userLogin: false }

            case ADD_FAV_MOVIES:
                return !state.favorites.favoriteFilms?.includes(action.payload) ?
                    { ...state, favorites: { favoriteFilms: [...state.favorites.favoriteFilms, action.payload], totalCount: state.favorites.totalCount + 1 } } :
                    { ...state, favorites: { favoriteFilms: state.favorites.favoriteFilms?.filter(item => item !== action.payload), totalCount: state.favorites.totalCount - 1 } }
            case ADD_SEEN_MOVIES:
                return !state.seenList.seenFilms.includes(action.payload) ?
                    { ...state, seenList: { seenFilms: [...state.seenList.seenFilms, action.payload], totalCount: state.seenList.totalCount + 1 } } :
                    { ...state, seenList: { seenFilms: state.seenList.seenFilms?.filter(item => item !== action.payload), totalCount: state.seenList.totalCount - 1 } }

        default:
            return state
    }
};

export default userReducer;

