import React, { FC, useState } from 'react';
import Form from "components/Form";
import { IUser } from 'types/types';




function FormPage() {
  const [users, setUsers] = useState<IUser[]>([]);
  const addUser = (newUser: IUser[]) => {
    setUsers(newUser);
  };

  return (
    <div>
      <div className="flex justify-center">
        <Form users={users} addUser={addUser} />
      </div>
      {users.length ?
        <div className='flex flex-col gap-2'>
          <h2 className="text-color1 text-2xl text-center mt-9">
            Users list
          </h2>
          <div className='flex gap-5'>
            {users.map((user) => (
              <div className='flex flex-col gap-4 border bg-color5 rounded py-3 md:px-3'>
                <h2 className="text-color1 text-base text-center">User #{user.id + 1}</h2>
                <ul className='flex flex-col gap-2'>
                  <li className="text-color1 text-xs">Name: {user.name}</li>
                  <li className="text-color1 text-xs">Date of birth: {user.date}</li>
                  <li className="text-color1 text-xs">Country: {user.country}</li>
                  <li className="text-color1 text-xs">Gender: {user.gender}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        :
        <h2 className="text-color1 text-2xl text-center mt-9">
          Sorry but we didn't find any Users!
        </h2>
      }
    </div>



  );
}

export default FormPage;
