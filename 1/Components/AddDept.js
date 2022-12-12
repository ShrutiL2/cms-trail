import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate,useParams} from 'react-router-dom';
import { useState,useEffect } from "react";
import emailjs from '@emailjs/browser';

const AddDept = ()=>{

    const navigate=useNavigate();
    const {id}= useParams();
    const[cust,setCust]=useState({});
    //const [submit, setSubmit] = useState(null);
    const [inputs, setInputs] = useState({
        "deptid":0,
        "custid":0,
        "depententname":" ",
        "feature":" ",
        "cust":null
    });
    const back =()=>{
        navigate(`/dashboard/${username}`);
    }

    const username= cust.username;


    
useEffect(() => {
    fetch(`http://localhost:60892/api/customers/${id}`)
        .then(res => res.json())
        .then(res => {
            setCust(res);
        })
        .catch(err => console.log(err));})

        const handleChange = (n)=>(event) => {
            setInputs({...inputs,[n]:event.target.value});
            
        }
            
            const handleSubmit = (event) => {

                
                var templateparams={
                    "to_name": `${username}`,
                    "to_id": `${id}`,
                    "from_name":"Evento",
                    "message":`Your dependancy has been inserted successfully`
                }
             emailjs.send('gmail', 'template_ulm0agp', templateparams, '7YuD-AomxHFe-5G7R')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
                setInputs({...inputs,"custid":id});

                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify(inputs)
                };
            
                fetch('http://localhost:60892/api/Dependancies/', requestOptions)
                    .then(response => response.json())
                    .then(response => {
                        alert("Added a new dependancy");
                        window.location.reload(false);
                    })
                    
                        .catch(err => console.log(err));
                    
                
            }
        

    return(
        <div style={{
            display: 'block',
            width: 500,
            height:1000,
            padding: 30, margin: 'auto'
        }} >
            <form  style={{border:"1px solid #9C9C9C",padding:"20px",borderRadius:"5px"}}>
                


                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>Customer Id</Form.Label>
                    <b>{id}</b>
                </Form.Group>

                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>Dependency Name:</Form.Label>
                    <select id="depententname" onChange={handleChange("depententname")}>
                        <option value=""></option>
                        <option value="Rooms">Rooms </option>
                        <option value="Hall">Hall</option>
                        <option value="Swiming pool">Swimming pool</option>
                        <option value="Barbeque">Barbeque</option>
                        <option value="Garden">Garden</option>
                        <option value="Open terrace">Open Terrace</option>
                        
                    </select>
                </Form.Group>

                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>Additional note:</Form.Label>
                    <Form.Control type="text"
                         id="feature" onChange={handleChange("feature")} />
                </Form.Group>


                <Button  onClick={handleSubmit}>Submit your Form</Button>
                <Button variant="primary" onClick={back} style={{marginLeft:"4%"}}>Back</Button>
                
            </form>
        </div>
    );
            
            }       
        
                
        
export default AddDept;