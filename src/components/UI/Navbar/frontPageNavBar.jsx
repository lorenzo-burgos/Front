import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function frontPageBar(){
    const [isActive, setIsActive] = useState(false);
    const theme = useTheme();

    const toggleActive = () => {
        setIsActive(!isActive);
        toggleOptionsBar(!isOptionsBarActive);
    };

    return(
        <>
            <Box
                component="header" 
                className="flex flex-row items-center p-0.5 m-0 content-start" 
                sx={{ 
                    backgroundColor: 'transparent',
                    borderBottom: '1px solid #33333350',
                }}
            >
                <Box className="content-center flex-1 pl-1.5">
                    <Typography
                        variant="h4"
                        component="h1"
                    ></Typography>
                    <img
                        src="earth-logo.png"
                        alt='Earth Logo'
                    />
                </Box>
                <Box>
                    <Button
                        sx={{
                        color: 'white',
                        borderBottom: active === 'noticias' ? '2px solid white' : 'none',
                        }}
                        onClick={() => handleClick('noticias')}
                    >
                        noticias
                    </Button>
                    <Button
                        sx={{
                        color: 'white',
                        borderBottom: active === 'pagina_inicial' ? '2px solid white' : 'none',
                        }}
                        onClick={() => handleClick('pagina_inicial')}
                    >
                        pagina inicial
                    </Button>
                    <Button
                        sx={{
                        color: 'white',
                        borderBottom: active === 'realizar_login' ? '2px solid white' : 'none',
                        }}
                        onClick={() => handleClick('realizar_login')}
                    >
                        realizar login
                    </Button>
                    <Button
                        sx={{
                        color: 'white',
                        borderBottom: active === 'cadastro' ? '2px solid white' : 'none',
                        }}
                        onClick={() => handleClick('cadastro')}
                    >
                        cadastro
                    </Button>
                </Box>
            </Box>
        </>
    )
}