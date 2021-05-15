import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h2>Home Page</h2>
      <Link to='page2'>
        <p>Go to Page2: Normal link</p>
      </Link>
      <Link to='page3/thisismy'>
        <p>Go to Page3: useParams</p>
      </Link>
      <Link to='page4'>
        <p>Go to Page4: Nested Route</p>
      </Link>
    </>
  );
};

export default Home;
