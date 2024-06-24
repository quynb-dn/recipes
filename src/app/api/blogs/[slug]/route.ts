import { BLOG_POSTS } from "@_mock/blog";

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  const blog = BLOG_POSTS.find((blog) => blog.slug === params.slug);

  return Response.json({
    data: blog ?? null,
  });
}
