import { FunctionComponent } from "react";
import styled from "styled-components";

const Container = styled.div`
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

const Input = styled.input<{ hasIcon: boolean }>`
  padding: ${({ hasIcon }) => (hasIcon ? "8px 8px 8px 48px" : "8px")};
  font-size: 16px;
  line-height: 24px;
  border: none;
  &::placeholder {
    color: #808080;
  }
`;

interface Props {
  onChange?: () => void;
  placeholder?: string;
  iconSrc?: string;
  input?: any;
}

const StyledInput: FunctionComponent<Props> = ({
  onChange,
  placeholder = "",
  iconSrc,
  input,
}: Props) => (
  <Container>
    {iconSrc && <StyledImage src={iconSrc} alt="input icon" />}
    <Input placeholder={placeholder} hasIcon={!!iconSrc} {...input} />
  </Container>
);

export default StyledInput;
