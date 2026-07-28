import { BrowserRouter, Routes, Route } from "react-router-dom";

// Placeholder imports - create these files in src/pages/
const Home = () => <div className="p-8 text-2xl font-bold">Home Page Draft</div>;
const Projects = () => <div className="p-8">Projects Page</div>;
const Hackathons = () => <div className="p-8">Hackathons Page</div>;
const Gallery = () => <div className="p-8">Photography Gallery</div>;

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> will go here so it persists across routes */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      {/* <Footer /> will go here */}
    </BrowserRouter>
  );
}

export default App;