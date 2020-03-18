import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import Form from '../components/Form';

const POLLS_API_URL =
  process.env.REACT_APP_POLLS_API ||
  'https://my-json-server.typicode.com/Johannafendrich/voting-app/polls';

function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);

  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`${POLLS_API_URL}/${pollId}`);
      const poll = await response.json();
      setPoll(poll);
    }
    getPoll();
  }, [pollId]);

  const firstAnswerVotes = poll?.votes.filter(vote => vote === 'firstAnswer')
    .length;
  const secondAnswerVotes = poll?.votes.filter(vote => vote === 'secondAnswer')
    .length;
  const thirdAnswerVotes = poll?.votes.filter(vote => vote === 'thirdAnswer')
    .length;

  return (
    <Card>
      <Form>
        <h2>
          {poll?.question} ({poll?.votes.length} votes)
        </h2>
        <div>
          {poll?.firstAnswer} ({firstAnswerVotes} votes)
        </div>
        <div>
          {poll?.secondAnswer} ({secondAnswerVotes} votes)
        </div>
        <div>
          {poll?.thirdAnswer} ({thirdAnswerVotes} votes)
        </div>
        <Button>
          <Link to="/Add">Create new Vote</Link>
        </Button>
      </Form>
    </Card>
  );
}
export default Result;
