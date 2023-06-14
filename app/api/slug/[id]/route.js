import { NextResponse } from "next/server";
import connect from "../../../../middleware/mongoose";
import Blog from "../../../../models/Blog";

export const GET = async (request, { params }) => {
  const { id } = params;
  console.log("ye ha slug",id)

  try {
    await connect();

    const post = await Blog.findOne({slug:id});

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};