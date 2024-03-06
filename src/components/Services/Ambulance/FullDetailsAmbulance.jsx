import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FullDetailsAmbulance = () => {
    const [Ambulanceid,setAmbulaneid]=useState([])
    const {ambulance_name,patient_comment,services_provided,rating,city,cost}=Ambulanceid
    const{id}=useParams()

    console.log(id)
    useEffect(()=>{
        fetch('/Ambulance.json')
        .then(res=>res.json())
        .then(data=>{
            const singleData=data.find(ambulanecitem=>ambulanecitem.id==id)
            setAmbulaneid(singleData)

        })
        
    },[])
    console.log(Ambulanceid)
    return (
        <div className="card col col-sm-6 col-md-6 mr-auto ml-auto mt-5 w-96 bg-slate-50 shadow-xl">
        <div className="card-body text-center">
          <h2 className="  font-bold text-lg text-blue-700">{ambulance_name}</h2>
          <p className='text-slate-700'><span className='font-bold text-blue-600 block'>patient comment</span>{patient_comment}</p>
          <p><span className='font-bold text-blue-600 block'>patient_comment</span>{patient_comment}</p>
          <p><span className='font-bold text-blue-600 block'>Rating</span>{rating}</p>
          <p><span className='font-bold text-blue-600 block'>Cost</span>{cost}</p>
          
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default FullDetailsAmbulance;


