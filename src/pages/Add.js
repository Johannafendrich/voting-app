import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import styled from '@emotion/styled';
import Button from '../components/Button';
import Form from '../components/Form';

const Input = styled.input`
  margin-bottom: 10px;
`;

const QuestionInput = styled(Input)`
  border-bottom: 1px solid white;
  border: none;
  padding: 6px 10px;
  margin: 10px;
  color: white;
  background: none;
  text-transform: uppercase;
  &::placeholder {
    color: white;
  }
`;

const AnswerInput = styled(Input)`
  border-bottom: 1px solid white;
  border: none;
  padding: 6px 10px;
  background: none;
  border-bottom: 1px solid white;
  border-radius: 20px;
  &::placeholder {
    color: white;
  }
`;

function Add() {
  const [question, setQuestion] = React.useState('');
  const [firstAnswer, setFirstAnswer] = React.useState('');
  const [secondAnswer, setSecondAnswer] = React.useState('');
  const [thirdAnswer, setThirdAnswer] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const poll = {
      question: question,
      firstAnswer: firstAnswer,
      secondAnswer: secondAnswer,
      thirdAnswer: thirdAnswer,
      votes: []
    };

    const response = await fetch(
      process.env.REACT_APP_POLLS_API ||
        'https://my-json-server.typicode.com/Johannafendrich/voting-app/polls',

      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(poll)
      }
    );
    const createdPoll = await response.json();
    alert(`Created poll with the id ${createdPoll.id}`);
  }

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <QuestionInput
          type="text"
          placeholder="Enter question"
          value={question}
          onChange={event => {
            setQuestion(event.target.value);
          }}
        />
        <AnswerInput
          type="text"
          placeholder="First answer"
          value={firstAnswer}
          onChange={event => {
            setFirstAnswer(event.target.value);
          }}
        />
        <AnswerInput
          type="text"
          placeholder="Second answer"
          value={secondAnswer}
          onChange={event => {
            setSecondAnswer(event.target.value);
          }}
        />
        <AnswerInput
          type="text"
          placeholder="Third answer"
          value={thirdAnswer}
          onChange={event => {
            setThirdAnswer(event.target.value);
          }}
        />
        <Button>
          <Link to="/polls/:pollId/Vote">Submit your Poll</Link>
        </Button>
      </Form>
    </Card>
  );
}
export default Add;
