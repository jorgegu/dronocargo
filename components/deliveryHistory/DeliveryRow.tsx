import { FunctionComponent } from "react";
import styled from "styled-components";
import Cell from "./DeliveryCell";
import ButtonWithIcon from "../shared/ButtonWithIcon";
import { Delivery } from "../../interfaces";

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(2, 1.5fr) 1fr 1fr 1.5fr 3fr;
  column-gap: 26px;
  &:not(:last-child) {
    border-bottom: solid 1px #e6e6e6;
  }
`;
const Column = styled.div`
  align-self: center;
  padding: 32px 0;
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`;

const DropdownButton = styled.div``;

interface Props {
  data: Delivery;
}

const DeliveryRow: FunctionComponent<Props> = ({
  data: { status, orderId, technician, platform, drone, technicalCheck },
}: Props) => {
  return (
    <Row>
      <Column>
        <Cell headline="Status" value={status} />
      </Column>
      <Column>
        <Cell headline="Order ID" value={orderId} />
      </Column>
      <Column>
        <Cell headline="Technician" value={technician} />
      </Column>
      <Column>
        <Cell headline="Platform" value={platform} />
      </Column>
      <Column>
        <Cell headline="Drone" value={drone} />
      </Column>
      <Column>
        <Cell headline="Technical check" value={technicalCheck} />
      </Column>
      <Column>
        <ActionsContainer>
          <ButtonWithIcon
            onClick={() => ""}
            text="Details"
            iconSrc="/details_icon.svg"
          />
          <ButtonWithIcon
            onClick={() => ""}
            text="Actions"
            iconSrc="/arrow_bottom_icon.svg"
          />
        </ActionsContainer>
      </Column>
    </Row>
  );
};

export default DeliveryRow;
