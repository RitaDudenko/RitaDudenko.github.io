import React from "react";
import {render, fireEvent, wait} from '@testing-library/react';
import ShoppingForm from "./index";
 import store from '../../store/store';
 import {Provider} from 'react-redux';


describe('Testing Form button', () => {
    test('Smoke test of Form component', () => {
         render(<Provider store={store}><ShoppingForm/></Provider>);
    });


    test('Testing form submitting with button click event', async () => {

        const {getByText, getByPlaceholderText} = render(<Provider store={store}><ShoppingForm/></Provider>);
        const submitButton = getByText(/подтвердить/i);
        const nameInput = getByPlaceholderText(/имя/i);
        const surNameInput = getByPlaceholderText(/фамилия/i);
        const ageInput = getByPlaceholderText(/возраст/i);
        const addressInput = getByPlaceholderText(/адрес доставки/i);
        const phoneInput = getByPlaceholderText('+380');

          await wait(() => {
              fireEvent.change(nameInput, {target: {value: 'Юзер'}});
          });

          await wait(() => {
              fireEvent.change(surNameInput, {target: {value: 'Покупатель'}});
          });

          await wait(() => {
              fireEvent.change(ageInput, {target: {value: '25'}});
          });

          await wait(() => {
              fireEvent.change(addressInput, {target: {value: 'Киев'}});
          });

          await wait(() => {
              fireEvent.change(phoneInput, {target: {value: '+380958745081'}});
          });

            fireEvent.click(submitButton);

    });


});





