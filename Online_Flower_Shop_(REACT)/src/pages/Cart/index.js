import React from 'react';
import './Cart.scss'
import Button from "../../components/Button";
import CartItem from "../../components/CartItem";
import  {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import  Form from "../../components/Form";

const Cart = ({cartList}) => {

    const chosenProducts = cartList.map(item =>
        <CartItem key={item.id}  product={item}/>);

    const totalAmount = cartList.reduce((sum, product) => {
        const {price, quantity} = product;
        return sum + parseInt(price) * quantity ;
    }, 0);

    return (
        <div className='cart-container'>
            <h2 className="cart-title">Ваша покупка</h2>
            {!cartList.length && <div className='empty-cart'>Корзина пуста</div>}
            {!!cartList.length && <div className='cart-content'>
            <Form/>
            <div className="cart-items">
            {chosenProducts}
             <div className="total-sum">
                <span>К оплате:</span>
                <span className="total-sum-amount">{totalAmount} UAH</span>
            </div>
            </div>
            </div>}

            <div className="cart-buttons">
                <Link to="/"><Button backgroundColor='black' text='&larr; Продолжить покупки'/></Link>
            </div>

        </div>
    );

};

const mapStateToProps = ({cartList}) => ({cartList});


export default connect(mapStateToProps)(Cart);