import React from 'react';
import { Link, useNavigate, Routes, Route } from 'react-router-dom';

import Page5 from './Page5';

const Page4 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('page5', { state: { message: 'This is message from Page 4' } });
  };

  return (
    <>
      <h2>Page4 Page</h2>
      <Link to='/'>Go to Home</Link>
      <p>
        <button onClick={handleClick}>Go to Page 5 with message</button>
      </p>

      <Routes>
        <Route path='page5' element={<Page5 />} />
      </Routes>
    </>
  );
};

export default Page4;
