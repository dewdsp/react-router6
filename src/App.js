import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='page2' element={<Page2 />} />
          <Route path='page3/:coolParam/*' element={<Page3 />} />
          <Route path='page4/*' element={<Page4 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
