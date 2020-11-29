import * as productActions from './types';

export const saveProductsAction = (product) =>({
    type: productActions.SAVE_PRODUCTS,
    payload: product
});

export const getCurrentProductAction = (product) => ({
    type: productActions.GET_CURRENT_PRODUCT,
    payload: product
});
