import React from "react";
import {render, fireEvent} from '@testing-library/react';
import {CartItem} from "./index";

const currentProduct = {
    id: 2,
    title: 'product',
    price: '340',
    url: './myurl',
    article: '42625328781',
    color: 'white',
    quantity: 2
};

const currentProduct2 = {
    id: 3,
    title: 'product',
    price: '340',
    url: './myurl',
    article: '4262532854',
    color: 'white',
    quantity: 2
};

describe('Testing CartItem buttons', () => {
    test('Smoke test of CartItem component', () => {
        render(<CartItem product={currentProduct}/>);
    });

    test('Delete button calls openModalCart function', () => {
        const openCartModalMock = jest.fn().mockImplementation(() => {
            console.log('Open  modal window to confirm deleting product from cart');
        });

        const setCurrentProductMock = jest.fn();

        const changeQuantityMock = jest.fn();

        const {getByTestId} =  render(<CartItem product={currentProduct} openModalCart={openCartModalMock}
                                            setCurrentProduct = {setCurrentProductMock} changeQuantity={changeQuantityMock}/>);
        const deleteButton = getByTestId('deleting-span');
        expect(openCartModalMock).not.toHaveBeenCalled();
        fireEvent.click(deleteButton);
        expect(openCartModalMock).toHaveBeenCalled();
        expect(openCartModalMock).toHaveBeenCalledTimes(1);

    });

    test('Delete button get correct id of current product', () => {
        const openCartModalMock = jest.fn();
        const setCurrentProductMock = jest.fn().mockImplementation((product) => product.id);
        const changeQuantityMock = jest.fn();

        const {getByTestId} =  render(<CartItem product={currentProduct} openModalCart={openCartModalMock}
                                                setCurrentProduct = {setCurrentProductMock} changeQuantity={changeQuantityMock}/>);
        const deleteButton = getByTestId('deleting-span');
        expect(setCurrentProductMock).not.toHaveBeenCalled();
        fireEvent.click(deleteButton);
        expect(setCurrentProductMock).toHaveBeenCalledTimes(1);
        expect(setCurrentProductMock).toHaveBeenCalledWith(currentProduct);
        expect(setCurrentProductMock(currentProduct)).toBe(2);
    });

    test('Testing inc quantity button', () => {
        const openCartModalMock = jest.fn();
        const setCurrentProductMock = jest.fn();
        const changeQuantityMock = jest.fn().mockImplementation((currentProduct) => currentProduct.quantity);

        const {getByText} =  render(<CartItem product={currentProduct} openModalCart={openCartModalMock}
                                                setCurrentProduct = {setCurrentProductMock} changeQuantity={changeQuantityMock}/>);
        const incButton = getByText('+');
        expect(changeQuantityMock).not.toHaveBeenCalled();
        fireEvent.click(incButton);
        expect(changeQuantityMock).toHaveBeenCalledTimes(1);
        expect(changeQuantityMock).toHaveBeenCalledWith(currentProduct);
        expect(changeQuantityMock(currentProduct)).toEqual(3);
    });

    test('Testing dec quantity button', () => {
        const openCartModalMock = jest.fn();
        const setCurrentProductMock = jest.fn();
        const changeQuantityMock = jest.fn().mockImplementation((currentProduct) => currentProduct.quantity);

        const {getByText} =  render(<CartItem product={currentProduct2} openModalCart={openCartModalMock}
                                              setCurrentProduct = {setCurrentProductMock} changeQuantity={changeQuantityMock}/>);
        const decButton = getByText('--');
        expect(changeQuantityMock).not.toHaveBeenCalled();
        fireEvent.click(decButton);
        expect(changeQuantityMock).toHaveBeenCalledTimes(1);
        expect(changeQuantityMock).toHaveBeenCalledWith(currentProduct2);
        expect(changeQuantityMock(currentProduct2)).toBe(1);
    });

});





