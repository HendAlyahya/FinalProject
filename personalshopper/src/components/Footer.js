import React from 'react'
import {useState} from "react"
import {Card, Form , Row ,Col, Button ,Modal} from "react-bootstrap"

function Footer() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <footer className="page-footer font-small stylish-color-dark pt-4">
        
        <div className="container text-center text-md-left">
      
          <div className="row">
      
            <div className="col-md-4 mx-auto">
      
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">SIGN UP NOW & GET 10% OFF</h5>
              <p>Get timely updates from your favorite products</p>
              <div className="col-md-5 col-12">
  
  
                <div className="form-outline mb-4">
                  <input type="email" id="form5Example27" className="form-control"></input>
                  <label className="form-label" for="form5Example27">Email address</label>
                </div>
              </div>
              
      
            </div>
      
            {/* <hr className="clearfix w-100 d-md-none"></hr> */}
      
            <div className="col-md-2 mx-auto">
      
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">CONTACT INFO
              </h5>
      
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Phone: 888-999-000-1425
                  </a>
                </li>
                <li>
                  <a href="#!">Email: azedw@mail.com
                  </a>
                </li>
                <li>
                  <a href="#!">Address: 22/1 natinoal city austria, dreem land, HuwaiLink 3</a>
                </li>
            </ul>
      
            </div>
      
            {/* <hr className="clearfix w-100 d-md-none"></hr> */}
      
            <div className="col-md-2 mx-auto">
      
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">COMPANY</h5>
      
              <ul className="list-unstyled">
                <li>
                  <a href="/AboutUs">About Us</a>
                </li>
                <li>
                  <a href="/BestService">Best Services</a>
                </li>
            
                <li>
                  <a href="/PrivacyPolicy">Privacy Policy</a>
                </li>
              </ul>
      
            </div>
      
            {/* <hr className="clearfix w-100 d-md-none"></hr> */}
      
            <div className="col-md-2 mx-auto">
      
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">PAYMENT & SHIPPING</h5>
      
              <ul className="list-unstyled">
                <li>
                  <a href="/PaymentMethod">Payment Method</a>
                </li>
                <li>
                  <a href="/ShippingPolicy">Shipping Policy</a>
                </li>
                <li>
                  <a href="ReturnPolicy">Return Policy</a>
                </li>
             
              </ul>
      
            </div>
      
          </div>
      
        </div>
      
        {/* <hr> */}
      
        <ul className="list-unstyled list-inline text-center py-2">
          <li className="list-inline-item">
            <h5 className="mb-1">Register for free</h5>
          </li>
          <li className="list-inline-item">
            <a  className="btn btn-danger btn-rounded"   onClick={handleShow}>Sign up!</a>
          </li>
        </ul>
      
      {/* </hr>
        <hr>
       */}
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a className="btn-floating btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-tw mx-1">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-gplus mx-1">
              <i className="fab fa-google-plus-g"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-li mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-dribbble mx-1">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      {/* </hr> */}
        <div className="footer-copyright text-center py-3">© 2021 WP Studio , All Rights Reserved
          <a href="https://mdbootstrap.com/"></a>
        </div>
     <div>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SingUp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      E-mail
    </Form.Label>
    <Col sm="10">
      <Form.Control type="email" placeholder="Enter Your Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Submit
          </Button>
         
        </Modal.Footer>
      </Modal>
      </div>
      
      </footer>
        </div>
    )
}

export default Footer
