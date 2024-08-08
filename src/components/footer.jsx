import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            bgcolor="#444"
            py={2}
            textAlign="center"
            height={38}
            width={1}
            position="fixed"
            bottom={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Typography variant="caption" color="white">
                Earth Brasil © - 2024
            </Typography>
        </Box>
    );
};

export default Footer;