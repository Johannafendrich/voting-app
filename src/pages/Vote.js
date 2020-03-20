import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import Form from '../components/Form';
import RadioInput from '../components/RadioButtonsInput';
import { patchPoll, getPoll } from '../api/polls';
import Loading from '../components/Loading';

function Vote() {
  const { pollId } = useParams();
  const history = useHistory();
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);
  const [isLoadingPatchPoll, setIsLoadingPatchPoll] = React.useState(false);
  const [isLoadingGetPoll, setIsLoadingGetPoll] = React.useState(true);

  React.useEffect(() => {
    async function collectPoll() {
      setIsLoadingGetPoll(true);
      const poll = await getPoll(pollId);
      setPoll(poll);
      setIsLoadingGetPoll(false);
    }
    collectPoll();
  }, [pollId]);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoadingPatchPoll(true);

    const newPoll = { ...poll };
    newPoll.votes.push(answer);

    await patchPoll(pollId, newPoll);
    history.push(`/polls/${poll.id}`);
  }
  if (isLoadingGetPoll) {
    return <Loading />;
  }

  const options = ['firstAnswer', 'secondAnswer', 'thirdAnswer'];

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <h2>{poll.question}</h2>
        {options.map(option => (
          <RadioInput
            key={option}
            checked={answer === option}
            onChange={event => setAnswer(event.target.value)}
            value={option}
            label={poll[option]}
            name="answer"
          />
        ))}
        <Button disabled={isLoadingPatchPoll}>Show Result</Button>
      </Form>
    </Card>
  );
}
export default Vote;
