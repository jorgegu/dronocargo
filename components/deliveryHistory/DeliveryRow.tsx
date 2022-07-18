import { FunctionComponent } from "react";
import Router from "next/router";
import styled from "styled-components";
import Cell from "./DeliveryCell";
import ButtonWithIcon from "../shared/ButtonWithIcon";
import Dropdown, { DropdonwOption } from "../shared/Dropdown";
import { VehicleTypes } from "../../interfaces";
import { Flex } from "../../core/ui";

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1.5fr) 2.5fr;
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
  data: VehicleTypes;
}

const ACTIONS: DropdonwOption[] = [
  { value: "edit", displayValue: "Edit" },
  { value: "delete", displayValue: "Delete" },
];

const DeliveryRow: FunctionComponent<Props> = ({
  data: { makeId, makeName, vehicleTypeId, vehicleTypeName },
}: Props) => {
  return (
    <Row>
      <Column>
        <Cell headline="Make ID" value={makeId} />
      </Column>
      <Column>
        <Cell headline="Make Name" value={makeName} />
      </Column>
      <Column>
        <Cell headline="Vehicle Type ID" value={vehicleTypeId} />
      </Column>
      <Column>
        <Cell headline="Vehicle Type Name" value={vehicleTypeName} />
      </Column>
      <Column>
        <Flex justifyContent="flex-end" gap="16px">
          <ButtonWithIcon
            onClick={() => Router.push(`/shipment/${makeId}`)}
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
