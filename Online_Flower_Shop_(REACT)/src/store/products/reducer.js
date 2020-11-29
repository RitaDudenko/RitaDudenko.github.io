import * as productActions from './types';



const initialState = {
    products : [],
    currentProduct: null,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case productActions.SAVE_PRODUCTS:
            return { ...state, products: action.payload};

        case productActions.GET_CURRENT_PRODUCT:
            return { ...state, currentProduct: action.payload };
        default:
            return state;
    }
};

export default reducer;