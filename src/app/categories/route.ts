export const dynamic = "force-static" // configuration option ! .. for caching 
// this ensures that the response is cached and served instatntly to all users 
// also we can check this on time route handler 

export const revalidate = 10;
// revalidate data in every 10 sec 
// revalidate cached data using incremental static regeneration 


export function GET() {
    // we cannot test this route handler cuzz of no dynamic data in the response
    // this data would typically comes from a database 
    const categories = [
        { id: 1, name: 'Electronics' },
        { id: 2, name: 'Books' },
        { id: 3, name: 'Clothing'},
        { id: 4, name: 'Home and garden' },]

    return Response.json(categories)

}
// so this data typically not changes .. every request to this endpoint will trigger a database query which is inefficient 
// to avoid this we use caching 
  