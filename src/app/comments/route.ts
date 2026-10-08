import { type NextRequest } from "next/server"; // we are importing the type of request 
import { comments } from "./data"

export async function GET(request: NextRequest) {
     const searchParams = request.nextUrl.searchParams // grab all query parameters .. /comments?query=first
     const query = searchParams.get('query') // get method to fetch specific query parameter 
     let filteredComments;
     if (query) {
          filteredComments = comments.filter((item) => item.text.includes(query))
          return Response.json(filteredComments)
     } else {
          filteredComments = comments
          return Response.json("not found in the data of comments")
     }
     // const filteredComments = query ? comments.filter((item)=>item.text.includes(query)) : comments
     // instead of if else we can also use ?: conditional operator 

}// URL Query Parameters

export async function POST(request: Request,) {
     const comment = await request.json();
     const newComment = {
          id: comments.length + 1,
          text: comment.text
     }

     comments.push(newComment)
     //console.log(comments)
     return new Response(JSON.stringify(newComment), {
          headers: { "Content-Type": "application/json" },
          status: 201,
     })
} // Handling POST Requests

// export function GET() {
//      return Response.json (comments) 
// } 
// Handling GET Requests