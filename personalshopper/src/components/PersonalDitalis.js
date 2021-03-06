import React from 'react'
import {useEffect , useState} from "react"
import axios from "axios"
import { useParams } from 'react-router-dom'
// import {Card, Button, Col,Row} from "react-bootstrap"
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage,MDBBtn} from 'mdb-react-ui-kit';
import jwt_decode from "jwt-decode";
import swal from 'sweetalert2'
import Proudct from "./Proudct"
import Quantity from './Quantity'


function PersonalDitalis({setRefresh}) {
  let decodedData ;
  const storedToken = localStorage.getItem("token");
  if (storedToken){
    decodedData = jwt_decode(storedToken, { payload: true });
     console.log(decodedData);
     let expirationDate = decodedData.exp;
      var current_time = Date.now() / 1000;
      if(expirationDate < current_time)
      {
          localStorage.removeItem("token");
      }
   }
    const [User,setUser]=useState()
    const [qty,setQty]=useState()
    const [Loading,setLoading]=useState(true)
    const {id}=useParams()
    useEffect(() => {
        axios.get(`/Personal/getPersonal/${id}`).then((res) => {
          console.log(res.data);
          setUser(res.data);
          setLoading(false);
          setRefresh(false)
        });
      }, []);
// \\\\\

function AddCart(_id){
  console.log(qty)
  axios.post("/cart/cart/post",{
    product:_id ,userId:decodedData.id,qty:qty
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
             {User.proudct?.map((element)=>{
              return(
                  <div >
                    <Proudct element={element} setRefresh={setRefresh}/>
    <MDBCard style={{ width: '18rem' }}>
      <MDBCardImage src={element.image} alt='Sunset Over the Sea' position='top' />
      <MDBCardBody>
        <MDBCardText className='NameofShoper'>{element.name}</MDBCardText>
        <MDBCardText>{element.category}</MDBCardText>
        <MDBCardText>{element.description}</MDBCardText>
        <MDBCardText>{element.price}</MDBCardText>
        <MDBCardText>{element.comment}</MDBCardText>
        <MDBBtn onClick= {()=> AddCart(element._id)}>Add TO Cart</MDBBtn>
<Quantity setQty={setQty} />

        

      </MDBCardBody>
    </MDBCard>
  
</div>
              )  
            })}
            </div>
        </div>
    )}

export default PersonalDitalis
