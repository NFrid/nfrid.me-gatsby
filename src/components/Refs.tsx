import { FC } from "react";
import styled from "styled-components";
import { d } from "../styles/colors";

interface IProps {
  title: string;
  refs: {
    href: string;
    text: string;
  }[];
}

const Refs: FC<IProps> = ({ title, refs }) => (
  <RefBox>
    <RefTit>{title}</RefTit>
    {refs.map((ref, i) => (
      <Ref key={i} href={ref.href}>
        {ref.text}
      </Ref>
    ))}
  </RefBox>
);

export default Refs;

const RefBox = styled.div`
  margin: 5em 0;
  & * {
    display: block;
    text-align: right;
  }
`;

const RefTit = styled.h2`
  color: ${d.redish};
  font-size: 1.3em;
`;

const Ref = styled.a.attrs({
  target: "_blank",
})`
  text-decoration: none;
  color: ${d.yellowish};
  margin-bottom: 0.5em;
  font-size: 0.9em;
`;
