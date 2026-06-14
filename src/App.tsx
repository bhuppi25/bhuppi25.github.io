import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="bg-zinc-950 text-white min-h-screen">

            <Navbar />

            <Hero />

            <Highlights />

            <About />

            <Skills />

            <Experience />

            <Projects />

            <Contact />

            <Footer />

        </div>
    );
}

export default App;