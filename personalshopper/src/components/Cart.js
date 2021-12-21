import React from 'react'
import {useEffect , useState} from "react"
import axios from "axios"
// import { useParams } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage,MDBBtn} from 'mdb-react-ui-kit';
import {Button} from "react-bootstrap"
import { BsTrash } from "react-icons/bs";



function Cart() {
    
    const [Loading,setLoading]=useState(true)
    const [cart,setCart]=useState([])
    const [total , setTotal]=useState(); 

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
                setTotal(res.data[0].total);
                setCart(res.data[0].cart)
              setLoading(false);
            });
          }, []);
          const deleteProduct = (e,_id) => {
            e.preventDefault()
            console.log(_id)
            axios.delete(`http://localhost:8080/cart/cart/delete/${decodedData.id}/${_id}`).then((response) => {
            console.log(" deleted: ", response.data)
            setCart(response.data.cart);
            
          })
       }
        
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
        <Button  onClick={(e)=>deleteProduct(e,elemnt.products._id)} variant="outline-danger"><BsTrash></BsTrash></Button>{' '}



        

      </MDBCardBody>
    </MDBCard>
                   
                    </div>)
                })}
                <h4>Total:{total}</h4>
            </div>
        )
}

export default Cart
