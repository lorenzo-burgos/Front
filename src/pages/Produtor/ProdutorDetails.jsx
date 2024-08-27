import { useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import ProdutorColumn from "../../components/UI/Table/ProdutorColumn";
import Navbar from '../../components/UI/Navbar/navbar';
import SearchBar from '../../components/UI/SearchBar/searchBar';
import Footer from '../../components/footer';

function ProdutorScreen() {
    const [isOptionsBarActive, setIsOptionsBarActive] = useState(false);
    const [isSubOptionsBarActive, setIsSubOptionsBarActive] = useState(false);

    const toggleOptionsBar = (state) => {
        setIsOptionsBarActive(state);
    };

    const handleToggleSubOptions = (state) => {
        setIsSubOptionsBarActive(state);
    };

    const theme = useTheme();

    return (
        <Box height="auto">    
            <Box>
                <Navbar 
                    toggleOptionsBar={toggleOptionsBar} 
                    isOptionsBarActive={isOptionsBarActive}
                    onToggleSubOptions={handleToggleSubOptions}
                />
            </Box>
            <Box 
                display="flex" 
                flexDirection="row"
                height="calc(100vh - 7rem)"
                paddingBottom=".3rem"
            >
                <Box height={isOptionsBarActive ? (isSubOptionsBarActive ? 'calc(100% - 4.8rem)' : 'calc(100% - 2.8rem)') : '100%'}>
                    <SearchBar />
                </Box>
                <Box 
                    paddingTop="20px"
                    paddingLeft="20px"
                    flexGrow={1}
                    display="flex" 
                    justifyContent="center"
                >
                    <Box height={isOptionsBarActive ? (isSubOptionsBarActive ? 'calc(100% - 4.8rem)' : 'calc(100% - 2.8rem)') : '100%' } 
                        display="flex" 
                        flexDirection="row" 
                        gap="20px"
                    >

                        <ProdutorColumn title="Produtor" text="Texto do Produtor"  backgroundColor={theme.palette.primary.main} />
                        <ProdutorColumn title="Fazenda" text="Texto da Fazenda"  backgroundColor={theme.palette.secondary.main}/>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    );
}

export default ProdutorScreen;