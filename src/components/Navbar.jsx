import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  z-index: 50;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

const NavbarInnerContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px 24px;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: 8px 8px;
  }

  @media (max-width: 600px) {
    padding: 4px 2px;
  }
`;

const NavbarRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavbarBrand = styled(motion.div)`
  font-size: 2rem;
  font-weight: bold;
  color: #3B82F6;

  @media (max-width: 900px) {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const NavbarLinks = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  @media (max-width: 900px) {
    gap: 16px;
  }
`;

const NavbarLink = styled(motion.a)`
  color: #1F2937;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;

  &:hover {
    color: #3B82F6;
  }

  @media (max-width: 900px) {
    font-size: 0.95rem;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

const NavbarBtn = styled(motion.button)`
  padding: 10px 24px;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &.navbar-btn-primary {
    background: #3B82F6;
    color: #fff;

    &:hover {
      background: #2563eb;
    }
  }

  &.navbar-btn-mobile {
    width: 100%;
    margin-top: 8px;
  }

  @media (max-width: 900px) {
    font-size: 0.95rem;
    padding: 8px 16px;
    border-radius: 6px;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
    padding: 6px 8px;
    border-radius: 5px;
  }
`;

const NavbarMobileBtn = styled.button`
  background: none;
  border: none;
  color: #1F2937;
  display: block;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavbarMobileMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;

  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 600px) {
    gap: 8px;
  }
`;

const NavbarMobileLink = styled.a`
  color: #1F2937;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
  display: block;

  &:hover {
    color: #3B82F6;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <NavbarRow>
          <NavbarBrand
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            BrandName
          </NavbarBrand>

          {/* Desktop Navigation */}
          <NavbarLinks>
            {navItems.map((item) => (
              <NavbarLink
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </NavbarLink>
            ))}
            <NavbarBtn
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="navbar-btn-primary"
            >
              Get Started
            </NavbarBtn>
          </NavbarLinks>

          {/* Mobile Navigation Button */}
          <NavbarMobileBtn
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </NavbarMobileBtn>
        </NavbarRow>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <NavbarMobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navItems.map((item) => (
              <NavbarMobileLink
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavbarMobileLink>
            ))}
            <NavbarBtn className="navbar-btn-primary navbar-btn-mobile">
              Get Started
            </NavbarBtn>
          </NavbarMobileMenu>
        )}
      </NavbarInnerContainer>
    </NavbarContainer>
  );
};

export default Navbar; 