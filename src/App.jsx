import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MobileHeader from './components/MobileHeader';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MobileHeader />
      </BrowserRouter>
    </div>
  );
}

export default App;
