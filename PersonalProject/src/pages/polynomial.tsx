import React from 'react'
import { Box, TextField, Button } from '@mui/material'

const Polynomial = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <TextField
                    label="Input 1"
                    variant="outlined"
                    sx={{ mr: 2 }}
                    InputProps={{ style: { borderRadius: 10 } }}
                />
                <TextField
                    label="Input 2"
                    variant="outlined"
                    sx={{ mr: 2 }}
                    InputProps={{ style: { borderRadius: 10 } }}
                />
                <Button
                    sx={{ width: '150px', borderRadius: '20px' }}
                    variant="contained"
                    color="warning"
                >
                    Enter
                </Button>
            </Box>
        </div>
    )
}

export default Polynomial
