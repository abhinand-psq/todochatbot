import { mongoconnection,connect } from "@/app/mongoconnection/connection";
import { NextResponse } from "next/server";
 

const addchat =async (request)=>{
    const data =await request.json()
    console.log(data);
    await mongoconnection()
     let response =await connect.db('todo').collection('aichats').insertOne(data)
     console.log(response);
    return new NextResponse(JSON.stringify('connnection failed'))
}

export const POST = addchat