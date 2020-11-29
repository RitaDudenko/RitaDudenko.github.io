import {saveFavouritesAction, addToFavAction, removeFromFavAction} from './actions';


export const saveFavouritesOperation = (fav) => (dispatch) =>{
    dispatch(saveFavouritesAction(fav));
};

export const addToFavOperation = (product) => (dispatch) =>{
    dispatch(addToFavAction(product));
};

export const removeFromFavOperation = (product) => (dispatch) =>{
    dispatch(removeFromFavAction(product));
};

