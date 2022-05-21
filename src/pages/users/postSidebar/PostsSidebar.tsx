import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserPost } from "../redux/selectors";
import { setUserPostSaga } from "../saga/actionCreator";
import "./PostSidebar.css";
import { FaComments } from "react-icons/fa";
import { Comments } from "../../posts/comments/Comments";
import { setPostCommentsSaga } from "../../posts/saga/actionCreator";
import { CgClose } from "react-icons/cg";

interface postProps {
  active: boolean;
  setActive: (value: boolean) => void;
  selectUserId: number;
}

interface Posts {
  id: number;
  userId: number;
  body: string;
  title: string;
}

export const PostsSidebar: React.FC<postProps> = ({
  active,
  setActive,
  selectUserId,
}) => {
  const dispatch = useDispatch();
  const posts = useSelector(selectUserPost);
  const [commentModalActive, SetCommentModalActive] = useState(false);

  useEffect(() => {
    dispatch(setUserPostSaga(selectUserId));
  }, [selectUserId]);

  const postComments = (id: number) => {
    SetCommentModalActive(true);
    dispatch(setPostCommentsSaga(id));
  };

  return (
    <div className={active ? "sidebar active" : "sidebar"}>
      <div
        className={active ? "content active" : "content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div onClick={() => setActive(false)}>
          <CgClose size={30} />
        </div>
        {posts.map((post: Posts) => {
          return (
            <div key={post.id} className="comment_box">
              <h3>{post.title}</h3>
              <div>{post.body}</div>
              <span
                className="commentsButton"
                onClick={() => postComments(post.id)}
              >
                <FaComments size={20} />
              </span>
            </div>
          );
        })}
      </div>
      <Comments active={commentModalActive} setActive={SetCommentModalActive} />
    </div>
  );
};
