import { Navigate, Outlet } from "react-router-dom";
import Header from '../components/common/Header';
import { useAuth } from "../hooks";

export default function PrivateRoutes() {
    const { auth } = useAuth();
    console.log(auth);

    return (
        <>
            {
                auth.user ? (
                    <>
                        <Header />
                        <main className=" mx-auto max-w-[1020px] py-8 " >
                            <div className="container">
                                <Outlet />
                            </div>
                        </main>
                    </>
                ) : (
                    <Navigate to="/login" />
                )
            }
        </>
    )
}
