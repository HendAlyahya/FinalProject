import React from 'react'
import {Card, Button,Form} from "react-bootstrap"
import {AiFillFacebook} from "react-icons/ai";
import {AiFillGoogleSquare} from "react-icons/ai";
import {AiFillTwitterSquare} from "react-icons/ai";
import {Link} from "react-dom"
import {useEffect , useState} from "react"
import axios from "axios";
import {useNavigate} from "react-router-dom"


const SingUp = () => {
  const [Email, setEmail] = useState()
  const [Password, setPassword] = useState()
  const navigate=useNavigate();

  const signupNew= (e) => {
      e.preventDefault()
      axios
      .post('http://localhost:8080/singup',{
          email:Email,
          password:Password
      })
      .then((res) => {
          console.log(res)
          navigate("/login");

          
        }
        )
       
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
                   <input onChange = {(e)=> {setEmail(e.target.value)}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                   <label for="exampleInputPassword1" class="form-label">Password</label>
                   <input onChange = {(e)=> {setPassword(e.target.value)}} type="password" class="form-control" id="exampleInputPassword1"></input>
                       <p className="OR">OR</p>

                   <div className="iconStyle">
                       <a herf="https://www.facebook.com"><AiFillFacebook></AiFillFacebook></a>
   <a herf="https://support.google.com"><AiFillGoogleSquare></AiFillGoogleSquare></a>
   <a herf="https://twitter.com"><AiFillTwitterSquare></AiFillTwitterSquare></a>
    </div>
               </div>
               </div>
               <div class="modal-footer">
               <button type="button" class="btn btn-primary" onClick = {(e)=>{signupNew(e)}}>Signup</button>
               </div>
            </div>
            </div>
            </div>
          )
      }


export default SingUp



