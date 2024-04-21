import { useEffect, useState } from "react";
import { useAuth, useAxios } from "../../hooks";

export default function ProfilePage() {
    const [user, setUser] = useState(null);
    const { api } = useAxios();
    const { auth } = useAuth();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true);

        const fetchProfile = async () => {
            try {
                const response = await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`);
                setUser(response.data.user);
                setPosts(response.data.posts);
                console.log(user);
            } catch (error) {
                console.error(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchProfile();
    }, []);


    if (loading) return <h1>Fetching your profile data...</h1>

    return (
        <div>
            <h1 className="text-3xl bg-yellow-500 text-center "> Welcome, {user?.firstName} {user?.lastName}  </h1>
            <p>You Have {posts.length} posts</p>
            {error && <p>{error}</p>}
        </div>
    )
}
