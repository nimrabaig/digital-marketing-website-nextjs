import React from 'react';
import Box from '@mui/material/Box';
import PhoneInput from 'react-phone-input-2'

const PhoneNumberInput = (props) => {
    // const classes = useStyles();
  
    return (
        <Box>
            <PhoneInput
            specialLabel={''}
            country={'th'}
            inputStyle={{
              borderColor: (props.touched && props.error) && "red"
            }}
            {...props}
            />
            {(props.touched && props.error) && <p style={{color:'red'}} className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-filled MuiFormHelperText-marginDense">{props.error}</p> }
        </Box>
    );
  };


export default PhoneNumberInput;