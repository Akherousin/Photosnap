import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import HomePage from '/src/pages/HomePage';
import StoriesPage from '/src/pages/StoriesPage';
import FeaturesPage from '/src/pages/FeaturesPage';
import PricingPage from './pages/PricingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<HomePage />} />
            <Route path="stories" element={<StoriesPage />} />
            <Route path="features" element={<FeaturesPage />} />
            <Route path="pricing" element={<PricingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
