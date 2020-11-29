import {combineReducers} from "redux";
import cartList from './cartList/reducer';
import favourites from './favourites/reducer';
import modal from './modal/reducer';
import products from './products/reducer';


const rootReducer = combineReducers({
    cartList,
    favourites,
    modal,
    products,
});


export default rootReducer;