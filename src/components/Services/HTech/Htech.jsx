import React, { useEffect, useState } from 'react';
import DataDiagonistic from './DataDiagonistic';

const Htech = () => {
const [Diagonistic,setDiagonistic]=useState([])


useEffect(()=>{
    fetch('./Diagonistc.json')
    .then(res=>res.json())
    .then(data=>setDiagonistic(data))
},[])

    return (
        <div>
 <h2 className='pt-4 text-center   text-2xl font-bold '>  <span className='text-8xl text-red-600'>O</span>ur Diagonistic centers </h2>
        <div className='max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16'>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center'>
             {
              Diagonistic.length===0?<span className="loading loading-infinity loading-lg"></span> : Diagonistic.map(Diagonist=><DataDiagonistic key={Diagonist.id}Diagonist={Diagonist}></DataDiagonistic>)
             }
           </div>
        </div>
        </div>
    );
};

export default Htech;