import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import './Result.css';
import Button from '../components/Button';

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

  return (
    <Card>
      <h2>{poll?.question}</h2>
      <div className="answers">{poll?.firstAnswer}</div>
      <div className="answers">{poll?.secondAnswer}</div>
      <div className="answers">{poll?.thirdAnswer}</div>
      <Button>
        <Link to="/Add">Create new Vote</Link>
      </Button>
    </Card>
  );
}
export default Result;
