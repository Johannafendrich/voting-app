import React from "react";
import { Link } from "react-router-dom";

function Vote() {
  return (
    <div>
      <p>Vote</p>
      <Link to="/Result">Result</Link>
    </div>
  );
}
export default Vote;
