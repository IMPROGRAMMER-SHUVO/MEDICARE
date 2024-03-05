import React from 'react';
import { FcRating } from "react-icons/fc";
import { Link } from 'react-router-dom';
const AntherHostpital = ({Hostpi}) => {
    const {name,city,hospital_bed_count,image_url,rating,id}=Hostpi
    return (

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
                    <Link to= {`/Hospital/${id}`}
                        className="text-xs btn btn-circle absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-slate-500 hover:text-indigo-600 transition duration-500 ease-in-out">
                        Booking
                    </Link>
                </a>
            </div>
            <div className="px-6 py-4 mb-auto">
                <a href="#"
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out  mb-2">
                    {name}</a>
                <p class="text-gray-500 text-sm">
                   {city}
                </p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
            

                <span href="#" className="py-1  font-regular text-gray-900 mr-1 flex flex-row items-center font-extrabold text-lg">
                {rating}
                    <span className="ml-1  flex text-center"><FcRating /></span>
                </span>
            </div>
        </div>

       
    );
};

export default AntherHostpital;