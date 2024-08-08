import React, { useState } from 'react';
import { Box } from '@mui/material';
import SearchBar from '../components/UI/SearchBar/searchBar';
import Footer from '../components/footer';

const ProdutorScreen = () => {

    return (
        <Box height="auto">
            <Box 
                display="flex" 
                flexDirection="row"
                height="calc(100vh - 7rem)"
                paddingBottom=".3rem"
            >
                <Box height='100%'>
                    <SearchBar />
                </Box>
                <Box 
                    paddingTop="20px"
                    paddingLeft="20px"
                    flexGrow={1}
                    display="flex" 
                    justifyContent="center"
                >
                    {/* Conteúdo aqui */}
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default ProdutorScreen;
