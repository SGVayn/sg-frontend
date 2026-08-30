import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Labs } from "./pages/Labs";
import { ThreeLab } from "./pages/ThreeLab";
import { About } from "./pages/About";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <Link to="/" className="site-title">
          SG
        </Link>

        <nav className="site-nav">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/labs">Labs</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/labs/three" element={<ThreeLab />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;