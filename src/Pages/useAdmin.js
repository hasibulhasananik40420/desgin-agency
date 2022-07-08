import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        const email = user?.email
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {

                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    let role = data[0]?.role
                    if (role === 'admin') {
                        setAdmin(true)

                    }

                })
        }
    }, [user])

    return [admin]

};

export default useAdmin;