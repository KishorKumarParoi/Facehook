import { useContext } from "react";
import { AuthContext } from "../../contexts";
import Header from "../common/Header";

export default function HomePage() {
    const { auth } = useContext(AuthContext);
    console.log(auth);

    return (
        <div>
            <Header />
            HomePage
        </div>
    )
}
