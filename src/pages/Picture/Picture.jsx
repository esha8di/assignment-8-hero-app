import React from 'react';
import picture from '../../assets/hero.png'

const Picture = () => {
    return (
        <div className='mt-[60px] px-2'>
            <img src={picture} alt="" />
        </div>
    );
};

export default Picture;