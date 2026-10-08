// eg navigating to /profile redirects to homepage 
import  { type NextRequest, NextResponse } from "next/server";

// export function proxy(request:NextRequest) {
//     return NextResponse.redirect(new URL('/', request.url))
// }
// export const config = {
//     matcher: '/profile', } 
// config object to tell next js to only apply this middleware  to profile route 


// second approach using conditional statements ..
// export function proxy(request: NextRequest) {
//     if (request.nextUrl.pathname === '/profile'){
//         return NextResponse.redirect(new URL('/hello', request.nextUrl))
//               // instead of redirect () we can use rewrite too 
// //rewrite a feature perfect for handling legacy urls or improvong SEO methods 
// // keep the browser unchanged while serving different content 
//     }
// }


// modify middleware to handle user prefrences for themes and add a custom header for all responses 
export function proxy(request:NextRequest) {
    const response = NextResponse.next()
    const themePrefernce = request.cookies.get('theme')
    if (!themePrefernce) {
        response.cookies.set('theme',"dark")
    }
    // adding cutom header to the response .. using response header set 
    response.headers.set('custom-header',"custom value")
    return  response ;
    // returning modified response object from our middleware function 
}



