import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Another from './Another';



const FullDetailsDoctor = () => {
  const navigate = useNavigate();
  const Goback = () => {
    navigate(-1);
  }
  const [Doctorid, setDoctorid] = useState({})
  const { name, location, benefits, rating, Monday, Wednesday, Friday, appointment_cost } = Doctorid


  const { id } = useParams()

  console.log(id)
  useEffect(() => {
    fetch('../../../public/Doctor.json')
      .then(res => res.json())
      .then(data => {
        const singleData = data.find(item => item.id == id)
        setDoctorid(singleData)

      })

  },
    [])
  console.log(Doctorid)

  return (


    <div>
      <div className="divider divider-info">Doctor all info</div>
      <div className="card col-sm-4  col-md-4 mr-auto ml-auto  shadow-xl">

        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{rating}</div>
          </h2>
          <p className='text-justify'> Benefits: {benefits}</p>
          <h5>Location: {location}</h5>
          <div>
            
             <li>Monday:{Monday}</li> 
            <li> Wednesday:{
            Wednesday==0?<p>off</p>:Wednesday
}</li>
             <li>
              
               Friday:{
            Friday===" "?<p>off</p>:Friday
}</li>
            
          </div>
          <p>appointment_cost: 
            {appointment_cost}</p>
          <div className="card-actions justify-end">
            <div className=" btn  text-blue-700 pr-2" onClick={Goback}>GO Back</div>
           
          </div>
        </div>
      </div>
    </div>




  );
};

export default FullDetailsDoctor;