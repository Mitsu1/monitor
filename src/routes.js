import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Monitor from './slas/monitor';
import Monitor2 from './slas/monitor2';

const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Monitor2/>} />
            <Route path="/monitor" element={<Monitor/>} />
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
