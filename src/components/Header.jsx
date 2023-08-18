import React from 'react'
import logo from '../resources/logo.png'
import '../style/Header.css'

const Headers = ({}) => {
    return(
        <div className='header'>
            <img src={logo} alt='logo'/>
            <span className='menu'>Accueil</span>
            <span className='menu'>profil</span>
            <span className='menu'>Réglages</span>
            <span className='menu'>Communauté</span>

        </div>
    );
};

export default Headers;