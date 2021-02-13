import {
  Tit,
  Subtit,
  Par,
  RefBox,
  RefTit,
  Ref,
} from "../components/primitives";

const Index = () => (
  <>
    <Tit>nfrid.me</Tit>
    <Subtit>Nick Friday's personal website</Subtit>
    <Par>This website isn't completed right now. Please stay tuned!!</Par>
    <Par>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Par>
    <Tit>👽️</Tit>
    <RefBox>
      <RefTit>Some useful links</RefTit>
      <Ref href="https://github.com/NFrid/nfrid.me">Project's GitHub page</Ref>
      <Ref href="https://bit.ly/2JqTOBQ">Very important stuff !!</Ref>
    </RefBox>
  </>
);

export default Index;
