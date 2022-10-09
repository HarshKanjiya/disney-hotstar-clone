import React, { useEffect } from 'react'
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'


import NavBar from './navBar'
import Slider1 from '../assets/images/slider-badag.jpg'
import Slider2 from '../assets/images/slider-badging.jpg'
import Slider3 from '../assets/images/slider-scale.jpg'
import Slider4 from '../assets/images/slider-scales.jpg'

import Brand1 from '../assets/images/viewers-disney.png'
import Brand2 from '../assets/images/viewers-marvel.png'
import Brand3 from '../assets/images/viewers-national.png'
import Brand4 from '../assets/images/viewers-pixar.png'
import Brand5 from '../assets/images/viewers-starwars.png'

import video1 from '../assets/videos/1564674844-disney.mp4'
import video2 from '../assets/videos/1564676115-marvel.mp4'
import video3 from '../assets/videos/1564676296-national-geographic.mp4'
import video4 from '../assets/videos/1564676714-pixar.mp4'
import video5 from '../assets/videos/1608229455-star-wars.mp4'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'

const auth = getAuth();


function Home() {
const navigate= useNavigate()
  
  useEffect(()=> {
    if(!auth.currentUser){navigate(-1)}
  },
  [auth])

    var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed:2000,
        draggable:true,



      };
  return (
    <Container className='Home-bg' >
    <NavBar/>

    <Carousel className='slider' {...settings} autoplay='true' >
      
      <SliderImg>
        <img src={Slider1} />
      </SliderImg>
      
      <SliderImg>
        <img src={Slider2} />
      </SliderImg>
      
      <SliderImg>
        <img src={Slider3} />
      </SliderImg>
      
      <SliderImg>
        <img src={Slider4} />
      </SliderImg>
    </Carousel>

    <BrandWrapper>
    <Brands>
      <Brand  >
      <video src={video1} autoPlay loop />
        <img src={Brand1} />
      </Brand>
      <Brand >
      <video  src={video2} autoPlay loop   />
        <img src={Brand2} />
      </Brand>
      <Brand >
      <video  src={video3} autoPlay loop   />
        <img src={Brand3} />
      </Brand>
      <Brand >
      <video  src={video4} autoPlay loop   />
        <img src={Brand4} />
      </Brand>
      <Brand >
      <video  src={video5} autoPlay loop  />
        <img src={Brand5} />
      </Brand>
    </Brands>
    </BrandWrapper>

 
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
width: 100vw;
margin-top: 9vh;
padding-top: 20px;

overflow-x: hidden;


`
const Carousel = styled(Slider)`
margin-bottom: 20px;
border: none;
outline: none;
user-select: none;
ul li button{
  &::before{
    font-size: 10px;
    color: aliceblue;
  }
}
li.slick-active button:before{
  color: white;
}

`
const SliderImg = styled.div`
border: none;
outline: none;
user-select: none;
width: 90vw;
padding-bottom: 30px;



img{
  height: auto;
        width: 98vw;
        border-radius: 11px;
        user-select: none;
        transition: 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 10px 30px rgba(0,0,0,0.7);
      &:hover{
        border: 3px solid #f5f5f5;
      }
        
}
`
const BrandWrapper = styled.div`
width: 100vw;
display: flex;
justify-content: center;

`

const Brands = styled.div`
height: max-content;
margin-top: 30px;

display: grid;

grid-template-columns: repeat(5,minmax(100px,1fr));
grid-gap: 40px;

@media (max-width: 1000px) {
  grid-template-columns: repeat(3,minmax(100px,1fr));
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(2,minmax(80px, 1fr));
      grid-gap: 10px;
    }

`

const Brand = styled.div`
/* height: 100px; */

/* max-width: 20vw; */
display: flex;
align-items: center;
justify-content: center;
position: relative;
box-shadow: 0 10px 30px rgba(0,0,0,0.7);
border-radius: 9px;
transition: 300ms;
/* overflow: hidden; */
&:hover{
  scale:1.03;

  img{
    border-color: white;
  }
}

img{
  max-width: 45vw;
  width: auto;
  height: 100px;
  border-radius: 9px;
  border: 2px solid #565656;
  z-index: 99;
  
}

video{
  position: absolute;
  /* background-color: aliceblue; */
  border-radius: 9px;
  max-width: 45vw;
  width: auto;
  height: 98px;
  opacity: 0;
  transition: 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
}

&:hover{
  video{
    opacity: 1;
  }
}

`