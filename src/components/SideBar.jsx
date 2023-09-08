import React from 'react'
import Bike from "../resources/iconBike.png"
import Swim from "../resources/iconSwim.png"
import Sitting from '../resources/iconSitting.png'
import DumbBell from '../resources/icon.png'
import "../style/SideBar.scss"

const SideBar = () => {
    return (
        <div className='SideContent'>
            <div className='allimg'>
                <img src={Sitting} alt='yoga' />
                <img src={Swim} alt='Swim' />
                <img src={Bike} alt='Bike' />
                <img src={DumbBell} alt='DumbBell' />
                <p className='copyright'>© Copyright, SportSee 2020</p>
            </div>

        </div>
    );
}

export default SideBar;