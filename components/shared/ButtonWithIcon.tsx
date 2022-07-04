import { FunctionComponent } from "react";
import styled from "styled-components";
import { Button, Text, Image } from "../../core/ui";

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 120px;
  border: solid 1px ${({ theme }) => theme.colors.borderGray};
`;

interface Props {
  onClick: () => void;
  text: string;
  iconSrc: string;
}

const ButtonWithIcon: FunctionComponent<Props> = ({
  onClick,
  text,
  iconSrc,
}: Props) => (
  <StyledButton onClick={onClick}>
    <Text fontWeight="500" lineHeight="24px">
      {text}
    </Text>
    <Image width="20px" height="16px" src={iconSrc} />
  </StyledButton>
);

export default ButtonWithIcon;
