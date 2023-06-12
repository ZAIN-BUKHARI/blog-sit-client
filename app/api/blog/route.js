
  
  
import { NextResponse } from "next/server";
import connect from "../../../middleware/mongoose";
import Blog from "../../../models/Blog";

//POST CREATE BLOG
export const POST = async (request) => {
  const body = await request.json();
  console.log(body)
  const newBlog = new Blog(body);

  try {
    await connect();

    await newBlog.save();

    return new NextResponse(JSON.stringify(true), { status: 201 });
  } catch (err) {
    return new NextResponse(JSON.stringify(false), { status: 500 });
  }
};

// GET ALL BLOG
export const GET = async (request) => {

  try {
    await connect();

    let allblogs = await Blog.find()
    return new NextResponse(JSON.stringify(allblogs), { status: 201 });
  } catch (err) {
    return new NextResponse(JSON.stringify('Database Error'), { status: 500 });
  }
};


// Blog-01-bussiness2

// { 
//   "slug":"Blog-01-bussiness",
//   "title":"Lorem, ipsugfm dolor sit amet consectetur adipisicing elit. Incidunt, laborum aliquid minima repellendus culpa suscipit modi.",
//   "category":"shopping",
//   "img":"https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=400",
//   "desc":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, laborum aliquid minima repellendus culpa suscipit modi. Tenetur, ut libero repudiandae id facere fuga illo labore exercitatcxcionem, iste, possimus cum ratione!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, laborum aliquid minima repellendus culpa suscipit modi. Tenetur, ut libero repudiandae id facere fuga illo labore exercitationem, iste, possimus cum ratione!",
//   "author":"Ali"
// }