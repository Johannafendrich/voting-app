import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

function Result() {
  return (
    <Card>
      <p>Result</p>
      <Link to="/Home">Home</Link>
    </Card>
  );
}
export default Result;
