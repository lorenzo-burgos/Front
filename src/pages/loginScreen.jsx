import React from "react";
import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import LoginInput from '../components/Form/LoginInput';
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
                paddingBottom=".3rem"
            >
                <Box 
                    paddingTop="20px"
                    paddingLeft="20px"
                    flexGrow={1}
                    display="flex" 
                    justifyContent="center"
                    alignItems="center"
                    bgcolor={theme.palette.background.default}
                >
                    <LoginInput />
                </Box>
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    );
}

export default LoginScreen;
