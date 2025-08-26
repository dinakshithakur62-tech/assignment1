import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // If user is visiting root `/`
  if (req.nextUrl.pathname === "/") {
    const lastPage = req.cookies.get("lastPage")?.value;

    // Redirect to last visited page if exists (but not loop back to `/`)
    if (lastPage && lastPage !== "/") {
      return NextResponse.redirect(new URL(lastPage, req.url));
    }
  }

  return NextResponse.next();
}
