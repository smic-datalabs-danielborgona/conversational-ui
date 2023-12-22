import React from 'react'
import { Grid, Typography, Box} from "@mui/material"


export default function Display() {
    return (
        <Grid xs={12} sx={{display:'flex', justifyContent:'center'}} >
            <Typography variant="h4" sx={{fontFamily:'Henry Sans Medium'}}>
                Welcome to My Chatbot
            </Typography>
        </Grid>
    )
}