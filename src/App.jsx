import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Header from './components/Header'
import CategoriesNav from './components/CategoriesNav'
import TeamSection from './components/TeamSection'
import CustomersSection from './components/CustomersSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      <Header />
      <main className="app-main">
        <div className="app-intro">
          <h1 className="app-title">
            Hey, we are a studio specialized in<br />
            graphic design and programming
          </h1>
          <button 
            onClick={scrollToContact}
            className="app-contact-btn"
            style={{letterSpacing: '0.15em', width: 140, height: 32}}
          >
            Contact
          </button>
        </div>
        <CategoriesNav />
        <TeamSection />
        <CustomersSection />
        <ContactSection />
        {/* Next sections will go here */}
      </main>
      <Footer />
    </div>
  )
}

export default App
