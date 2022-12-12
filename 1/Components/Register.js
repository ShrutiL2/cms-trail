import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput
  }
  from 'mdb-react-ui-kit';
  import emailjs from '@emailjs/browser';
const AddCust = () => {
    const [submit, setSubmit] = useState(null);
    const [inputs, setInputs] = useState({});

    const navigate= useNavigate();

    const back =()=>{
        navigate(`/`);
    }

    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(inputs.desc);

        var templateparams={
            
            "from_name":"Evento",
            "message":`You are registered successfully`
        }
     emailjs.send('gmail', 'template_ww1993r', templateparams, '7YuD-AomxHFe-5G7R')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Name: inputs.name,
                Age: inputs.age,
                Gender: inputs.gender,
                Email: inputs.email,
                Phone: inputs.number,
                Address: inputs.add,
                Username: inputs.username,
                Password: inputs.pass

            })
        };
        fetch('http://localhost:59760/api/Customer/', requestOptions)
            .then(response => response.json())
            .then(response => {navigate(`/login`)})
            .then(data => setSubmit(data.id));
      

    }


    return (
        <MDBContainer fluid>

        <MDBRow className='justify-content-center align-items-center m-5'>

            <MDBCard style={{width:"37%",backgroundColor: "#f8f8ff", borderRadius:'1rem'}}>
            <MDBCardBody className='px-4' style={{width:"170%", marginLeft:"7%"}}>

                <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>

                <MDBRow>
                <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Full Name' size='md'  type='text' required placeholder="Enter your full name" id="name" onChange={handleChange}/>
                </MDBCol>
                </MDBRow>

                <MDBRow>
                <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Age' size='md' type='number' placeholder="Enter your age" id="age" onChange={handleChange}/>
                </MDBCol>
                </MDBRow>

                <MDBRow>
                <MDBCol md='6' style={{marginTop:"0.5px"}}>
                    Enter your gender 
                    <select id="gender" onChange={handleChange} >
                        <option value=""></option>
                        <option value="Male">Male </option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                        
                    </select>
                   
                </MDBCol>
                </MDBRow>

                <MDBRow>
                <MDBCol md='6' style={{marginTop:"25px"}}>
                    
                    <MDBInput wrapperClass='mb-4' label='Email' size='md' type='email' id="email" onChange={handleChange}/>
                </MDBCol>
                </MDBRow>

                <MDBRow>
                <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Phone Number' size='md'  type='rel' placeholder="1234567890 " id="number" onChange={handleChange}/>
                </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Address' size='md' type='text' id="add" onChange={handleChange}/>
                </MDBCol>
                </MDBRow>

                <MDBRow>
                <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Username' size='md' type='text'  id="username" onChange={handleChange} />
                </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Password' size='md' type='password' placeholder="Enter Password " id="pass" onChange={handleChange}/>
                </MDBCol>
                </MDBRow>

                
                <MDBBtn className='mb-4' size='lg' onClick={handleSubmit}>Submit</MDBBtn>
                <MDBBtn className='mb-4' size='lg' onClick={back} style={{marginLeft:"7%"}}>Back</MDBBtn>
                

            </MDBCardBody>
            </MDBCard>

        </MDBRow>
        </MDBContainer>
    );
}



export default AddCust;