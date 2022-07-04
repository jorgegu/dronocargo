import styled from "styled-components";
import { Flex, Text } from "../../core/ui";
import Dropdown, { DropdonwOption } from "../shared/Dropdown";
import StyledInput from "./StyledInput";

const FieldContainer = styled.div`
  input,
  select {
    width: 240px;
  }
`;

// I had some issues trying to use the dropdown as select so I decided to use a normal select
const StyledSelect = styled.select`
  padding: 8px;
  height: 40px;
  border: solid 1px ${({ theme }) => theme.colors.borderGray};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const StyledLabel = styled.label`
  font-size: 14px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.textGray};
`;

const Label = ({ label, meta }: { label: string; meta?: any }) => (
  <Flex justifyContent="flex-start" gap="12px">
    <StyledLabel>{label}</StyledLabel>
    {meta && meta.error && meta.touched && (
      <Text color="red" fontSize="12px;">
        {meta.error}
      </Text>
    )}
  </Flex>
);

interface InputProps {
  input: any;
  meta: any;
  label: string;
  iconSrc?: string;
}

export const InputField = ({ input, meta, label, iconSrc }: InputProps) => (
  <FieldContainer>
    <Label label={label} meta={meta} />
    <StyledInput iconSrc={iconSrc} input={input} />
  </FieldContainer>
);

interface SelectProps {
  input: any;
  meta: any;
  label: string;
  options: DropdonwOption[];
}

export const SelectField = ({ input, meta, label, options }: SelectProps) => (
  <FieldContainer>
    <Label label={label} meta={meta} />
    <StyledSelect {...input}>
      <option value="" />
      {options.map(({ value, displayValue }) => (
        <option value={value} key={value}>
          {displayValue}
        </option>
      ))}
    </StyledSelect>
  </FieldContainer>
);
