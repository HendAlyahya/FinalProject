import React from 'react'
import {useEffect , useState} from "react"
import axios from "axios"
import { useParams } from 'react-router-dom'
// import {Card, Button, Col,Row} from "react-bootstrap"
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage,MDBBtn} from 'mdb-react-ui-kit';




function PersonalDitalis() {
    const [User,setUser]=useState()
    const [Loading,setLoading]=useState(true)
    const {id}=useParams()
    useEffect(() => {
        axios.get(`http://localhost:8080/Personal/getPersonal/${id}`).then((res) => {
          console.log(res.data);
          setUser(res.data);
          setLoading(false);
        });
      }, []);
// \\\\\
function AddCart(_id){
  axios.post("http://localhost:8080/cart/cart/post",{
    product:_id ,userId:"61beed3fa2391772e4a6d362",qty:2
  }).then((res)=>{
      console.log(res)
  })

}



      if (Loading){
        return (<p>loading...</p>)
    }
    return (
        <div>
            <p>{User.name}</p> 
            <div className='CardDita'>
             {User.proudct?.map((e)=>{
              return(
                  <div className='CardDita'>
                    
    <MDBCard style={{ width: '18rem' }}>
      <MDBCardImage src={e.image} alt='Sunset Over the Sea' position='top' />
      <MDBCardBody>
        <MDBCardText className='NameofShoper'>{e.name}</MDBCardText>
        <MDBCardText>{e.category}</MDBCardText>
        <MDBCardText>{e.description}</MDBCardText>
        <MDBCardText>{e.price}</MDBCardText>
        <MDBCardText>{e.comment}</MDBCardText>
        <MDBBtn href='#'>Add TO Cart</MDBBtn>

      </MDBCardBody>
    </MDBCard>
  
</div>
              )  
            })}
            </div>
        </div>
    )}

export default PersonalDitalis
