import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import MoviesDirectoryPage from './pages/MoviesDirectoryPage';
import MovieDetailPage from './pages/MovieDetailPage';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesDirectoryPage />} />
          <Route path="/movies/:id" element={<MovieDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
