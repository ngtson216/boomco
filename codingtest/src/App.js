
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import ROUTER from './routes';
import AppLayout from './screens/Layout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={ROUTER.INDEX} element={<AppLayout />} />
      </Routes>
    </div>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
