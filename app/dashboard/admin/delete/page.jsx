'use client'
import React from 'react'
import FullLayout from "../../../../src/layouts/FullLayout";
import theme from "../../../../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import {useState }from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Grid,
  Stack,
  TextField,
  Button,
} from 
"@mui/material";
import BaseCard from "../../../../src/components/baseCard/BaseCard";
const del = () => {
 const [del,setdel]=useState('')
  const handleChange = async  (e) =>{
     
     if(e.target.name=='del'){
        setdel(e.target.value)
      }
      
     
  }
 
  
// {DEL function }------------------------
  const DELETE = async (e) =>{
        e.preventDefault()
        if(del!=''){
        const data = {del}
    let response =  await fetch(`/api/Delproduct`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    let a = await response.json()
    
    if(a.success){
       toast.success('Successfully deleted!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setdel('')
        
       
    }
    else if(a.error){
      toast.error('There is no product with this slug ', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    }
  }
  else{
    toast.error('Cannot set empty field', {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
    
  
  }


  
    return (
      
      <ThemeProvider theme={theme}>
           <style jsx global>{`
      footer{
      display:none;
        }
    `}</style>
       <FullLayout>
        {/* { !admin.admin.value && <h1 className='text-3xl text-pink-500 my-5 font-bold text-center'>Only z-wear admins allow here</h1>} */}
       

       <h1 className='text-3xl text-pink-500 font-bold my-5 text-center'>DELETE BLOG BY SLUG</h1>
      <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
          
            <TextField onChange={handleChange} value={del}  name="del" label="Slug" variant="outlined"  />       
          </Stack>
          <br />
          <Button onClick={DELETE} variant="outlined" mt={2}>
            DELETE
          </Button>
        </BaseCard>
      </Grid>

     
    
  
        </FullLayout>
        </ThemeProvider>
      );
}

export default del