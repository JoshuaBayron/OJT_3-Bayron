import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";
import { fadeIn, expandWidth, glowEffect } from "../styles/animation";

const AnimatedInput = styled(Form.Control)`
  animation: ${fadeIn} 0.5s ease-in-out;
  border: none;
  border-bottom: 2px solid #ffc107;
  transition: all 0.3s;
  outline: none;
  
  &.typewriter {
    animation: ${expandWidth} 1s steps(40, end) forwards;
    /* Apply the blink-caret animation to the border */
    animation-name: ${glowEffect};
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }
`;

export default function FormTextInput() {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem("animatedInput") || ""
  );

  useEffect(() => {
    localStorage.setItem("animatedInput", inputValue);
  }, [inputValue]);

  return (
    <Form>
      <AnimatedInput
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="m-0 p-0 w-100 fs-2"
      />
    </Form>
  );
}
