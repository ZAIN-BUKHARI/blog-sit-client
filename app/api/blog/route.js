
  
  
import { NextResponse } from "next/server";
import connect from "../../../middleware/mongoose";
import Blog from "../../../models/Blog";

//POST CREATE BLOG
export const POST = async (request) => {
  const body = await request.json();
  console.log(body.month)
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


