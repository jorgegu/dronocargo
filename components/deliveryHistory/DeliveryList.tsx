import { FunctionComponent } from "react";
import styled from "styled-components";
import DeliveryRow from "./DeliveryRow";
import { VehicleTypes } from "../../interfaces";

interface Props {
  dataList: VehicleTypes[];
}

const Container = styled.div``;
const DeliveryList: FunctionComponent<Props> = ({ dataList }: Props) => {
  return (
    <Container>
      {dataList.map((item, i) => (
        <DeliveryRow key={i} data={item} />
      ))}
    </Container>
  );
};

export default DeliveryList;
