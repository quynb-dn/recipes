import { BLOG_POSTS } from "@_mock/blog";

export async function GET(_: Request) {
  return Response.json({
    data: BLOG_POSTS,
  });
}
