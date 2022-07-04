import { useState, FunctionComponent } from "react";
import styled from "styled-components";
import { Flex, Text, Button } from "../../core/ui";
import StyledInput from "../shared/StyledInput";
import Modal from "../../components/shared/Modal";
import NewDeliveryContentModal from "./NewDeliveryContentModal";

const StyledH1 = styled.h1`
  display: flex;
  gap: 16px;
  font-size: 30px;
`;

interface Props {
  onCreateData: () => void;
}

const DeliveryHeader: FunctionComponent<Props> = ({ onCreateData }: Props) => {
  const [isNewDelivery, setIsNewDelivery] = useState<boolean>(false);
  return (
    <Flex justifyContent="space-between" mt="24px" mb="48px">
      <StyledH1>
        <Text fontWeight="400">Delivery</Text>
        <Text fontWeight="300" color="textGray">
          History
        </Text>
      </StyledH1>

      <Flex gap="16px">
        <StyledInput
          onChange={() => "Not implemented"}
          placeholder="Search"
          iconSrc="/search_icon.svg"
        />
        <Button
          color="white"
          backgroundColor="green"
          border="solid 1px"
          borderColor="darkGreen"
          onClick={() => setIsNewDelivery(true)}
        >
          <Text lineHeight="24px">New delivery</Text>
        </Button>
      </Flex>
      <Modal onClose={() => setIsNewDelivery(false)} isOpen={isNewDelivery}>
        <NewDeliveryContentModal
          onSubmitSuccess={onCreateData}
          onClose={() => setIsNewDelivery(false)}
        />
      </Modal>
    </Flex>
  );
};

export default DeliveryHeader;
