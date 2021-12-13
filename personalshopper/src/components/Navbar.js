import React from 'react'
import { Button , Card , Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const Navbar = () => {
    return (<div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Personal Shoper</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Shop</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link disabled">SingUp</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div>
<Carousel>
  <Carousel.Item>
    <img src="https://www.fashionlabparis.com/wp-content/uploads/2018/05/personal_shopping-1600x541.jpg"height="500px"width='1500px'
      alt="First slide"
    />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?cs=srgb&dl=pexels-shattha-pilabut-135620.jpg&fm=jpg"height="500px"width='1500px'
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"height="500px"width='1500px'

      alt="Third slide"
    />

    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

</div>





    )
}

export default Navbar
