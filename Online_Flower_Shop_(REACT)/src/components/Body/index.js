import React from 'react';
import './Body.scss';
import Card from "../Card";
import {connect} from 'react-redux';

const Body = ({products}) =>{

       const productsList = products.products.map(product =>
                <Card key={product.id}  product={product}/>);

        return (
            <div className='body'>
                <h1 className='title'>EH Magic <span className='title-span'>Garden</span></h1>
                <h2 className='subtitle'>Мы создали Magic Garden для того, чтобы вам не пришлось думать,
                    как лучше выразить свои чувства.</h2>
                {productsList}
            </div>
        );

};

const mapStateToProps = ({products}) => ({products});

export default connect(mapStateToProps)(Body);