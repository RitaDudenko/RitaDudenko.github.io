import React from "react";
import {render, fireEvent} from '@testing-library/react';
import {Card} from "./index";

const product = {
    id: 2,
    title: 'product',
    price: '340',
    url: './myurl',
    article: '42625328781',
    color: 'white'
};

const favourites = [{id:3}];


describe('Testing Card button', () => {
    test('Smoke test of Card component', () => {
        render(<Card product={product} favourites={favourites}/>);
    });

    test('Button calls openModal function', () => {
        const openModalMock = jest.fn().mockImplementation(() => {
                console.log('Open modal window to confirm adding product to cart');

            });
        const getCurrentProductMock = jest.fn();

        const {getByText} =  render(<Card product={product} favourites={favourites} openModal={openModalMock}
                                          getCurrentProduct={getCurrentProductMock}/>);
        const purchaseButton = getByText(/купить/i);
        expect(openModalMock).not.toHaveBeenCalled();
        fireEvent.click(purchaseButton);
        expect(openModalMock).toHaveBeenCalled();

    });

    test('Button calls getCurrentProduct function', () => {
        const openModalMock = jest.fn();
        const getCurrentProductMock = jest.fn().mockImplementation(product => product);

        const {getByText} =  render(<Card product={product} favourites={favourites} openModal={openModalMock}
                                          getCurrentProduct={getCurrentProductMock}/>);
        const purchaseButton = getByText(/купить/i);
        expect(getCurrentProductMock).not.toHaveBeenCalled();
        fireEvent.click(purchaseButton);
        expect(getCurrentProductMock).toHaveBeenCalled();
        expect(getCurrentProductMock).toHaveReturnedWith(product);

    });


});





