import {closeModalAction, closeModalCartAction, openModalAction, openModalCartAction} from './actions';


export const closeModalOperation = () => (dispatch) => {
    dispatch(closeModalAction());
};

export const openModalOperation = () => (dispatch) => {
    dispatch(openModalAction());
};

export const closeModalCartOperation = () => (dispatch) => {
    dispatch(closeModalCartAction());
};

export const openModalCartOperation = () => (dispatch) => {
    dispatch(openModalCartAction());
};