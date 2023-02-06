import {movies} from '../movies';
const REMOVE_FAV='Favorilerden Kaldır';
const ADD_FAVORITIES='Favorilere ekle';

const initialState={
    movies:movies,
    favorites:[]
};
const reducer = (state=initialState,action)=>{
    switch(action.type) {
        case ADD_FAVORITIES:
            let newMovie = action.payload;
            if (state.favorites.every((movie)=>movie.id===newMovie.id));
 return{
    ...state,
    favorites:[...state.favorites,newMovie],

 };     
       const newMovies=[...state.movies,newMovie];
        return {
            ...state,
            movies:newMovie,
        };
        default:
        return state;

            }
        };
        export default reducer;
    
