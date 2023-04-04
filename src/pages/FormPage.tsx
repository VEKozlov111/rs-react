import React, { useState } from "react";
import Form from "components/Form";
import { IUser } from "types/types";
import UserCard from "components/UserCard";

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
      {users.length ? (
        <div className="flex flex-col gap-2">
          <h2 className="text-color1 text-2xl text-center mt-9">Users list</h2>
          <div className="flex gap-5">
            {users.map((user) => (
              <UserCard user={user} key={user.id} />
            ))}
          </div>
        </div>
      ) : (
        <h2 className="text-color1 text-2xl text-center mt-9">
          Sorry but we did not find any Users!
        </h2>
      )}
    </div>
  );
}

export default FormPage;
