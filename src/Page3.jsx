import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Page3 = () => {
  const { coolParam } = useParams();
  return (
    <>
      <h2>Page3 Page</h2>
      <p>This is params: {coolParam}</p>

      <Link to='/'>
        <p>Go to Home</p>
      </Link>
    </>
  );
};

export default Page3;
