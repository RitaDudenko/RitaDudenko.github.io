import * as modalActions from './types';

const initialState = {
    modalOpen: false,
    cartModalOpen: false,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case modalActions.OPEN_MODAL:
            return { ...state, modalOpen: true };

        case modalActions.CLOSE_MODAL:
            return { ...state, modalOpen: false };

        case modalActions.OPEN_MODAL_CART:
            return { ...state, cartModalOpen: true };

        case modalActions.CLOSE_MODAL_CART:
            return { ...state, cartModalOpen: false };

        default:
            return state;
    }
};

export default reducer;