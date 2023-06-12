//   export default   ConnectMongoDB(handler)
import { NextResponse } from "next/server";
import connect from "../../../middleware/mongoose";
import Blog from "../../../models/Blog";

//Search blog by slug
export const POST = async (request) => {
    try {
        await connect();
      const body = await request.json();
      let a = body.slug
      const blog = await Blog.find({slug:a});
      console.log(blog)
    if(blog){

        return new NextResponse(JSON.stringify(blog), { status: 200 });
       
    }else{

      return new NextResponse('User does not exist', { status: 500 });
    }

  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};