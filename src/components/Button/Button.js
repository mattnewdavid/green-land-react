import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test', 'btn--secondary'];

const SIZES = ['btn--medium', 'btn--large', 'btn--fluid'];

export const CustomButton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    link
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to={link} className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
}