import {changeQuantityAction, addToCartAction, removeFromCartAction, saveCartListAction, doShoppingAction} from './actions';


export const changeQuantityOperation = (product) => (dispatch) => {
     dispatch (changeQuantityAction(product));
};

export const addToCartOperation = (product) => (dispatch) => {
     dispatch (addToCartAction(product));
};

export const removeFromCartOperation = (product) => (dispatch) => {
     dispatch (removeFromCartAction(product));
};

export const saveCartListOperation = (product) => (dispatch) => {
     dispatch (saveCartListAction(product));
};

export const doShoppingOperation = () => (dispatch) => {
     dispatch (doShoppingAction());
};