import * as cartListActions from './types';

export const changeQuantityAction = (product) => ({
    type: cartListActions.CHANGE_QUANTITY,
    payload: product
});

export const addToCartAction = (product) => ({
    type:cartListActions.ADD_PRODUCT_TO_CART,
    payload: product
});

export const removeFromCartAction = (product) =>({
    type: cartListActions.REMOVE_FROM_CART,
    payload: product
});

export const saveCartListAction = (product) => ({
    type: cartListActions.SAVE_CARTLIST,
    payload: product
});

export const doShoppingAction = () => ({
    type: cartListActions.DO_SHOPPING
});
