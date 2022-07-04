import { FunctionComponent } from "react";
import styled from "styled-components";
import { Flex, Text, Button } from "../../core/ui";

const StyledH1 = styled.h1`
  display: flex;
  gap: 16px;
  font-size: 30px;
`;

const InputContainer = styled.div`
  position: relative;
  border: solid 1px ${({ theme }) => theme.colors.borderGray};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: hidden;
`;

const StyledImage = styled.img`
  position: absolute;
  left: 19px;
  top: 50%;
  transform: translateY(-50%);
  width: 17.5px;
  height: 17.5px;
`;

const StyledInput = styled.input`
  padding: 8px 0 8px 48px;
  font-size: 16px;
  line-height: 24px;
  border: none;
  &::placeholder {
    color: #808080;
  }
`;

const DeliveryHeader: FunctionComponent = () => {
  return (
    <Flex justifyContent="space-between" mt="24px" mb="48px">
      <StyledH1>
        <Text fontWeight="400">Delivery</Text>
        <Text fontWeight="300" color="textGray">
          History
        </Text>
      </StyledH1>

      <Flex gap="16px">
        <InputContainer>
          <StyledInput placeholder="Search" />
          <StyledImage src="/search_icon.svg" />
        </InputContainer>
        <Button
          color="white"
          backgroundColor="green"
          border="solid 1px"
          borderColor="darkGreen"
        >
          <Text lineHeight="24px">New delivery</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default DeliveryHeader;
