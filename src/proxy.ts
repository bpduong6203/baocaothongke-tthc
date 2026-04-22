import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
export const runtime = "edge";
// Xác định những trang nào cho phép truy cập mà không cần đăng nhập
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Bỏ qua các file tĩnh và internals của Next.js
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Luôn chạy cho các API routes
    "/(api|trpc)(.*)",
  ],
};
