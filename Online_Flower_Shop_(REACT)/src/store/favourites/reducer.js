import * as favouritesActions from './types';


const initialState = [];



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case favouritesActions.SAVE_FAVOURITES:
            return action.payload;

        case favouritesActions.ADD_CARD_TO_FAV:
            localStorage.setItem('favs', JSON.stringify( [...state, action.payload]));
            return  [...state, action.payload];

        case favouritesActions.REMOVE_CARD_FROM_FAV:
            localStorage.setItem('favs', JSON.stringify(state.filter(element => element.id !== action.payload.id)));
            return  state.filter(element => element.id !== action.payload.id);
        default:
            return state;
    }
};

export default reducer;