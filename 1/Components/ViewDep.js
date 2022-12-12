import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';



const ViewDep = () => {

    const navigate=useNavigate();
    const {id} = useParams();
    const back =()=>{
        console.log("back ");
        navigate(`/dashboard/${username}`);
    }

    const deleteEmployee=(did)=> {
    
          fetch ('http://localhost:60892/api/Dependancies/'+ did,
          { method: 'DELETE',})
          .then( 
              res =>  {
                window.location.reload(false);
    
             }
          )
          .catch( err => console.error(err))               
      } 

    const [dep, setDep] = useState(
        []
    )

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

    const username= cust.username;

    useEffect(() => {
       
        fetch(`http://localhost:60892/api/Dependancies/dependent/${id}`)
        .then(res=> res.json())
            .then(res => {
                setDep(res);
                
            })
            .catch(err => console.log(err));
           
            fetch(`http://localhost:60892/api/customers/${id}`)
            .then(res => res.json())
            .then(res => {
                setCust(res)
                
            })
            .catch(err => console.log(err));

        
            
     },[])

     
     return (
         <div>
<div style={{
              display: 'block',
              width: 1200,
              padding: 30, margin:'auto',
              marginTop:"3%"
              
              
          }}>
              <h2 style={{textAlign:"center"}}>services you need</h2>
              <br/>
              <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        <th scope="col">Dependency Id:</th>
                        <th scope="col">Customer Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Feature</th>
                        <th scope="col">Action</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                {dep.map(e => (
                        <tr key={e.deptid}>
                            <td>
                                <p className='fw-normal mb-1'>{e.deptid}</p>
                            </td>
                            <td>
                                <p className='fw-normal mb-1'>{e.custid}</p>
                            </td>
                            <td>
                                <p className='fw-normal mb-1'>{e.depententname}</p>
                            </td>
                            
                            <td>
                                <p className='fw-normal mb-1'>{e.feature}</p>
                            </td>
                            
                            <td>
                                <center><button className ="btn btn-danger" onClick={deleteEmployee.bind(this,  e.deptid)}>Delete</button></center>
                            </td>
                            
                    </tr>   
                ))}     
                </MDBTableBody>
            </MDBTable>
            </div>
            <Button variant="primary" onClick={back} style={{marginLeft:"43%", marginTop:"5%", width:"10%"}}>Back</Button>
         </div>
     );

                }
    export default ViewDep;