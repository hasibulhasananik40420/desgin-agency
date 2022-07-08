import React from 'react';
import { toast } from 'react-toastify';

const AllUsers = ({ user, index, refetch }) => {
    const { email, role } = user


    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`Successfully made an admin`)
                }
            })
    }

    return (
        <tr>
            <td className="px-6 py-4">
                {index + 1}
            </td>
            <td className="px-6 py-4">
                {email}
            </td>
            <td className="px-6 py-4">
                {role !== 'admin' && <button onClick={makeAdmin} className='px-4 py-2 bg-sky-500 rounded-sm text-white'>Make Admin</button>
                }
            </td>
            <td className="px-6 py-4">
                <button className='px-4 py-2 bg-sky-500 rounded-sm text-white'>Remove Admin</button>
            </td>
        </tr>
    );
};

export default AllUsers;