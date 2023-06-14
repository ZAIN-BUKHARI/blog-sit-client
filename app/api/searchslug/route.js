
import { NextResponse } from "next/server";
import connect from "../../../middleware/mongoose";
import Blog from "../../../models/Blog";

//Search blog by slug
export const POST = async (request) => {
   const body = await request.json();
    try {
      await connect();
      let a = body.slug
      const blog = await Blog.find({slug:a});
    if(blog.length>0){
        return new NextResponse(JSON.stringify(blog), { status: 200 });
       
    }else{

      return new NextResponse('Blog does not exist', { status: 500 });
    }

  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};




// export const GET = async (request, { params }) => {
//   console.log(params.slug)
//   try {
//     await connect();
//     const userPromps = await Blog.findOne({ slug: params.slug });

//     return new Response(JSON.stringify(userPromps), { status: 200 });
//   } catch (error) {
//     return new Response("Failed to fetch all prompts", { status: 500 });
//   }
// };