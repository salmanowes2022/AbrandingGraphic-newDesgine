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
    font-family: 'RagSans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    font-weight: 200;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='none' stroke='black' stroke-width='2'/><circle cx='11' cy='12' r='1.5' fill='black'/><circle cx='21' cy='12' r='1.5' fill='black'/><path d='M 10 18 Q 16 24 22 18' fill='none' stroke='black' stroke-width='2' stroke-linecap='round'/></svg>") 16 16, auto;
  }

  * {
    box-sizing: border-box;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='none' stroke='black' stroke-width='2'/><circle cx='11' cy='12' r='1.5' fill='black'/><circle cx='21' cy='12' r='1.5' fill='black'/><path d='M 10 18 Q 16 24 22 18' fill='none' stroke='black' stroke-width='2' stroke-linecap='round'/></svg>") 16 16, auto;
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
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='none' stroke='black' stroke-width='2'/><circle cx='11' cy='12' r='1.5' fill='black'/><circle cx='21' cy='12' r='1.5' fill='black'/><path d='M 10 18 Q 16 24 22 18' fill='none' stroke='black' stroke-width='2' stroke-linecap='round'/></svg>") 16 16, pointer;
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

  /* Pulse Animation for Floating Button */
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export default GlobalStyles;