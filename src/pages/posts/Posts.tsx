import React, { useEffect, useState } from "react";
import { FaComments } from "react-icons/fa";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../../components/pagination/Pagination";
import {
  selectActivePage,
  selectActivePosts,
  selectPagesCount,
  selectPosts,
} from "./redux/selectors";
import { setPostCommentsSaga, setPostsSaga } from "./saga/actionCreator";
import { setActivePage } from "./redux/actions";
import { Comments } from "./comments/Comments";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export const Posts = () => {
  const dispatch = useDispatch();
  const pagesCount = useSelector(selectPagesCount);
  const activePosts = useSelector(selectActivePosts);
  const activePage = useSelector(selectActivePage);
  const [page, setPage] = useState(activePage);
  const [commentModalActive, SetCommentModalActive] = useState(false);

  useEffect(() => {
    dispatch(setActivePage(page));
  }, [page]);

  useEffect(() => {
    dispatch(setPostsSaga());
  }, [activePage]);

  const postComments = (id: number) => {
    SetCommentModalActive(true);
    dispatch(setPostCommentsSaga(id));
  };

  return (
    <div className="main">
      <h1 className="title">Posts</h1>
      {activePosts.map((post: Post) => (
        <div key={post.id}>
          <details>
            <summary className="post_title">{post.title}</summary>
            {post.body}
            <span
              className="commentsButton"
              onClick={() => postComments(post.id)}
            >
              <FaComments size={20} />
            </span>
          </details>
        </div>
      ))}
      <Pagination
        pagesCount={pagesCount}
        activePage={page}
        setActivePage={setPage}
      />
      <Comments active={commentModalActive} setActive={SetCommentModalActive} />
    </div>
  );
};
