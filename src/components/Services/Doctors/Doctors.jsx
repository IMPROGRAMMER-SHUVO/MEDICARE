import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DoctorDeails from '../../AllDeatails/DoctorDetails/DoctorDeails';
import { data } from 'autoprefixer';

const Doctors = () => {
  

   const [Doctors,setDoctors]=useState([])
useEffect(()=>{
    fetch('./Doctor.json')
    .then(res=>res.json())
    .then(data=>setDoctors(data))
},[])
    return (
        <div>

            <h2 className='pt-4 text-center   text-2xl font-bold '>  <span><span className='text-8xl text-green-500'>O</span>ur {Doctors.length} </span>Doctors</h2>
            <div className='max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16'>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
{
                    Doctors.length===0?<span className="loading loading-infinity loading-lg"></span>: Doctors.map(Doctor=><DoctorDeails key={Doctor.id}
                        Doctor={Doctor}
                        
                        ></DoctorDeails>)
                }
</div>
              
             
      </div>
        </div>
    );
};

export default Doctors;