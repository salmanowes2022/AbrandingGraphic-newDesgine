import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1 className="hero-title">
              Transform Your{' '}
              <span className="hero-title-highlight">Digital Presence</span>
            </h1>
            <p className="hero-desc">
              We help businesses create stunning digital experiences that drive
              growth and engagement. Our team of experts delivers innovative
              solutions tailored to your needs.
            </p>
            <div className="hero-actions">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hero-btn hero-btn-primary"
              >
                Get Started
                <FiArrowRight />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hero-btn hero-btn-secondary"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image-wrapper"
          >
            <div className="hero-image-bg">
              {/* Placeholder for hero image/illustration */}
              <div className="hero-image-placeholder">
                <div className="hero-image-text">
                  Hero Image
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 