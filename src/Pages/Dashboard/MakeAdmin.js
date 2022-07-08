import React from 'react';
import Loading from '../Loading';
import { useQuery } from 'react-query';
import AllUsers from '../AllUsers';
const MakeAdmin = () => {

  const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()));

  if (isLoading) {
    return <Loading></Loading>
  }



  return (
    <div>



      <div className=" overflow-x-auto rounded-sm">
        <table className="w-full text-sm text-left">
          <thead className="text-white bg-[#2366B5]">
            <tr>
              <th className="px-6 py-4">
                index
              </th>
              <th className="px-6 py-4">
                Email
              </th>
              <th className="px-6 py-4">
                Make Admin
              </th>
              <th className="px-6 py-4">
                remove Admin
              </th>

            </tr>
          </thead>
          <tbody>

            {
              users.map((user, index) => <AllUsers user={user} key={user._id} index={index}>




              </AllUsers>)
            }



          </tbody>
        </table>
      </div>


    </div>
  );
};

export default MakeAdmin;