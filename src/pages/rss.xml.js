import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import {
  BLOG_NAME,
  BLOG_DESCRIPTION,
  BLOG_AUTHOR,
  BLOG_THUMBNAIL,
} from "@/const";

export async function GET(context) {
    const generalBlog = await getCollection("generalBlog");

    var allBlogPosts = generalBlog;

    allBlogPosts = allBlogPosts.sort((a, b) => {
        return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
    });

    return rss({
        // `<title>` field in output xml
        title: BLOG_NAME,
        // `<description>` field in output xml
        description: BLOG_DESCRIPTION,
        // Pull in your project "site" from the endpoint context
        // https://docs.astro.build/en/reference/api-reference/#site
        site: context.site,
        trailingSlash: false,

        // Array of `<item>`s in output xml
        // See "Generating items" section for examples using content collections and glob imports
        items: allBlogPosts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            image: post.data.image,
            // Compute RSS link from post `id`
            // This example assumes all posts are rendered as `/blog/[id]` routes
            link: `/${post.data.slug}/`
        })),
        // (optional) inject custom xml
        customData: `<language>en-us</language>`,

    });
}