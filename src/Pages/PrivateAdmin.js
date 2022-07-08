import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
import useAdmin from './useAdmin';
import Loading from '../Pages/Loading'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateAdmin = ({ children }) => {

    const [user, loading] = useAuthState(auth)
    const [admin, adminLoading] = useAdmin(user)
    const location = useLocation()

    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!user || !admin) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children
};

export default PrivateAdmin;