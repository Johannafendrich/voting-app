import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

function Home() {
  return (
    <Card>
      <Button>
        <Link to="/Add">Add</Link>
      </Button>
    </Card>
  );
}
export default Home;
