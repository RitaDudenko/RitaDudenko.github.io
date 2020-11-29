import React  from 'react';
import './Header.scss';
import Button from "../Button";
import Icon from "../Icon";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

 export const Header = ({cartList}) => {

        const productAmount = !!cartList ? `(${cartList.length})` : '';

    return (
            <div className='header'>
                <div className='header-container'>
                    <Link to="/">
                        <div className="logo">
                            <img className="logo-img" src='./logo.jpg' alt='flowers'/>
                            <div className="logo-text">
                                Magic <span className="garden-span">Garden</span>
                            </div>
                        </div>

                    </Link>

                    <div className='header-buttons-wrapper'>
                        <Link  to='/favourites'>
                            <Button backgroundColor='black' className='btn--cart'>
                                <Icon className='fa fa-star icon--white'/> Избранное</Button>
                        </Link>

                        <Link  to='/cart'>
                            <Button backgroundColor='indianred' className='btn--cart'>
                                <Icon className='fa fa-shopping-cart icon--white'/> Корзина <span>{productAmount}</span>
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        );
};

const mapStateToProps = ({cartList}) => ({cartList});

export default connect(mapStateToProps)(Header);