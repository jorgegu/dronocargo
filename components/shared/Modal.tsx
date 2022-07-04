import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { Image, Button } from "../../core/ui";

const MainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  zindex: 100;
`;

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;
  background: ${({ theme }) => theme.colors.white};
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 29px;
  right: 29px;
  padding: 0;
  box-shadow: unset;
`;

interface Props {
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
}

const Modal: FunctionComponent<Props> = ({
  onClose,
  isOpen,
  children,
}: Props) => {
  return isOpen ? (
    <MainContainer>
      <Container>
        <StyledButton onClick={onClose}>
          <Image
            src="/close_icon.svg"
            alt="close icon"
            width="14px"
            height="14px"
          />
        </StyledButton>
        {children}
      </Container>
    </MainContainer>
  ) : null;
};

export default Modal;
