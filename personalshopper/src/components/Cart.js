import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
// import { useParams } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { Button , Alert } from "react-bootstrap"
import { BsTrash } from "react-icons/bs";
import {Modal} from "react-bootstrap"
function Cart() {
const [Loading, setLoading] = useState(true)
const [cart, setCart] = useState([])
const [total, setTotal] = useState();
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
let decodedData;
const storedToken = localStorage.getItem("token");
if (storedToken) {
decodedData = jwt_decode(storedToken, { payload: true });
let expirationDate = decodedData.exp;
var current_time = Date.now() / 1000;
if (expirationDate < current_time) {
    localStorage.removeItem("token");
}
}
console.log(decodedData.id)
useEffect(() => {
axios.get(`http://localhost:8080/cart/cart/${decodedData.id}`).then((res) => {
    // console.log(res.data[0].cart);
    setTotal(res.data[0].total);
    setCart(res.data[0].cart)
    setLoading(false);
});
}, []);

// useEffect(()=>{
//     const makeRequest = async () => {
//         try {
//             const res = await axios.post("http://localhost:8080/payment",{
//                 tokenId:stripeToken.id,
//                 amount: (cart.total/3.75)*100,  
//             });
          
        


//             } catch (error) {}
//     }
//     stripeToken && makeRequest();
    
// },[stripeToken,cart.total])
//////////////


// function Conform() {
// return(<>
// <Modal.Dialog show={show} variant="success">
//   <Modal.Header closeButton>
//     <Modal.Title>Thank you!</Modal.Title>
//   </Modal.Header>

//   <Modal.Body>
// <p>your order has been confirmed and we will contact you shortly to set a date for receipt</p>
//   </Modal.Body>

//   <Modal.Footer>
//     <Button onClick={() => setShow(false)} variant="outline-success"> Close me!</Button>
//   </Modal.Footer>
// </Modal.Dialog>
// </>
// );
// }
// return (<Conform/>)





////////////




const deleteProduct = (e, _id) => {
    e.preventDefault()
    console.log(_id)
    axios.delete(`http://localhost:8080/cart/cart/delete/${decodedData.id}/${_id}`).then((response) => {
        console.log(" deleted: ", response.data)
        setCart(response.data.cart);
    })
    }
    if (Loading) {
    return (<p>loading...</p>)
    }
    return (
    <div className="Cart0">
        {cart.length !==0 ? 
        <> 
            <div class="cart_title1">Shopping Cart</div>
        {cart.map((elemnt) => {
            return (
                <div >
                
    <div className="cart_items">
    <ul className="cart_list">
    <li className="cart_item clearfix">
    <div className="cart_item_image"><img src={elemnt.products.image} alt="" /></div>
    <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
    <div className="cart_item_name cart_info_col">
    <div className="cart_item_title">Name</div>
    <div className="cart_item_text">{elemnt.products.name}</div>
    </div>
    <div className="cart_item_quantity cart_info_col">
    <div className="cart_item_title">Quantity</div>
    <div className="cart_item_text">{elemnt.qty}</div>
    </div>
    <div className="cart_item_Category cart_info_col">
    <div className="cart_item_title">Category</div>
    <div className="cart_item_text">{elemnt.products.category}</div>
    </div>
    <div className="cart_item_price cart_info_col">
    <div className="cart_item_title">Price</div>
    <div className="cart_item_text">{elemnt.products.price}</div>
    </div>
    <div className="cart_item_total cart_info_col">
    <div className="cart_item_title">Total</div>
    <div className="cart_item_text">{elemnt.subtotal}</div>
    </div>
    <div class="cart_item_color cart_info_col">
    <Button variant="outline-danger" onClick={(e) => deleteProduct(e, elemnt.products._id)}><BsTrash></BsTrash></Button>{' '}
    </div>
    </div>
    </li>
    </ul>
    </div>
    </div>
    )
    })}
    <div className='CardTot'>
    <div classNameName="order_total1">
        <div classNameName="order_total_content text-md-right">
            <div classNameName="order_total_title">Order Total:</div><br></br><hr></hr>
            <div classNameName="order_total_amount">{total}</div><br></br><hr></hr>
            <Button  onClick={handleShow} variant="outline-success" >Confirm Your Order</Button>{' '}
            {/* <Button variant="outline-success" >Payment</Button>{' '} */}

            </div>
    </div>
</div>


<>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your order has been successfully confirmed and we will contact you to schedule a pick-up date!</Modal.Body>
        <Modal.Footer>
          <Button  variant="outline-success" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
</>
</>
:
<h1>cart is empty</h1>
}
        </div>
    )
}
export default Cart;