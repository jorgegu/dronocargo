import { FunctionComponent } from "react";
import styled from "styled-components";
import { Flex, Text } from "../../core/ui";

const Container = styled(Flex)`
  justify-content: space-between;
  padding: 48px 0 64px;
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
