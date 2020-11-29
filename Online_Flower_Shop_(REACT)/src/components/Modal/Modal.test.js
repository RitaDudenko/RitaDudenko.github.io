import React from "react";
import Modal from "./index";
import {render} from '@testing-library/react';




describe('Testing Modal component', () => {
    test('Smoke test of Modal component', () => {
            render(<Modal/>);

    });

    test('Testing modal title prop', () => {
          const title = 'Modal title';
       const {getByText} = render(<Modal header={title} />);
       getByText(title);
    });

    test('Testing modal close span in header', () => {
            render(<Modal closeButton/>);

        const modalHeader = document.getElementsByClassName('modal__header')[0];
        const spanArr = modalHeader.getElementsByTagName('span');
        expect(spanArr).toHaveLength(1);
        expect(spanArr[0].classList).toContain('btn');
    });


    test('Testing modal text prop', () => {
        const text = 'Modal text';
         const {getByText} = render(<Modal  text={text}/>);
         getByText(text);

    });

    test('Testing modal buttons content', () => {
            render(<Modal />);

        const buttonsContainer = document.getElementsByClassName('modal__actions')[0];
        const buttonsArr = buttonsContainer.getElementsByTagName('button');
        expect(buttonsArr).toHaveLength(2);
        expect(buttonsArr[0].textContent).toEqual("Да");
        expect(buttonsArr[1].textContent).toEqual("Отмена");
    });

});
