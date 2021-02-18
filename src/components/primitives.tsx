import React from "react";
import styled from "styled-components";

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

export const BackTit = ({ children }: IChildren) => (
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
