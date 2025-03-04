import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import HeroImage from '../../assets/AboutUs/Aboutus.webp'
import HeroImage2 from '../../assets/HeroSection/HeroImage.mp4'
const HeroSection = () => {
  return (
    <Box sx={{ 
        position:'relative',
        zIndex:'1',
        overflow:'hidden',
        display:'flex',
        justifyContent:{xs:'center', sm:'flex-start'},
        alignItems:{xs:'center', sm:'center'},
        backgroundImage:`url(${HeroImage})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height:'600px'
    }}>
        {/* <iframe style={{
             width:'100',
             height:'600px',
        }} src={HeroImage}></iframe> */}
        <Box sx={{
           
            marginLeft:8,
            width:{xs: '80%', sm:'60%', md:'60%'}
        }}>
            <Typography sx={{
                color:'#fff',
                fontSize:{xs:'1.3rem', sm:'1.5rem,', md:'3rem'},
                fontWeight:{xs:'500px', sm:'600px', md:'800px'},
                mb:2,
            }}>UNLOCKING YOUR BUSINESS SUCCESS</Typography>
            <Typography sx={{
                color:'#fff',
                fontSize:{xs:'1rem', sm:'1.3rem,', md:'1.5rem'},
                fontWeight:{xs:'500px', sm:'600px', md:'800px'},
                my:3,
            }}>At Amayra Enterprises, we are dedicated to guiding businesses towards sustainable growth through tailored solutions.</Typography>
            <Button sx={{
                my:2,
                backgroundColor:'#37A5ED',
                color:'#000000',
                borderRadius:'0',
                padding:'15px',
                fontWeight:'bold'
            }}>GET STARTED</Button>
        </Box>
        {/* <Box sx={{
            zIndex: '10',
            // border:'2px solid black',
           position:'relative',
           top:'-20px',
            mx:4,
            p:{xs:3,sm:2},
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center',
            height:{xs:'200px', sm:'300px'},
            width:{xs:'200px', sm:'300px'},
            borderRadius:'50%',
            backgroundColor:'#959DA7',
        }}>
            <Typography sx={{
                my:2,
                fontSize: {xs:'1.3rem', sm:'1.5rem'},
                textAlign:'center',
            }}>PROFESSIONAL TECHNOLOGY ASSISTANCE</Typography>
            <Button sx={{
                p: 2,
                borderRadius:'0px',
                my:2,
                color:'#fff',
                backgroundColor:'#000000',
                boxShadow: '5px 5px 10px rgba(0,0,0,1)'
            }}>BOOK NOW</Button>
        </Box> */}
    </Box>
  )
}

export default HeroSection