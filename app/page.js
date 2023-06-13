import Signleblog from "@/components/singleblog/Signleblog";
import Feature from '../components/feature/Feature'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Snack from "@/components/Snackbar/Snack";
async function getData() {
  const res = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store",
  });

  if (!res.ok) {
    toast.error('Blogs not found', {
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
  
  return res.json();
}

export default async function Home() {
  const blogs = await getData()
  return (
    <>
    
    <Snack />
    <Feature blogs={blogs} />
    <Signleblog blogs={blogs}/>
    </>
  );
}
