import { Navigate, Outlet } from "react-router-dom";
import Header from '../components/common/Header';
import { useAuth } from "../hooks";
import { PostProvider, ProfileProvider } from "../providers";

export default function PrivateRoutes() {
    const { auth } = useAuth();
    console.log(auth);

    return (
        <>
            {
                auth.authToken ? (
                    <>
                        <PostProvider>
                            <ProfileProvider>
                                <Header />
                                <main className=" mx-auto max-w-[1020px] py-8 " >
                                    <div className="container">
                                        <Outlet />
                                    </div>
                                </main>
                            </ProfileProvider>
                        </PostProvider>
                    </>
                ) : (
                    <Navigate to="/login" />
                )
            }
        </>
    )
}
