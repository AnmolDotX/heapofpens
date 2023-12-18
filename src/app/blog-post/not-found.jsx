import Link from "next/link";

const BlogPostNotfound = () => {
    return (
        <div>
            You are on wrong page buddy, 
            <Link href='/'>go home to select a blog</Link>
        </div>
    );
}

export default BlogPostNotfound;