// import React from 'react'
// import { useState, useEffect } from "react";
// import axios from "axios";
// import jwt_decode from "jwt-decode";
// import { useParams, useNavigate } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
// import { BsTrash } from "react-icons/bs";
// import { FcRightDown2 } from "react-icons/fc";

// export default function Comment() {
//     const [comment, setComment] = useState("");
//     const [updateUser, setUpdateUser] = useState(false);
//     const [loading, setLoading] = useState(false);
//   const [user, setUser] = useState();
//   const [product, setProduct] = useState([]);

//   const { id } = useParams();

//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };


//   let navegate = useNavigate();
//   let decodedData;
//   const storedToken = localStorage.getItem("token");
//   if (storedToken) {
//     decodedData = jwt_decode(storedToken, { payload: true });
//     console.log(decodedData);
//     let expirationDate = decodedData.exp;
//     var current_time = Date.now() / 1000;
//     if (expirationDate < current_time) {
//       localStorage.removeItem("token");
//     }
//   }

//   useEffect(() => {
//     axios.get(`/product/getProduct/${id}`).then((res) => {
//       console.log(res.data);
//       setUser(res.data);
//       setProduct(res.data.products);
//       setLoading(true);
//       setUpdateUser(false);
//     });
//   }, [updateUser]);

//      // add comment
//   function AddComment() {
//     axios
//       .post(`/comment/post/${id}/${decodedData.id}`, {
//         comment: comment,
//       })
//       .then((res) => {
//         console.log(res);
//         setUpdateUser(true);
//       });
//   }

//    // delete comment
//    function deleteComment(did) {
//     axios
//       .delete(`/comment/delete/${did}`)
//       .then((response) => {
//         console.log(" deleteComment: ", response.data);
//         setComment(response.data);
//         setUpdateUser(true);
//       });
//   }
//     return (
//         <div>
           
        
                    
//     <Carousel>
//          {user.comments.map((com)=>{
//              return(
//                  <div>
//   <Carousel.Item>
//       <div>
//           <h1>{com.bayerId.name}</h1>
//           <p>{com.comment}</p>
//       </div>
    
    
//     <Carousel.Caption>
//       <h5>First slide label</h5>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=Second slide&bg=eee"
//       alt="Second slide"
//     />
//     <Carousel.Caption>
//       <h5>Second slide label</h5>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=Third slide&bg=e5e5e5"
//       alt="Third slide"
//     />
//     <Carousel.Caption>
//       <h5>Third slide label</h5>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   </div>       

                    
//                 )
//             })}
//             </Carousel>

           
//         </div>
//     )
// }
