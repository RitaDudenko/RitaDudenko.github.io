import * as modalActions from './types';


export const closeModalAction = () => ({
    type: modalActions.CLOSE_MODAL
});

export const openModalAction = () => ({
        type: modalActions.OPEN_MODAL
});

export const closeModalCartAction = () => ({
    type: modalActions.CLOSE_MODAL_CART
});

export const openModalCartAction = () => ({
    type: modalActions.OPEN_MODAL_CART
});