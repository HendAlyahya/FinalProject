import React from 'react'
import {useffect , useState}from "react"

function Shoper() {
useEffect(()=>{
    axios.get("http://localhost:8080/Personal/getAll")
})


    return (
        <div>
            
        </div>
    )
}

export default Shoper
