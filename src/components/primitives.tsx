import styled from "styled-components";
import { d } from "../styles/colors";

export const Box = styled.div`
  margin: 1.5em 10vw;
  text-align: justify;
`;

export const Tit = styled.h1`
  text-align: center;
  color: ${d.greenish};
`;

export const Subtit = styled.h2`
  text-align: center;
  color: ${d.purpleish};
`;

export const Par = styled.p`
  font-size: 18px;
  color: ${d.fg};
`;

export const RefBox = styled(Box)`
  margin: 5em 0;
  & * {
    display: block;
    text-align: right;
  }
`;

export const RefTit = styled(Tit)`
  color: ${d.redish};
  font-size: 20px;
`;

export const Ref = styled.a.attrs({
  target: "_blank",
})`
  text-decoration: none;
  color: ${d.yellowish};
  margin-bottom: 0.5em;
  font-size: 14px;
`;
