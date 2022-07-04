import { FunctionComponent } from "react";
import { Flex, Text, Image } from "../../core/ui";

const Header: FunctionComponent = () => {
  return (
    <Flex justifyContent="space-between" py="24px">
      <Text lineHeight="24px" fontWeight="500">
        Dronocargo
      </Text>
      <Flex gap="10px">
        <Text lineHeight="24px">Regina Zepeda</Text>
        <Image width="20px" height="20px" src="/user_icon.svg" />
      </Flex>
    </Flex>
  );
};

export default Header;
