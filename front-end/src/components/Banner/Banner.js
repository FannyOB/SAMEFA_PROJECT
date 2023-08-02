import React from 'react';
import './Banner.css'
import mainImg from '../../assets/img/main_img.png'

const Banner = () => {
    return (   
        <div className='search-bar-wrapper'>
            <div className='search-bar-title'>
                <div className='title'>
                    <h1>Boost</h1>
                    <h1>your</h1>
                    <h1>engagement</h1>
                </div>
                <div className='search-bar'>
                    <input type='text' placeholder='Find your asso' className='search-input'/>
                    <button>SEARCH</button>
                </div>
            </div>
            <img src={mainImg} alt="banner img"/>
        </div>
    );
};

export default Banner;