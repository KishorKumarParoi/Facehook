import { useEffect } from "react";
import { actions } from "../../actions";
import { useAuth, useAxios, useProfile } from "../../hooks";
import MyPosts from '../profile/MyPosts';
import ProfileInfo from "../profile/ProfileInfo";


export default function ProfilePage() {
    const { api } = useAxios();
    const { auth } = useAuth();

    const { state, dispatch } = useProfile();


    useEffect(() => {
        dispatch({ type: actions.profile.DATA_FETCHING });

        const fetchProfile = async () => {
            try {
                const response = await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`);
                if (response.status === 200) {
                    dispatch({ type: actions.profile.DATA_FETCHED, data: response.data });
                }
            } catch (error) {
                console.error(error);
                dispatch({ type: actions.profile.DATA_FETCHING_ERROR, error: error.message });
            }
        }

        fetchProfile();
    }, []);


    if (state?.loading) return <h1>Fetching your profile data...</h1>

    return (
        <div>
            <h1 className="text-3xl bg-yellow-500 text-center "> Welcome, {state?.user?.firstName} {state?.user?.lastName}  </h1>
            <ProfileInfo />
            <p>You Have {state?.posts.length} posts</p>
            <MyPosts />
            {state?.error && <p>{state?.error}</p>}
        </div>
    )
}
