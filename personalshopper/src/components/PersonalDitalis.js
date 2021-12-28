import React from 'react'
import {useEffect , useState} from "react"
import axios from "axios"
import { useParams } from 'react-router-dom'
// import {Card, Button, Col,Row} from "react-bootstrap"
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage,MDBBtn} from 'mdb-react-ui-kit';
import jwt_decode from "jwt-decode";
import swal from 'sweetalert2'
import Proudct from "./Proudct"



function PersonalDitalis() {
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
        axios.get(`http://localhost:8080/Personal/getPersonal/${id}`).then((res) => {
          console.log(res.data);
          setUser(res.data);
          setLoading(false);
        });
      }, []);
// \\\\\
function AddCart(_id){
  console.log(qty)
  axios.post("http://localhost:8080/cart/cart/post",{
    product:_id ,userId:decodedData.id,qty:qty
  }).then((res)=>{
      console.log(res)
      // swal(
      //   'Already Add To Cart!',
      //   'You clicked the button!',
      //   'success'
      // )
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
                    <Proudct element={element}/>
    {/* <MDBCard style={{ width: '18rem' }}>
      <MDBCardImage src={element.image} alt='Sunset Over the Sea' position='top' />
      <MDBCardBody>
        <MDBCardText className='NameofShoper'>{element.name}</MDBCardText>
        <MDBCardText>{element.category}</MDBCardText>
        <MDBCardText>{element.description}</MDBCardText>
        <MDBCardText>{element.price}</MDBCardText>
        <MDBCardText>{element.comment}</MDBCardText>
        <MDBBtn onClick= {()=> AddCart(element._id)}>Add TO Cart</MDBBtn>
        <input  onChange = {(e)=> setQty(e.target.value)} type="number" name="qty" id="qty" value={qty}/>

        

      </MDBCardBody>
    </MDBCard> */}
  
</div>
              )  
            })}
            </div>
        </div>
    )}

export default PersonalDitalis
