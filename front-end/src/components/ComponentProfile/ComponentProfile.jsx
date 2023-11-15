import React from 'react';

const ComponentProfile = ({image, title, description}) => {
    return (
        <div className='component-profile'>
            <div className='component-profile-info'>
                <div className='component-profile-details-wrapper'>
                    <div className='component-profile-details'>
                        <div className='component-profile-header'>{title}</div>
                        <p className='profile-description'>{description}</p>
                    </div>
                </div>
            </div>
            <div className='component-profile-cover'>
                <img src={image} alt={`${title} cover`}></img> 
                <div className='tabs-container'></div> 
            </div>
    </div>
    );
};

export default ComponentProfile;