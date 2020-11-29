import * as cartListActions from './types';

const initialState = [];


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case cartListActions.SAVE_CARTLIST:
            return  action.payload;

        case cartListActions.DO_SHOPPING:
            localStorage.setItem('cartList', JSON.stringify([]));
            return [];

        case cartListActions.CHANGE_QUANTITY:
            localStorage.setItem('cartList', JSON.stringify(state
                .map(obj => obj.id === action.payload.id ? {...obj, quantity : action.payload.quantity} : obj )));
            return  state.map(obj => obj.id === action.payload.id ? {...obj, quantity : action.payload.quantity} : obj);

        case cartListActions.ADD_PRODUCT_TO_CART:
            localStorage.setItem('cartList', JSON.stringify([...state, action.payload]));
            return [...state, action.payload];

        case cartListActions.REMOVE_FROM_CART:
            localStorage.setItem('cartList', JSON.stringify(state.filter(item => item.id !== action.payload.id)));
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
};

export default reducer;