import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Page4 = () => {
  const location = useLocation();

  return (
    <>
      <h2>Page 5 : {location.state.message}</h2>

      <Link to='/'>Go to Home</Link>
    </>
  );
};

export default Page4;
