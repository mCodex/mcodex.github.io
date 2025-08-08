import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <Projects />
      <section id="about">
        <About />
      </section>
      <Footer />
    </main>
  );
}
