import { FunctionComponent } from "react";
import styled from "styled-components";
import Cell from "./DeliveryCell";
import { Delivery } from "../../interfaces";

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr) 2fr;
  column-gap: 26px;
  border-bottom: solid 1px #e6e6e6;
`;
const Column = styled.div`
  padding: 32px 0;
`;

const ButtonWithIcon = styled.div``;
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
        <ButtonWithIcon></ButtonWithIcon>
        <DropdownButton></DropdownButton>
      </Column>
    </Row>
  );
};

export default DeliveryRow;
