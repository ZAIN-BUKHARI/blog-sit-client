import Signleblog from "@/components/singleblog/Signleblog";
import Feature from '../components/feature/Feature'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Snack from "@/components/Snackbar/Snack";
import style from './page.module.css'

async function getData() {
  const res = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store",
  });

  if (!res.ok) {
   console.log('error')
  }
  
  return res.json();
}

 const  Home=async()=> {
  const blogs = await getData()
  return (
    <>
    <Snack />
    <div className='md:mx-[0px] mx-[60px] mt-[10px] md:mt-[0px] '>
    <Feature blogs={blogs} />
    <Signleblog blogs={blogs}/>
    </div>
    </>
  );
}




export default Home