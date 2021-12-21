import React from 'react'
import {useEffect , useState} from "react"
import axios from "axios"
// import { useParams } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage,MDBBtn} from 'mdb-react-ui-kit';
import {Button} from "react-bootstrap"



function Cart() {
    
    const [Loading,setLoading]=useState(true)
    const [cart,setCart]=useState([])

    let decodedData ;
  const storedToken = localStorage.getItem("token");
  if (storedToken){
    decodedData = jwt_decode(storedToken, { payload: true });
     let expirationDate = decodedData.exp;
      var current_time = Date.now() / 1000;
      if(expirationDate < current_time)
      {
          localStorage.removeItem("token");
      }
   }
   console.log(decodedData.id)
        useEffect(() => {
            axios.get(`http://localhost:8080/cart/cart/${decodedData.id}`).then((res) => {
                console.log(res.data[0].cart);
                setCart(res.data[0].cart)
              setLoading(false);
            });
          }, []);
        
          if (Loading){
            return (<p>loading...</p>)
        }
        return(
            <div className="Cart0">
                {cart.map((elemnt)=>{
                    return(
                    <div >
<MDBCard style={{ width: '18rem' }}>
      <MDBCardImage src={elemnt.products.image} alt='Sunset Over the Sea' position='top' />
      <MDBCardBody>
        <MDBCardText className='NameofShoper'>{elemnt.products.name}</MDBCardText>
        <MDBCardText>{elemnt.products.category}</MDBCardText>
        <MDBCardText>{elemnt.products.description}</MDBCardText>
        <MDBCardText>{elemnt.products.price}</MDBCardText>
        <Button variant="outline-danger">Delete</Button>{' '}


        

      </MDBCardBody>
    </MDBCard>
                   
                    </div>)
                })}
            </div>
        )
}

export default Cart
