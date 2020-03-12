import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

function Home() {
  return (
    <Card>
      <p>Home</p>
      <Link to="/Add">Add</Link>
    </Card>
  );
}
export default Home;
