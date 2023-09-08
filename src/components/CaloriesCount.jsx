import React from 'react'
import Flame from '../resources/calories-icon.png'

const CaloriesCount = ({ data }) => {
    return (
        <div className='box'>
            <img src={Flame} alt='calories' />
            <div className='info'>
                <p>{data}kCal</p>
                <span>Calories</span>
            </div>

        </div>
    )
};

export default CaloriesCount;