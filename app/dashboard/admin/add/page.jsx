import React from 'react'
import FullLayout from "../../../../src/layouts/FullLayout";
import theme from "../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import {useState }from 'react'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {
  Grid,
  Stack,
  TextField,
  Button,
} from 
"@mui/material";
import BaseCard from "../../../../src/components/baseCard/BaseCard";
const addProducts = (admin) => {
 console.log(admin)
  const [slug, setslug] = useState('')
  const [delslug, setdelslug] = useState('')
  const [title, settitle] = useState('')
  const [desc, setdesc] = useState('')
  const [price, setprice] = useState('')
  const [color, setcolor] = useState('')
  const [file, setFile] = useState('')
  const [size, setsize] = useState('')
  const [AvailableQty, setAvailableQty] = useState('')
  const [category, setcategory] = useState('')
  const [Profit, setprofit] = useState('')
  const [Feature, setFeature] = useState('')
  const handleChange = async  (e) =>{
      if(e.target.name=='slug'){
        setslug(e.target.value)
      }
      else if(e.target.name=='delslug'){
        setdelslug(e.target.value)
      }
      else if(e.target.name=='title'){
        settitle(e.target.value)
      }
      else if(e.target.name=='desc'){
        setdesc(e.target.value)
      }
     else if(e.target.name=='category'){
        setcategory(e.target.value)
      }
      else if(e.target.name=='AvailableQty'){
        setAvailableQty(e.target.value)
      }
      else if(e.target.name=='size'){
        setsize(e.target.value)
      }
      else if(e.target.name=='color'){
        setcolor(e.target.value)
      }
      else if(e.target.name=='Profit'){
        setprofit(e.target.value)
      }
      else if(e.target.name=='file'){
        const img = new FormData()
          img.append('file',e.target.files[0])
         let b= await axios.post(`/api/IMG`,img)
           setFile(`/uploads/`+ b.data.success.filename)
           
        
      }
     
      else if(e.target.name=='price'){
        setprice(e.target.value)
      }
      else if(e.target.name=='Feature'){
        setFeature(e.target.value)
      }
     
  }
  const imgLink=(e)=>{
    if(e.target.name=='file'){
      setFile(e.target.value)
    }
  }
  const submitform = async (e) =>{
    e.preventDefault()
   
       console.log(size)
       console.log(color)
        if( slug!='' && title!='' && desc!='' && price!=''  && AvailableQty!='' && category!=''&& Profit!=''){
        const data = {slug,title,file,desc,price,size,color,AvailableQty,category,Profit,Feature}
        console.log(data)
        
    let response =  await fetch(`/api/AddProducts`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    let a = await response.json()
    console.log(a)
    if(a.success){
       toast.success('Successfully product added!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        
       
    }else if(a.error){
      toast.info('You put some wrong info! Try again ', {
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
  const DELETE = async (e) =>{
        e.preventDefault()
        if(delslug!=''){
        const data = {delslug}
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
        setdelslug('')
        
       
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
  const [cloudfile,setCloudfile]=useState('');
   const [url,seturl]=useState('');
  const cloudinaryonChange=(e)=>{
    if(e.target.name=='cloud'){
      setCloudfile(e.target.files[0])
      console.log(e.target.files[0])
    }
  }

  const cloud=()=>{
    const data= new FormData()
    data.append('file',cloudfile)
    data.append('upload_preset','vru3vgic')
    data.append('cloud_name','dklqbx5k0')
    const url='https://api.cloudinary.com/v1_1/dklqbx5k0/image/upload'
    axios.post(url,data).then(res=>{
      console.log(res)
      seturl(res.data.secure_url)
    })
  }
  
    return (
      
      <ThemeProvider theme={theme}>
           <style jsx global>{`
      footer{
      display:none;
        }
    `}</style>
       <FullLayout>
        { !admin.admin.value && <h1 className='text-3xl text-pink-500 my-5 font-bold text-center'>Only z-wear admins allow here</h1>}
        { admin.admin.value && <Grid container spacing={0}>
        <h1 className='text-3xl font-bold text-pink-500 text-center' >Add Product</h1>
      <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
         
            <TextField onChange={handleChange} value={slug}  name="slug" label="Slug" variant="outlined"  />
            <TextField onChange={handleChange} value={title} name="title" label="Title" variant="outlined" />
            {/* <TextField onChange={handleChange} value={color} name="color" label="Color" variant="outlined" /> */}
            <select value={color} onChange={handleChange} name='color'   className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                  <option value={''}>color</option>
                   <option value={'blue'}>blue</option>
                   <option value={'red'}>red</option>
                   <option value={'black'}>black</option>
                   <option value={'green'}>green</option>
                  <option value={'yellow'}>yellow</option>
                  <option value={'pink'}>pink</option>
                  <option value={'orange'}>orange</option>
                  <option value={'tan'}>tan</option>
                  <option value={'white'}>white</option>
                  <option value={'brown'}>brown</option>
                  <option value={'maron'}>Maron</option>
                  <option value={'purple'}>purple</option>
                  <option value={'lpurple'}>Light purple</option>
                  <option value={'gray'}>Gray</option>
                  <option value={'dgreen'}>Dark green</option>
                  <option value={'lyellow'}>light yellow</option>
                  <option value={'rose'}>Rose</option>
                  <option value={'lpink'}>Light pink</option>
                  <option value={'dblue'}>Dark blue</option>
              </select>
            {/* <TextField onChange={handleChange} value={size} name="size" label="Size" variant="outlined" /> */}
            <select value={size} onChange={handleChange} name='size'  className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                  <option value={''}>Size</option>
                   <option value={'S'}>S</option>
                   <option value={'M'}>M</option>
                   <option value={'L'}>L</option>
                   <option value={'XL'}>XL</option>
                  <option value={'XXL'}>XXL</option>
                  <option value={'A'}>Ajustable</option>
                  <option value={'U'}>Unstitch</option>
                  <option value={'ST'}>Standard</option>
              </select>
            <TextField onChange={handleChange} value={price} type='number' name="price" label="Price" variant="outlined" />
            <TextField onChange={handleChange} value={AvailableQty} type='number' name="AvailableQty" label="Quantity" variant="outlined" />
            {/* <TextField onChange={handleChange} value={category} name="category" label="Category" variant="outlined" /> */}
            <select value={category} onChange={handleChange} name='category'  className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                  <option value={''}>category</option>
                   <option value={'3pcs'}>3pcs suit</option>
                   <option value={'2pcs'}>2pcs suit</option>
                   <option value={'Frock'}>Frock</option>
                   <option value={'unstitch'}>Unstitch</option>
                   <option value={'plazo'}>Plazo</option>
              </select>
            <TextField onChange={handleChange} value={desc} name="desc" label="Description" variant="outlined" multiline rows={4} /> 
            <TextField onChange={handleChange} value={Profit} name="Profit" type='number' label="Profit" variant="outlined"  />
            <TextField onChange={handleChange} value={Feature} name="Feature" type='text' label="Feature product" variant="outlined"  />
            <TextField onChange={handleChange}  name="file" type='file' label="" variant="outlined"  />
            <h1 className='text-center text-2xl font-bold text-pink-500' >Or</h1>
            <TextField onChange={imgLink}  name="file" type='text' label="Image Link" variant="outlined"  />
            
            
            
           
          </Stack>
          <br />
          <Button onClick={submitform} variant="outlined" mt={2}>
            Submit
          </Button>
          
        </BaseCard>
      </Grid>

      {/* DEL ANY PRODUCT BY THIER SLUG */}
       <h1 className='text-3xl text-pink-500 font-bold my-5 text-center'>DELETE PRODUCT BY SLUG</h1>
      <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
          
            <TextField onChange={handleChange} value={delslug}  name="delslug" label="Slug" variant="outlined"  />       
          </Stack>
          <br />
          <Button onClick={DELETE} variant="outlined" mt={2}>
            DELETE
          </Button>
        </BaseCard>
      </Grid>

     
    </Grid>}
    <h1 className='text-3xl text-pink-500 font-bold my-5 '>IMAGE FILE TO URL</h1>
    <Grid>
  <BaseCard>
  <div className='flex flex-col'>
    <TextField onChange={cloudinaryonChange}  name="cloud" type='file' label="" variant="outlined"  />
    <Button onClick={cloud} variant="outlined" mt={2}>Upload</Button>
    </div>
    {url && <div>{url}</div>}
    </BaseCard>
      </Grid>
  
        </FullLayout>
        </ThemeProvider>
      );
}

export default addProducts