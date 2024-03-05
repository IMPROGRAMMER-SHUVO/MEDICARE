import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';
import { FcGoogle } from "react-icons/fc";
import { text } from '@fortawesome/fontawesome-svg-core';
import { FaRegEye,FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
const [showpassword,setShowpassword]=useState(false)
const {signinUser,signinWithgoogle}=useContext(AuthContext)

const location=useLocation()
const navigate=useNavigate()
console.log('location form login page',location)



  const handlesingin=event=>{
    event.preventDefault()
    const form =event.target;

    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password)


    signinUser(email,password)
    .then(result=>{
      console.log(result.user)
      event.target.reset()
  //navigate after login
  navigate(location?.state? location.state:'/')
     
    })
 .catch(error=>{
  console.error(error)
 });



}
const googlehandle=()=>{
  signinWithgoogle()
  .then(result=>{
    console.log(result.user)
    navigate(location?.state? location.state:'/')
  })

  .catch(error=>{
    console.error(error)
  })
 }
    return (
<div>
          <div className="hero min-h-screen bg-slate-100">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUP Now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-slate-50">
      <Form onSubmit={handlesingin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered  bg-slate-50" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className='flex '>
          <input type={showpassword?'text':'password'} name='password' placeholder="password" className="input input-bordered  bg-slate-50" required />
          <p className=' pl-2 pt-2 text-xl ' onClick={()=>setShowpassword(!showpassword)}>
            {
              showpassword? <span><FaRegEye /></span>:<span> <FaEyeSlash /></span>
            }
            </p>
          </div>
     
          <label className="label">
          
          </label>
        </div>
      
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p><Link to='/Singup' className='text-red-600'>Create new account</Link></p>
        <p className='text-center'><button onClick={googlehandle} className='btn bg-slate-300 btn-ghost '><span className='text-2xl'><FcGoogle  /></span>Google</button></p>
      </Form>
   <p className="text-red-800"></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;