import React from 'react';
import Electronic from './Components/electronic';
import Elec from './Data/Electronic';
import Footer from './Footer';
import Join from './join';


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


    return(
        <div>
            <h2 className='sub_head'>Tech Equipments</h2>
            
            <section className='shop'>{tech}</section>
            <Join />
            <Footer />
        </div>
    )
}