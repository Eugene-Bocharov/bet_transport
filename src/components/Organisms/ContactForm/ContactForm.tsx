import React from 'react';
import {
  ContactFormBox,
  StyledInput,
  StyledTextArea,
  SubmitButton,
} from './ContactForm.styles';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';

export const ContactForm: React.FC = () => {
  return (
    <ContactFormBox>
      <h1>Contact Us </h1>
      <Box
        sx={{
          display: 'flex',
          width: '520px',
          mt: '20px',
          justifyContent: 'space-between',
        }}
      >
        <StyledInput required label="First Name" variant="outlined" />
        <StyledInput label="Last Name" variant="outlined" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '520px',
          justifyContent: 'space-between',
        }}
      >
        <StyledInput required label="Email" variant="outlined" />
        <StyledInput required label="Number" variant="outlined" />
      </Box>

      <StyledTextArea
        required
        label="Message"
        variant="outlined"
        multiline={true}
      />
      <SubmitButton>Submit</SubmitButton>
    </ContactFormBox>
  );
};
