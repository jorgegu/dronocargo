import { FunctionComponent } from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import { Flex, Text, Button } from "../../core/ui";
import { InputField, SelectField } from "../shared/FormFields";
import { Delivery } from "../../interfaces";
import { addDelivery } from "../../services/deliveryData";

const Container = styled.div`
  width: 500px;
`;

const ButtonsContainer = styled(Flex)`
  justify-content: flex-end;
  gap: 16px;
  padding-top: 24px;
  border-top: solid 1px ${({ theme }) => theme.colors.borderGray};
`;

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.green};
  border: solid 1px ${({ theme }) => theme.colors.darkGreen};
  &:disabled {
    opacity: 0.5;
  }
`;

const required = (value: string) => (value ? undefined : "Required");

const PLATFORM = [
  { value: "Tetha", displayValue: "Tetha" },
  { value: "Alpha", displayValue: "Alpha" },
  { value: "Gama", displayValue: "Gama" },
  { value: "Beta", displayValue: "Beta" },
];
const DRONE = [
  { value: "DJI-004Q", displayValue: "DJI-004Q" },
  { value: "DJI-005Q", displayValue: "DJI-005Q" },
  { value: "DJI-006Q", displayValue: "DJI-006Q" },
  { value: "DJI-007Q", displayValue: "DJI-007Q" },
];

interface Props {
  onClose: () => void;
  onSubmitSuccess: () => void;
}

const NewDeliveryContentModal: FunctionComponent<Props> = ({
  onClose,
  onSubmitSuccess,
}: Props) => {
  const createNewDelivery = (
    values: Omit<Delivery, "status" | "technicalCheck">
  ) => {
    const newDelivery: Delivery = {
      ...values,
      status: "Ready",
      technicalCheck: "N/A",
    };

    addDelivery(newDelivery);
    onSubmitSuccess();
    onClose();
  };

  return (
    <Container>
      <Text fontSize="24px" mb="16px">
        New delivery
      </Text>
      <Text lineHeight="24px" mb="32px">
        Please select the order ID and a technician to deploy the cargo. All
        elements are mandatory.
      </Text>
      <Form
        onSubmit={createNewDelivery}
        render={({ handleSubmit, submitting, pristine, valid }) => (
          <form>
            <Flex gap="24px" mb="32px" justifyContent="space-between">
              <Field
                label="Order ID"
                name="orderId"
                component={InputField}
                type="text"
                validate={required}
              />
              <Field
                label="Technician"
                name="technician"
                component={InputField}
                type="text"
                validate={required}
                iconSrc="/search_icon.svg"
              />
            </Flex>
            <Flex gap="24px" mb="32px" justifyContent="space-between">
              <Field
                label="Platform"
                name="platform"
                component={SelectField}
                validate={required}
                options={PLATFORM}
              />
              <Field
                label="Drone"
                name="drone"
                component={SelectField}
                validate={required}
                options={DRONE}
              />
            </Flex>
            <ButtonsContainer>
              <Button
                border="solid 1px"
                borderColor="borderGray"
                onClick={onClose}
              >
                Cancel
              </Button>
              <StyledButton
                type="submit"
                onClick={handleSubmit}
                disabled={submitting || pristine || !valid}
              >
                Create new delivery
              </StyledButton>
            </ButtonsContainer>
          </form>
        )}
      />
    </Container>
  );
};
export default NewDeliveryContentModal;
