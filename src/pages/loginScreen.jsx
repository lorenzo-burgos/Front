import React from "react";
import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import LoginInput from '../components/Form/LoginInput';
import RegistrationForm from "../components/Form/ResgisterForm";
import Navbar from '../components/UI/Navbar/navbar';
import Footer from '../components/footer';

function LoginScreen() {
    const theme = useTheme();

    return (
        <Box height="auto">    
            <Box>
                <Navbar />
            </Box>
            <Box 
                display="flex" 
                flexDirection="row"
                height="calc(100vh - 7rem)"
            >
                <RegistrationForm />
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    );
}

export default LoginScreen;
