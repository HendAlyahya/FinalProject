import React from 'react'
import {Card, Button,Form} from "react-bootstrap"


function SingUp() {
    return (
        <div>
   
  <Form.Floating className="mb-3">
    <Form.Control
      id="floatingInputCustom"
      type="email"
      placeholder="name@example.com"/>
    <label htmlFor="floatingInputCustom">Email address</label>
  </Form.Floating>
  <Form.Floating>
    <Form.Control
      id="floatingPasswordCustom"
      type="password"
      placeholder="Password"
    />
    <label htmlFor="floatingPasswordCustom">Password</label>
  </Form.Floating>

   
    <div id="btn" class="text-center">
   <button type="button" class="btn btn-primary btn-circle btn-sm"><i class="fa fa-facebook"></i></button>
   <button type="button" class="btn btn-danger btn-circle btn-sm"><i class="fa fa-google"></i></button>
   <button type="button" class="btn btn-info btn-circle btn-sm"><i class="fa fa-twitter"></i></button>
   </div>


  </div>
 
            
        
    )
}

export default SingUp



