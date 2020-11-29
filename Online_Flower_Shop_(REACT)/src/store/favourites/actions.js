import * as favouritesActions from './types';


export const saveFavouritesAction = (fav) =>({
    type: favouritesActions.SAVE_FAVOURITES,
    payload: fav
});

export const addToFavAction = (product) => ({
    type: favouritesActions.ADD_CARD_TO_FAV,
    payload: product
});

export const removeFromFavAction = (product) =>({
    type: favouritesActions.REMOVE_CARD_FROM_FAV,
    payload: product
});