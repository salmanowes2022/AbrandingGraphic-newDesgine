import React from "react";
import styled from "styled-components";

const TestButton = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 60px;
  height: 60px;
  background: red;
  border-radius: 50%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
`;

const FloatingTalkButton = ({ language }) => {
  console.log('FloatingTalkButton rendering...');
  
  return (
    <TestButton onClick={() => alert('Button clicked!')}>
      TEST
    </TestButton>
  );
};

export default FloatingTalkButton;
