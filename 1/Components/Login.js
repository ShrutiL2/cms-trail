import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
  import {useNavigate} from 'react-router-dom';


  
  function Login() {

    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [isusernamevalid, setIsusernamevalid]=useState(true);

    const [cust,setCust]= useState({
        "custid": 0,
        "name": "",
        "age": 0,
        "gender": "",
        "email": "",
        "phone": "",
        "address": "",
        "username": "",
        "password": "",
        "dependancies": []
    })
  
    const [issent, setIssent]=useState(false);
    const navigate=useNavigate();
    
    const LoginPage=()=>
    {
     
      console.log(cust.username);
      if(cust.username == username && cust.password == password){
        navigate(`/dashboard/${username}`);
      }
      else{
        alert("invalid ");
        
      }
    }
   

    const handleChange=(event )=>{
      setUsername(event.target.value);
      
    }
    const handleChangee=(event )=>{
        setPassword(event.target.value);
        setIssent(true);
        
      }
    useEffect(() => {
    
      fetch(`http://localhost:59760/api/Customer/details/${username}`)
          .then(res => res.json())
          .then(res => {
              setCust(res)
              console.log(res)
          })
          .catch(err => console.log(err));

      
    }, [issent])
    

    return (
        <MDBContainer fluid>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
  
            <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'style={{backgroundColor: "#f8f8ff", borderRadius:'2rem'}}>
  
                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <p className="text-white-50 mb-3">Please enter your login and password!</p>
  
  
                  <MDBInput onChange={handleChange} wrapperClass='mb-4 w-100' label='Username'  type='text' size="lg" />
                  
                  <MDBInput onChange={handleChangee} wrapperClass='mb-4 w-100' label='password'  type='password' size="lg" />
  
                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
  
                <MDBBtn size='lg' onClick={LoginPage}>
                  Login
                </MDBBtn>
  
                <hr className="my-4" />
                <div>
                <p className="mb-0" >Don't have an account? <a href="/register" class="text-black-50 fw-bold" > Sign Up</a></p>

              </div>
  
              </MDBCardBody>
            </MDBCard>
  
          </MDBCol>
        </MDBRow>
  
      </MDBContainer>
    );
  }
  
  export default Login;

