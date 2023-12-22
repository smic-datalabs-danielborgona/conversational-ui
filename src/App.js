import { Grid, Typography} from '@mui/material'
import Display from './components/Display';
import Chatbot from './components/ChatBot';

export default function App() {
  return <>
      <Grid xs={12}>
        <Grid container>
          <Grid item xs={12} md={6} lg={8} sx={{ height:'100vh',display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:'#e2ecf3'}}>
            <Display />
          </Grid>
          
          <Grid item xs={12} md={6} lg={4}>
            <Chatbot />
          </Grid>
        </Grid>
      </Grid>
    </>
}


