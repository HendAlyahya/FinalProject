import React from 'react'
import {useEffect , useState} from "react"
import axios from "axios"
import { useParams } from 'react-router-dom'


function PersonalDitalis() {
    const [User,setUser]=useState()
    const [Loading,setLoading]=useState()
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
     name: 
    category: 
    description: 
    price:
    image: 
    comment:

                      </div>
              )  
            }}
        </div>
    )
}

export default PersonalDitalis
