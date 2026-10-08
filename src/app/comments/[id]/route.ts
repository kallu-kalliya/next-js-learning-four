import { comments } from "../data";
//import { NextRequest } from "next/server";

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ id: string }> },
    // request object is never used thats why it was named _request
    // to indicate : I received it because Next.js passes it automatically, but I don't need it."
) {
    const { id } = await params
    const comment = comments.find((item) =>
        item.id === parseInt(id))
    if (comment) return Response.json(comment)
    
    return Response.json("not found")
    
}//  Dynamic Route Handlers

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;
    const body = await request.json();
    const { text } = body
    const index = comments.findIndex((item) => item.id === parseInt(id))
    // instead of findindex we can also use arr.find method 
    comments[index].text = text
    return Response.json(comments[index])
} // Handling PATCH Requests

export async function DELETE(
    _request: Request,
    { params }: { params: Promise<{ id: string }> },
) {

    const { id } = await params;
    const index = comments.findIndex((item) => item.id === parseInt(id))
    const deletedComment = comments[index];
    comments.splice(index, 1);
    // splice method .. at what index, how many items to remove 
    // array.splice(startIndex, deleteCount, item1, item2, ...)
    // item1, item2, ... → Optional new items to insert.. at the position where the element got deleted 
    return Response.json(deletedComment);
} // Handling DELETE Requests
