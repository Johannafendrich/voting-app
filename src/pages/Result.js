import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import Card from '../components/Card';
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
      <Form>
        <h2>{poll?.question}</h2>
        <QuestionInput>{poll?.firstAnswer}</QuestionInput>
        <AnswerInput>{poll?.secondAnswer}</AnswerInput>
        <AnswerInput>{poll?.thirdAnswer}</AnswerInput>
        <Button>
          <Link to="/Add">Create new Vote</Link>
        </Button>
      </Form>
    </Card>
  );
}
export default Result;
