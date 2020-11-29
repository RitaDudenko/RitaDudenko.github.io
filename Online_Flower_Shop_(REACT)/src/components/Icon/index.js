import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Icon.scss';

const Icon = ({className, onClick}) => {

        return (
            <i className={`${className} icon`} onClick={onClick} aria-hidden="true"/>
        );

};

export default Icon;