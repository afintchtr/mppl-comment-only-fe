import React from "react";

import CommentItem from "../CommentItem/CommentItem";
import "./CommentList.css";

const CommentList = (props) => {
  return (
    <ul className="comment-list">
      {props.items.map((comment) => (
        <CommentItem
          key={comment.id}
          id={comment.id}
          name={comment.name}
          date={comment.id}
          body={comment.body}
        ></CommentItem>
      ))}
    </ul>
  );
};

export default CommentList;
