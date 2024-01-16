import React, {useState, useEffect} from 'react'
import {Grid, Typography} from '@mui/material'
import datastrixLogo from '../../components/datastrix_logo.png'
import MessageInterface from './MessageInterface'
import Input from './Input'



export default function ChatUI(){

    const [messages, setMessages] = useState([])

    useEffect(() => {
        async function loadWelcomeMessage() {
          setMessages([
            // <BotMessage
            //   key="0"
            //   fetchMessage={async () => await API.GetChatbotResponse("hi")}
            // />
          ]);
        }
        loadWelcomeMessage();
      }, []);
    
    //   const send = async text => {
    //     const newMessages = messages.concat(
    //       <UserMessage key={messages.length + 1} text={text} />,
    //       <BotMessage
    //         key={messages.length + 2}
    //         fetchMessage={async () => await API.GetChatbotResponse(text)}
    //       />
    //     );
    //     setMessages(newMessages);
    //   };

    return (
        <>
            <Grid container mt={5}>
                <Grid xs={12} mt={4} display={'flex'} justifyContent={'center'}>
                    <img src={datastrixLogo} alt="Datastrix Logo"  />
                </Grid>
            </Grid>

            <Grid sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                <Typography sx={{display:'flex',fontFamily:'Henry Sans', fontSize:'2rem', fontWeight:'bold'}}>
                How can I assisst you today?
                </Typography>

                <MessageInterface message={messages}/>
            </Grid>

            <Grid sx={{display:'flex', justifyContent:'center',}}>
                <Input />
            </Grid>
        </>
    )
}