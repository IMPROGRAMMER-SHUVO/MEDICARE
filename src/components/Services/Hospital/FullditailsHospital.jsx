import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FullditailsHospital = () => {
    const[Hospitalid,setHospitalid]=useState({})
    const {name,name_cr,benefit,patient_feedback,doctor_availability,extra_service,one_day_cost}=Hospitalid
const {id}=useParams()
console.log(id)
useEffect(()=>{
    fetch('/Hospital.json')
    .then(res=>res.json())
    .then(data=>{
   const singleData=data.find(item=>item.id==id)
   setHospitalid(singleData)
    })
},[])
console.log(Hospitalid)
    return (
        
      
        <div
          className="block max-w-[18rem] rounded-lg border border-success bg-transparent mt-5 col  col-sm-6 col-md-6 mr-auto ml-auto shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:border-success-300 dark:bg-neutral-600">
          <div
            className="border-b-2 border-success text-lg px-6 py-3  dark:border-success-300 font-bold text-center text-green-600 ">
           {name_cr}
          </div>
          <div className="p-6">
            <h5
              className="mb-2 text-xl font-medium leading-tight text-success dark:text-success-300">
              {}
            </h5>
            <p className="text-base text-success dark:text-success-300 text-justify">
          <span className='block text-center text-lg uppercase font-bold text-blue-700'> Benefit</span>  {benefit}
            </p>
            <p className="text-base text-success dark:text-success-300 text-justify"><span className='bg-gray-900'>  <span className='block text-center text-lg uppercase font-bold text-blue-700 '>Patient_feedback:</span></span>  <span className='text-justify'>{patient_feedback}</span></p>

          </div>
          <div
            className="border-t-2 border-success px-6 py-3 text-neutral-600 dark:border-success-300 text-center">
              <span className='block text-center font-semibold  text-xl'>Cost</span>
           {one_day_cost}
          </div>
        </div>
        
    );
};

export default FullditailsHospital;