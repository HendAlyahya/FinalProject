import React from 'react'
import {useEffect , useState} from "react"
import axios from "axios"
import { useParams } from 'react-router-dom'


function PersonalDitalis() {
    const [User,setUser]=useState()
    const [Loading,setLoading]=useState(true)
    const {id}=useParams()
    useEffect(() => {
        axios.get(`http://localhost:8080/Personal/getPersonal/${id}`).then((res) => {
          console.log(res.data);
          setUser(res.data);
          setLoading(false);
        });
      }, []);


      if (Loading){
        return (<p>loading...</p>)
    }
    return (
        <div>
            <p>{User.name}</p> 
             {User.proudct?.map((e)=>{
              return(
                  <div>
     <h1>{e.name}</h1> 
     <h1>{e.category}</h1> 
     <h1>{e.description}</h1> 
     <h1>{e.price}</h1> 
     <h1>{e.image}</h1> 
     <h1>{e.comment}</h1> 
    
    

                      </div>
              )  
            })}
        </div>
    )}

export default PersonalDitalis
