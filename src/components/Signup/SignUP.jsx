import React, { useContext } from 'react';


import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';

const SignUP = () => {
 
  const {SIngupCrate} =useContext(AuthContext)
  


  const handleRegister=event=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const file=form.file.value;
    const email=form.email.value;
    const  password=form.password.value;
    console.log(name,file,email,password)
    // creareuser
SIngupCrate(email,password)
.then(result=>{
const createUser=result.user;
console.log(createUser)
event.target.reset()
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
  <Form onSubmit={handleRegister} className="card-body">
  <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name='name' placeholder="Name" className="input input-bordered bg-slate-50" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo</span>
      </label>
      <input type="file" name='file' placeholder="Chose you images" className="input input-bordered bg-slate-50" required />
    </div>
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
      <input type="password" name='password' placeholder="Password" className="input input-bordered bg-slate-50" required />
    </div>
  
    <div className="form-control mt-6">
      <button className="btn btn-primary">SignUp</button>
    </div>
    <p><Link to='/SignIn'>Allready have an account</Link></p>
  </Form>
<p className="text-red-800"></p>
</div>
</div>
</div>
    </div>
  
    );
};

export default SignUP;