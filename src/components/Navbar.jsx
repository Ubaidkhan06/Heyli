import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import logoheyli from '../assets/logoheyli.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';

const Navbar = () => {

    const list = ['Helyi for Franchise', 'Helyi for Partner', 'Helyi for Merchant', 'Helyi SMART', 'Contact Us']

    return (
        <>
            <AppBar position='sticky' sx={{ backgroundColor: 'white' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <img style={{ width: '5rem', height: 'auto' }} src={logoheyli} alt="logo" />
                    <Box display={'flex'} marginLeft={4} alignItems={'center'}>
                        <LocationOnOutlinedIcon sx={{ color: '#82B53F' }} />
                        <Typography color={'black'} fontWeight={100}>Select a Location</Typography>
                        <KeyboardArrowDownSharpIcon sx={{ color: '#F38844' }} />
                    </Box>
                    <Box display={'flex'} gap={4}>
                        {list?.map(item => (
                            <Typography key={item} fontWeight={400} color={'black'}>{item}</Typography>
                        ))}
                    </Box>
                    <Box display={'flex'} gap={3}>
                        <Stack spacing={2} direction="row">
                            <Badge badgeContent={4} color="warning">
                                <ShoppingCartOutlinedIcon color="action" />
                            </Badge>
                            <FavoriteBorderOutlinedIcon color="action" />
                        </Stack>
                        <Typography color={'black'}>Ubaid Khan</Typography>
                        <Box>
                            <AccountCircleOutlinedIcon sx={{ color: '#82B53F' }} />
                            <KeyboardArrowDownSharpIcon sx={{ color: '#82B53F' }} />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar