import React from 'react';
import './Banner.css'
import homepageImg from '../../assets/img/homepage_img.png'

const Banner = () => {
    return (   
        <div className='search-bar-wrapper'>
            <div className='search-bar-title'>
                {/* <div className='title'>
                    <h1>
                        Boost<br/>                        
                        Your<br/> 
                        Engagement
                    </h1>
                </div> */}
            </div>
            <img src={homepageImg} alt="banner img"/>
                <div className='search-bar'>
                    <input type='text' placeholder='Find your asso' className='search-input'/>
                    <button>SEARCH</button>
                </div>
        </div>
    );
};

export default Banner;