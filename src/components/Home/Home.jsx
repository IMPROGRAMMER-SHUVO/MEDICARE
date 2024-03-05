import React from 'react';
import image1 from '../../../public/Images/Sectionimage-transformed-removebg-preview.png'
import image2 from '../../../public/Images/istockphoto-1214753465-1024x1024-transformed.jpeg'
import image3 from '../../../public/Images/resize3.jpg'
import image4 from '../../../public/Images/Diagonistic.jpeg'
import image5 from '../../../public/Images/iamge4 (1).jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
      <div>
        


<div className='container pt-5 '>
<div className='row'>
<div class="col-lg-6 col-sm-4 ">
      <div className=''>
        <h1 className='pb-5 text-4xl'> Welcome <span className='text-green-500 font-bold '>MediCare</span> </h1>
        <p className='text-justify'>We understand the importance of such events in reshaping medical landscapes and ensuring better outcomes for all. Let this conference be a beacon of hope and a platform for sharing the collective wisdom of the global medical community</p>
      </div>
    </div>
    <div className=' col-lg-6 col-sm-8 '>
       <img className='h-70 rounded-xl w-full' src={image1}></img>
    </div>
</div>
</div>
<div>
 <h3 className='pt-5 text-center font-bold text-4xl border-b-4 pb-4 border-dotted'> <span className="text-amber-500"><span className='text-8xl'>O</span>ur</span>  Services</h3>

</div>
<div className="row px-4 pt-2 mx-2 pr-3 ">
  <div className="col-sm-6 transition ease-in-out delay-150 bg-slate-100 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400 duration-300  col-md-5 mr-auto ml-auto rounded-xl border-2 shadow-lg pt-3 pb-4">
    <div className="thumbnail">
      <img className='h-44 w-full  rounded-xl' src={image2} alt="..."/>
      <div className="caption">
        <h3 className='text-xl font-bold'>Book Appointment with Dr.</h3>
        <p className='pb-2'>Easily schedule your appointment and Choose a convenient date and time </p>
        <p><Link to='/Doctors' className="btn btn-success " role="button">Go..</Link> </p>
      </div>
    </div>
  </div>
  <div className="col-sm-6 transition ease-in-out delay-150 bg-slate-100 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400 duration-300  col-md-5 border-2 rounded-xl pt-3 mr-auto ml-auto shadow-lg pb-4">
    <div className="thumbnail">
      <img className='h-44 w-full  rounded-xl' src={image3} alt="..."/>
      <div className="caption">
        <h3 className='text-xl font-bold'>Book Your Hospital Appointment</h3>
        <p className='pb-2'>Schedule your visit to the hospital and Choose your preferred date and time</p>
        <p><Link to="/Hospitals" className="btn btn-success" role="button">Go..</Link> </p>
      </div>
    </div>
  </div>
  <div className="col-sm-6 transition ease-in-out delay-150 bg-slate-100 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400 duration-300  col-md-5 border-2 pt-3 rounded-xl mr-auto ml-auto mt-5 shadow-lg pb-4">
    <div className="thumbnail">
      <img  className='h-44 w-full rounded-xl'src={image4} alt="..."/>
      <div className="caption">
        <h3 className='text-xl font-bold'>Diagnostic test online </h3>
        <p className='pb-2'>Assess your health from anywhere and Get personalized results and insights</p>
        <p><Link to="/HTech" className="btn btn-success  " role="button">GO..</Link> </p>
      </div>
    </div>
  </div>
  <div className="col-sm-6 transition ease-in-out delay-150 bg-slate-100 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400 duration-300  col-md-5 border-2 mr-auto rounded-xl pt-3 ml-auto mt-5 shadow-lg pb-4">
    <div className="thumbnail">
      <img  className='h-44 w-full rounded-xl'src={image5} alt="..."/>
      <div className="caption">
        <h3 className='text-xl font-bold'>Book an Ambulance Online</h3>
        <p className='pb-2'>Request emergency transportation swiftly and Get immediate assistance from trained professionals</p>
        <p><a href="#" className="btn btn-success " role="button">GO..</a> </p>
      </div>
    </div>
  </div>
  </div>
  <div className='pt-5 pb-2'>
  <h3 className="divider divider-warning 'pt-5 text-center font-bold text-4xl pb-2"><span className='text-8xl'>O</span>ur<span className="text-lime-500">Success</span></h3>
 
</div>
<div className='items-center text-center pt-4 row'>
<div className="stats shadow col-sm-6 mr-auto ml-auto ml-sm-auto mr-sm-auto col-md-6">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title text-rose-500">Visitor</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title text-rose-500">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-red-800">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title text-rose-500">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
</div>
 </div>
 
 
    )
};

export default Home;