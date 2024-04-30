import React, { Suspense, lazy } from 'react';
import '../src/style/style.css'

const AdvertisementListLazy = lazy(() => import('./components/AdvertisementList'));

const App = () => {
  return (
    <div>
      <h1>Advertisement Board</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <AdvertisementListLazy />
      </Suspense>
    </div>
  );
};

export default App;
