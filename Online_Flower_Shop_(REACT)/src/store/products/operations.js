import {saveProductsAction, getCurrentProductAction} from './actions';
import axios from "axios";


export const saveProductsOperation = () => (dispatch) => {
    axios('/products.json')
        .then(res => {
            dispatch(saveProductsAction(res.data));
        });
};

export const getCurrentProductOperation = (product) => (dispatch) => {
    dispatch(getCurrentProductAction(product));

};