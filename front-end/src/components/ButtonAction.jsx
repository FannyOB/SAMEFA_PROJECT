import React from 'react';
import '../styles/components/Button.scss'

const ButtonAction = ({type, style, children}) => {
    if (type === 'primary'){
        return <button style={{ ...style}} className="primary-btn" >{children}</button>;
    } else if (type === 'secondary'){
        return <button style={{...style}} className="secondary-btn">{children}</button>;
    }
    return (
        <button type={type}>
            {children}
        </button>
    );
};

export default ButtonAction;