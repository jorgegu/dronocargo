import { FunctionComponent } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0 48px;
`;

const StyledText = styled.p<{ color?: string }>`
  font-size: 30px;
  ${({ color }) => `color: ${color || "#000"}`};
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  background: #307460;
  border: solid 1px #2a6352;
  border-radius: 4px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  position: relative;
  border: solid 1px #d9d9d9;
  border-radius: 4px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
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

const FlexContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const DeliveryHeader: FunctionComponent = () => {
  return (
    <Container>
      <FlexContainer>
        <StyledText>Delivery</StyledText>
        <StyledText color="#808080">History</StyledText>
      </FlexContainer>
      <FlexContainer>
        <InputContainer>
          <StyledInput placeholder="Search" />
          <StyledImage src="/search_icon.svg" />
        </InputContainer>

        <StyledButton>New delivery</StyledButton>
      </FlexContainer>
    </Container>
  );
};

export default DeliveryHeader;
