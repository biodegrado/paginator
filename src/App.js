import React, { useRef } from 'react';
import Tabella from '../src/components/components/tabella/tabella';

const App = () => {
  const fsTableRef = useRef(null);

  return (
    <div>
      <Tabella fsTable={fsTableRef.current} />
    </div>
  );
};

export default App;