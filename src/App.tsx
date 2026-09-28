import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0D12] font-sans text-[#E4E7EB] lg:flex">
      <Sidebar />
      <div className="flex-1">
        <Hero />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
