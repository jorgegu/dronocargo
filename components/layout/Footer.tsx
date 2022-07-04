import { FunctionComponent } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px 0 64px;
`;

const Text = styled.p`
  font-size: 16px;
`;

const Footer: FunctionComponent = () => {
  return (
    <Container>
      <Text>Powered by Nuvo Cargo</Text>
      <Text>Help</Text>
    </Container>
  );
};

export default Footer;
