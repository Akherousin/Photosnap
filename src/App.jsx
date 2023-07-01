import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '/src/pages/HomePage';
import StoriesPage from '/src/pages/StoriesPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stories" element={<StoriesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
