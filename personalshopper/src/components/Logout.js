import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const Logout = (e) => {
        e.preventDefault()
navigate("/Home")

}

    return (
        <div>
            <button type="button" onClick={(e) => { Logout(e) }}>Logout</button>
        </div>
    )
}
export default Logout