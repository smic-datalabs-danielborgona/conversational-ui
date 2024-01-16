import {Grid, Typography} from '@mui/material' 
import datastrixLogo from '../../components/datastrix_logo.png'



export default function UserPolicy(){
    

    return(
    <>
        <Grid container mt={5}>
            <Grid xs={12} mt={4} display={'flex'} justifyContent={'center'}>
                <img src={datastrixLogo} alt="Datastrix Logo"  />
            </Grid>
        </Grid>

        <Grid sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
            <Typography sx={{display:'flex',fontFamily:'Henry Sans', fontSize:'2rem', fontWeight:'bold'}}>
                User Policy
            </Typography>
        </Grid>
    </>
    )
}