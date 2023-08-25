import React from 'react'
import Prot from '../resources/protein-icon.png'

const ProteinsCount = ({ data }) => {
    return (
        <div className='proteins'>
            <img src={Prot} alt='proteins'/>
            <div className='info'>
                <p>{data}g</p>
                <p>Proteins</p>
            </div>
            
        </div>
    )
};

export default ProteinsCount;