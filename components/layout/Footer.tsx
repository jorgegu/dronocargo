import { FunctionComponent } from "react";
import { Flex, Text } from "../../core/ui";

const Footer: FunctionComponent = () => {
  return (
    <Flex justifyContent="space-between" pt="48px" pb="64px">
      <Text>Powered by Nuvo Cargo</Text>
      <Text>Help</Text>
    </Flex>
  );
};

export default Footer;
