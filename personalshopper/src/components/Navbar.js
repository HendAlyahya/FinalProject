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
{/* <div>
<Carousel>
  <Carousel.Item>
    <img src="https://s3-media0.fl.yelpcdn.com/bphoto/m_kP0nNWkneWUGtD1XE1gw/o.jpg"height="500px"width='1500px'
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src="https://i.pinimg.com/originals/22/5c/75/225c7513ab1508cdb428b1d7dcdc7729.jpg"height="500px"width='1500px'
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src="http://1.bp.blogspot.com/-MGk46DNTcCs/T2rhZT8fIOI/AAAAAAAAS1I/PmemWGT5BL8/s1600/IMG_9382.jpg"height="500px"width='1500px'

      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div> */}

</div>





    )
}

export default Navbar
