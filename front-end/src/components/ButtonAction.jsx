import React from 'react';
import '../styles/components/ButtonAction.scss'

const ButtonAction = ({type, style, children, onClick}) => {
    const handleClick = (event) => {
        if (onClick) {
            onClick(event);
        }
    };
    
    if (type === 'primary'){
        return <button style={{ ...style}} className="primary-btn" onClick={handleClick} >{children}</button>;
    } else if (type === 'secondary'){
        return <button style={{...style}} className="secondary-btn" onClick={handleClick}> {children}</button>;
    }

    return (
        <button type={type} style={style} onClick={handleClick}>
            {children}
        </button>
    );
};

export default ButtonAction;