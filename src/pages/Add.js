import React from 'react';
import Card from '../components/Card';
import styled from '@emotion/styled';
import Button from '../components/Button';
import Form from '../components/Form';
import { useHistory } from 'react-router-dom';
import { postPoll } from '../api/polls';

const Input = styled.input`
  margin-bottom: 10px;
`;

const QuestionInput = styled(Input)`
  border-bottom: 1px solid $props{theme.colors.textPrimary};
  border: none;
  padding: 6px 10px;
  margin: 10px;
  color: $props{theme.colors.textPrimary};
  background: none;
  text-transform: uppercase;
  &::placeholder {
    color: $props{theme.colors.textPrimary};
  }
`;

const AnswerInput = styled(Input)`
  border: none;
  padding: 6px 10px;
  background: none;
  border-bottom: 1px solid white;
  border-radius: 20px;
  &::placeholder {
    color: $props{theme.colors.textPrimary};
  }
`;

function Add() {
  const history = useHistory();
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
    const createdPoll = await postPoll(poll);
    history.push(`/polls${createdPoll.id}/vote/`);
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
        <Button>Submit your Poll</Button>
      </Form>
    </Card>
  );
}
export default Add;
