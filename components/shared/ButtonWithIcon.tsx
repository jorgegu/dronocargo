import { FunctionComponent } from "react";
import styled from "styled-components";

interface Props {
  onClick: () => void;
  text: string;
  iconSrc: string;
}

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 120px;
  padding: 8px 16px;
  font-size: 16px;
  background: #fff;
  border: solid 1px #d9d9d9;
  border-radius: 4px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Text = styled.p`
  font-weight: 500px;
  line-height: 24px;
`;

const Img = styled.img`
  width: 20px;
  height: 16px;
`;

const ButtonWithIcon: FunctionComponent<Props> = ({
  onClick,
  text,
  iconSrc,
}: Props) => (
  <Button onClick={onClick}>
    <Text>{text}</Text>
    <img src={iconSrc} />
  </Button>
);

export default ButtonWithIcon;
