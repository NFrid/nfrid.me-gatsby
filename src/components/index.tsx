import styled, { keyframes } from "styled-components";

import { c } from "../styles/colors";

export const Tit = styled.h1`
  text-align: center;
  font-size: 1.5em;
  color: ${c.purpleish};
`;

export const Par = styled.p`
  font-size: 1.1em;
`;

export const Em = styled.em`
  color: ${c.pinkish};
`;

const fadeIn = keyframes`
  from {
    /* transform: scale(.25); */
    opacity: 0;
  }

  to {
    /* transform: scale(1); */
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    /* transform: scale(1); */
    opacity: 0;
  }

  to {
    /* transform: scale(.25); */
    opacity: 1;
  }
`;

interface FadeProps {
  out: boolean;
}

export const FadeWrapper = styled.div<FadeProps>`
  visibility: ${({ out }) => (out ? "hidden" : "visible")};
  animation: ${({ out }) => (out ? fadeOut : fadeIn)} 0.1s linear;
  transition: visibility 0.1s linear;
`;
