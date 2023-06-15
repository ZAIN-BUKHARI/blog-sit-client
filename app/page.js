// import Signleblog from "@/components/singleblog/Signleblog";
// import Feature from '../components/feature/Feature'
import 'react-toastify/dist/ReactToastify.css';
import Snack from "../components/Snackbar/Snack";
import Hero from '../components/Hero/Hero'
import Brand from '../components/Brand/Brand';
import About from '../components/About/About';
import Services from '../components/Services/Services'
import Wrapper from '../components/Wrapper/Wrapper'
import Work from '../components/Work/Work'



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
  // const blogs = await getData()
  
  return (
    <>
    <Snack />
    <Hero/>
    <Brand/>
    <About/>
    <Services/>
    <Wrapper/>
    <Work/>
    {/* <div className='md:mx-[0px] mx-[60px] mt-[10px] md:mt-[0px] '> */}
    {/* <Feature blogs={blogs} /> */}
    {/* <Signleblog blogs={blogs}/> */}
    {/* </div> */}
    </>
  );
}




export default Home