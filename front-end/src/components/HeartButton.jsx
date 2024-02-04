import React from 'react';
import './HeartButton.scss';
import {AiOutlineHeart} from 'react-icons/ai';

const HeartButton = () => {
    return (
        <div className='heart-button'>
            <button>
                <div className='heart-button-wrapper'>
                    <AiOutlineHeart size='20px'/>
                </div>       
            </button>   
        </div>
    );
};

export default HeartButton;