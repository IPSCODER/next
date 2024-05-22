import { NextResponse } from "next/server";

export function middleware(request: { url: string | URL | undefined; }):any{
    const user = ""

    if (!user) {
        return NextResponse.redirect(
            new URL("/",request.url)
        )
    }
    
    return NextResponse.next()
}

export const config = {
    matcher:["/contact","/about"]
}


// export function middleware(request: { url: string | URL | undefined; }):any{
//     const user = ""

//     if (!user) {
//         return NextResponse.redirect(
//             new URL("/",request.url)
//         )
//     }

//     return NextResponse.next()
// }

// export const config = {
//     matcher:["/contact","/about"]
// }