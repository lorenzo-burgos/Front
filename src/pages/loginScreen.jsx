import React from "react";
import { Box, } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import LoginInput from '../components/Form/LoginInput';

function LoginScreen() {
    const theme = useTheme();

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: `${theme.palette.background.default}`,
            width: '100vw',
            height: '100vh',
        }}>
            <LoginInput />
        </Box>
    );
}

export default LoginScreen;