import React from "react";

import "./CommentItem.css";

const CommentItem = (props) => {
  return (
    <li className="comment-item">
      <div className="comment-box">
        <div className="comment-box__head">
          <section className="head__name">{props.name}</section>
          <section className="head__datetime">{props.id}</section>
        </div>
        <div className="comment-box__body">{props.body}</div>
      </div>
    </li>
  );
};

export default CommentItem;
