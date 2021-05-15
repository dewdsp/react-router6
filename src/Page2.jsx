import React from 'react';
import { Link } from 'react-router-dom';

const Page2 = () => {
  return (
    <>
      <h2>Page2 Page</h2>
      <Link to='/'>
        <h3>Go to Home</h3>
      </Link>
    </>
  );
};

export default Page2;
