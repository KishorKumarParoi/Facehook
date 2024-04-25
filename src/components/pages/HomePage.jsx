
import { useEffect } from 'react';
import { actions } from '../../actions';
import { useAxios, usePost } from '../../hooks';
import PostList from '../posts/PostList';

const HomePage = () => {
    const { api } = useAxios();
    const { state, dispatch } = usePost();

    useEffect(() => {
        dispatch({ type: actions.post.DATA_FETCHING });

        const fetchPost = async () => {
            try {
                const response = await api.get(
                    `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
                );


                console.log(response.data);

                if (response.status === 200) {
                    dispatch({ type: actions.post.DATA_FETCHED, data: response.data });
                }

            } catch (error) {
                console.log(error);
                dispatch({ type: actions.post.DATA_FETCH_ERROR, error: error.message });
            }
        }

        fetchPost();
    }, []);

    console.log(state);

    if (state?.loading) return (<div>Fetching Posts...</div>);

    if (state?.error) return (<div>Error in fetching posts: {state?.error?.message}</div>);

    return (
        <div>
            <PostList posts={state?.posts} />
            <h1>Homepage</h1>
        </div>
    )
}

export default HomePage;