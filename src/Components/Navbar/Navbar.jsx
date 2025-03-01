import React from 'react'
import Box from '@mui/material/Box';
import logoImage from '../../assets/Navbar/NavImage.webp'
import { Typography } from '@mui/material';
const Navbar = () => {
  return (
    <Box sx={{
        // opacity:'0.4',
        fontFamily: 'Quicksand, Arial, sans-serif',
        overflow:'hidden',
        display:'flex',
        p:{xs:2, sm:3},
        justifyContent:'space-around',
        alignItems:'center',
        // width:'100%',
        height:'100px',
        backgroundColor:'#EFF3F4',
    }}>
        <Box sx={{
             overflow:'hidden',
             display:{xs:'none', sm:'flex'},
             justifyContent:'flex-start',
             alignItems:'center',
             gap: 2
        }}>
            <Typography>Home</Typography>
            <Typography>Investment Strategies</Typography>
            <Typography>About</Typography>
        </Box>
        <Box>
            <img style={{
                height:'100px',
                width:'100px',

            }} src={logoImage}></img>
        </Box>
        <Box sx={{
             display:{xs:'none', sm:'flex'},
             justifyContent:'flex-start',
             alignItems:'center',
             gap: 2
        }}>
            <Typography>Solutions</Typography>
            <Typography>Stock Market</Typography>
            <Typography>More</Typography>
        </Box>
    </Box>
  )
}

export default Navbar