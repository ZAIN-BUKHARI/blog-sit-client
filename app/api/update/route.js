

import { NextResponse } from "next/server";
import connect from "../../../middleware/mongoose";
import Blog from "../../../models/Blog";

//POST Update BLOG
export const POST = async (request) => {
  const body = await request.json();
  const newBlog = await Blog.findByIdAndUpdate(body.id,{
    title:body.title,
    desc:body.desc,
    slug:body.slug,
    author:body.author,
    category:body.category,
    img:body.img,
    // Feature:Feature
  });

  try {
    await connect();

    await newBlog.save();

    return new NextResponse(JSON.stringify(true), { status: 201 });
  } catch (err) {
    return new NextResponse(JSON.stringify(false), { status: 500 });
  }
};