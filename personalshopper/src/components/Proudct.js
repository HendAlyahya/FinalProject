import React from 'react'
import {useEffect , useState} from "react"
import axios from "axios"
import { useParams } from 'react-router-dom'
import jwt_decode from "jwt-decode";




function Proudct({element}) {
    let decodedData ;
    const storedToken = localStorage.getItem("token");
    if (storedToken){
      decodedData = jwt_decode(storedToken, { payload: true });
       console.log(decodedData);
       let expirationDate = decodedData.exp;
        var current_time = Date.now() / 1000;
        if(expirationDate < current_time)
        {
            localStorage.removeItem("token");
        }
     }
const [User,setUser]=useState()
const [qty,setQty]=useState()
const [Loading,setLoading]=useState(true)
const {id}=useParams()
useEffect(() => {
axios.get(`http://localhost:8080/Personal/getPersonal/${id}`).then((res) => {
    console.log(res.data);
    setUser(res.data);
    setLoading(false);
});
}, []);

///////////////

function AddCart(_id){
    console.log(qty)
    axios.post("http://localhost:8080/cart/cart/post",{
      product:_id ,userId:decodedData.id,qty:qty
    }).then((res)=>{
        console.log(res)
      
    })
  
  }

  ////////////


return (
        <>
        </>
)
}

export default Proudct
