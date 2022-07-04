import { FunctionComponent } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const RightContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Header: FunctionComponent = () => {
  return (
    <Container>
      <Text>Dronocargo</Text>
      <RightContainer>
        <Text>Regina Zepeda</Text>
        <Img src="/user_icon.svg" />
      </RightContainer>
    </Container>
  );
};

export default Header;
