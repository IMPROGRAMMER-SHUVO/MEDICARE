import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import bannner from '../../../public/Images/MEdicare (1).png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';
import { FaUserDoctor } from "react-icons/fa6";
import { FaAmbulance, FaHospitalAlt } from 'react-icons/fa';
import { GiHypodermicTest } from "react-icons/gi";
import { FcHome } from "react-icons/fc";
const Header = () => {

const {user,logOut}=useContext(AuthContext)

const handleLogOut=()=>{
  logOut()
  .then((result)=>console.log('user logged out',result))
  .catch(error=>console.error(error))
}
  return (
    <div className='position-relative '>
    <Navbar  expand="lg" className="bg-body-tertiary border-bottom border-5 shadow-lg  px-5 ">
      <Container fluid  >
        <Navbar.Brand  className=' img-fluid '><img src={bannner}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='al' />
        <Navbar.Collapse id="navbarScroll">
          <Nav 
            className="float-end  pr-96 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='px-4 text-sky-700 font-extrabold  font-serif  text-decoration-none flex' to='/'> <FcHome /></Link>
            <Link className='px-4 text-sky-700 font-extrabold  font-serif  fonr text-decoration-none flex' to='/Doctors'><FaUserDoctor/></Link>
            <Link className='px-4 text-sky-700  font-extrabold font-serif    text-decoration-none flex'to='/Hospitals'> <FaHospitalAlt/></Link>
            <Link className='px-4 text-sky-700 font-extrabold  font-serif  text-decoration-none flex'to='/Ambulance'><FaAmbulance/></Link>
            <Link className='px-4 text-sky-700 font-extrabold  font-serif  text-decoration-none flex'to='/HTech'> <GiHypodermicTest/></Link>
            

          </Nav>
          
           
       
        </Navbar.Collapse>
        <div className=''>
          {
            user? <><span className='text-center font-semibold shadow-2xl  text-cyan-300 mr-10 '>{user.email}</span><Link onClick={handleLogOut} className='btn  shadow-2xl text-center ml-2 btn-outline'>Sign Out</Link></> :
            <Link to="/SignIn" className='btn  text-center ml-2 btn-outline '>SingIn</Link>
          }
         

    </div>
      </Container>
    </Navbar>

    </div>
  );
};

export default Header;