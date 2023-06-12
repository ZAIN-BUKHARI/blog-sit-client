//   export default   ConnectMongoDB(handler)
import { NextResponse } from "next/server";
import connect from "../../../middleware/mongoose";
import Admin from "../../../models/Admin";
const jwt = require('jsonwebtoken');

//login
export const POST = async (request) => {
  const body = await request.json();
  let a = body.email
  const user = await Admin.find({email:a});

  try {
    await connect();
    if(user){
          if(user[0].password==body.password){
            const token = jwt.sign({id:user._id}, 'client-1');
            return new NextResponse(JSON.stringify(token), { status: 201 });
          }
          else{
            return new NextResponse('Invalid Credentials', { status: 500 });
          }
       
    }else{

      return new NextResponse('User does not exist', { status: 201 });
    }

  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

//SIGN UP
// export const POST = async (request) => {
//   const body = await request.json();
//   let user = new Admin(body);

//   try {
//     await connect();
//     await user.save()
//    return new NextResponse(user, { status: 500 });

//   } catch (err) {
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };