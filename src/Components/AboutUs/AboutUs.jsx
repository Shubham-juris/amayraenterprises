import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AboutImage from '../../assets/AboutUs/Aboutus.webp'
import AboutImage2 from '../../assets/AboutUs/AboutUs2.webp'
const About = () => {
  return (
    <Box sx={{
        overflow:'hidden',
        backgroundColor:'#000000',
        mb:4,

    }}>
        <Typography sx={{
            color:'#fff',
            fontSize:'1.3rem',
            paddingX:5,
            paddingY:3,
            fontWeight:'bold',
            textAlign:'center'
        }}>

        Who We Are at Amayra Enterprises
        </Typography>
        <Box sx={{
            display:'flex',
            flexDirection:{xs:'column', sm:'row'},
            justifyContent:'center',
            alignItems:'center'
        }}>

            
        {/* about section1 */}
        <Box sx={{
            display:'flex',
            gap:5,
            flexDirection:{xs:'column',md:'row'},
        }}>
        <Box sx={{
            display:'flex',
            flexDirection:{xs:'column',sm:'column'},
            justifyContent:'center',
            alignItems:'center'
        }}>
        <Box sx={{
                    width: { xs: '80vw', sm: '60vw', md: '40vw' },
                  
                    height:'300px',
                    display: 'flex',
                    backgroundImage: `url(${AboutImage})`, 
                    backgroundSize: 'cover',   
                    backgroundPosition: 'center', 
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
>
            </Box>
            <Box sx={{
                //  height:{xs:'400px', sm:'40vh'},
                height:'300px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: { xs: '100vw', sm: '60vw', md: '40vw' },
                // backgroundColor: '#fff',
            }}>
                <Typography sx={{
                    color: '#fff',
                    my: 2,
                    fontSize:{xs:'1.3rem', sm:'1.5rem'},
                    overflow:'hidden'
                }}>
                    Our Mission
                </Typography>
                <Typography sx={{
                    color: '#785E5E',
                    my: 1,
                    px:5,
                    fontSize:{xs:'13px', sm:'18px'},
                    overflow:'hidden'
                }}>
                    At Amayra Enterprises, our mission is to empower businesses to achieve sustainable growth and success by providing innovative solutions tailored to their unique needs. Through strategic guidance, industry expertise, and collaborative partnerships, we strive to unlock new opportunities, drive operational excellence, and create long-term value for our clients. 
                </Typography>
                </Box>
                </Box>
                {/* about section 2 */}
        <Box sx={{
            display:'flex',
            flexDirection:{xs:'column', sm:'column'},
            justifyContent:'center',
            alignItems:'center'
        }}>
        <Box sx={{
                    width: { xs: '80vw', sm: '60vw', md: '40vw' },
                  
                    height:'300px',
                    display: 'flex',
                    backgroundImage: `url(${AboutImage2})`, 
                    backgroundSize: 'cover',   
                    backgroundPosition: 'center', 
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
>               
            </Box>

            
            <Box sx={{
                //  height:{xs:'400px', sm:'40vh'},
                height:'300px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: { xs: '100vw', sm: '60vw', md: '40vw' },
                // backgroundColor: '#fff',
            }}>
                <Typography sx={{
                    textAlign:'left',
                    color: '#fff',
                    my: 1,
                    fontSize:'1.5rem',
                    overflow:'hidden'
                }}>
                    Our Vision
                </Typography>
                <Typography sx={{
                    color: '#785E5E',
                    my: 1,
                    px:5,
                    fontSize:{xs:'13px', sm:'18px'},
                    overflow:'hidden'
                }}>
                      At Amayra Enterprises, Our vision at Amayra Enterprises is to be the leading partner of choice for businesses seeking to thrive in a dynamic and competitive marketplace. We envision a future where every business, regardless of size or industry, has the tools, resources, and support needed to realize its full potential and make a positive impact on the world 
                </Typography>
                </Box>
                </Box>
                </Box>
        </Box>
    </Box>
  )
}

export default About