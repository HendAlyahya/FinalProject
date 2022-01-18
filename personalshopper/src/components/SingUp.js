import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt from "jwt-decode";


export default function SignUp (){

    
    const [email,setEmail] = useState();
    const [name,setName] = useState();
    const [password,setPassword] = useState();
    const [typeOfUser,setTypeOfUser] = useState();
    const [signError, setSignError] = useState({
        email: "",
        password: ""
    })


    let navigate = useNavigate();

    const signup = (e) => {
            axios.post(`http://localhost:8080/signup`,{
             name,
             email,
             password,
             typeOfUser
            }     
            ).then((response) => {
                if (response.data.errors) {
                    setSignError(response.data.errors)
                } if (response.data.user) {
                    const token = response.data.user;
                    const userSign = jwt(token);
                    localStorage.setItem('token', token);
                    console.log(token);
                    console.log(response.data.user);
                }
                navigate("/shoper")
            }
            )
    }

    return (

    <div className="SignUp">
     {console.log(typeOfUser)}
        <div class="col-md-10"><br/> 
        <div class="row justify-content-center">
        <div class="col-md-6">
            </div>
            <div class="col-md-5">                  
                 <div class="modal-body">
                     <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">SignUp</label><br/><br/>
                    <input placeholder="Name" onChange = {(e)=> {setName(e.target.value)}} type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input><br/>
                    <input placeholder="Email" onChange = {(e)=> {setEmail(e.target.value)}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    {signError.email == "" ? "" : <p className="alert alert-danger">{signError.email}</p>}<br/>
                    <input placeholder="Password" onChange = {(e)=> {setPassword(e.target.value)}} type="password" class="form-control"></input> <br/>
                    {signError.password == "" ? "" : <p className="alert alert-danger">{signError.password}</p>}
                    <input onChange = {(e)=> {setTypeOfUser("buyer")}} type="radio" id="user" name="signup" value="user"></input>
                    <label for="buyer">buyer</label><br/>
                    <input onChange = {(e)=> {setTypeOfUser("seller")}} type="radio" id="user" name="signup" value="user"></input>
                    <label for="seller">seller</label>
                </div>
                </div>
                <button type="button" class="btn btn-primary" onClick = {(e)=>{signup(e)}}>SignUp</button>
 
            </div>
            </div>
            </div>
            </div>

    )
}



