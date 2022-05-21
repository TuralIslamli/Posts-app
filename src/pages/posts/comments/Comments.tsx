import React from "react";
import { useSelector } from "react-redux";
import { selectPostComments } from "../redux/selectors";
import "./Comments.css";


interface CommentsProps {
  active: boolean;
  setActive: (value: boolean) => void;
}

interface Comment {
  name: string;
  email: string;
  body: string;
  id: number;
  postId: number;
}
export const Comments: React.FC<CommentsProps> = ({ active, setActive }) => {
  const postComments = useSelector(selectPostComments);

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "content active" : "content"}
        onClick={(e) => e.stopPropagation()}
      >
        {postComments.map((comment: Comment) => {
          return (
            <div key={comment.id} className="comment_box">
              <div>Email: {comment.email}</div>
              <div>Name: {comment.name}</div>
              <div>Comment: {comment.body}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
