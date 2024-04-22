import { useState } from "react";
import { actions } from "../../actions";
import CheckIcon from "../../assets/icons/check.png";
import EditIcon from "../../assets/icons/edit.svg";
import { useProfile } from "../../hooks";
import useAxios from "../../hooks/useAxios";

const Bio = () => {
    const { state, dispatch } = useProfile();
    const { api } = useAxios();

    const [bio, setBio] = useState(state?.user?.bio);
    const [editMode, setEditMode] = useState(false);

    const handleBioEdit = async () => {
        dispatch({ type: actions.profile.DATA_FETCHING }); 

        try {
            const response = await api.patch(
                `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id
                }`,
                { bio }
            );

            if (response.status === 200) {
                dispatch({
                    type: actions.profile.USER_DATA_EDITED,
                    data: response.data,
                });
            }
            setEditMode(false);
        } catch (err) {
            dispatch({
                type: actions.profile.DATA_FETCHING_ERROR,
                error: err.message,
            });
        }
    };

    return (
        <div className="mt-4 flex items-start gap-2 lg:mt-6">
            <div className="flex-1">
                {!editMode ? (
                    <p className="leading-[188%] text-gray-400 lg:text-lg">
                        {state?.user?.bio}
                    </p>
                ) : (
                    <textarea
                        className='p-2 className="leading-[188%] text-gray-600 lg:text-lg rounded-md'
                        value={bio}
                        rows={4}
                        cols={55}
                        onChange={(e) => setBio(e.target.value)}
                    />
                )}
            </div>
            {!editMode ? (
                <button
                    className="flex-center h-7 w-24 rounded-full ms-4 ps-4 bg-red-500 text-white"
                    onClick={() => setEditMode(true)}
                >Edit
                    <img src={EditIcon} alt="Edit" className="ps-2" />
                </button>
            ) : (
                <button
                    className="flex-center h-7 w-24 rounded-full ms-4 ps-4 bg-purple-500 text-white "
                    onClick={handleBioEdit}
                >Save
                    <img src={CheckIcon} alt="Check" className="h-7 w-7 ps-1" />
                </button>
            )}
        </div>
    );
};

export default Bio;
