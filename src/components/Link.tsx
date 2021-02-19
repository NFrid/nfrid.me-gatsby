import React from "react";
import styled from "styled-components";

import { Link, LinkGetProps } from "@reach/router";
import { c } from "../styles/colors";

const activeLink = (nested: boolean, className: string) =>
  nested
    ? ({ isPartiallyCurrent }: LinkGetProps) =>
        isPartiallyCurrent ? { className: className + " active" } : {}
    : ({ isCurrent }: LinkGetProps) =>
        isCurrent ? { className: className + " active" } : {};

// I hate Reach Router I hate it so bad why it doesn't have any types for a
// damn Link component props oh shit oh fuck please do.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NLink = (props: any) => (
  <Link {...props} getProps={activeLink(props.nested, props.className)} />
);

export default styled(NLink)`
  padding: 1em 0.5em;

  &.active {
    color: ${c.greenish};
  }

  &:hover {
    &.active {
      color: ${c.orange};
    }
  }
`;
