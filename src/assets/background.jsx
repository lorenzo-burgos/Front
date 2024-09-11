import React from 'react';
import { Box } from '@mui/material';
import { ReactComponent as LandingIllustration } from '../assets/Images/paginaInicial.svg';

const Background = () => {
    return (
        <Box
            className="absolute inset-0"
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: '#49d6cc',
                overflow: 'hidden',
                zIndex: -1, 
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <LandingIllustration
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'fill',
                }}
                preserveAspectRatio='none'
            />   

        </Box>
    );
};

export default Background;
