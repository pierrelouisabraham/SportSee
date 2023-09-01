import React from 'react'
import Prot from '../resources/protein-icon.png'

const ProteinsCount = ({ data }) => {
    return (
        <div className='box'>
            <img src={Prot} alt='proteins'/>
            <div className='info'>
                <p>{data}g</p>
                <span>Proteins</span>
            </div>
            
        </div>
    )
};

export default ProteinsCount;