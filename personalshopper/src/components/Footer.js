import React from 'react'
import {MDBIcon , MDBBtn} from 'mdb-react-ui-kit';
// import Swal from 'sweetalert2'

const Swal = require('sweetalert2')





function Footer() {
  
  
 

    return (
        <div>
            <footer className="page-footer font-small stylish-color-dark pt-4">
        
        <div className="container text-center text-md-left">
      
          <div className="row">
      
            <div className="col-md-4 mx-auto">
      
              <h6 className="font-weight-bold text-uppercase mt-3 mb-4">Enter your email to & GET 10% OFF</h6>
            <input placeholder='Your Email address' type="email" id="form5Example25" class="form-control" />
            <MDBBtn  className='BtnS' outline rounded  onClick={()=>{
              
  Swal.fire({
    // position:'top',
    icon: 'success',
    title: 'success',
    showConfirmButton: false,
    timer: 1500
  })

            }}>Submit</MDBBtn>
            

              <div className="col-md-4 col-12">
  
  
               
              </div>
              
      
            </div>
      
      
            <div className="col-md-2 mx-auto">
              
      
              <h6 className="font-weight-bold text-uppercase mt-3 mb-4">CONTACT INFO
              </h6>
      
              <ul className="list-unstyled">
                <li>
                  <a href="#!"><i className='fas fa-phone me-3'></i>888-999-000-1425
                  </a>
                </li>
                <li>
                  <a href="#!"> <i className='fas fa-envelope me-3'></i>azedw@mail.com
                  </a>
                </li>
                <li>
                  <a href="#!"><i className='fas fa-home me-3'></i>austria 99432 HuwaiLink 3</a>
                </li>
            </ul>
      
            </div>
      
      
            <div className="col-md-2 mx-auto">
      
              <h6 className="font-weight-bold text-uppercase mt-3 mb-4">COMPANY</h6>
      
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
      
      
            <div className="col-md-2 mx-auto">
      
              <h6 className="font-weight-bold text-uppercase mt-3 mb-4">PAYMENT & SHIPPING</h6>
      
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
      <div className='container p-4 pb-0'>
        <section className='mb-4'>
          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </a>
          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </a>
           </section>
      </div>
      </footer>
        </div>
    )
    
}

export default Footer
