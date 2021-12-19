import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes, Link , useNavigate} from "react-router-dom";
import Shoper from './components/Shoper'
import PaymentMethod from './components/PaymentMethod';
import Footer from './components/Footer'
import SingUp from "./components/SingUp"
import login from "./components/login"





function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" exact component={SingUp}/>
          <Route path="/login" exact component={login}/>
        </Routes>
      </div>
      <Navbar></Navbar>;
      <Footer/>

   


{/* //   <SingUp></SingUp> */}
    </div>
  )

  
  
}

export default App;
