import axios from "axios";
import { useEffect } from "react";
import api from '../api';
import useAuth from "./useAuth";

const useAxios = () => {

    const { auth, setAuth } = useAuth();

    useEffect(() => {

        // add a request interceptor

        const requestIntercept = api.interceptors.request.use((config) => {
            const authToken = auth?.authToken;
            if (authToken) {
                config.headers.Authorization = `Bearer ${authToken}`;
            }
            return config;
        }, (error) => {
            Promise.reject(error);
        })


        // add a response interceptor

        const responseIntercept = api.interceptors.response.use((response) => response, async (error) => {
            const originalRequest = error.config;

            // If the error status is 401 and there is no originalRequest._retry flag,
            // it means the token has expired and we need to refresh it
            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;

                try {
                    const refreshToken = auth?.refreshToken;
                    const response = await api.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`, { refreshToken });

                    // got new token by requesting with refresh token
                    const { token } = response.data;
                    console.log(`New Token: ${token}`);

                    // set the new token
                    setAuth({ ...auth, authToken: token });

                    // Retry the original request with the new token
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    return axios(originalRequest);

                } catch (error) {
                    throw error;
                }
            }

            return Promise.reject(error);
        });


        return () => {
            console.log("useAxios cleanup");
            api.interceptors.request.eject(requestIntercept);
            api.interceptors.response.eject(responseIntercept);
        }
    }, [auth, auth?.authToken, setAuth]);

    return { api };
};

export default useAxios;