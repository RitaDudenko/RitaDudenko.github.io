import React from "react";
import {render} from '@testing-library/react';
import {Header} from './index';


 jest.mock('react-router-dom', () => ({
    Link: 'a'
 }));

const cartList = [{
    id: 2,
    title: 'product1',
    price: '356',
    url: './myurl',
    article: '42625328764538',
    color: 'blue',
    quantity: 1
},
    {
        id: 3,
        title: 'product',
        price: '340',
        url: './myurl',
        article: '42625328781',
        color: 'white',
        quantity: 1
    }];


describe('Testing Header buttons', () => {
    test('Smoke test of Header component', () => {
        render(<Header cartList={cartList}/>);
    });

    test('Testing carList amount in cartList button', () => {
      const {getByText} = render(<Header cartList={cartList}/>);
      const cartListButton = getByText(/корзина/i);
      expect(cartListButton.textContent).toContain(cartList.length);
    });

    test('Fav button is in the header', () => {
        const {getByText} = render(<Header cartList={cartList}/>);
        getByText(/избранное/i);
    });

});

