import { useState, FunctionComponent } from "react";
import styled from "styled-components";
import { Button, Text, Image } from "../../core/ui";

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 120px;
  border: solid 1px ${({ theme }) => theme.colors.borderGray};
`;

const Container = styled.div`
  position: relative;
`;

const IconImage = styled(Image)<{ isOpen: boolean }>`
  ${({ isOpen }) => (isOpen ? "transform: rotate(180deg)" : "")};
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: solid 1px ${({ theme }) => theme.colors.borderGray};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  z-index: 1;
  ul {
    list-style: none;
    padding: 0;
    margin: 8px 0;
    li {
      padding: 8px 16px;
      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.green};
      }
    }
  }
`;

export interface DropdonwOption {
  value: string;
  displayValue: string;
}

interface Props {
  onSelect: (value: string) => void;
  name: string;
  options: DropdonwOption[];
  text?: string;
  iconSrc?: string;
}

const Dropdown: FunctionComponent<Props> = ({
  onSelect,
  name,
  options,
  text = "Select",
  iconSrc = "/arrow_bottom_icon.svg",
}: Props) => {
  const [listShowed, setListShowed] = useState<boolean>(false);
  const handleSelect = (value: string) => {
    setListShowed((prev) => !prev);
    onSelect(value);
  };
  return (
    <Container>
      <StyledButton onClick={() => setListShowed((prev) => !prev)}>
        <Text fontWeight="500" lineHeight="24px">
          {text}
        </Text>
        <IconImage
          width="12px"
          height="8px"
          src={iconSrc}
          isOpen={listShowed}
        />
      </StyledButton>
      {listShowed && (
        <OptionsContainer>
          <ul>
            {options.map(({ value, displayValue }) => (
              <li key={`${name}-${value}`} onClick={() => handleSelect(value)}>
                {displayValue}
              </li>
            ))}
          </ul>
        </OptionsContainer>
      )}
    </Container>
  );
};

export default Dropdown;
