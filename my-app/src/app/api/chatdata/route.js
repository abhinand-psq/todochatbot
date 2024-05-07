import { mongoconnection,connect } from "@/app/mongoconnection/connection";
import { NextResponse } from "next/server";
 

const one =async ()=>{
    let value = {name:"abhinnnad"}
    await mongoconnection()
    let response =await connect.db('todo').collection('aichats').insertOne(value)
    console.log(response);
    return new NextResponse(JSON.stringify('connnection failed'))
}

export const GET = one