
import { getCollection } from "astro:content";


export async function GET({ params, request }) {

    const generalBlog = await getCollection("generalBlog");

    var allBlogPosts = [ ...generalBlog];

    allBlogPosts = allBlogPosts.sort((a, b) => {
        return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
    });



    const blogPosts = []
    for (let index = 0; index < allBlogPosts.length; index++) {

        const element = allBlogPosts[index].data;
        blogPosts.push(element)
    }


    return new Response(
        JSON.stringify(blogPosts),
    );
}