import { Box, Button, Card, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import airtel from '../assets/airtel.png'
import Vector from '../assets/Vector.png'
import a from '../assets/Rectangle 2467.png'
import b from '../assets/Rectangle 2468.png'
import c from '../assets/Rectangle 2469.png'
import d from '../assets/Rectangle 2470.png'
import e from '../assets/Rectangle 2471.png'
import f from '../assets/Rectangle 2472.png'
import g from '../assets/Rectangle 2473.png'
import h from '../assets/Rectangle 2474.png'

const Main = () => {

    const contacts = [
        {
            name: 'Abdul Raza',
            img: a,
            number: '88746 33214'
        },
        {
            name: 'Anil Gupta',
            img: b,
            number: '88746 33214'
        },
        {
            name: 'Tanvi Kukreja',
            img: c,
            number: '88746 33214'
        },
        {
            name: 'Lokesh Mishra',
            img: d,
            number: '88746 33214'
        },
        {
            name: 'Fawad Khan',
            img: e,
            number: '88746 33214'
        },
        {
            name: 'Rohit Jayraj',
            img: f,
            number: '88743 33222'
        },
        {
            name: 'Afreen Khan',
            img: g,
            number: '99746 63213'
        },
        {
            name: 'Aniket Jha',
            img: h,
            number: '99554 33254'
        },
    ]




    return (
        <Box mx={8} my={4}>
            <Grid container>
                <Grid item xs={8}>
                    <Typography variant='h6' padding={'1rem'}>
                        Recent Recharges
                    </Typography>
                    <Stack spacing={2}>
                        <Box>
                            <Card sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', marginX: '1rem' }}>
                                <Stack spacing={2}>
                                    <Typography fontWeight={600}>
                                        Airtel Prepaid
                                    </Typography>
                                    <Typography color={'grey'}>
                                        88754 34252
                                    </Typography>
                                    <Typography color={'grey'}>
                                        12 Feb 2021, 06:23 AM
                                    </Typography>
                                    <Typography fontWeight={600}>
                                        ₹ 249
                                    </Typography>
                                    <Stack direction={'row'} spacing={2}>
                                        <Button color='success' size='small' variant="contained">Recharge Again</Button>
                                        <Button sx={{ backgroundColor: 'white', color: 'grey', border: 'grey 1px solid', paddingX: '1rem' }} size='small'>Check Validity</Button>
                                    </Stack>
                                </Stack>
                                <img style={{ objectFit: 'contain' }} src={airtel} alt="airtel" />
                            </Card>
                        </Box>
                        <Box>
                            <Card sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', marginX: '1rem' }}>
                                <Stack spacing={2}>
                                    <Typography fontWeight={600}>
                                        Airtel Prepaid
                                    </Typography>
                                    <Typography color={'grey'}>
                                        88754 34252
                                    </Typography>
                                    <Typography color={'grey'}>
                                        12 Feb 2021, 06:23 AM
                                    </Typography>
                                    <Typography fontWeight={600}>
                                        ₹ 249
                                    </Typography>
                                    <Stack direction={'row'} spacing={2}>
                                        <Button color='success' size='small' variant="contained">Recharge Again</Button>
                                        <Button sx={{ backgroundColor: 'white', color: 'grey', border: 'grey 1px solid', paddingX: '1rem' }} size='small'>Check Validity</Button>
                                    </Stack>
                                </Stack>
                                <img style={{ objectFit: 'contain' }} src={airtel} alt="airtel" />
                            </Card>
                        </Box>
                        <Box>
                            <Card sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', marginX: '1rem' }}>
                                <Stack spacing={2}>
                                    <Typography fontWeight={600}>
                                        Airtel Prepaid
                                    </Typography>
                                    <Typography color={'grey'}>
                                        88754 34252
                                    </Typography>
                                    <Typography color={'grey'}>
                                        12 Feb 2021, 06:23 AM
                                    </Typography>
                                    <Typography fontWeight={600}>
                                        ₹ 249
                                    </Typography>
                                    <Stack direction={'row'} spacing={2}>
                                        <Button color='success' size='small' variant="contained">Recharge Again</Button>
                                        <Button sx={{ backgroundColor: 'white', color: 'grey', border: 'grey 1px solid', paddingX: '1rem' }} size='small'>Check Validity</Button>
                                    </Stack>
                                </Stack>
                                <img style={{ objectFit: 'contain' }} src={airtel} alt="airtel" />
                            </Card>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={4} paddingLeft='10px'>
                    <Box display={'flex'} justifyContent='center' alignItems={'center'} flexDirection={'column'}>
                        <Typography variant='h6'>
                            Offers
                        </Typography>
                        <Typography color={'grey'}>
                            3 offers
                        </Typography>
                        <Stack spacing={2}>
                            <Box sx={{
                                border: '1px grey dashed',
                                padding: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                borderRadius: '8px'
                            }}>
                                <img src={Vector} alt="vecxtor" />
                                Apply Coupon Code
                            </Box>
                            <Box sx={{
                                // border: '1px grey dashed',
                                padding: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                backgroundColor: '#E7E8FF',
                                borderRadius: '8px'
                            }}>
                                <img src={Vector} alt="vecxtor" />
                                Apply Coupon Code
                            </Box>
                            <Box sx={{
                                // border: '1px grey dashed',
                                padding: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                backgroundColor: '#F0FFDC',
                                borderRadius: '8px'
                            }}>
                                <img src={Vector} alt="vecxtor" />
                                Apply Coupon Code
                            </Box>
                            <Box sx={{
                                // border: '1px grey dashed',
                                padding: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                backgroundColor: '#FFE9C5',
                                borderRadius: '8px'
                            }}>
                                <img src={Vector} alt="vecxtor" />
                                Apply Coupon Code
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
            <Box padding={'1rem'}>
                <Typography variant='h6'>
                    All Contacts
                </Typography>
                <Typography color='grey'>
                    The Contacts shown are taken from your phone and registered with our app
                </Typography>
                {
                    contacts.map(item => (
                        <Card key={item.number} 
                        sx={{ display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        padding: '1rem',
                        width : '50rem',
                        marginY : '1rem'
                        }}>
                            <Box display={'flex'} gap={2}>
                                <img src={item.img} alt={item.name} />
                                <Box display={'flex'} flexDirection='column' justifyContent={'center'}>
                                    <Typography>
                                        {item.name}
                                    </Typography>
                                    <Typography color='grey'>
                                        {item.number}
                                    </Typography>
                                </Box>
                            </Box>
                            <Button variant='contained' size='small' color='success'>Recharge</Button>
                        </Card>
                    ))
                }
            </Box>
        </Box>
    )
}

export default Main