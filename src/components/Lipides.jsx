import React from 'react'
import Burger from '../resources/fat-icon.png'

const LipidesCount = ({ data }) => {
    return (
        <div className='lipides'>
            <img src={Burger} alt='lipides'/>
            <div className='info'>
                <p>{data}g</p>
                <p>Lipides</p>
            </div>
            
        </div>
    )
};

export default LipidesCount;