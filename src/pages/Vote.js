import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

function Vote() {
  return (
    <Card>
      <p>Vote</p>
      <Link to="/Result">Result</Link>
    </Card>
  );
}
export default Vote;
