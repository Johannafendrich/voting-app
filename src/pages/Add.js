import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

function Add() {
  return (
    <Card>
      <p>Add</p>
      <Link to="/Vote">Vote</Link>
    </Card>
  );
}
export default Add;
