import React from 'react'
import Appel from '../resources/carbs-icon.png'

const GlucidesCount = ({ data }) => {
    return (
        <div className='glucides'>
            <img src={Appel} alt='glucides'/>
            <div className='info'>
                <p>{data}g</p>
                <p>Glucides</p>
            </div>
            
        </div>
    )
};

export default GlucidesCount;