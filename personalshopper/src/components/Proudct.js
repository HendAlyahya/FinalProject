import React from 'react'

function Proudct() {
function AddCart(){
    axios.post("http://localhost:8080/cart/cart/post").then((res)=>{
        console.log(res)
    })

}
    return (
        <div>
            
        </div>
    )
}

export default Proudct
