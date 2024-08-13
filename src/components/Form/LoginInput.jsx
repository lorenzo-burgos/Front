import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PasswordInput from './PasswordInput';

export default function LoginBox() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                required
                id="outlined-required"
                label="Usuário"
                defaultValue="exemplo@exemplo.com"
            />
            <PasswordInput />
        </Box>
    );
}