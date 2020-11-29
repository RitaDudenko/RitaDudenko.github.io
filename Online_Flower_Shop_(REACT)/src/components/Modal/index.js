import React  from 'react';
import './Modal.scss'
import Button from "../Button";

const Modal = ({header, closeButton, text, onClick, contentClassName, btnClassName, actionBtnClassName, confirm}) => {

        const modalContentClass = contentClassName ? `modal__content ${contentClassName}` : 'modal__content';
        const spanStyle = btnClassName ? `btn ${btnClassName}` : 'btn';
        const actionsStyle = actionBtnClassName ? `${spanStyle} ${actionBtnClassName} ` : `${spanStyle}`;

        return (
            <div className='modal' onClick={onClick}>
                <div className={modalContentClass} onClick={e => e.stopPropagation()}>
                    <div className='modal__header'>
                        <h3>{header}</h3>
                        {closeButton && <span className={spanStyle} onClick={onClick}>&#10008;</span>}
                    </div>
                        <div className='modal__text'>{text}</div>
                    <div className='modal__actions'>
                        <Button backgroundColor='rgba(0,0,0,0.3)' className={actionsStyle} text='Да' onClick={confirm} />
                        <Button backgroundColor='rgba(0,0,0,0.3)' className={actionsStyle} text='Отмена' onClick={onClick}/>
                    </div>
                </div>

            </div>
        );
};

export default Modal;