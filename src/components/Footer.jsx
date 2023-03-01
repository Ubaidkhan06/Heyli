import { Button, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import mobile from '../assets/mobile.png'
import playstore from '../assets/playstore.png'
import footer from '../assets/footer.png'
import appstore from '../assets/appstore.png'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
    const list = ['Home', 'Join Us', 'Merchant Log In', 'Franchise Log In']
    return (
        <>
            <Box className='footer-box' padding={'0.5rem'} display={'flex'} justifyContent='center'>
                <img height={'100px'} src={mobile} alt="mobile" />
                <Box display={'flex'} paddingLeft='10px' flexDirection={'column'} alignItems={'center'} justifyContent='center' color='white'>
                    <Typography variant='h6'>
                        Get Started Now
                    </Typography>
                    <Typography>
                        Join Helyi and be a part of this revolution where we connect small towns in India!
                    </Typography>
                    <Box>
                        <img className='img-1' src={playstore} alt="playstore" />
                        <img className='img-1' src={appstore} alt="playstore" />
                    </Box>
                </Box>
            </Box>
            <Box mx={5} my={2} display='flex' justifyContent={'space-between'}>
                <Box>
                    <Typography color="#F38844" mb={2}>
                        Contact Details
                    </Typography>
                    <Stack spacing={2}>
                        <Typography>
                            Karthikeya Business Solutions
                            Vijaywada, Andhra Pradesh
                        </Typography>
                        <Typography>
                            Pincode: 564 543
                        </Typography>

                        <Typography>
                            Tel: +91 98745 66432, 040 3324 4352 <br />
                        </Typography>

                        <Typography color='#F38844'><span style={{ color: 'black' }}>Email: </span> info@helyi.com</Typography>

                        <Box display='flex' justifyContent={'space-around'}>
                            <YouTubeIcon />
                            <InstagramIcon />
                            <FacebookIcon />
                            <LinkedInIcon />
                            <TwitterIcon />
                        </Box>
                    </Stack>
                </Box>
                <Box>
                    <Typography color="#F38844" mb={2}>
                        Quick Links
                    </Typography>
                    <Stack spacing={2}>
                        {list.map(item => (
                            <Typography key={item}>
                                {item}
                            </Typography>
                        ))}
                        <Box display='flex' justifyContent={'center'} gap={2}>
                            <img className='img-1' src={playstore} alt="playstore" />
                            <img className='img-1' src={appstore} alt="appstore" />
                        </Box>
                    </Stack>
                    <Typography mt={5} fontWeight={100}>Copyright 2020 - All Rights Reserved - Heyli</Typography>
                </Box>
                <Box>
                    <Stack spacing={2}>
                        <div>
                            <Typography color="#F38844" mb={2}>
                                Subscribe Us
                            </Typography>
                            <TextField
                                placeholder='Enter Your Mail Id'
                                fullWidth
                                id="input-with-icon-textfield"
                                size='small'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailOutlineOutlinedIcon color="success" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div>

                            <Typography color="#F38844" mb={2}>
                                Get App on your mobile
                            </Typography>
                            <TextField
                                placeholder='Enter Your Phone Number'
                                fullWidth
                                id="input-with-icon-textfield"
                                size='small'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PhoneAndroidOutlinedIcon color="success" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <Button size='small' color='success' variant='contained'>Get Link</Button>
                    </Stack>
                </Box>
            </Box>
            <img width={'100%'} style={{objectFit : 'contain'}} src={footer} alt="footer" />
        </>
    )
}

export default Footer