import React from "react";
import {render} from '@testing-library/react';
import Button from "./index";


describe('Testing Button component', () => {
    test('Smoke test of Button component', () => {
            render(<Button/>);
    });

    test('Testing default button attributes', () => {
        const {getByTestId} = render(<Button/>);
        const button = getByTestId('testing-button');
        expect(button.type).toBe('button');
        expect(button.className).toBe('btn');
    });


});


describe('Testing Button component props', () => {
    test('Testing button type prop', () => {
        const type = 'submit';
        const {getByTestId} = render(<Button type={type}/>);
        const button = getByTestId('testing-button');
        expect(button.type).toBe(type);
    });


    test('Testing button class prop', () => {
        const className = 'btn--small';
        const {getByTestId} = render(<Button className = {className}/>);
        const button = getByTestId('testing-button');
        expect(button.className).toBe(`btn ${className}`);
    });

    test('Testing button text prop', () => {
        const text = 'I am button';
        const {getByText}  = render(<Button text = {text}/>);
        getByText(text);
    });

    test('Testing button disabled prop', () => {
        const disabled = true;
        const {getByTestId} = render(<Button disabled={disabled}/>);
        const button = getByTestId('testing-button');
        expect(button).toBeDisabled();
    });

});