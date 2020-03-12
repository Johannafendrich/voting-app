import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import "./Add.css";
import Button from "../components/Button";

function Add() {
  const [question, setQuestion] = React.useState("");
  const [firstAnswer, setFirstAnswer] = React.useState("");
  const [secondAnswer, setSecondAnswer] = React.useState("");
  const [thirdAnswer, setThirdAnswer] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const poll = {
      question: question,
      firstAnswer: firstAnswer,
      secondAnswer: secondAnswer,
      thirdAnswer: thirdAnswer
    };

    const response = await fetch("http://localhost:4000/polls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(poll)
    });
    const createdPoll = await response.json();
    alert(`Created poll with the id ${createdPoll.id}`);
  }

  return (
    <Card>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__input form__input-question"
          type="text"
          placeholder="Whats your Question?"
          value={question}
          onChange={event => {
            setQuestion(event.target.value);
          }}
        />
        <input
          className="form__input form__input-answer"
          type="text"
          placeholder="Fill in your first choice"
          value={firstAnswer}
          onChange={event => {
            setFirstAnswer(event.target.value);
          }}
        />
        <input
          className="form__input form__input-answer"
          type="text"
          placeholder="Fill in your second choice"
          value={secondAnswer}
          onChange={event => {
            setSecondAnswer(event.target.value);
          }}
        />
        <input
          className="form__input form__input-answer"
          type="text"
          placeholder="Fill in your third choice"
          value={thirdAnswer}
          onChange={event => {
            setThirdAnswer(event.target.value);
          }}
        />
        <Button>Create your Poll</Button>
      </form>
      <Link to="/Vote">Vote</Link>
    </Card>
  );
}
export default Add;
