import React, { useEffect, useState } from 'react';
import AnotherAmbulance from './AnotherAmbulance';

const Ambulance = () => {
    const [Ambulanceid,setAmbulaneid]=useState([])
    useEffect(()=>{
        fetch('../../../../public/Ambulance.json')
        .then(res=>res.json())
        .then(data=>setAmbulaneid(data))
    },[])
    return (
        <div>
 <h2 className='pt-4 text-center   text-2xl font-bold '>  <span className='text-8xl text-orange-400'>O</span>ur Ambulances </h2>
            <div className='max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16'>
               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center'>
    {
        Ambulanceid.map(Ambulance=><AnotherAmbulance key={Ambulance.id}Ambulance={Ambulance}></AnotherAmbulance>)
    }
               </div>
    
            </div>
        </div>
        );
};

export default Ambulance;