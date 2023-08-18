import React from 'react'
import Flame from '../resources/calories-icon.png'

const CaloriesCount = ({ data }) => {
    return (
        <div className='calories'>
            <img src={Flame} alt='calories'/>
            <div className='info'>
                <p>{data}kCal</p>
                <p>Calories</p>
            </div>
            
        </div>
    )
};

export default CaloriesCount;