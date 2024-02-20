import React, { ChangeEvent, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Form } from "react-bootstrap";

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blinkCaret = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: antiquewhite;
  }
`;

const AnimatedInput = styled(Form.Control)`
  animation: ${fadein} 0.5s ease-in-out;

  &.typewriter {
    animation: ${typewriter} 1s steps(40, end) forwards;
    /* Apply the blink-caret animation to the border */
    animation-name: ${blinkCaret};
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }
`;

const BorderlessForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>(
    localStorage.getItem("inputValue") || ""
  );

  useEffect(() => {
    // Store the input value in local storage whenever it changes
    localStorage.setItem("inputValue", inputValue);
  }, [inputValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form>
      <AnimatedInput
        type="text"
        name="User"
        id="User"
        placeholder={inputValue || "Joshua Bayron"}
        value={inputValue}
        onChange={handleInputChange}
        className={`author-form ${inputValue && "typewriter"}`}
      />
    </form>
  );
};

export default BorderlessForm;
