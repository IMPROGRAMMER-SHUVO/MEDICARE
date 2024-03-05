import React from 'react';
import { Link } from 'react-router-dom';

const AnotherAmbulance = ({Ambulance}) => {
    const {ambulance_name,id,image_url,ratin}=Ambulance
    return (
        <div>
        <div class="rounded overflow-hidden shadow-lg flex flex-col">
      <a href="#"></a>
      <div className="relative"><a href="#">
             <img className='h-60 w-full ' src={image_url}>

             </img>
              <div
                  className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
              </div>
          </a>
          <a href="#!">
              
          </a>
      </div>
      <div className="px-6 py-4 mb-auto">
          <a href="#"
              className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out  mb-2">
              {ambulance_name}</a>
          <p class="text-gray-500 text-sm">
             {ratin}
          </p>
       
      </div>
      <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
      

          <span href="#" className="py-1  font-regular text-gray-900 mr-1 flex flex-row items-center font-extrabold text-lg">
       
            <p className='btn btn-ghost'><Link to={`/Ambulance/${id}`} >Booking</Link></p>
          </span>
      </div>
  </div>
        </div>
    );
};

export default AnotherAmbulance;