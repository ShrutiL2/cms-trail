import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';



const ViewEvent = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  /*const back =()=>{
      console.log("back ");
      navigate(`/dashboard/${username}`);
  }
*/


  const [dep, setDep] = useState(
    []
  )



  useEffect(() => {

    fetch(`http://localhost:59760/api/Event`)
      .then(res => res.json())
      .then(res => {
        setDep(res);

      })
      .catch(err => console.log(err));

  }, [])
  console.log(dep);


  return (
    <div>

      <h2 style={{ textAlign: "center" }}>Events we have</h2>
      <br />
      <section style={{ backgroundColor: " #eee" }}>

        {dep.map(e => (
          <div className="container py-5">
            <div class="row">
              <div className="col-md-12 col-lg-8 mb-2 mb-lg-0" >

                <div className="card" >

                  <img className="card-img-top" src={e.eventimage} style={{ height:"0.2%",
    width: "100%",
    paddingLeft: "5%",
    paddingTop: "5%",
    
    paddingRight: "5%"}}/>
                  <div className="card-body" style={{ marginLeft:"7.7cm"}}>
                    <div>
                    <h4 class="mb-0"><b>HP Notebook</b></h4>

                    </div>


                  </div>
                </div>
              </div></div></div>


        ))}

      </section >

      <Button variant="primary" style={{ marginLeft: "43%", marginTop: "5%", width: "10%" }}>Back</Button>
    </div >
  );

}
export default ViewEvent;
