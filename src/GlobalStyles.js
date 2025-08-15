import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Custom Fonts */
  @font-face {
    font-family: 'RagSans';
    src: url('/fonts/RagSans-SemiBold.otf') format('opentype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'RagSans';
    src: url('/fonts/RagSans-ExtraLight.otf') format('opentype');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  /* Reset and Base Styles */
  html {
    scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
    padding: 0;
    background: #F3F4F6;
    color: #1F2937;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  #root {
    max-width: auto;
    text-align: center;
  }

  /* Global Utility Classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Button Base Styles */
  .btn {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: all 0.2s;
    border: none;
    cursor: pointer;
  }
  
  .btn-primary {
    background: #3B82F6;
    color: white;
  }
  
  .btn-primary:hover {
    background: rgba(59, 130, 246, 0.9);
  }
  
  .btn-secondary {
    background: #10B981;
    color: white;
  }
  
  .btn-secondary:hover {
    background: rgba(16, 185, 129, 0.9);
  }
`;

export default GlobalStyles;