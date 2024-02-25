//composant qui va affiche un bouton selon son type
import React from 'react';
import '../styles/components/ButtonAction.scss'

const ButtonAction = ({type, style, children, onClick}) => {//props du composant ButtonAction
// fonction qui va se déclencher au click du bouton
    const handleClick = (event) => { 
        if (onClick) {
            onClick(event);
        }
    };
// ici condition d'affichage selon le type du bouton
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