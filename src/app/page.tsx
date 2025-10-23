import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

/**
 * Home Page Component - Main landing page for the portfolio site
 * 
 * Renders the complete homepage with all sections in order:
 * 1. Navigation - Fixed header with navigation menu
 * 2. Hero - Main introduction with CTA buttons
 * 3. Projects - Featured open-source projects showcase
 * 4. About - Professional background and statistics
 * 5. Footer - Site footer with social links
 * 
 * @component
 * @returns {React.ReactElement} The complete home page layout
 * 
 * @example
 * // This is the main page exported by app/page.tsx
 * export default Home;
 */
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
