import React from 'react'
import Navbar from "./Navbar"
import { Button , Card , Carousel } from 'react-bootstrap';

const Home = () => {
    return (
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
    )
}

export default Home