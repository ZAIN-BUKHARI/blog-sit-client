import { NextResponse } from "next/server";
import connect from "../../../middleware/mongoose";
import Blog from "../../../models/Blog";

export const POST = async (request) => {
    const body = await request.json();
    let a = body.slug
    try {
      await connect();
      
      await Blog.findOneAndDelete({slug:a});
  
      return new NextResponse(JSON.stringify(true), { status: 201 });
    } catch (err) {
      return new NextResponse(JSON.stringify(false), { status: 500 });
    }
  };