import React from 'react';
import Electronic from './Components/electronic';
import Elec from './Data/Electronic';
import Furniture from './Components/furniture';
import Fur from './Data/Furniture';



export default function Shop(){

    const tech = Elec.map(item => {
        return(
        <div>
               <Electronic 
               data={item}
               /> 
            </div>
        )
    })
    const furn = Fur.map(item => {
        return(
        <div>
               <Furniture 
               data={item}
               /> 
            </div>
        )
    })

    return(
        <div>
            <h2 className='sub_head'>Tech Electronics</h2>
            {tech}
            <h2 className='sub-head1'>Tech Furniture</h2>
            {furn}
        </div>
    )
}