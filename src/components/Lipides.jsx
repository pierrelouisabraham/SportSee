import React from 'react'
import Burger from '../resources/fat-icon.png'

const LipidesCount = ({ data }) => {
    return (
        <div className='box'>
            <img src={Burger} alt='lipides'/>
            <div className='info'>
                <p>{data}g</p>
                <span>Lipides</span>
            </div>
            
        </div>
    )
};

export default LipidesCount;