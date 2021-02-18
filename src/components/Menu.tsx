import React, { useState } from "react";
import styled from "styled-components";
import { c } from "../styles/colors";

interface IProps {
  children: JSX.Element[];
  title?: string;
}

const Menu = ({ children }: IProps) => {
  const [choise, setChoise] = useState(0);

  return (
    <div>
      <Wrapper>
        {children.map(({ props: { title } }, id) => {
          return (
            <Item
              key={id + 1}
              onClick={() => {
                choise === id + 1 ? setChoise(0) : setChoise(id + 1);
              }}
              active={id + 1 === choise}
            >
              {title || id + 1}
            </Item>
          );
        })}
      </Wrapper>
      {choise ? children[choise - 1] : <></>}
    </div>
  );
};

export default Menu;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

interface ItemProps {
  active: boolean;
}

const Item = styled.button<ItemProps>`
  font-size: 1.1em;
  color: ${({ active }) => (active ? c.pinkish : c.purpleish)};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  background: ${c.sel};
  padding: 0.5em;
  margin: 0.2em;
  width: 100%;
  border: none;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;
