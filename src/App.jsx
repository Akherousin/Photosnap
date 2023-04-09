import { BrowserRouter } from 'react-router-dom';
import SuperHeader from './components/SuperHeader';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SuperHeader />
      </BrowserRouter>
    </div>
  );
}

export default App;
