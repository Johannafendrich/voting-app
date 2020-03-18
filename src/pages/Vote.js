import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import Form from '../components/Form';
import RadioInput from '../components/RadioButtonsInput';

const POLLS_API_URL =
  process.env.REACT_APP_POLLS_API ||
  'https://my-json-server.typicode.com/Johannafendrich/voting-app/polls';

function Vote() {
  const { pollId } = useParams();
  const history = useHistory();
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);

  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`${POLLS_API_URL}/${pollId}`);
      const poll = await response.json();
      setPoll(poll);
    }

    getPoll();
  }, [pollId]);

  async function handleSubmit(event) {
    event.preventDefault();

    const newPoll = { ...poll };
    newPoll.votes.push(answer);

    await fetch(`${POLLS_API_URL}/${pollId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPoll)
    });
    history.push(`/polls/${poll.id}`);
  }
  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <h2>{poll?.question}</h2>
        <RadioInput
          checked={answer === 'firstAnswer'}
          value="firstAnswer"
          label={poll?.answerOne}
          onChange={event => setAnswer(event.target.value)}
        />
        <RadioInput
          checked={answer === 'secondAnswer'}
          value="secondAnswer"
          label={poll?.answerTwo}
          onChange={event => setAnswer(event.target.value)}
        />
        <RadioInput
          checked={answer === 'thirdAnswer'}
          value="thirdAnswer"
          label={poll?.answerThree}
          onChange={event => setAnswer(event.target.value)}
        />

        <Button>
          <Link to="/polls/:pollId">Show Result</Link>
        </Button>
      </Form>
    </Card>
  );
}
export default Vote;
