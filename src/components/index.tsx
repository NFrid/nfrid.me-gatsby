import React from "react";
import styled, { keyframes } from "styled-components";

import { c } from "../styles/colors";

interface IChildren {
  children: string;
}

export const Tit = styled.h2`
  text-align: center;
  margin-bottom: 1.5em;
  color: ${c.purpleish};
`;

const BackWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BackB = styled.a`
  font-size: 1.2em;
  background: none;
  border: none;
  margin: auto 0;
  padding: 0;
  cursor: pointer;
`;

export const BackTit: React.FC<IChildren> = ({ children }) => (
  <BackWrap>
    <BackB onClick={() => history.back()}>{"<- "}Back</BackB>
    <Tit>{children}</Tit>
    <div></div>
  </BackWrap>
);

export const Par = styled.p`
  font-size: 1.1em;
  color: ${c.fg};
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
