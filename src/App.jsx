import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '/src/pages/HomePage';
import StoriesPage from '/src/pages/StoriesPage';
import FeaturesPage from '/src/pages/FeaturesPage';
import Layout from './components/Layout';
import Toggle from './components/Toggle/Toggle';
import PricingPage from './pages/PricingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<HomePage />} />
            <Route path="stories" element={<StoriesPage />} />
            <Route path="features" element={<FeaturesPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="button" element={<Toggle />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
