import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Input = ({ name, half, label, autoFocus, type, handleShowPassword, handleChange }) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField name={name} onChange={handleChange} variant="outlined" fullWidth label={label} autoFocus={autoFocus} type={type}
                InputProps={name === 'password' && {
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton onClick={handleShowPassword}>
                                {type === 'password' ? <Visibility /> : <VisibilityOff/> }
                            </IconButton>
                        </InputAdornment>
                    )
                }
                } required />
        </Grid>
    )
}

export default Input