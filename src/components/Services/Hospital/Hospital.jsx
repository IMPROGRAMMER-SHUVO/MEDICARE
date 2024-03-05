import React, { useEffect, useState } from 'react';
import AntherHostpital from './AntherHostpital';

const Hospital = () => {
    const [Hospital,setHospital]=useState([])
    useEffect(()=>{
        fetch('../../../../public/Hospital.json')
        .then(res=>res.json())
        .then(data=>setHospital(data))
    },[])
    return (
        <div>
 <h2 className='pt-4 text-center   text-2xl font-bold '>  <span className='text-8xl text-teal-600'>O</span>ur Hospitals </h2>
        <div className='max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16'>
            <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">


            {
                Hospital.map(Hostpi=><AntherHostpital key={Hostpi.id} Hostpi={Hostpi}></AntherHostpital>)
            }
            </div>
        </div>
        </div>
    );
};

export default Hospital;