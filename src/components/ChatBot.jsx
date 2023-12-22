import React, {useEffect} from 'react'
import {Grid, Typography, Paper, TextField} from '@mui/material'


export default function Chatbot() {
    useEffect(() => {
        const loadScript = () => {
          const script = document.createElement('script');
          script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
          script.async = true;
          document.body.appendChild(script);
        };
      
        // Load the script after the DOM has fully loaded
        window.onload = loadScript;
      
        // Cleanup function
        return () => {
          // Remove any event listeners or perform cleanup if needed
        };
      }, []);
      

    
    return (
        <Paper xs={12} sx={{m:2}} elevation={4}>
          <div>
            <df-messenger
              location="us-central1"
              project-id="geometric-gamma-405402"
              agent-id="4c321f86-5216-4843-8292-b435de9c4729"
              language-code="en">

              <df-messenger-chat-bubble
                chat-title="Google Store">
              </df-messenger-chat-bubble>
            </df-messenger>

            <style>
            {`df-messenger {
                z-index: 999;
                position: fixed;
                bottom: 0px;
                right: 0px;
                top:0px;
                width: 650px;
              }`} 
            </style>
          </div>  
        </Paper>
    );
}

// font-family: monospace;
//   font-size: 16px;
//   border: 0;
//   border-radius: 0;
//   border-bottom-left-radius: 10px;
//   border-bottom-right-radius: 10px;
//   border-top: 1px solid #eee;
//   box-shadow: none;
//   box-sizing: border-box;
//   opacity: 1;
//   outline: none;
//   padding: 16px 52px 16px 10px;