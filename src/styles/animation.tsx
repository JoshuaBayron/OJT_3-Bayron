import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const expandWidth = keyframes`
from {
  width: 0;
}
to {
  width: 100%;
}
`;

export const glowEffect = keyframes`
from, to {
  border-color: transparent;
}
50% {
  border-color: antiquewhite;
}`;
