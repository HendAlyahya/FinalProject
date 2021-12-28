import React from 'react'
import {Nav} from "react-bootstrap"
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
import login from "./login"
import { FiUserPlus } from "react-icons/fi";
import { BiHome ,BiLogOut ,BiLogIn  } from "react-icons/bi";
import { FaSignOutAlt ,FaStore ,FaSearch } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { AiOutlineHome ,AiOutlinePoweroff } from "react-icons/ai";  
import { BsShopWindow } from "react-icons/bs";
import { GiWoodCabin } from "react-icons/gi";
// import logout from "./Logout"
import axios from "axios"
import jwt_decode from "jwt-decode";
import {useEffect , useState} from "react"
import { FcSearch } from "react-icons/fc";



const Navbar = () => {
  const [Loading,setLoading]=useState(true)
  const [cart,setCart]=useState()
function logout(){
  localStorage.removeItem("token")
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
 }
      useEffect(() => {
        if(decodedData==undefined){
          setCart(0)
        }
        else{
          axios.get(`http://localhost:8080/cart/cart/${decodedData.id}`).then((res) => {
            console.log(res.data);
            console.log(res.data[0]?.cart?.length);
            setCart(res.data[0]?.cart?.length)
            setLoading(false);
          });
        }
          
        }, []);
    return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">

    <Navbar.Brand href="#">Navbar</Navbar.Brand>
    <Nav.Link href="/Home"><AiOutlineHome></AiOutlineHome></Nav.Link>
    {(function(){
         if(decodedData==undefined){
           return(
             <>
    <Nav.Link ><Link to="/shoper"><BsShopWindow></BsShopWindow></Link></Nav.Link>
    <Nav.Link ><Link to="/SingUp"><FaUserEdit></FaUserEdit></Link></Nav.Link>
    <Nav.Link ><Link to="/login"><BiLogIn></BiLogIn></Link></Nav.Link>
   
  </>
           )
         }
         else{
          return(
            <>
      <Nav.Link ><Link to="/shoper"><BsShopWindow></BsShopWindow> </Link></Nav.Link>
      <Nav.Link ><Link t0="logout" onClick={()=>{logout()}}> <  AiOutlinePoweroff></AiOutlinePoweroff></Link></Nav.Link>

           </>
           )
         }
       })()}
       <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit"><FcSearch></FcSearch></button>
        
      </form>

      <li class="nav-item">
        <a class="nav-link" href="/Cart">
          <span class="badge badge-pill bg-danger">{cart}</span>
          <span><i class="fas fa-shopping-cart"></i></span>
        </a>
      </li>

</Navbar>
      


      
<div>

</div>
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
          <Route  path="/PersonalDitalis/:id" element={<PersonalDitalis />} />
          <Route  path="/singUp" element={<SingUp />} />
          <Route  path="/login" element={<login />} />
          {/* <Route  path="/logout" element={<logout />} /> */}
 </Routes>  
</div>





    )
}

export default Navbar
