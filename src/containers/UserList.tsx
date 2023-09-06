import React, { FC } from "react";
import { CardUser } from "../components/cards";
import { UserAttributes } from "../interfaces/UserAttributes";

interface ListUsersAttributes {
  payload?: UserAttributes;
  isLoading?: boolean;
}

const UserList: FC<ListUsersAttributes> = ({ payload, isLoading }) => {
  const showCardUser = payload?.data.map((item, i) => <CardUser key={i} data={item} />);

  if (isLoading) return <p>Loading..</p>;

  return <div className="my-[20px] lg:flex flex-wrap">{showCardUser}</div>;
};

export default UserList;
