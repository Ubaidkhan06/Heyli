import { Box, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import banner2 from '../assets/banner2.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Header = () => {
    return (
        <Box mx={5}>
            <Typography fontWeight={600} my={3} fontSize={30} textAlign={'center'}>
                Mobile Recharge
            </Typography>
            <Box display='flex' justifyContent={'center'}>
                <img width={'1500px'} src={banner2} alt="banner" />
            </Box>
            <Box display={'flex'} mt={5} mx={50} justifyContent='center'>
                <TextField
                    placeholder='Search'
                    fullWidth
                    id="input-with-icon-textfield"
                    size='small'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
        </Box>
    )
}

export default Header