import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"; // Import the Footer
import Home from "./pages/Home";

// Placeholders for the other pages
const Projects = () => <div className="p-32 text-center text-2xl font-bold">Projects Page</div>;
const Hackathons = () => <div className="p-32 text-center text-2xl font-bold">Hackathons Page</div>;
const Gallery = () => <div className="p-32 text-center text-2xl font-bold">Gallery Page</div>;

function App() {
  return (
    <BrowserRouter>
      {/* Navbar stays at the top */}
      <Navbar />
      
      {/* Main content area */}
      <main className="min-h-screen pt-20"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>

      {/* Footer stays at the bottom */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;