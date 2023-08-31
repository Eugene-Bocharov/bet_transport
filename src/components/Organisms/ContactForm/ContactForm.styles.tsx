import { styled } from '@mui/system';
import { TextField, TextFieldProps } from '@mui/material';
import { Box, BoxProps } from '@mui/system';
import * as React from 'react';

export const ContactFormBox = styled((props: BoxProps) => <Box {...props} />)({
  display: 'flex',
  marginTop: '80px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  //   background: '#000',
  borderRadius: '10px',
  //   boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
});

export const StyledInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
  marginBottom: '15px',
  //   marginRight: '20px',
  color: '#000',
  width: '250px',
  transition: 'all 0.2s linear',
  borderColor: '#000',
  '& .MuiInputLabel-root': {
    color: '#000',
  },
  '& .MuiOutlinedInput-input': {
    color: '#000',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#000',
  },

  '& .MuiInputBase-input': {
    color: '#000',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#000',
      borderRadius: '15px',
    },
    '&:not(.Mui-focused) fieldset': {
      borderRadius: '15px',
    },
  },
}));

export const StyledTextArea = styled(TextField)<TextFieldProps>(
  ({ theme }) => ({
    marginBottom: '15px',
    color: '#000',
    borderRadius: '15px',
    transition: 'all 0.2s linear',
    borderColor: '#000',
    rowsMax: 4,
    width: '520px',

    '& .MuiInputLabel-root': {
      color: '#000',
    },

    '& .MuiOutlinedInput-input': {
      color: '#000',
    },

    '& .MuiInputLabel-root.Mui-focused': {
      color: '#000',
    },

    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#000',
        borderRadius: '15px',
      },
      '&:not(.Mui-focused) fieldset': {
        borderRadius: '15px',
      },
    },
  })
);

import { Button, ButtonProps } from '@mui/material';

export const SubmitButton = styled(Button)<ButtonProps>(({ theme }) => ({
  marginTop: '15px',
  color: '#fff',
  width: '150px',
  height: '45px',
  borderRadius: '15px',
  backgroundColor: '#008080',
  '&:hover': {
    backgroundColor: '#008080',
  },
}));
