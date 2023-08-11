import React from 'react';
import './HeartButton.scss';
import {AiOutlineHeart} from 'react-icons/ai';

const HeartButton = () => {
    return (
        <div>
            <button className='heart-button'>
                <div>
                    <AiOutlineHeart/>
                </div>
            </button>
        </div>
    );
};

export default HeartButton;