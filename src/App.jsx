import { BrowserRouter } from 'react-router-dom';
// import HomePage from '/src/pages/HomePage';
import StoriesPage from '/src/pages/StoriesPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StoriesPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
