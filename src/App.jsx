// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './router';

export default function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen pt-16 pb-10">
        <Routes>
          {routes.map(({ path, element: Element }, index) => (
            <Route key={index} path={path} element={<Element />} />
          ))}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
