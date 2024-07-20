import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Projects from "@/pages/Projects";
export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <About />
        <Expertise />
        <Certificates />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
