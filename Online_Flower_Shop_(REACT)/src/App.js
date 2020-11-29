import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import Modal from "./components/Modal";
import Footer  from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import {connect} from 'react-redux';
import {changeQuantityOperation, addToCartOperation, removeFromCartOperation, saveCartListOperation} from './store/cartList/operations';
import {saveFavouritesOperation} from './store/favourites/operations';
import {closeModalOperation, closeModalCartOperation} from './store/modal/operations';
import {saveProductsOperation} from './store/products/operations';

const App = ({cartList, products, modal, saveProducts, saveFavourites, saveCartList, closeModal, closeModalCart,
                 addProductToCart, addQuantity, removeFromCart}) => {

    const {currentProduct} = products;
    const { modalOpen, cartModalOpen} = modal;

    useEffect(() => {
        saveProducts();
        saveFavourites(JSON.parse(localStorage.getItem('favs')) || []);
        saveCartList(JSON.parse(localStorage.getItem('cartList')) || []);

    },[saveProducts, saveFavourites, saveCartList]);

   const addToCart = (product) => {
        const cartElement = cartList.find(item => item.id === product.id);
        if (!!cartElement) {
            cartElement.quantity ++;
            addQuantity(cartElement);
            return;
        }
        product.quantity = 1;
       addProductToCart(product);

    };

   const confirmPurchase = () => {
        closeModal();
       addToCart(currentProduct);
    };

   const confirmDeletionFromCart = () => {
       removeFromCart(currentProduct);
        closeModalCart();
    };

    return (
            <>
                {modalOpen && <Modal header='' closeButton text='Добавить товар в корзину? '
                                     onClick={closeModal} actionBtnClassName='btn--modal'
                                     confirm={confirmPurchase}/>}

                {cartModalOpen && <Modal header='Удаление' closeButton text='Вы действительно хотите удалить товар из корзины?'
                                     onClick={closeModalCart} actionBtnClassName='btn--modal'
                                     confirm={confirmDeletionFromCart}/>}
                <Header/>
                <AppRoutes/>
                <Footer/>

            </>
        );
 };

const mapStateToProps = ({cartList, products, modal}) => ({cartList, products, modal});

const mapDispatchToProps = (dispatch) => ({
    saveProducts: ( ) => dispatch(saveProductsOperation()),
    saveFavourites: (fav) => dispatch(saveFavouritesOperation(fav)),
    saveCartList: (product) => dispatch(saveCartListOperation(product)),
    closeModal: () => dispatch(closeModalOperation()),
    closeModalCart: () => dispatch(closeModalCartOperation()),
    addQuantity: (product) => dispatch(changeQuantityOperation(product)),
    addProductToCart: (product) => dispatch(addToCartOperation(product)),
    removeFromCart: (product) => dispatch(removeFromCartOperation(product)),

});

export default connect(mapStateToProps, mapDispatchToProps)(App);


