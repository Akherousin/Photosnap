import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button>Button 1</Button>
      <Button variant="light">Button 1</Button>
      <Button hasIcon>Button 1</Button>
      <Button variant="light" hasIcon>
        Button 1
      </Button>
    </div>
  );
}

export default App;
