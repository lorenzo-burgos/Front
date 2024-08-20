import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PasswordInput from './PasswordInput';
import { useTheme } from '@mui/material/styles';

export default function LoginBox() {
    const theme = useTheme();

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '50ch' },
                display: 'flex',
                flexDirection: "column",
                border: `2px solid ${theme.palette.primary.main}`,
                borderRadius: 3,
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                required
                id="outlined"
                label="Usuário"
                defaultValue=""
                InputLabelProps={{ 
                    required: false 
                }}
            />
            <PasswordInput />
        </Box>
    );
}