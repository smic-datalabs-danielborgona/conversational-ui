import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'
import NavBar from './components/Appbar'
import ChatUI from './pages/Chatbox'

export default function App() {
  
  return <>
      <Grid xs={12}>
        <Grid mb={6}>
          <NavBar />
        </Grid>

        <ChatUI />
      </Grid>
    </>
}