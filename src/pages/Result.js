import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import './Result.css';

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
    </Card>
  );
}
export default Result;
