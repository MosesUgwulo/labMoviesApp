import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getTrendingShows } from '../api/tmdb-api'
import TrendingShowCard from '../components/trendingShows'
import { Carousel, CarouselItem } from "react-bootstrap";
//import transitions from '@mui/styles/transitions'
import IconButton from '@mui/material/IconButton';

import Button from "@mui/material/Button";

export default function Feeling() {

    const {  data, error, isLoading, isError }  = useQuery('trendingShows', getTrendingShows )

    if (isLoading) {
        return <Spinner />
      }
    
      if (isError) {
        return <h1>{error.message}</h1>
      }  
      const shows = data.results;

    
      console.log(shows)

    return (
       

 <div >
<div style={{justifyContent: 'center',width:'100%',display:'flex'}}>
        <h1 style={{ justifyContent:"center"}}>What will you watch today?</h1>
        </div>
        

<div  style={{
        
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        paddingTop:'20em',
        
    }}>
<Carousel

          showarrows='False'
          infiniteloop='True'
          interval='0.00000000001'
          stoponhover='True'
          fade = 'True'
          slide='False'
          wrap='True'
          >

{shows.map((show)=>{
  return(
    
   <Carousel.Item >
     <br/>
      <TrendingShowCard show={show}/>
   
 </Carousel.Item>
  )
})}

</Carousel>
</div>
</div>
           
            
        
    )
}