import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

// Placeholders for the other pages
const Projects = () => <div className="p-32 text-center text-2xl font-bold">Projects Page</div>;
const Hackathons = () => <div className="p-32 text-center text-2xl font-bold">Hackathons Page</div>;
const Gallery = () => <div className="p-32 text-center text-2xl font-bold">Gallery Page</div>;

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen pt-20"> {/* pt-20 prevents content hiding behind fixed navbar */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;