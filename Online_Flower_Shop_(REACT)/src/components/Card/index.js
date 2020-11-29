import React from 'react';
import "./Card.scss";
import Button from "../Button";
import Icon from "../Icon";
import {connect} from 'react-redux';
import {addToFavOperation, removeFromFavOperation} from '../../store/favourites/operations';
import {openModalOperation} from '../../store/modal/operations';
import {getCurrentProductOperation} from '../../store/products/operations';


export const Card = ({product, favourites, addCardToFav, removeCardFromFav, openModal, getCurrentProduct}) => {
    const {title, price, url, article, color} = product;
    const isInFav = favourites.find(item => item.id === product.id);

    const addProductToCart = () => {
        openModal();
        getCurrentProduct(product);
    };

    const addToFav = () => {
        addCardToFav(product);
    };

    const removeFromFav = () => {
        removeCardFromFav(product);
    };

    return (
        <div className='card'>
            <div className="img-wrapper"><img src={url} alt='flower'/></div>
            <h5 className="product-title">{title}</h5>
            <p className="product-article">Артикул: {article}</p>
            <p className="product-color">Цвет: {color}</p>
            <h5 className="price">{price}
                {!isInFav && <Icon className="fa fa-star-o icon--m-l-30px" onClick={addToFav}/>}
                {!!isInFav && <Icon className="fa fa-star icon--gold icon--m-l-30px" onClick={removeFromFav}/>}
            </h5>
            <div className='button-wrapper'>
                <Button backgroundColor='indianred' className='btn--card' text="Купить"
                       onClick={addProductToCart}/>
            </div>
        </div>
    );
};

const mapStateToProps = ({favourites}) => ({favourites});

const mapDispatchToProps = (dispatch) => ({
    addCardToFav: (product) => dispatch(addToFavOperation(product)),
    removeCardFromFav: (product) => dispatch(removeFromFavOperation(product)),
    getCurrentProduct: (product) => dispatch(getCurrentProductOperation(product)),
    openModal: () => dispatch(openModalOperation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);

