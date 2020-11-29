import React from 'react';
import './Favourites.scss';
import Button from "../../components/Button";
import {withRouter} from 'react-router-dom';
import Card from "../../components/Card";
import {connect} from 'react-redux';

const Favourites = ({favourites, history}) => {

        const favProducts = favourites.map(item => {
            return(
                <Card key={item.id} product={item}/>
            )
        });

   const closeFavourites = () => {
        history.push('/');
    };

        return (
            <div className='favourites-container'>
                <h2 className="favourites-title">Избранное</h2>
                <div className="fav-cards-container">{favProducts}</div>
                <div className="fav-buttons">
                    <Button backgroundColor='black' text='&larr; Назад' onClick={closeFavourites}/>
                </div>

            </div>
        );
};

const mapStateToProps = ({favourites}) => ({favourites});

export default connect(mapStateToProps)(withRouter(Favourites));

