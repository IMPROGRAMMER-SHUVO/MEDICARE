import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SignIn from './components/SingIn/SignIn.jsx';
import Avout from './components/About/Avout.jsx';


import Main from './components/Main/Main.jsx';
import Home from './components/Home/Home.jsx';
import Doctors from './components/Services/Doctors/Doctors.jsx';
import Hospital from './components/Services/Hospital/Hospital.jsx';
import Htech from './components/Services/HTech/Htech.jsx';
import Ambulance from './components/Services/Ambulance/Ambulance.jsx';

import FullDetailsDoctor from './components/FullDetailsDoctor/FullDetailsDoctor.jsx';
import SignUP from './components/Signup/SignUP.jsx';
import Authprovider from './components/Authprovider/Authprovider.jsx';
import PrivateRouse from './PrivarteRoutes/PrivateRouse.jsx';
import FullditailsHospital from './components/Services/Hospital/FullditailsHospital.jsx';
import FullDetailsAmbulance from './components/Services/Ambulance/FullDetailsAmbulance.jsx';
import FullDetailsdiagnostic from './components/Services/HTech/FullDetailsdiagnostic.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'Doctors',
        
        element: <Doctors></Doctors>
      },
      {
path:'Doctor/:id',
loader:({params})=>fetch(`Doctor.json/${params.id}`),
element: <PrivateRouse><FullDetailsDoctor></FullDetailsDoctor></PrivateRouse>


      },
  
      {
        path: 'Hospitals',
        element: <Hospital></Hospital>
      },
      {
path:'Hospital/:id',
loader:({params})=>fetch(`Hospital.json/${params.id}`),
element:<PrivateRouse><FullditailsHospital></FullditailsHospital></PrivateRouse>
      },
      {
        path: "HTech",
        element: <Htech></Htech>
      },
      {
path:'Htech/:id',
loader:({params})=>fetch(`Ambulance.json/${params.id}`),
element:<PrivateRouse><FullDetailsdiagnostic></FullDetailsdiagnostic></PrivateRouse>
      },
      {
        path: 'Ambulance',
        element: <Ambulance></Ambulance>
      },
      {
       path:'Ambulance/:id',
       loader:({params})=>fetch(`Ambulance.json/${params.id}`),
       element:<PrivateRouse><FullDetailsAmbulance></FullDetailsAmbulance></PrivateRouse>
      },
      {
        path: 'SignIn',
        element: <SignIn></SignIn>
      },
      {
        path: 'Singup',
        element: <SignUP></SignUP>
      },
      {
        path: 'Avout',
        element: <Avout></Avout>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
   <RouterProvider router={router} />
   </Authprovider>
  </React.StrictMode>,
)
