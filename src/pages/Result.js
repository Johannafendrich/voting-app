import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import Form from '../components/Form';
import { getPoll } from '../api/polls';
import Loading from '../components/Loading';

function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function collectPoll() {
      setIsLoading(true);
      const poll = await getPoll(pollId);
      setPoll(poll);
      setIsLoading(false);
    }
    collectPoll();
  }, [pollId]);

  const firstAnswerVotes =
    poll?.votes.filter(vote => vote === 'firstAnswer').length || 0;
  const secondAnswerVotes =
    poll?.votes.filter(vote => vote === 'secondAnswer').length || 0;
  const thirdAnswerVotes =
    poll?.votes.filter(vote => vote === 'thirdAnswer').length || 0;

  if (isLoading) {
    return <Loading />;
  }

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
