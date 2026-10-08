export async function GET() {
    return Response.json({time: new Date().toLocaleTimeString() })
    // current time in json format 
}

// caching makes no sense here on reload ! 