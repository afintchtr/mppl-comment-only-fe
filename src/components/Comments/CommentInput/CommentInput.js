import React, { useState } from "react";
import axios from "axios";
import "./CommentInput.css";

const CourseInput = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [enteredComment, setEnteredComment] = useState("");

  const commentSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", {
        enteredName,
        enteredComment,
      });
    } catch (error) {
      console.log(error);
    }
  };

  let form = (
    <form onSubmit={commentSubmitHandler} className="spirit-form">
      <div className="field">
        <label className="label">Siapa kamu?</label>
        <div className="control">
          <input
            type="text"
            className="input"
            value={enteredName}
            onChange={(e) => setEnteredName(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Isi komentar</label>
        <div className="control">
          <textarea
            type="text"
            className="input"
            value={enteredComment}
            onChange={(e) => setEnteredComment(e.target.value)}
          />
        </div>
      </div>
      <div className="control">
        <button
          type="submit"
          className="spirit__add-button"
          onClick={() => setShowForm(false)}
        >
          Post
        </button>
      </div>
    </form>
  );

  if (showForm === false) {
    form = <div></div>;
  }

  return (
    <div>
      <div className="comment-button" onClick={() => setShowForm(true)}>
        <div>Tulis Komentar atau Dukungan</div>
      </div>
      {form}
    </div>
  );
};

export default CourseInput;
