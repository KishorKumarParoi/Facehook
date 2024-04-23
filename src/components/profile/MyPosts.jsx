import { useProfile } from "../../hooks";
import PostList from '../posts/PostList';


export default function MyPosts() {
    const { state } = useProfile();
    const posts = state?.posts;

    return (
        <>
            <h4 className="mt-6 text-2xl lg:text-3xl lg:mt-8 font-bold">Your Posts</h4>
            <PostList posts={posts} />
        </>
    )
}
