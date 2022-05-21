import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostsSidebar } from "./postSidebar/PostsSidebar";
import { selectUsers } from "./redux/selectors";
import { setUsersSaga } from "./saga/actionCreator";
import "./Users.css";

interface User {
  address: {};
  company: {};
  email: string;
  id: number;
  name: string;
  phone: string;
  userName: string;
  website: string;
}

export const Users = () => {
  const dispatch = useDispatch();
  const usersList = useSelector(selectUsers);
  const [postSidebarActive, SetPostSidebarActive] = useState(false);
  const [selectUserId, setSelectUserId] = useState(0);
  const userPostButton = (id: number) => {
    SetPostSidebarActive(true);
    setSelectUserId(id);
  };

  useEffect(() => {
    dispatch(setUsersSaga());
  }, []);

  return (
    <div className="main">
      <h1 className="title">Users</h1>
      {usersList.map((user: User) => (
        <div className="user_info" key={user.id}>
          <details>
            <summary className="user_title">{user.name}</summary>
            <div>email: {user.email}</div>
            <div>phone: {user.phone}</div>
          </details>
          <button className="posts_btn" onClick={() => userPostButton(user.id)}>
            Posts
          </button>
        </div>
      ))}
      <PostsSidebar
        active={postSidebarActive}
        setActive={SetPostSidebarActive}
        selectUserId={selectUserId}
      />
    </div>
  );
};
