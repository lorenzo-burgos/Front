import React from 'react';
import { Box, TextField, Button, Grid, Typography } from '@mui/material';

const RegistrationForm = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
        Seja bem vindo, Vamos começar seu cadastro
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Informe seu CPF"
            variant="outlined"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              sx: {
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                },
                color: 'white',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Crie um username"
            variant="outlined"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              sx: {
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                },
                color: 'white',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="E-mail"
            variant="outlined"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              sx: {
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                },
                color: 'white',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Crie uma senha"
            variant="outlined"
            type="password"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              sx: {
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                },
                color: 'white',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Confirme sua senha"
            variant="outlined"
            type="password"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              sx: {
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                },
                color: 'white',
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            size="medium"
            sx={{
              marginTop: '16px',
              backgroundColor: '#fff',
              color: 'black',
              '&:hover': {
                backgroundColor: '#fff',
              },
            }}
          >
            Continuar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegistrationForm;
