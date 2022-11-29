import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CourseGoalList from "./components/Comments/CommentList/CommentList";
import CourseInput from "./components/Comments/CommentInput/CommentInput";
import "./App.css";

const App = () => {
  // const params = useParams();
  const params = {
    // temporary
    id: 1,
  };
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${params.id}`
    );
    setComments(response.data);
  };

  const addGoalHandler = (enteredText) => {
    setComments((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );
  if (comments.length > 0) {
    content = <CourseGoalList items={comments} />;
  }

  return (
    <div>
      <section id="comment-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="comments">{content}</section>
    </div>
  );
};

export default App;
