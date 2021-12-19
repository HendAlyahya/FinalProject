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
import login from "./login"
import { FiUserPlus } from "react-icons/fi";
import { BiHome ,BiLogOut ,BiLogIn  } from "react-icons/bi";
import { FaSignOutAlt ,FaStore ,FaSearch } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";



const Navbar = () => {
    return (
    <div>


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Personal Shoper</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Home"><BiHome></BiHome></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" > <Link to="/shoper"><FaStore></FaStore> </Link></a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link "> <Link to="/SingUp"><FaUserEdit></FaUserEdit></Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link "> <Link to="/login"><BiLogIn></BiLogIn></Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link "> <Link to="/logout"><FaSignOutAlt></FaSignOutAlt></Link></a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit"><FaSearch></FaSearch></button>
        
      </form>
      <li class="nav-item">
        <a class="nav-link" href="/Cart">
          <span class="badge badge-pill bg-danger">1</span>
          <span><i class="fas fa-shopping-cart"></i></span>
        </a>
      </li>
    </div>
  </div>
</nav>
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
 </Routes>  
</div>





    )
}

export default Navbar
