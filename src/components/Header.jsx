import React from 'react'
import logo from '../resources/logo.png'
import '../style/Header.scss'

const Headers = ({}) => {
    return(
        <div className='header'>
            <img src={logo} alt='logo'/>
            <div className='menu'>
                <span className='menuText'>Accueil</span>
                <span className='menuText'>profil</span>
                <span className='menuText'>Réglages</span>
                <span className='menuText'>Communauté</span>

            </div>

        </div>
    );
};

export default Headers;