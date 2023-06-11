import Signleblog from "@/components/singleblog/Signleblog";
import Feature from '../components/feature/Feature'
async function getData() {
  const res = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const blogs = await getData()
  return (
    <>
    <Feature blogs={blogs} />
    <Signleblog blogs={blogs}/>
    </>
  );
}
