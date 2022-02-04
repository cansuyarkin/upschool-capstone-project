// const ADD_FAV = "ADD_FAV";
// const REMOVE_FAV = "REMOVE_FAV";

// export const addFav = (id) => {
//     return {
//         type: ADD_FAV,
//         payload: id,
//     }
// };

// export const removeFav = (id) => {
//     return {
//         type: REMOVE_FAV,
//         payload: id,
//     }
// };

// const favReducer = (favorites = {
//     favoriteFilms: [],
//     totalCount: 0,
// }, action) => {
//     switch (action.type) {
//         case ADD_FAV:
//             return { ...favorites, favoriteFilms: [...favorites.favoriteFilms, action.payload], totalCount: [...favorites.favoriteFilms].length + 1 }
//         case REMOVE_FAV:
//             return {
//                 ...favorites, favoriteFilms: [favorites?.favoriteFilms?.filter(item =>
//                     item.id !== action.payload)],
//                 totalCount: [...favorites.favoriteFilms].length - 1
//             }
//         default:
//             return favorites;
//     }
// };

// export default favReducer;