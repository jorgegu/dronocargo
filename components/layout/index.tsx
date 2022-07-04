import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: auto;
`;

interface Props {
  children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }: Props) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
);

export default Layout;
