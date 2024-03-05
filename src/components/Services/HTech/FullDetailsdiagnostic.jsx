import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FullDetailsdiagnostic = () => {
    const [Singledaionstic,setSingledaionstic]=useState({})
    const {name,services_offered,result_time,email,phone,cost_per_test}=Singledaionstic
    const {id}=useParams()
    console.log(id)
    useEffect(()=>{
        fetch('../../../../public/Diagonistc.json')
        .then(res=>res.json())
        .then(data=>{
            const singleData=data.find(item=>item.id==id)
            setSingledaionstic(singleData)
        })
    },[])
    console.log(Singledaionstic)
    return (
<div>
      <div className="divider divider-info">Diagonistic all info</div>
      <div className="card col-sm-4  col-md-4 mr-auto ml-auto  shadow-xl">

        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{phone}</div>
          </h2>
          <p className='text-justify'> Service {services_offered}</p>
          <h5>Location: {result_time}</h5>
         
          <p>cost: 
            {cost_per_test}</p>
         
        </div>
      </div>
    </div>
    );
};

export default FullDetailsdiagnostic;





