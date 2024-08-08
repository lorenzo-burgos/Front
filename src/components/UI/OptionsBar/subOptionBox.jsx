import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SecondaryBtn from '../Buttons/SecondaryBtn';
import SAltBtn from '../Buttons/SecondaryAltBtn';

function SubOptionsBox({ options }) {
    const theme = useTheme();
    const paddedOptions = options.map((opcao) => opcao);

    return (
        <Box 
            className="flex flex-row items-center p-0.5 m-0 content-start" 
            sx={{ 
                backgroundColor: theme.palette.background.default, 
                borderBottom: '1px solid #33333350',
            }}
        >
            {paddedOptions.map((opcao, index) => (
                <Box 
                    key={index} 
                    sx={{ 
                        flex: '1 1 auto',
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center'
                    }}
                >
                    <SAltBtn 
                        content={opcao || "Default"}
                        onClick={() => console.log(`Clicked: ${opcao}`)}
                    />
                </Box>
            ))}
        </Box>
    );
}

export default SubOptionsBox;
