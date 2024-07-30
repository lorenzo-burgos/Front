import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            bgcolor="#444"
            py={2}
            textAlign="center"
            position="fixed"
            bottom={0}
            left={0}
            width={1}
        >
            <Typography variant="caption" color="white">
                Earth Brasil © - 2024
            </Typography>
        </Box>
    );
};

export default Footer;