import React, { FC } from "react";
import { IUser } from "types/types";

interface IUserProps {
  user: IUser;
}
const UserCard: FC<IUserProps> = ({ user }) => {
  return (
    <div className="flex flex-col gap-4 border bg-color5 rounded py-3 md:px-3">
      <h2 className="text-color1 text-base text-center">User #{user.id + 1}</h2>
      <img
        className="rounded w-5 h-5"
        src={user.file.toString()}
        alt={user.name}
      />
      <ul className="flex flex-col gap-2">
        <li className="text-color1 text-xs">Name: {user.name}</li>
        <li className="text-color1 text-xs">
          Date of birth: {user.date[2]}
          <b>.</b>
          {user.date[1]}
          <b>.</b>
          {user.date[0]}
        </li>
        <li className="text-color1 text-xs">Country: {user.country}</li>
        <li className="text-color1 text-xs">Gender: {user.gender}</li>
      </ul>
    </div>
  );
};

export default UserCard;
