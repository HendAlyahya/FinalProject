import React from 'react'
import {Card, Button,Form} from "react-bootstrap"
import {AiFillFacebook} from "react-icons/ai";
import {AiFillGoogleSquare} from "react-icons/ai";
import {AiFillTwitterSquare} from "react-icons/ai";
import {Link} from "react-dom";
import {useEffect , useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import jwt from "jwt-decode";


const SingUp = () => { 
  const navigate=useNavigate();

//   const signupNew= (e) => {
//       e.preventDefault()
//       axios
//       .post('http://localhost:8080/singup',{
//           email:Email,
//           password:Password
//       })
//       .then((res) => {
//           console.log(res)
//           navigate("/login");

          
//         }
//         )
       
//      } 
     const [addEmail, setAddEmail] = useState()
     const [addPassword, setAddPassword] = useState()
     const [user, setUser] = useState()


     function handlPost(e){
        console.log(addEmail)
console.log(addPassword)
        e.preventDefault()
        axios.post('http://localhost:8080/signup' , {
            email :addEmail,
            password:addPassword,
            userType: user

        })
        .then((res) => {
            console.log(res.data);
            setUser(res.data.user);
            if (res.data.user) {
                console.log(res.data)
                const token = res.data.user;
                console.log(token)
                localStorage.setItem("token", token);
                const userSign = jwt(token);
                console.log(userSign.userType)
                if(userSign.type==="seller"){
                    navigate(`/Seller/${userSign.id}`);
                }else{
                    navigate(`/Buyer/${userSign.id}`);
              }
            }
            
        })
    }
          return (
            <div>
            <div class="modal-dialog">
                       <div class="modal-content">
                           <div class="modal-header">
                               <h5 class="modal-title" id="registerModalLabel">Signup</h5>
                          
                           </div>
             <div class="modal-body">
                <div class="mb-3">
 <label for="exampleInputEmail1" class="form-label">Email</label>
<input onChange = {(e)=> setAddEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
<label for="exampleInputPassword1" class="form-label">Password</label>
<input onChange = {(e)=> setAddPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1"/>
<label for="exampleInputTypeOfUser" class="form-label">Type Of User</label>
{/* <input onChange = {(e)=> setUser(e.target.value)} type="TypeOfUser" class="form-control" id="exampleInputTypeOfUser"/> */}
<select onChange = {(e)=> setUser(e.target.value)} type="TypeOfUser" id="exampleInputTypeOfUser">
    <option value="1">Buyer</option>
    <option value="2">Seller</option>
    
</select>

                       <p className="OR">OR</p>

                   <div className="iconStyle">
                       <a herf="https://www.facebook.com"><AiFillFacebook></AiFillFacebook></a>
   <a herf="https://support.google.com"><AiFillGoogleSquare></AiFillGoogleSquare></a>
   <a herf="https://twitter.com"><AiFillTwitterSquare></AiFillTwitterSquare></a>
    </div>
               </div>
               </div>
               <div class="modal-footer">
               <button type="button" class="btn btn-primary" onClick = {(e)=>{handlPost(e)}}>Signup</button>
               </div>
            </div>
            </div>
            </div>
          )
      }


export default SingUp



