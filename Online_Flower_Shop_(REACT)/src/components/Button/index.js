import React from 'react';
import './Button.scss';

const Button = ({backgroundColor,  text, onClick, className, children, disabled, type}) => {
        const btnType = type ? `${type}` : 'button';
        const btnClassName = className ? `btn ${className}` : 'btn';

        return (
            <button  type={btnType} style={{backgroundColor}} className={btnClassName}  onClick={onClick}
                     data-testid='testing-button'
                     disabled={disabled}>{text}{children}</button>

        );
};

export default Button;