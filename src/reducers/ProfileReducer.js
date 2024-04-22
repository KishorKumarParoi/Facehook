import { actions } from "../actions";

const initialState = {
    user: null,
    posts: [],
    loading: false,
    error: null
}

const ProfileReducer = (state, action) => {
    switch (action.type) {
        case actions.profile.DATA_FETCHING: {
            return {
                ...state,
                loading: true,
            }
        }

        case actions.profile.DATA_FETCHED: {
            return {
                ...state,
                loading: false,
                user: action?.data?.user,
                posts: action?.data?.posts,
            }
        }

        case actions.profile.DATA_FETCHING_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        }

        case actions.profile.USER_DATA_EDITED: {
            return {
                ...state,
                loading: false,
                user: {
                    ...state.user,
                    bio: action.data.bio,
                }
            }
        }

        default: {
            return state;
        }

    }
}

export { ProfileReducer, initialState };
