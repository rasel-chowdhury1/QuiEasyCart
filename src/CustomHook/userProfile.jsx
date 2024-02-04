
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Providers/AuthProvider';
import { useContext } from 'react';

const userProfile = () => {
    const {user,loading} = useContext(AuthContext);
    const userId = localStorage.getItem('userId');

    const {data: userProfilee={}, refetch} = useQuery({
        queryKey: ['userProfile', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const response = await fetch(`http://localhost:3000/user/${userId}`)
            return response.json()
        }
    })
    return [userProfilee,refetch];
};

export default userProfile;