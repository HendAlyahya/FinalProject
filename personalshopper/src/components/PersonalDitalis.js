import React from 'react'
import {useEffect , useState} from "react"

function PersonalDitalis() {
    const [User,setUser]=useState()
    const [Loading,setLoading]=useState()
    useEffect(() => {
        axios.get(`http://localhost:3001/Personal/getPersonal/${id}`).then((res) => {
          console.log(res);
          setUser(res.data);
          setLoading(false);
        });
      }, []);


      if (Loading){
        return (<p>loading...</p>)
    }
    return (
        <div>
            
        </div>
    )
}

export default PersonalDitalis
