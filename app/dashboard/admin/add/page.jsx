'use client'
import React from 'react'
import FullLayout from "../../../../src/layouts/FullLayout";
import theme from "../../../../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import {useState }from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import {
  Grid,
  Stack,
  TextField,
  Button,
} from 
"@mui/material";
import BaseCard from "../../../../src/components/baseCard/BaseCard";
const add = () => {
  const router=useRouter()
  const [slug, setslug] = useState('')
  const [title, settitle] = useState('')
  const [desc, setdesc] = useState('')
  const [category, setcategory] = useState('')
  const [Feature, setFeature] = useState('')
  const [img, setimg] = useState('')
  const [author, setauthor] = useState('')
  const handleChange = async  (e) =>{
      if(e.target.name=='slug'){
        setslug(e.target.value)
      }
      else if(e.target.name=='category'){
        setcategory(e.target.value)
      }
      else if(e.target.name=='title'){
        settitle(e.target.value)
      }
      else if(e.target.name=='desc'){
        setdesc(e.target.value)
      }
      else if(e.target.name=='img'){
        setimg(e.target.value)
      }
      else if(e.target.name=='feature'){
        setFeature(e.target.value)
      }
      else if(e.target.name=='author'){
        setauthor(e.target.value)
      }
      
     
  }
  const submitform = async (e) =>{
    e.preventDefault()
    router?.push('/')
//        console.log(size)
//        console.log(color)
//         if( slug!='' && title!='' && desc!='' && category!=''&& author!=''){
//         const data = {slug,title,img,desc,category,Feature,author}
        
//     let response =  await fetch(`/api/AddProducts`,{
//       method:'POST',
//       headers:{
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify(data)
//     })
//     let a = await response.json()
//     if(a.success){
//        toast.success('Successfully Blog Post!', {
//         position: "bottom-center",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         });
        
       
//     }else if(a.error){
//       toast.info('You put some wrong info! Try again ', {
//         position: "bottom-center",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         });
// }
//   }
//   else{
//     toast.error('Cannot set empty field', {
//       position: "bottom-center",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//       });
//   }
    
  
  }
  

  // const [cloudfile,setCloudfile]=useState('');
  //  const [url,seturl]=useState('');
  // const cloudinaryonChange=(e)=>{
  //   if(e.target.name=='cloud'){
  //     setCloudfile(e.target.files[0])
  //     console.log(e.target.files[0])
  //   }
  // }

  // {cloudinar function }------------------------

  // const cloud=()=>{
  //   const data= new FormData()
  //   data.append('file',cloudfile)
  //   data.append('upload_preset','vru3vgic')
  //   data.append('cloud_name','dklqbx5k0')
  //   const url='https://api.cloudinary.com/v1_1/dklqbx5k0/image/upload'
  //   axios.post(url,data).then(res=>{
  //     console.log(res)
  //     seturl(res.data.secure_url)
  //   })
  // }
  
    return (
      
      <ThemeProvider theme={theme}>
           <style jsx global>{`
      footer{
      display:none;
        }
    `}</style>
       <FullLayout>
        {/* { !admin.admin.value && <h1 className='text-3xl text-pink-500 my-5 font-bold text-center'>Only z-wear admins allow here</h1>} */}
          <Grid container spacing={0}>
        <h1 className='text-3xl font-bold text-pink-500 text-center' >POST BLOG</h1>
      <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
         
            <TextField onChange={handleChange} value={slug}  name="slug" label="Slug" variant="outlined"  />
            <TextField onChange={handleChange} value={title} name="title" label="Title" variant="outlined" />
            <TextField onChange={handleChange} value={category} type='text' name="category" label="Category" variant="outlined" />
            <TextField onChange={handleChange} value={desc} name="desc" label="Description" variant="outlined" multiline rows={4} /> 
            <TextField onChange={handleChange} value={author} name="author" type='text' label="Author name " variant="outlined"  />
            <TextField onChange={handleChange} value={img} name="Profit" type='text' label="Image link " variant="outlined"  />
            
            
            
           
          </Stack>
          <br />
          <Button onClick={submitform} variant="outlined" mt={2}>
            Post
          </Button>
          
        </BaseCard>
      </Grid>

      

     
    </Grid>
    
  
        </FullLayout>
        </ThemeProvider>
      );
}

export default add