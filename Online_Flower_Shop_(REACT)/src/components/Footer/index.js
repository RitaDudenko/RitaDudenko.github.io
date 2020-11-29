import React from 'react';
import './Footer.scss';
import Icon from "../Icon";

const Footer = () => {
        return (
            <div className='footer'>
                <div className='icons-block'>
                    <Icon className='fa fa-facebook-square  '/>
                    <Icon className='fa fa-twitter-square '/>
                    <Icon className='fa fa-instagram'/>
                    <Icon className='fa fa-pinterest-square'/>
                </div>
                <p className="footer-content">&copy;Magic Garden. License since 2017</p>

            </div>
        );
};

export default Footer;