import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import "./Add.css";
import Button from "../components/Button";

function Add() {
  return (
    <Card>
      <form className="form">
        <input
          className="form__input form__input-question"
          type="text"
          placeholder="Whats your Question?"
        />
        <input
          className="form__input form__input-answer"
          type="text"
          placeholder="Fill in your first choice"
        />
        <input
          className="form__input form__input-answer"
          type="text"
          placeholder="Fill in your second choice"
        />
        <input
          className="form__input form__input-answer"
          type="text"
          placeholder="Fill in your third choice"
        />
        <Button>Create your Poll</Button>
      </form>
      <Link to="/Vote">Vote</Link>
    </Card>
  );
}
export default Add;
