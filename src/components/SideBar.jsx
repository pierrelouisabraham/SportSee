import React from 'react'
import Bike from "../resources/iconBike.png"
import Swim from "../resources/iconSwim.png"
import Sitting from '../resources/iconSitting.png'
import DumbBell from '../resources/icon.png'
import "../style/SideBar.css"

const SideBar = ({}) => {
    return (
        <div className='SideContent'>
            <img src={Sitting} alt='yoga'/>
            <img src={Swim} alt='Swim'/>
            <img src={Bike} alt='Bike'/>
            <img src={DumbBell} alt='DumbBell'/>
        </div>
    );
}

export default SideBar;