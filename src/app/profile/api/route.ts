import { cookies, headers } from "next/headers"; // both are async function so we need to await them !! 
import { type NextRequest } from "next/server";

// option 1 : using the request parameter 
// export function GET(request:Request) {
//     const requestHeaders = new Headers(request.headers)
//     console.log(requestHeaders.get("Authorization"))
//     return new Response("profile api data")
// }

// option 2 : use the header function that next js provides ..
// for which we have imported {headers} from next/headers

export async function GET(request: NextRequest) {
   
    // read headers from an incoming request   
    const headerList = await headers();
    console.log(headerList.get('Authorization'))

    // to read cookie (that we sent in response header)in route handler using request parameter .. using the 1st approach 
    const theme = request.cookies.get('theme')
    console.log(theme)

    // another way of handling cookies in route handlers using next js built in cookies function 
    const cookieStore = await cookies()
    cookieStore.set("resultsPerPage", "20")
    // apart from set and get cookie function support additional methods too .. refer docs 
    console.log(cookieStore.get("resultsPerPage"))
    // cookie function has more methods like has and delete  
    return new Response("<h1>profile api data</h1>", {
        headers: {
            // setting outgoing headers in response !! 
            "Content-Type": "text/html",
            // option 1 : setting up cookie by returning a new response with the set cookie header 
            "Set-Cookie": "theme=dark",
        },
    })

}