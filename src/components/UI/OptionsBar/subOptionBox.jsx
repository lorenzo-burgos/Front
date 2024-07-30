import React from 'react';
import { Box, ListItem, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

function SubOptionsBox({ options }) {
    const paddedOptions = options.map((opcao) => opcao);

    return (
        <Box
            sx={{
                backgroundColor: 'rgba(33, 33, 33, 0.2)',
                p: 2,
                flexGrow: 1,
            }}
        >
            <Grid container spacing={1} justifyContent="center">
                {paddedOptions.map((opcao, index) => (
                    <Grid item key={index} xs sm display="flex" justifyContent="center">
                        <ListItem
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '0 8px',
                                fontWeight: '600',
                                borderRadius: 1,
                            }}
                        >
                            {opcao ? opcao : <Typography variant="body2">&nbsp;</Typography>}
                        </ListItem>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default SubOptionsBox;
