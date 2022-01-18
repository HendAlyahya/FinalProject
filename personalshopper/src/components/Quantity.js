const Quantity = ({setQty}) =>{
    return(
        <>
        <input  onChange = {(e)=> setQty(e.target.value)} type="number" name="qty" id="qty" />
        </>
    )
}

export default Quantity;