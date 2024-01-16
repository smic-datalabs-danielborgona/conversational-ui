import {Box, TextField, Button, IconButton, Typography} from '@mui/material'
import React, {useRef, useState} from 'react';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
// import CsvViewer from "react-csv-viewer";


export default function Input() {
    // transform: 'rotate(-45deg)'

    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState('');
    // const [filePreview, setFilePreview] = useState(null);

    const handleUploadButtonClick = () => {
        // Trigger click event on the hidden file input
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        // Handle the selected file here
        const selectedFile = event.target.files[0];

        setFileName(selectedFile.name);

        // const reader = new FileReader();
        // reader.onload = (e) => {
        //     setFilePreview(e.target.result);
        // };

        // if (selectedFile) {
        //     reader.readAsDataURL(selectedFile);
        // }
    };

    const handleRemoveFile = () => {
      setFileName('')
    }

    // const llm = GoogleVertexAI(project_id="geometric-gamma-405402",
    //                      location="us-central1",
    //                     model="chat-bison@001")
 
    //                 parameters = {
    //                     "candidate_count": 1,
    //                     "max_output_tokens": 1024,
    //                     "temperature": 0.2,
    //                     "top_p": 0.8,
    //                     "top_k": 40
    //                 }
 
    // const sdf = SmartDataframe(df, config={"llm": llm, "parameters": parameters})

    

    const sendButton = (
        <Box display={'flex'}flexDirection={'row'} >
          
          <>
          {fileName && (
                <Box sx={{ display:'flex',justifyContext:'center' , my:1 , mr: 1, backgroundColor:'#F4F4FC', borderRadius: '5px', alignItems: 'center'}}>
                 <Box sx={{ backgroundColor: '#00BE35', width: '15px', height: '100%', marginRight: '10px', borderRadius:'5px 0 0 5px'}} />

                  <Typography sx={{fontFamily:'Henry Sans', mr:1, whiteSpace:'nowrap'}}>
                      {fileName}
                  </Typography>

                  <IconButton onClick={handleRemoveFile}>
                    <ClearOutlinedIcon />
                  </IconButton>
                </Box>
            )}

            <input
                type="file"
                ref={fileInputRef}
                accept=".csv"
                style={{display:'none'}}
                onChange={handleFileChange}
            />

            {!fileName && <IconButton
                sx={{ backgroundColor: '#F4F4FC', marginRight: 1, borderRadius: '50%', height: '40px', width: '40px', my: 1 }}
                onClick={handleUploadButtonClick}
            >
                <UploadFileOutlinedIcon sx={{ color: 'black' }} />
            </IconButton>
            }
          </>

          <Button size='small' variant="contained" endIcon={<SendOutlinedIcon  />} 
                  sx={{ 
                      color: 'black',
                      textTransform:'none', 
                      fontFamily:'Henry Sans', 
                      whiteSpace:'nowrap', 
                      my:1, 
                      borderColor:'black', 
                      backgroundColor:'#F4F4FC', "&:hover": {
                          backgroundColor: "#F4F4FC"
                      }}}>
                      Send Prompt 
          </Button>
        </Box>
    )
    return(
        <TextField
          id="input-with-icon-textfield"
          size='small'
          placeholder='Enter prompt here...'
          InputProps={{
            endAdornment: (
              sendButton
            ),
          }}

        sx={{mt:1,mb:1, width:'80%'}}
      />
    )
}

                  