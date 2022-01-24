import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Link , useNavigate} from "react-router-dom";
import Home from './Home'
import Shoper from './Shoper'
import PaymentMethod from "./PaymentMethod"
import ShippingPolicy from "./ShippingPolicy"
import ReturnPolicy from "./ReturnPolicy"
import AboutUs from "./AboutUs"
import BestService from "./BestService"
import PrivacyPolicy from "./PrivacyPolicy"
import Cart from "./Cart"
import PersonalDitalis from "./PersonalDitalis"
import SingUp from "./SingUp"
import Login from "./login"
import axios from "axios"
import jwt_decode from "jwt-decode";
import {Navbar , Container, Nav , Button} from "react-bootstrap"
import {useEffect , useState} from "react"
const NavBar = () => {
  const [Loading,setLoading]=useState(true)
  const [cart,setCart]=useState()
  let navigate = useNavigate()
  const [ refresh, setRefresh] = useState()

function logout(){
localStorage.removeItem("token")
navigate('/')
} 

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
 }   useEffect(() => {
  if(decodedData==undefined){
    setCart(0)
  }
  else{
    axios.get(`http://localhost:8080/cart/cart/${decodedData.id}`).then((res) => {
      console.log(res.data);
      console.log(res.data[0]?.cart?.length);
      setCart(res.data[0]?.cart?.length)
      setLoading(false);
      setRefresh(false)
    });
  }
    
  }, [refresh]);
  return (
    
    <div>


<Navbar bg="light" expand="lg">
  <Container fluid>
  
    <Navbar.Toggle aria-controls="navbarScroll" />
    
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link><Link to="/Home">Home</Link></Nav.Link>
        <Nav.Link ><Link to="/shoper">Shopper </Link></Nav.Link>
        {storedToken ?
        
        <Nav.Link > <a  className="logout" onClick={()=>{logout()}}>logout </a></Nav.Link>

        :
            <> 
             <Nav.Link ><Link to="/SingUp">Singup</Link></Nav.Link>
        <Nav.Link ><Link to="/login">Login</Link></Nav.Link>
            </>
       
        }
         
          
        
         
        
         
       

        
      </Nav>
      <Nav className="d-flex">
      <li class="nav-item">
        <a class="nav-link" href="/Cart">
          <span class="badge badge-pill bg-danger">{cart}</span>
          <span><i class="fas fa-shopping-cart"></i></span>
        </a>
      </li>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route  path="/shoper" element={<Shoper />} />
          <Route  path="/PaymentMethod" element={<PaymentMethod />} />
          <Route  path="/ShippingPolicy" element={<ShippingPolicy />} />
          <Route  path="/ReturnPolicy" element={<ReturnPolicy />} />
          <Route  path="/AboutUs" element={<AboutUs />} />
          <Route  path="/BestService" element={<BestService />} />
          <Route  path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route  path="/Cart" element={<Cart />} />
          <Route  path="/PersonalDitalis/:id" element={<PersonalDitalis setRefresh={setRefresh} />} />
          <Route  path="/singUp" element={<SingUp />} />
          <Route  path="/login" element={<Login />} />
          {/* <Route  path="/logout" element={<logout />} /> */}
 </Routes>  
</div>

    )
}
export default NavBar