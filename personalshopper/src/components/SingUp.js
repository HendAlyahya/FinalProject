import React from 'react'
import {Card, Button,Form} from "react-bootstrap"


function SingUp() {
    return (
        <div className="BgSing">

       
        <div>
            <Card className="SingupForm" >
  <Card.Header>Reristration</Card.Header>
  <Card.Body className="CardBody">
    <Card.Title>SingUp</Card.Title>
    <Card.Text>
      
  <Form.Floating >
    <Form.Control id="floatingInputCustom" type="email" placeholder="Enter Your Email"/>
    <label htmlFor="floatingInputCustom">Email address</label>
  </Form.Floating>
  <Form.Floating>
    <Form.Control id="floatingPasswordCustom" type="password" placeholder="Password"/>
    <label htmlFor="floatingPasswordCustom">Password</label>
    
  </Form.Floating>

    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  
   
   

  </div>
 
  </div>    
        
    )
}

export default SingUp



