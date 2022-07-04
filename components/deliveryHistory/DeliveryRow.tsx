import { FunctionComponent } from "react";
import Router from "next/router";
import styled from "styled-components";
import Cell from "./DeliveryCell";
import ButtonWithIcon from "../shared/ButtonWithIcon";
import Dropdown, { DropdonwOption } from "../shared/Dropdown";
import { Delivery } from "../../interfaces";
import { Flex } from "../../core/ui";

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(2, 1.5fr) 1fr 1fr 1.5fr 2.5fr;
  column-gap: 26px;
  &:not(:last-child) {
    border-bottom: solid 1px #e6e6e6;
  }
`;
const Column = styled.div`
  align-self: center;
  padding: 32px 0;
`;

interface Props {
  data: Delivery;
}

const ACTIONS: DropdonwOption[] = [
  { value: "edit", displayValue: "Edit" },
  { value: "delete", displayValue: "Delete" },
];

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
        <Flex justifyContent="flex-end" gap="16px">
          <ButtonWithIcon
            onClick={() => Router.push(`/shipment/${orderId}`)}
            text="Details"
            iconSrc="/details_icon.svg"
          />
          <Dropdown
            onSelect={() => ""}
            name="actions"
            options={ACTIONS}
            text="Actions"
          />
        </Flex>
      </Column>
    </Row>
  );
};

export default DeliveryRow;
