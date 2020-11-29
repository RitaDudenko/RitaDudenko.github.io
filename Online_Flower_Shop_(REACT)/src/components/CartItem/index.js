import React from 'react';
import Button from "../Button";
import Icon from "../Icon";
import "./CartItem.scss";
import {connect} from 'react-redux';
import {changeQuantityOperation} from '../../store/cartList/operations';
import {openModalCartOperation} from '../../store/modal/operations';
import {getCurrentProductOperation} from '../../store/products/operations';

export const CartItem = ({product, openModalCart, setCurrentProduct, changeQuantity}) => {

    const {id, title, url, price, quantity} = product;

    const deleteProduct = () => {
        openModalCart();
        setCurrentProduct(product);
    };

    const decProductQuantity = () => {
        if (quantity > 1){
            product.quantity = quantity - 1;
        }
        changeQuantity(product);
    };

    const incProductQuantity = () => {
        product.quantity = quantity + 1;
        changeQuantity(product);
    };

    return (
        <div className='product-cart-view' key={id}>
            <span><img className='cart-img' src={url} alt='flower'/></span>
            <span className='product-cart-title'>{title}</span>
            <span>
                       <Button backgroundColor="black" text="--" onClick={decProductQuantity}/>
                       <span className="product-cart-quantity">{quantity}</span>
                       <Button backgroundColor="black" text="+" onClick={incProductQuantity}/>
                   </span>
            <span className='product-cart-price'>{price}</span>
            <span className='delete-product' onClick={deleteProduct} data-testid="deleting-span"><Icon
                className='fa fa-times'/></span>
        </div>
    );

};

const mapDispatchToProps = (dispatch) => ({
    openModalCart: () => dispatch(openModalCartOperation()),
    setCurrentProduct: (product) => dispatch(getCurrentProductOperation(product)),
    changeQuantity: (product) => dispatch(changeQuantityOperation(product))
});

export default connect(null,mapDispatchToProps)(CartItem);