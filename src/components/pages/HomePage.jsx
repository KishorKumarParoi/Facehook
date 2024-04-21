
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks';

const HomePage = () => {
    const { auth } = useAuth();
    console.log(auth);

    return (
        <div>
            <p>HomePage</p>
            <Link to="/me">Go to Profile Page</Link>
        </div>
    )
}

export default HomePage;