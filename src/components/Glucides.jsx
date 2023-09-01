import React from 'react'
import Appel from '../resources/carbs-icon.png'

const GlucidesCount = ({ data }) => {
    return (
        <div className='box'>
            <img src={Appel} alt='glucides'/>
            <div className='info'>
                <p>{data}g</p>
                <span>Glucides</span>
            </div>
            
        </div>
    )
};

export default GlucidesCount;